import React from "react";
import { auth } from "../../../auth";
import LogoutButton from "@/components/auth/logout-button";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1>Settings Page</h1>
      <p>{JSON.stringify(session)}</p>
      <LogoutButton />
    </div>
  );
};

export default SettingsPage;
