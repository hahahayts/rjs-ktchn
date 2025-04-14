"use client";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <>
      <Button
        onClick={() => onClick("google")}
        className="w-full"
        variant={"outline"}
      >
        <div className="flex gap-2 items-center">
          <span>Continue with Google</span>
          <FcGoogle />
        </div>
      </Button>
      <Button
        onClick={() => onClick("github")}
        className="w-full"
        variant={"outline"}
      >
        <div className="flex gap-2 items-center">
          <span>Continue with Github</span>
          <FaGithub />
        </div>
      </Button>
    </>
  );
};
