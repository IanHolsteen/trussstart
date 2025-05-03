"use client";
import { useState } from "react";
import { useTheme } from "./contexts/ThemeProvider"
import Navbar from "./nav/Navbar";
import BottomNavigation from "./nav/BottomNavigation";
import { UserProvider , useUser } from './contexts/UserProvider';
import SeekerSearch from "./search/SeekerSearch";

export default function Home() {
  const { theme } = useTheme();
  const { user, setUser } = useUser();

  return (
    <div className={`min-h-screen flex flex-col justify-between 
      bg-gradient-to-b 
        ${theme === "light" ? "from-[#FAFAFA] to-[#E5E3CC]" : "from-[#0A0A0A] to-[#5FBB46] from-[70%]"}`}>
        <Navbar />
        <h1 className="px-8">
          {user?.email === "Guest" || !user?.email
            ? "Search for designers near you."
            : `${user?.name}, search for designers near you.`}
        </h1>
          <SeekerSearch />
        <BottomNavigation />
     </div>
  );
}