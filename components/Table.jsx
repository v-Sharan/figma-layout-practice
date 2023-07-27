import React from "react";

const Table = ({ name, title, data }) => {
  return (
    <div className="">
      <div
        className={`${
          title ? "bg-neutral-300 p-2" : "bg-neutral-200 p-2"
        } w-[300px] `}
      >
        {name}
      </div>
      {data?.map((item) => (
        <p className="p-2 border border-white bg-neutral-300/40">{item}</p>
      ))}
    </div>
  );
};

export default Table;
