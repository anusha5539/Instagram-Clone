import { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore';
import usePostStore from '../store/postStore';
import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';

const useGetFeedPost = () => {
    const [isLoading, setIsLoading] = useState(true);
    const authUser = useAuthStore(state=>state.user);
    const { posts, setPosts } = usePostStore();
    const showToast = useShowToast();
    const { setUserProfile } = useUserProfileStore();

    useEffect(() => {
        const getFeedPost = async () => {
            setIsLoading(true);
            if (authUser.following.length===0) {
                setIsLoading(false)
                setPosts([])
                return
            }
            const q=query(collection(firestore,"posts"),where("createBy","in",authUser.following))
            try {
                const querySnapShot=await getDocs(q);
                const FeedPosts=[]
                querySnapShot.forEach(doc=>{
                    FeedPosts.push({id:doc.id,...doc.data()})
                })
                FeedPosts.sort((a,b)=>b.createdAt-a.createdAt)
                setPosts(FeedPosts);
            }
            catch (error) {
                showToast("Error", error.message, "error");
            }
            finally {
                setIsLoading(false);
            }
        }
        if(authUser) getFeedPost()
    }, [authUser,showToast,setPosts,setUserProfile])

    return {isLoading,posts}
}

export default useGetFeedPost