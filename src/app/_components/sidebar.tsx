"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { LogoutButton } from "@/components/auth/logout-button";
import { FaSignOutAlt } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  { label: "Products", href: "/admin/products", icon: <Package size={18} /> },
  { label: "Orders", href: "/admin/orders", icon: <ShoppingCart size={18} /> },
  { label: "Users", href: "/admin/users", icon: <Users size={18} /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings size={18} /> },
];

export const Sidebar = () => {
  const user = useCurrentUser();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md md:hidden"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar - Hidden on mobile by default, shown when toggled */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg border-r transition-transform duration-300 ease-in-out",
          "flex flex-col",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Header with Logo/Title */}
        <div className="p-5 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 h-8 w-8 rounded-md flex items-center justify-center text-black font-bold">
              A
            </div>
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-yellow-100 text-yellow-800"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={() => setMobileOpen(false)}
              >
                <span
                  className={cn(
                    "text-gray-500",
                    pathname === item.href && "text-yellow-600"
                  )}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Category Divider */}
          <div className="mt-8 mb-4">
            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Support
            </p>
          </div>

          {/* Additional Links */}
          <div className="space-y-1">
            <Link
              href="/admin/help"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </span>
              Help & Resources
            </Link>
          </div>
        </nav>

        {/* User Section */}
        <div className="flex justify-between items-center p-4 border-t mt-auto ">
          <div className="w-full flex justify-between  items-center gap-3 px-3 py-2">
            <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <span className="text-sm font-medium">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
            {/* <button
                className="text-gray-400 hover:text-gray-600"
                title="Log out"
                >
                <LogOut size={18} />
                </button> */}
            <LogoutButton>
              <FaSignOutAlt />
            </LogoutButton>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile - appears when sidebar is open */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
