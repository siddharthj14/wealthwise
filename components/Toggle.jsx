import React from "react";

export default function Toggle({ toggled, onClick }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={toggled}
      aria-label="Toggle dark mode"
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      className={`relative w-[60px] h-[30px] rounded-full cursor-pointer inline-block transition-all duration-300 border border-gray-300 dark:border-gray-600 transform
        ${toggled
          ? "bg-gradient-to-r from-indigo-900 to-purple-700"
          : "bg-gradient-to-r from-cyan-300 to-sky-400"
        }`}
    >
      {/* Notch */}
      <div
        className={`absolute top-[1.5px] left-[1.5px] h-[27px] w-[27px] rounded-full z-10 transition-all duration-300
          ${toggled
            ? "bg-gray-100 shadow-[0_0_5px_#f5f5f5] translate-x-[30px]"
            : "bg-yellow-300 shadow-[0_0_5px_yellow]"
          }`}
      >
        {/* Craters */}
        <div
          className={`absolute rounded-full rotate-[-45deg] top-[4.5px] left-[1.5px] h-[4.5px] w-[12px]
            ${toggled
              ? "bg-yellow-900 opacity-40 shadow-[inset_0_5px_5px_rgba(0,0,0,0.4)]"
              : "opacity-0"
            }`}
        />
        <div
          className={`absolute rounded-full rotate-[45deg] top-[4.5px] right-[3px] h-[4.5px] w-[7.5px]
            ${toggled
              ? "bg-yellow-900 opacity-40 shadow-[inset_0_5px_5px_rgba(0,0,0,0.4)]"
              : "opacity-0"
            }`}
        />
      </div>

      {/* Shapes */}
      <div>
        {/* shape.sm 1 */}
        <div
          className={`absolute transition-all duration-300 rounded-full transform
            ${toggled
              ? "w-[6px] h-[6px] bg-gray-300 shadow-[0_0_10px_2px_violet] top-1/2 left-[60%] -translate-x-[24px] -translate-y-[12px]"
              : "w-[15px] h-[1.5px] bg-white top-1/2 left-[60%] -translate-y-1/2"
            }`}
        />
        {/* shape.sm 2 */}
        <div
          className={`absolute transition-all duration-300 rounded-full transform
            ${toggled
              ? "w-[6px] h-[6px] bg-gray-300 shadow-[0_0_10px_2px_violet] top-1/2 left-[60%] -translate-x-[12px]"
              : "w-[15px] h-[1.5px] bg-white top-1/2 left-[40%] -translate-y-1/2"
            }`}
        />
        {/* shape.md */}
        <div
          className={`absolute transition-all duration-300 rounded-full z-10 transform
            ${toggled
              ? "w-[3px] h-[3px] bg-gray-300 shadow-[0_0_10px_2px_violet] top-[25%] left-[25%] translate-x-[3px]"
              : "w-[22.5px] h-[3px] bg-white top-[25%] left-[25%]"
            }`}
        />
        {/* shape.lg */}
        <div
          className={`absolute transition-all duration-300 rounded-full transform
            ${toggled
              ? "w-[4.5px] h-[4.5px] bg-gray-300 shadow-[0_0_10px_2px_violet] bottom-[6px] left-[25%] -translate-x-[3px]"
              : "w-[30px] h-[4.5px] bg-white bottom-[6px] left-[25%]"
            }`}
        />
      </div>
    </div>
  );
}