"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "../../contexts/ThemeProvider";
import { Redo , Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";


export default function NewDarkToggle({ viewMode, setViewMode , isOpen, onClose }) {
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();

    const handleToggle = () => {
        toggleTheme();
        
      };

      return (
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 transition-opacity ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={onClose} // Clicking outside closes the menu
          ></div>
          {/* Sidebar */}
          <motion.div
            className={`fixed top-8 right-4 transform`}
            initial={{ scale: 1.2, y: -100, opacity: 0}} // Start bigger and above the screen
            animate={{
              scale: isOpen ? 1 : .5, // Grow and shrink
              y: isOpen ? 0 : -10,
              x: isOpen ? 0 : 100,
              opacity: isOpen ? 1 : 0, // Translate down and up
            }}
            transition={{
              scale: { duration: 0.5 },
              y: { duration: 0.5 },
              x: { duration: isOpen ? 0.4 : 2 },
              opacity: { duration: 0.7 } // Ensure both transitions happen at the same time
            }}
          >
            <button
              onClick={() => setViewMode(viewMode === 'list' ? 'swipe' : 'list')}
              className="absolute -top-2 left-16 text-black z-10" // Position on top
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-between gap-3 p-4 rounded-full">

              
              {/* Sun Icon */}
              <Sun
                className={`w-6 h-6 ${theme === "light" ? "text-black" : "text-[#5FBB46]"}`}
              />
    
              {/* Toggle Switch */}
              <button
                onClick={handleToggle}
                className={`relative w-12 h-12 rounded-full flex items-center pt-4 ${
                  theme === "light" ? "border-2 bg-[#5FBB46] border-black" : "border-2 text-[#5FBB46]"
                }`}
              >
                <motion.div
                  className={`w-3 h-3 ${theme === "light" ? "border bg-black text-black" : "border text-[#5FBB46]"} rounded-full`}
                  animate={{ x: theme === "dark" ? 32 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
    
              {/* Moon Icon */}
              <Moon
                className={`w-6 h-6 ${theme === "light" ? "text-black" : "text-[#5FBB46]"}`}
              />
            </div>
            <button
              onClick={onClose}
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
            >
              <Redo className={`w-6 h-6 ${theme === "light" ? "text-black" : "text-[#5FBB46]"}`} />
            </button>
          </motion.div>
        </>
      );
    }