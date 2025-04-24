import { useState , useEffect } from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import InterestInput from "./InterestInput";
import { useRouter } from "next/navigation";

export default function SearchFilters () {

  const { theme } = useTheme();
  const [showResidential, setShowResidential] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

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
          <div className="flex items-center border-b p-2">
            📍 :
              <input 
                type="text" 
                className={`p-1 focus:outline-none focus:border-none ${theme === "light" ? "text-black" : "text-{#5FBB46}"}`}
                placeholder="Location" 
                value={location}
                onChange={handleLocationChange}
              />
          </div>
        <div className="flex border-b p-2 h-full items-center">
          🔎<div className="flex items-center">
            <select 
                id="propertyType" 
                value={selectedOption} 
                onChange={handleSelectChange} 
                className="focus:outline-none focus:border-none"
              >
                <option value="">Project Type</option>  {/* Default option */}
                <option value="residential">🏡 Residential</option>
                <option value="commercial">🏢 Commercial</option>
                <option value="industrial">🏭 Industrial</option>
                <option value="land">🌐 Digital</option>
              </select>
            </div>
          </div>
          <div
        className={`overflow-hidden transition-all duration-800 ease-in-out ${
          selectedOption === "residential" ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        onTransitionEnd={() => setIsAnimating(false)} // Reset animation state
      >
        {showResidential && (
          <div className={`p-4 grid grid-cols-2 gap-2 text-sm border-b transition-opacity duration-100`}>
            <label><input type="checkbox" className="accent-blue-700" /> Design & Build</label>
            <label><input type="checkbox" className="accent-blue-700" /> Landscape</label>
            <label><input type="checkbox" className="accent-blue-700" /> ADU</label>
            <label><input type="checkbox" className="accent-blue-700" /> Restoration</label>
            <label><input type="checkbox" className="accent-blue-700" /> Remodeling</label>
            <label><input type="checkbox" className="accent-blue-700" /> Renovation</label>
          </div>
        )}
      </div>
      <div className="p-2 flex items-center justify-center w-full">
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="whitespace-nowrap">⏳ 0 &gt; 1 mo.</span>
          <input className="flex-1 range pr-6 accent-black" 
                    type="range" 
                    value="0" min="0" 
                    max="1000" 
                    onChange="rangeSlide(this.value)" 
                    onmousemove="rangeSlide(this.value)"></input>
          <span className="whitespace-nowrap">1 yr +</span>
        </div>
      </div>
        <div className="p-2 flex items-center justify-between border-t">
          <span>💲💲💲💲💲</span>
          <div className="flex items-center"><select 
                id="propertyType" 
                value={selectedOption} 
                onChange={handleSelectChange} 
                className=" focus:outline-none focus:border-none"
              >
                <option value="USA">$</option>  {/* Default option */}
                <option value="INDIA">₹</option>
                <option value="EURO">€</option>
                <option value="YEN">¥</option>
                <option value="SOUTH KOREA">₩</option>
              </select><div className=" flex items-center">
              <input 
                id="budget" 
                value={budget}
                type="number"
                placeholder="Budget"
                onChange={handleBudgetChange} 
                className="p-1 w-full focus:outline-none focus:border-none"
              >
              </input>
            </div></div>
        </div>
        <div className="p-2">
          <span>🗣️ English, Spanish ▼</span>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 text-sm">
          <label><input type="checkbox" className="mr-2" /> Licensed only</label>
          <label><input type="checkbox" className="mr-2" /> Women owned</label>
          <label><input type="checkbox" className="mr-2" /> LGBTQ+ owned</label>
          <label><input type="checkbox" className="mr-2" /> Minority owned</label>
          <label><input type="checkbox" className="mr-2" /> Accepts Crypto</label>
        </div>
        <InterestInput handleSearch={handleSearch} />
      </div>
    );
  };
