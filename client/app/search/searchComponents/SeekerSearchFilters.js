import { useState , useEffect } from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import InterestInput from "./InterestInput";
import { useRouter } from "next/navigation";
import CustomDropdown from "./CustomDropdown";
import CurrencyDropdown from "./CurrencyDropdown"
import RangeSelector from "./RangeSelector";
import PriceSlider from "./PriceSlider";
import LanguageDropdown from "./LanguageDropdown";

export default function SearchFilters () {

  const { theme } = useTheme();
  const [showResidential, setShowResidential] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [selectedOption, setSelectedOption] = useState('residential');
  const [selectedCurrency, setSelectedCurrency] = useState("USA");
  const [rangeValue, setRangeValue] = useState(0);
  const [priceLevel, setPriceLevel] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleSearch = () => {
    const params = new URLSearchParams({
      location,
      budget,
      projectType: selectedOption
    });

    router.push(`/designer_profiles?${params.toString()}`);
  }


  useEffect(() => {
    if (selectedOption === "residential") {
      setShowResidential(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(true);
      setTimeout(() => setShowResidential(false), 800);
    }
  }, [selectedOption]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  
    return (
        <div className={`border m-4 text-black ${theme === "light" ? "text-black" : "text-green-700"}`}>
          <div className="flex items-center border-b p-1">
            📍 :
              <input 
                type="text" 
                className={`p-1 focus:outline-none focus:border-none ${theme === "light" ? "text-black" : "text-{#5FBB46}"}`}
                placeholder="Location" 
                value={location}
                onChange={handleLocationChange}
              />
          </div>
          <div className="flex items-center justify-between border-b h-[36px]">
            <div className="flex-1 flex items-center justify-center border-r h-full gap-2">
              🔎
              <CustomDropdown
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>

            <div className="flex-1 flex items-center justify-center gap-2 h-full">
              <CurrencyDropdown
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
              />
              <input
                id="budget"
                value={budget}
                type="number"
                placeholder="Budget"
                onChange={handleBudgetChange}
                className="p-1 w-full max-w-[100px] focus:outline-none focus:border-none"
              />
            </div>
          </div>

        
          <div
        className={`overflow-hidden transition-all duration-800 ease-in-out ${
          selectedOption === "residential" ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        onTransitionEnd={() => setIsAnimating(false)} // Reset animation state
      >
        {showResidential && (
          <div className={`p-3 grid grid-cols-2 gap-2 text-sm border-b transition-opacity duration-100`}>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Design & Build
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Landscape
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              ADU
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Restoration
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Remodeling
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Renovation
            </label>
          </div>
        )}
      </div>
      <div className="p-1 flex items-center justify-center w-full">
        <div className="flex items-center gap-2 w-full max-w-md">
        <RangeSelector value={rangeValue} onChange={setRangeValue} />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-b h-[36px]">
        <div className="flex-1 flex items-center justify-center border-r h-full">
          <PriceSlider value={priceLevel} onChange={setPriceLevel} />
        </div>

        <div className="flex-1 flex items-center justify-center gap-2 h-full">
        <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Accept Crypto
            </label>
        </div>
      </div>
      <div className="flex-1 flex items-center px-4 border-b h-full gap-2">
              🗣️ Fluent in: 
              <LanguageDropdown
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
              />
            </div>
        <div className="grid grid-cols-2 gap-2 p-3 text-sm">
          <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Licensed only
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Women owned
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              LGBTQ+ owned
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 border-black checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Minority owned
            </label>
        </div>
        <div><InterestInput handleSearch={handleSearch} /></div>
      </div>
    );
  };
