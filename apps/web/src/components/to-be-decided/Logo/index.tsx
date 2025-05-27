import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="rounded-xl bg-blue-700 px-4 py-2">
        <Image
          src="/assets/images/wizzle-logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className="brightness-0 invert"
        />
      </div>
    </Link>
  );
};

export default Logo;
