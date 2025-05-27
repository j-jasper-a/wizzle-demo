"use client";

import Logo from "@/components/to-be-decided/Logo";

// import Image from "next/image";

const TopBar = () => {
  const currentUser = null;

  const handleSignIn = async () => {};

  const handleSignOut = async () => {};

  return (
    <header>
      <nav className="max-w-(--breakpoint-lg) sticky left-0 top-0 mx-auto flex items-center justify-between p-4">
        <Logo />
        <ul>
          <li>
            {currentUser ? (
              <div className="flex items-center gap-2">
                {/* <Image
                  src={currentUser.photoURL || ""}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                /> */}
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
