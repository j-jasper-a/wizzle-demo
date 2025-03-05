import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

const signOutUser = async () => {
  try {
    await signOut(auth);
    // Sign-out successful
  } catch (error) {
    // Handle the error
    console.error("Error signing out:", error);
  }
};

export default signOutUser;
