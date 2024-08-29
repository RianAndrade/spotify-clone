"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

import Box from "./Box";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        label: "search",
        active: pathname === "search",
        href: "/search",
      },
    ],
    [pathname],
  );

  return (
    <div className="flex h-full">
      <div
        className="hidden
                   md:flex
                   flex-col
                   gap-y-2
                   bg-black
                   h-fullS
                   w-[300px]
                   p-2"
      >
        <Box>Sidebar Navigation</Box>
        <Box className="overflow-y-auto h-full">Song Library</Box>
      </div>
    </div>
  );
};

export default Sidebar;
