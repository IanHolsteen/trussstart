import { Menu, Circle } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider";

export default function NavMenuButton ({ setMenuOpen }) {
    const { theme } = useTheme();
    
    return (
        <button
            className="relative flex items-center justify-center w-8 h-8"
            onClick={() => setMenuOpen(true)}
            >
                <div
                  className={`absolute w-6 h-4 ${
                    theme === "light" ? "bg-red-500" : ""
                  } `}
                />
            <Menu
                  className={`w-12 h-12 relative ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                />
        </button>
    )
}