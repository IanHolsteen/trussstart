import { useState, useRef, useEffect } from "react";

const projectTypes = [
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Industrial", value: "industrial" },
  { label: "Digital", value: "land" },
];

export default function CustomDropdown({ selectedOption, setSelectedOption }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    setSelectedOption(value);
    setOpen(false);
  };

  // Close on outside click
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
        className="flex items-center justify-between w-36 px-4 py-1 text-l focus:outline-none"
      >
        {projectTypes.find(opt => opt.value === selectedOption)?.label || "Select Type"}
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
        <div className="absolute z-10 mt-2 w-36 bg-gradient-to-b from-[#FAFAFA] to-[#E5E3CC] border-1">
          <ul className="py-1 text-l">
            {projectTypes.map((type) => (
              <li key={type.value}>
                <button
                  onClick={() => handleSelect(type.value)}
                  className="w-full text-left px-4 py-2 "
                >
                  {type.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
