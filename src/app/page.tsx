import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import React from "react";

const Homepage = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div>
        <h1>This is a Landing Page</h1>
        <LoginButton>
          <Button size={"lg"}>Login</Button>
        </LoginButton>
      </div>
    </div>
  );
};

export default Homepage;
