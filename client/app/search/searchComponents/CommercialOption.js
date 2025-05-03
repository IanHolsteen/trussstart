export default function CommercialOption () {
    return (
        <div className={`p-2 grid grid-cols-2 gap-2 text-sm border-b transition-opacity duration-100`}>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Multi Family
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Food & Drink
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Retail
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Office
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Experiential
            </label>
            <label className="flex items-center gap-2">
              <span className="relative inline-block w-4 h-4">
                <input
                  type="checkbox"
                  className="peer appearance-none w-4 h-4 border-1 checked:bg-blue-700"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-black text-xl peer-checked:opacity-100 opacity-0">
                  ✔
                </span>
              </span>
              Hospitality
            </label>
          </div>
    )
}