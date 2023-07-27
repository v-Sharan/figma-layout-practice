import Card from "@/components/Card";
import Table from "@/components/Table";
import Image from "next/image";
import React from "react";

import { navbar, sideBar, infoCard, table } from "@/lib/Arrays";

const index = () => {
  return (
    <>
      <div className="bg-black flex justify-between py-3 px-10 text-white items-center ">
        <div className="flex items-center gap-14">
          {navbar.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 cursor-pointer hover:text-white/50"
            >
              <Image src={`/${item.img}`} width={30} height={30} />
              <p className="text-xl">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="bg-white text-black p-2 text-[14px] font-[400] rounded-full flex gap-3 justify-center items-center">
          <Image
            src="/images/person.png"
            width={30}
            height={30}
            className="rounded-full"
          />
          İsmail İhsan Bülbül
        </div>
      </div>
      <div className="flex min-h-screen w-full">
        <div className="bg-neutral-800 text-white w-52 min-h-screen">
          <div className="flex justify-center items-center py-[15px] border-b border-black px-[30px]">
            <button className="flex items-center gap-2 bg-neutral-200 p-[10px] hover:bg-neutral-400/90 text-black rounded-lg shadow-sm">
              <Image src={"/pluse.svg"} width={20} height={20} />
              New Item
            </button>
          </div>
          {sideBar.map((item, index) => (
            <div
              key={index}
              className="border-b border-black py-[12px] px-[18px]"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-2 cursor-pointer">
                  <Image src={`/${item.frontIcon}`} width={20} height={20} />
                  {item.title}
                </div>
                <Image
                  src={`/${item.endIcon}`}
                  className="cursor-pointer"
                  width={20}
                  height={20}
                />
              </div>
              <div className="px-8 py-2">
                {!!item.data &&
                  item.data?.map((item, index) => (
                    <p
                      key={index}
                      className="p-2 hover:bg-neutral-600 rounded-lg"
                    >
                      {item}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex items-center justify-between px-[30px] py-[17px] bg-white">
            <div className="flex gap-10 items-center">
              <h1 className="text-3xl font-bold">Add New Post</h1>
              <div className="flex gap-14">
                <div className="flex items-center gap-2">
                  <Image src={"/upluse.svg"} width={25} height={25} />
                  <p className="font-semibold text-neutral-700">Add Content</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={"/set-black.svg"} width={25} height={25} />
                  <p className="font-semibold text-neutral-700">Settings</p>
                </div>
              </div>
            </div>
            <div className="w-60 flex border rounded-lg border-black border-lg overflow-auto p-2">
              <input
                className="w-full border-0 overflow-hidden"
                placeholder="Search content..."
              />
              <Image src={"/search.svg"} width={25} height={25} />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex justify-center gap-5 px-10">
              {infoCard.map((item, index) => (
                <Card {...item} key={index} />
              ))}
            </div>
            <div className="flex flex-col gap-[20px] w-[80%] px-10 py-5 rounded-lg self-center bg-white">
              <div className="flex flex-col justify-start gap-1">
                <h1 className="font-bold text-3xl">Form Title</h1>
                <p className="font-[300] text-neutral-800">
                  Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                  gravida augue enim.
                </p>
              </div>
              <div className="bg-red-100 p-2 border border-red-400 rounded-lg">
                <div className="flex gap-2">
                  <Image src={"/info.svg"} width={25} height={25} />
                  <p className="text-red-900 font-[400]">
                    Senectus malesuada suspendisse bibendum elit amet vitae.
                  </p>
                </div>
              </div>
              <div className="flex border border-neutral-400 overflow-hidden rounded-lg">
                {table.map((item, index) => (
                  <Table {...item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
