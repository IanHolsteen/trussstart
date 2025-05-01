export default function RangeSelector({ value, onChange }) {
    return (
      <div className="p-2 flex items-center justify-center w-full">
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="whitespace-nowrap">⏳ 0 &gt; 1 mo.</span>
              <input
              type="range"
              min="0"
              max="1000"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="flex-1 bg-gray-600 rounded-full appearance-none 
                  [&::-webkit-slider-thumb]:h-4 
                  [&::-webkit-slider-thumb]:w-4 
                  [&::-webkit-slider-thumb]:appearance-none 
                  [&::-webkit-slider-thumb]:bg-[color:var(--accent)]
                  [&::-webkit-slider-thumb]:rounded-full"
              style={{ "--accent": "red", height: "2px" }}
              />
          <span className="whitespace-nowrap">1 yr +</span>
        </div>
      </div>
    );
  }
  