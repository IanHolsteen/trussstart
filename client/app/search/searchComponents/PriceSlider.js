import { useState, useRef } from "react";

export default function PriceSlider({ value, onChange }) {
  const dollarCount = 5;
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const segmentWidth = width / dollarCount;
    const newValue = Math.min(
      dollarCount,
      Math.max(0, Math.ceil(x / segmentWidth))
    );
    onChange(newValue);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        if (e.buttons === 1) handleMouseMove(e); // only when mouse is clicked
      }}
      onClick={handleMouseMove}
      className="flex gap-1 text-l cursor-pointer select-none"
    >
      {Array.from({ length: dollarCount }).map((_, index) => (
        <span
          key={index}
          className={`transition-opacity duration-300 ${
            index < value ? "opacity-100" : "opacity-20"
          }`}
        >
          💲
        </span>
      ))}
    </div>
  );
}
