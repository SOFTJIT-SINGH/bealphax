"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

// --- 1. IMPORT CLERK COMPONENTS ---
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const NavIcons = () => {
  const { items } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* --- 2. SHOW THIS IF USER IS LOGGED OUT --- */}
      <SignedOut>
        <Link href="/sign-in" className="text-sm">Sign In</Link>
      </SignedOut>

      {/* --- 3. SHOW THIS IF USER IS LOGGED IN --- */}
      <SignedIn>
        {/* The UserButton is a complete profile icon with sign out, manage account, etc. */}
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Link href="/cart" className="relative cursor-pointer">
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className="absolute -top-4 -right-4 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
          {items.length}
        </div>
      </Link>
    </div>
  );
};

export default NavIcons;