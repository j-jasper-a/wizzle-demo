"use client";

import signInWithGoogle from "@/actions/auth/signInWithGoogle";
import signOutUser from "@/actions/auth/signOut";
import Logo from "@/components/reusable/Logo";
import { auth } from "@/firebase/config";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const currentUser = auth.currentUser;
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.refresh();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      router.refresh();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header>
      <nav className="sticky left-0 top-0 mx-auto flex max-w-screen-lg items-center justify-between p-4">
        <Logo />
        <ul>
          <li>
            {currentUser ? (
              <div className="flex items-center gap-2">
                <Image
                  src={currentUser.photoURL || ""}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            ) : (
              <button onClick={handleSignIn}>Sign In</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
