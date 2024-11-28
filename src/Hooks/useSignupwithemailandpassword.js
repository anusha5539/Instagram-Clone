import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, firestore } from "../Firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useSignupwithemailandpassword = () => {
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const loginUser = useAuthStore(state => state.login);


    const showToast = useShowToast()

    const signup = async (inputs) => {
        if (!inputs.userName || !inputs.fullName || !inputs.email) {
            showToast("Error", "Please Fill out all the field", "error");
            return;
        }
        // validation error message for same username
        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("userName", "==", inputs.userName));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            showToast("Error", "Username already exist", "error");
            return;
        }
        // validation error message for same username

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            
            // to sign up a new user
            if (newUser) {
                const userDocs = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    userName: inputs.userName,
                    fullName: inputs.fullName,
                    bio: "",
                    profilePicURL: "",
                    followers: "",
                    following: "",
                    posts: "",
                    createdAt: Date.now()
                };
                // to store the user detail into firestore of firebase with table users
                await setDoc(doc(firestore, "users", newUser.user.uid), userDocs);
                // to save the new user to our local storage
                localStorage.setItem("user-info", JSON.stringify(userDocs));
                loginUser(userDocs);
            }

        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }
    return { signup, loading, error };
}

export default useSignupwithemailandpassword;
