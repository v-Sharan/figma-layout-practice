import React from "react";

const Button = ({ children, type, onClick }) => {
  if (type === "gost") {
    return (
      <button
        onClick={onClick}
        className="text-neutral-600 font-semibold border border-neutral-400 p-3 rounded-lg shadow-sm"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-bold shadow-lg"
    >
      {children}
    </button>
  );
};

export default Button;
