import { useTheme } from "../contexts/ThemeProvider"

export default function BottomNavigation() {

    const { theme } = useTheme();

  return (
    <div className={`relative flex justify-center items-center p-6 mt-4 mb-14 `}>
      <div className={`relative w-48 h-48 rounded-full flex justify-center items-center bg-gradient-to-b 
        ${theme === "light" ? "from-[#E5E3CC] to-[#FAFAFA]" : "from-[#0A0A0A] to-[#5FBB46] from-[0%]"}`}>
        {/* Globe grid background using SVG */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            {/* Outer circle */}
            <circle cx="50" cy="50" r="50" fill="none" stroke="#E5E3CC" strokeWidth="1" />

            {/* Evenly spaced vertical longitude ellipses */}
            <ellipse cx="50" cy="50" rx="40" ry="50" fill="none" stroke="#E5E3CC" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="30" ry="50" fill="none" stroke="#E5E3CC" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="30" ry="50" fill="none" stroke="#E5E3CC" strokeWidth="0.5" />
            <line x1="50" x2="50" y1="0" y2="100" stroke="#E5E3CC" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="20" ry="50" fill="none" stroke="#E5E3CC" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="10" ry="50" fill="none" stroke="#E5E3CC" strokeWidth="0.5" />

            {/* Horizontal latitude lines (flat, not curved) */}
            <line x1="10" x2="90" y1="20" y2="20" stroke="#E5E3CC" strokeWidth="0.5" />
            <line x1="2" x2="98" y1="35" y2="35" stroke="#E5E3CC" strokeWidth="0.5" />
            <line x1="0" x2="100" y1="50" y2="50" stroke="#E5E3CC" strokeWidth="0.5" />
            <line x1="2" x2="98" y1="65" y2="65" stroke="#E5E3CC" strokeWidth="0.5" />
            <line x1="10" x2="90" y1="80" y2="80" stroke="#E5E3CC" strokeWidth="0.5" />
          </svg>

        {/* Icons around the globe */}
        <div className="absolute top-[-32px] text-2xl">🤝</div>
        <div className="absolute right-[-32px] top-1/2 -translate-y-1/2 text-2xl">📅</div>
        <div className="absolute bottom-[-32px] text-2xl">🛒</div>
        <div className="absolute left-[-32px] top-1/2 -translate-y-1/2 text-2xl">✉️</div>

        {/* Optional inner dot (like the blue dot in your image) */}
        {/* <div className="absolute left-[15%] top-1/2 w-2 h-2 bg-blue-600 rounded-full" /> */}
      </div>
    </div>
  );
}