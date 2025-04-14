"use client";

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import Link from "next/link";
import React, { useState } from "react";
import { UserAvatar } from "./avatar-user";
import { Menu, ShoppingCart, X } from "lucide-react";
import Cart from "./cart";

export const NavBar = () => {
  const user = useCurrentUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why RJ's KTCHN", href: "/about" },
    { name: "Location", href: "/location" },
  ];

  return (
    <nav className="w-full px-4 py-3 backdrop-blur-sm bg-transparent sticky top-0 z-50 border-b border-gray-100/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Desktop Navigation - Only shown when user is NOT logged in */}
        {!user && (
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Empty div to maintain layout when navigation is removed */}
        {user && <div className="hidden md:block"></div>}

        {/* User Menu / Login Button */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <Link
                href="/orders"
                className="relative flex items-center hover:text-yellow-500 transition-colors"
              >
                <ShoppingCart size={30} />
                {/* <span className="ml-1">Cart</span> */}
                <Cart />
              </Link>
              <div className="relative group">
                <UserAvatar user={user} className="cursor-pointer" />
              </div>
            </div>
          ) : (
            <LoginButton>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black transition-colors ease-in-out duration-200"
                size="sm"
              >
                Login
              </Button>
            </LoginButton>
          )}

          {/* Mobile menu button - Only shown when user is NOT logged in */}
          {!user && (
            <button
              className="md:hidden hover:text-yellow-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu - Only shown when user is NOT logged in */}
      {!user && mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 mt-3 space-y-2 bg-black/70 backdrop-blur-md rounded-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 px-4 hover:bg-black/40 font-medium text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
