import { useTheme } from "../../contexts/ThemeProvider";
import { useState } from 'react';

export default function InterestInput ({ handleSearch }) {

  const { theme } = useTheme();

  const [location, setLocation] = useState('');
  

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

    return (
      <div className=" border-t flex items-stretch text-black">
        <div className="flex-[3] p-2 items-center">
          <div><span>Interests (separate by comma):</span></div>
            <div><input 
                type="text" 
                className={`focus:outline-none focus:border-none ${theme === "light" ? "text-black" : "text-{#5FBB46}"}`}
                value={location}
                onChange={handleLocationChange}
              /></div> 
        </div>
        <div className="flex-[1] flex items-center justify-center border-l">
          <button onClick={handleSearch} className="text-green-500 text-4xl">✔</button>
        </div>
      </div>
    );
  };
   