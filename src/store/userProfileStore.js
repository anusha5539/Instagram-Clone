import {create} from "zustand"
const useUserProfileStore=create((set)=>({
    userProfile:null,
    setUserProfile:(userProfile)=>set({userProfile}),
    // used to update the number of post in user's profile
    addPost:(post)=>set(state=>({
        userProfile:{...state.userProfile,posts:[post.id,...state.userprofile.posts]}
    })),
    deletePost:(postId)=>set((state)=>({
        userProfile:{
            ...state.userProfile,
            posts:state.userProfile.posts.filter((id)=>id!==postId)
        }
    }))
}))
export default useUserProfileStore;