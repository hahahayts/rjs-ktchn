import React from "react";
import { auth } from "../../../auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1>Settings Page</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default SettingsPage;
