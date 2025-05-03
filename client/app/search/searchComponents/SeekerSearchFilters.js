import { useState , useEffect } from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import InterestInput from "./InterestInput";
import { useRouter } from "next/navigation";
import CustomDropdown from "./CustomDropdown";
import CurrencyDropdown from "./CurrencyDropdown"
import RangeSelector from "./RangeSelector";
import PriceSlider from "./PriceSlider";
import LanguageDropdown from "./LanguageDropdown";
import ResidentialOption from "../searchComponents/ResidentialOption";
import CommercialOption from '../searchComponents/CommercialOption';
import IndustrialOption from '../searchComponents/IndustrialOption';
import DigitalOption from "../searchComponents/DigitalOption"

export default function SearchFilters () {

  const { theme } = useTheme();
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

  const optionComponents = {
    residential: <ResidentialOption />,
    commercial: <CommercialOption />,
    industrial: <IndustrialOption />,
    digital: <DigitalOption />,
  };


  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timeout);
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

  const color = "#5FBB46";

    return (
        <div className={`border m-4 ${theme === "light" ? "text-black" : `text-[${color}]`}`}>
          <div className="flex items-center border-b p-1">
            📍 :&nbsp;
              <input 
                type="text" 
                className={` focus:outline-none focus:border-none ${theme === "light" ? "text-black" : "text-{#5FBB46}"}`}
                placeholder="Location" 
                value={location}
                onChange={handleLocationChange}
              />
          </div>
          <div className="flex items-center justify-between border-b h-[32px]">
            <div className="flex-1 flex items-center justify-center border-r h-full ">
              🔎
              <CustomDropdown
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>

            <div className="flex-1 flex items-center justify-center h-full">
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
                className="w-full max-w-[100px] focus:outline-none focus:border-none"
              />
            </div>
          </div>

        
          <div
            className={`overflow-hidden transition-all duration-800 ease-in-out ${
              selectedOption ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {optionComponents[selectedOption]}
          </div>
      <div className=" flex items-center justify-center w-full">
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
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl peer-checked:opacity-100 opacity-0">
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
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Licensed only
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Women owned
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              LGBTQ+ owned
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl peer-checked:opacity-100 opacity-0">
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
