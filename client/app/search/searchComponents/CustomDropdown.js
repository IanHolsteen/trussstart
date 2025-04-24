import { useState } from 'react';

export default function CustomDropdown () {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="relative">
      <button className="w-full p-2 border bg-white text-black rounded-md">
        {selectedOption || "Select an option"}
      </button>
      <div className="absolute left-0 right-0 mt-1 bg-white border rounded-md shadow-lg">
        <button
          onClick={handleSelectChange}
          value="residential"
          className="w-full p-2 text-green-500 hover:bg-gray-100"
        >
          🏡 Residential
        </button>
        <button
          onClick={handleSelectChange}
          value="commercial"
          className="w-full p-2 text-blue-500 hover:bg-gray-100"
        >
          🏢 Commercial
        </button>
        <button
          onClick={handleSelectChange}
          value="industrial"
          className="w-full p-2 text-yellow-500 hover:bg-gray-100"
        >
          🏭 Industrial
        </button>
        <button
          onClick={handleSelectChange}
          value="land"
          className="w-full p-2 text-purple-500 hover:bg-gray-100"
        >
          🌐 Digital
        </button>
      </div>
    </div>
  );
};