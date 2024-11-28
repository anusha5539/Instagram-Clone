import { Flex, Image, Text } from "@chakra-ui/react"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../Firebase/firebase";
import useShowToast from "../../Hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";


const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore(state => state.login);

  const handleClick = async () => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        // login
        const userDoc= userSnap.data();
        localStorage.setItem("user-info",JSON.stringify(userDoc));
        loginUser(userDoc);
      }
      else {
        // sign up with google
        const userDocs = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          userName: newUser.user.email.split("@")[0],
          fullName: newUser.user.displayName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
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
    }
    catch (error) {
      showToast("Error", error.message, "error");
    }
  }

  return (
    <>
      <Flex justifyContent={"center"} cursor={"pointer"} textAlign={"center"} gap={1} onClick={handleClick}>
        <Image src="/google.png" h={6} alt="Google icon"></Image>
        <Text color={"blue.500 "} cursor={"pointer"} mx={2}>{prefix} with Google</Text>
      </Flex>
    </>
  )
}

export default GoogleAuth