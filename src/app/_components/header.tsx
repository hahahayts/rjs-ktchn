import { childrenType } from "@/types";
import Link from "next/link";
import React from "react";

export const Header = ({ children }: childrenType) => {
  return (
    <header className="flex  items-center  justify-between py-5 px-12 bg-red text-[#F5E0C3]">
      {children}
    </header>
  );
};

export const HeaderLogo = () => {
  return (
    <div className="font-bold text-xl text-yellow-500">
      <Link href="/">RJ's KTCHN</Link>
    </div>
  );
};
