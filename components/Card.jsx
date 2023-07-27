import Image from "next/image";
import React from "react";

const Card = ({ icon, title, amount }) => {
  return (
    <div className="flex gap-2 bg-white p-5 rounded-lg w-[250px]">
      <Image src={`/${icon}`} width={60} height={60} />
      <div className="flex flex-col items-start justify-center">
        <p className="text-neutral-500">{title}</p>
        <h1 className="text-[25px] font-bold">${amount}</h1>
      </div>
    </div>
  );
};

export default Card;
