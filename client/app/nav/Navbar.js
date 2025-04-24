"use client";
import { useState } from "react";
import Sidebar from "./NavComponents/Sidebar";
import { useRouter } from "next/navigation";
import NewDarkToggle from "./NavComponents/NewDarkToggle";
import { useTheme } from "../contexts/ThemeProvider";
import DarkToggleCircle from "./NavComponents/DarkToggleCircle";
import NavMenuButton from "./NavComponents/NavMenuButton"

export default function Navbar({ viewMode, setViewMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkOpen, setDarkOpen] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  return (
        <>
          <nav className="flex justify-between items-center p-8">
            <div className="flex items-center space-x-1">
              <NavMenuButton setMenuOpen={setMenuOpen} />
              <button onClick={() => router.push("/")} className={`text-4xl font-bold ${
                  theme === "light" ? "text-black" : "text-[#5FBB46]"
                }`}>TRUSS</button>
              </div>
            <DarkToggleCircle darkOpen={darkOpen} setDarkOpen={setDarkOpen} />
          </nav>
        <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <NewDarkToggle viewMode={viewMode} setViewMode={setViewMode} isOpen={darkOpen} onClose={() => setDarkOpen(false)} />
    </>
  );
}
