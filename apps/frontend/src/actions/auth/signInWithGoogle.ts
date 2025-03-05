import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase/config";

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    const user = auth.currentUser;

    if (user) {
      console.log("User signed in:", user);
    } else {
      console.log("User not signed in");
    }
  } catch (error) {
    console.error(error);
  }
};

export default signInWithGoogle;
