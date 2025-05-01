import { useState, useRef, useEffect } from "react";

const currencies = [
  { label: "$", value: "USA" },
  { label: "₹", value: "INDIA" },
  { label: "€", value: "EURO" },
  { label: "¥", value: "YEN" },
  { label: "₩", value: "SOUTH KOREA" },
];

export default function CurrencyDropdown({ selectedCurrency, setSelectedCurrency }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    setSelectedCurrency(value);
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
        className="flex items-center justify-between w-12 px-2 py-1 text-l focus:outline-none"
      >
        {currencies.find(c => c.value === selectedCurrency)?.label || "$"}
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
        <div className="absolute z-10 mt-2 w-16 bg-gradient-to-b from-[#FAFAFA] to-[#E5E3CC] border-1">
          <ul className="py-1 text-l">
            {currencies.map((currency) => (
              <li key={currency.value}>
                <button
                  onClick={() => handleSelect(currency.value)}
                  className="w-full text-left px-4 py-2"
                >
                  {currency.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
