import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast"
import { auth, firestore } from "../Firebase/firebase";
import useAuthStore from "../store/authStore";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // to login the auth user
    const loginUser = useAuthStore(state => state.login);

    const showToast = useShowToast();

    //  for logging the user
    const login = async (inputs) => {
        if (!inputs.email || !inputs.password) {
            showToast("Error", "Please fill all the field", "error");
        }
        try {
            const usercred = await signInWithEmailAndPassword(inputs.email, inputs.password)
            if (usercred) {
                const docRef = doc(firestore, "users", usercred.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()))
                loginUser(docSnap.data());
            }
        }
        catch (error) {
            showToast("Error", error.message, "error")

        }

    }
    return { loading, error, login };
}

export default useLogin