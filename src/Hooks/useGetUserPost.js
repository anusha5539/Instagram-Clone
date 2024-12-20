import { useEffect, useState } from 'react';
import usePostStore from '../store/postStore';
import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';

const useGetUserPost =() => {
    const [isLoading, setIsLoading] = useState(true);
    const { posts, setPosts } = usePostStore();
    const showToast = useShowToast();
    const userProfile = useUserProfileStore((state) => state.userProfile);

    useEffect(() => {
        const getPosts = async () => {
            if (!userProfile) return;
            setIsLoading(true);
            setPosts([]);
            try {
                const q = query(collection(firestore, "posts"), where("createBy", "==", userProfile.uid))
                const querySnapShot = await getDocs(q);
                const posts = []
                querySnapShot.forEach(doc => { 
                    posts.push({ ...doc.data(), id: doc.id }) })

                posts.sort((a, b) => b.createdAt - a.createdAt)
                setPosts(posts)
            }
            catch (error) {
                showToast("Error", error.message, "error");
            }
            finally {
                setIsLoading(false);
            }

        }
        getPosts()
    },[setPosts,userProfile,showToast])
    return {isLoading,posts}
}


export default useGetUserPost