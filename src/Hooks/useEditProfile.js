import { useState } from 'react'
import useAuthStore from '../store/authStore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { firestore, storage } from '../Firebase/firebase'
import useShowToast from './useShowToast';
import { doc, updateDoc } from 'firebase/firestore';
import useUserProfileStore from '../store/userProfileStore';

const useEditProfile = () => {
    const [isUpdating, setIsUpdating] = useState(false);
    const authUser = useAuthStore((state) => state.user)
    const setAuthUser = useAuthStore((state) => state.setUser)
    const setUserProfile = useUserProfileStore((state => state.setUserProfile))
    const showToast = useShowToast();

    const editProfile = async (inputs, selectedFile) => {
        if (isUpdating || !authUser) return
        setIsUpdating(true);

        // if user update their profile pic
        const storageRef = ref(storage, `profilePics/${authUser.uid}`);
        const userDocRef = doc(firestore, "users", authUser.uid);

        let URL = "";
        try {
            // for image updating procedure
            if (selectedFile) {
                await uploadString(storageRef, selectedFile, 'data_url');
                URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
            }
            // update the other personnel information
            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                userName: inputs.userName || authUser.userName,
                bio: inputs.bio || authUser.bio,
                profilePicURL: URL || authUser.profilePicURL,

            }
            await updateDoc(userDocRef, updatedUser);
            localStorage.setItem("user-info", JSON.stringify(updatedUser))
            setAuthUser(updatedUser);
            setUserProfile(updatedUser);
            showToast("Success", "Profile updated successfully", "success");
        }
        catch (error) {
            showToast("Error", error.message, "error");

        }
    }
    return { editProfile, isUpdating };

}

export default useEditProfile