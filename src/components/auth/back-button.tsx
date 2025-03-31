"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface ButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: ButtonProps) => {
  return (
    <Button className="inline-block mx-auto" variant={"link"} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
