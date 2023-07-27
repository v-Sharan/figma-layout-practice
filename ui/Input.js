import React from "react";

const Input = ({ label, name, type }) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name} className="text-xl font-semibold">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="w-full h-10 border rounded-lg border-gray-400 p-2 inset-2"
      />
    </div>
  );
};

export default Input;
