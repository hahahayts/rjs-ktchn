"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <>
      <Button className="w-full" variant={"outline"}>
        <div className="flex gap-2 items-center">
          <span>Continue with Google</span>
          <FcGoogle />
        </div>
      </Button>
      <Button className="w-full" variant={"outline"}>
        <div className="flex gap-2 items-center">
          <span>Continue with Github</span>
          <FaGithub />
        </div>
      </Button>
    </>
  );
};
