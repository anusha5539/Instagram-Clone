import { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';
import useAuthStore from '../store/authStore';

const useSuggestedUser = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [suggestedUsers,setSuggestedUsers]=useState([]);
    const authUser=useAuthStore(state=>state.user);
    const showToast=useShowToast();

    useEffect(()=>{
        const getSuggestedUsers=async()=>{
            setIsLoading(true);
            try{
                const q=query(collection(firestore,"users"),where("uid","not-in",[authUser.uid,...authUser.following]),orderBy("uid"),limit(3))
                const querySnapshot=await getDocs(q);
                const users=[];
                querySnapshot.forEach(doc=>{
                    users.push({...doc.data(),id:doc.id});
                })
                setSuggestedUsers(users);
            }
            catch(error){
                showToast("Error",error.message,"Error");
            }
            finally{
                setIsLoading(false);
            }
        }
        if (authUser) getSuggestedUsers();
    },[authUser,showToast])

    return {isLoading,suggestedUsers};
}

export default useSuggestedUser