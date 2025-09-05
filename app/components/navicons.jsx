"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { FiBell, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";

const NavIcons = () => {
  const { items } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    useCartStore.persist.rehydrate();
  }, []);

  // Calculate total items in cart
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex items-center gap-4 xl:gap-6">
      {/* Search Icon - Visible on mobile */}
      <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <FiSearch className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Wishlist Icon */}
      <Link 
        href="/wishlist" 
        className="hidden sm:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
      >
        <MdFavoriteBorder className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </Link>

      {/* Notification Icon */}
      <button 
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <FiBell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          3
        </span>
        
        {/* Notification Tooltip */}
        {showTooltip && (
          <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Notifications</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Your order has been shipped
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                New products are available
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Special discount for you
              </div>
            </div>
          </div>
        )}
      </button>

      {/* Cart Icon */}
      <Link 
        href="/cart" 
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
      >
        <FiShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        {isMounted && totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform hover:scale-110 transition-transform">
            {totalItems}
          </span>
        )}
      </Link>

      {/* Authentication */}
      <div className="flex items-center">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
              <FiUser className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">Sign In</span>
            </button>
          </SignInButton>
        </SignedOut>
        
        <SignedIn>
          <div className="flex items-center">
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                  userButtonPopoverCard: "shadow-lg rounded-lg"
                }
              }}
            />
            <span className="hidden md:inline ml-2 text-sm text-gray-700 dark:text-gray-300">
              Profile
            </span>
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default NavIcons;