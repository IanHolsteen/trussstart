import { Circle } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeProvider";

export default function DarkToggleCircle ({ darkOpen, setDarkOpen }) {

    // const [darkOpen, setDarkOpen] = useState(false);
    const { theme } = useTheme();

    return (
        <div className="relative w-10 h-16 flex items-center justify-center overflow-visible">
            <button
              onClick={() => setDarkOpen(true)}
              className={`absolute flex items-center justify-center w-10 h-10 transition-all  ease-in-out ${
                darkOpen ? "translate-y-[15%] translate-x-[-75%] opacity-0 scale-150 duration-700" : " duration-700 translate-y-0 opacity-100 scale-100"
              }`}
            >
              {/* Background */}
              <div
                className={`absolute w-6 h-6 ${
                  theme === "light" ? "bg-[#5FBB46]" : "bg-transparent"
                } rounded-full transition-all duration-500 ease-in-out`}
              />
              {/* Circle Icon */}
              <Circle
                className={`w-7 h-7 relative ${
                  theme === "light" ? "text-black" : "text-[#5FBB46]"
                } transition-all duration-500 ease-in-out`}
              />
            </button>
          </div>
    );
}