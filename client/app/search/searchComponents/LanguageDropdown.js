import { useState, useRef, useEffect } from "react";

const languages = [
  { label: "English", value: "English" },
  { label: "Spanish", value: "Spanish" },
  { label: "French", value: "French" },
  { label: "Korean", value: "Korean" },
  { label: "Chinese", value: "Chinese" },
];

export default function LanguageDropdown({ selectedLanguage, setSelectedLanguage }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    setSelectedLanguage(value);
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-24 px-2 py-2 text-l focus:outline-none"
      >
        {languages.find(c => c.value === selectedLanguage)?.label || "english"}
        <svg
          className="w-2.5 h-2.5 opacity-60 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 w-24 bg-gradient-to-b from-[#FAFAFA] to-[#E5E3CC] border-1">
          <ul className="py-1 text-l">
            {languages.map((language) => (
              <li key={language.value}>
                <button
                  onClick={() => handleSelect(language.value)}
                  className="w-full text-left px-4 py-2"
                >
                  {language.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
