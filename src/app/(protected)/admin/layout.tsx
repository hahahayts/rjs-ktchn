import { Sidebar } from "@/app/_components/sidebar";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Add the Sidebar */}
      <Sidebar />

      {/* Main content with proper left margin to account for fixed sidebar */}
      <main className="flex-1 bg-gray-50 p-6 md:ml-64">{children}</main>
    </div>
  );
}
