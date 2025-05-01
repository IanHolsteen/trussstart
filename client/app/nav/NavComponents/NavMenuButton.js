import { Menu, Circle } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider";

export default function NavMenuButton ({ setMenuOpen }) {
    const { theme } = useTheme();
    
    return (
        <button
            className="relative flex items-center justify-center w-12 h-12"
            onClick={() => setMenuOpen(true)}
            >
                <div
                  className={`absolute w-9 h-6 ${
                    theme === "light" ? "bg-red-500" : ""
                  } rounded-xs`}
                />
            <Menu
                  className={`w-12 h-12 relative ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                />
        </button>
    )
}