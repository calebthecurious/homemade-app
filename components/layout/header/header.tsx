import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="flex justify-between p-4">
      <div className="flex justify-center">
        <Link href="/">
          <div className="justify-center item-center">
            <Image src="/vercel.svg" width="32" height="32" alt="Logo" />
            <span className="ml-4 item-center text-xs">Your Application</span>
          </div>
        </Link>
      </div>
      <div className="flex.justify-center">
        <SignedOut>
          <Link href="/sign-in">Sign In</Link>
        </SignedOut>
        <SignedIn>
          <UserButton userProfileMode="modal" afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
};
