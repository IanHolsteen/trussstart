import { useTheme } from "../../contexts/ThemeProvider";

export default function InterestInput ({ handleSearch }) {

  const { theme } = useTheme();

    return (
      <div className="p-4 border-t flex justify-between items-center text-black">
        <span>Interests (separate by comma): tiny home, off grid</span>
        <button onClick={handleSearch} className="text-green-500 text-xl">✔</button>
      </div>
    );
  };
  