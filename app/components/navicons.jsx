"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./cartmodel";

// 1. Import the cart's "brain"
import { useCartStore } from "@/store/cartStore";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 2. Connect to the brain and get the cart array
  const { cart } = useCartStore();

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => setIsProfileOpen((prev) => !prev)}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      {/* 3. This Link now goes to our new /cart page */}
      <Link href="/cart" className="relative cursor-pointer">
        <Image src="/cart.png" alt="" width={22} height={22} />
        {/* 4. This div displays the number of items in the cart */}
        <div className="absolute -top-4 -right-4 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
          {cart.length}
        </div>
      </Link>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;