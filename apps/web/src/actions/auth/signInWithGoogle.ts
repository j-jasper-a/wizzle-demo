import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase/config";
import { createUser, getUserById } from "../users";
import { UserType } from "@wizzle-demo/shared";
import dayjs from "dayjs";

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    const user = auth.currentUser;
    const userExists = await getUserById(user?.uid || "");

    if (user && !userExists) {
      const createdUser: UserType = await createUser({
        id: user.uid || "",
        name: user.displayName || "",
        avatarUrl: user.photoURL || "",
        metadata: {
          createdAt: dayjs().toISOString(),
        },
      });

      console.log("A new user was created: ", createdUser);
    } else if (user && userExists) {
      console.log("The user already exists: ", userExists);
    } else {
      console.log("The user was not signed in.");
    }
  } catch (error) {
    console.error(error);
  }
};

export default signInWithGoogle;
