"use client";
import Image from "next/image";
import PracticeData from "../Data/PracticeData.json";
import Btn from "./Btn";
import { useState } from "react";
import slugify from "./Slugify";

export default function Practice() {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? PracticeData : PracticeData.slice(0, 8);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleCards.map((item, idx) => (
          <div key={idx} className="bg-white shadow-sm rounded-lg p-6 md:p-8">
            <div className="relative flex justify-center items-center w-[60px] h-[60px] bg-[#C1A246] rounded-xl">
              <Image
                src={item.icon}
                alt={item.title}
                width={30}
                height={30}
                className="object-cover w-[30px] h-[30px]"
              />
            </div>
            <div className="space-y-3 my-4">
              <p className="font-bold">{item.title}</p>
              <p className="mb-3 mt-4 line-clamp-3">{item.description}</p>
            </div>
            <Btn href={`/practice-area/${slugify(item.slug)}`} />
          </div>
        ))}
        <div
          className={`flex justify-center ${
            showAll
              ? "hidden"
              : "absolute w-full bottom-0 py-15 bg-gradient-to-b from-[#FFFFFF00] via-[#FFFFFFBF] to-[#FFFFFF]"
          }`}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className=" px-10 cursor-pointer text-white bg-[#C1A246] py-2 rounded-lg"
          >
            Show More
          </button>
        </div>
      </div>
      <div>
        {showAll ? (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 cursor-pointer text-white bg-[#C1A246] py-2 rounded-lg"
            >
              Show less
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
