"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  if (mode === "modal") {
    return <span>TODO: Implement Modal </span>;
  }

  return <span onClick={() => router.push("/auth/login")}>{children}</span>;
};
