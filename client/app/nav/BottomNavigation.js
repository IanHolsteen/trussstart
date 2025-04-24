
export default function BottomNavigation () {
    return (
      <div className="relative flex justify-center items-center p-6 mt-10 mb-14">
        <div className="relative w-32 h-32 bg-gray-200 rounded-full flex justify-center items-center border">
          {/* Icons positioned around the circle */}
          <div className="absolute top-0 flex justify-center">
            <i className="text-xl">🤝</i>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <i className="text-xl">📅</i>
          </div>
          <div className="absolute bottom-0 flex justify-center">
            <i className="text-xl">🛒</i>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <i className="text-xl">✉️</i>
          </div>
        </div>
      </div>
    );
  };
  