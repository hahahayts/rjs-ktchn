import { signOut } from "@/auth";
import React from "react";
import { Button } from "../ui/button";

const LogoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";

        await signOut();
      }}
    >
      <Button size={"lg"}>Logout</Button>
    </form>
  );
};

export default LogoutButton;
