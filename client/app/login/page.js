"use client";

import BottomNavigation from "../nav/BottomNavigation";
import Navbar from "../nav/Navbar";
import { useTheme } from "../contexts/ThemeProvider";
import LoginForm from "./LoginComponents/LoginForm"

export default function LoginPage () {

    const { theme } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col justify-between 
                            bg-gradient-to-b 
              ${theme === "light" ? "from-[#FAFAFA] to-[#E5E3CC]" : "from-[#0A0A0A] to-[#5FBB46] from-[40%]"}`}>
                <Navbar />
                <div className="px-12"><LoginForm /></div>
                
                <div/>
                {/* <BottomNavigation /> */}
            </div>
        );
}