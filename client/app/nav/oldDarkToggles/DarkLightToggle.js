// "use client";

// import { useState } from "react";
// import { useTheme } from "../context/ThemeProvider";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();
//   const [expanded, setExpanded] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleToggle = () => {
//     toggleTheme();
//     setTimeout(() => {
//       setExpanded(false); // Close after 350ms
//     }, 350);
//   };

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
//         setExpanded(false);
//       }
//     }

//     if (expanded) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [expanded]);

//   return (
//     <motion.div className="relative flex items-center">
//       {/* Main Circular Button */}
//       <motion.button
//         onClick={() => setExpanded(!expanded)}
//         className={`${theme === "light" ? "text-black" : "text-green-700"}`}
//         whileTap={{ scale: 0.9 }}
//       >
//         <motion.div
//           animate={{ rotate: expanded ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           〇
//         </motion.div>
//       </motion.button>

//       {/* Expandable Section */}
//       <AnimatePresence>
//         {expanded && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 20 }} // Moves right on exit
//             transition={{ duration: 0.3 }}
//             className="absolute left-0 top-1/2 transform -translate-x-[90%] -translate-y-1/2 flex items-center gap-3 p-3 rounded-full "
//             onAnimationComplete={(definition) => {
//               if (definition.x === 20) {
//                 setExpanded(false); // Ensure state updates only after animation completes
//               }
//             }}
//           >
//             {/* Sun Icon */}
//             <Sun className="w-6 h-6 text-yellow-500" />

//             {/* Toggle Switch */}
//             <button
//               onClick={handleToggle}
//               className="relative w-12 h-6 bg-gray-400 dark:bg-gray-600 rounded-full flex items-center px-1"
//             >
//               <motion.div
//                 className="w-5 h-5 bg-white dark:bg-black rounded-full shadow-md"
//                 animate={{ x: theme === "dark" ? 24 : 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </button>

//             {/* Moon Icon */}
//             <Moon className="w-6 h-6 text-gray-400" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }