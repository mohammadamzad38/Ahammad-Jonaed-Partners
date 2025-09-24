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
      <div className="grid grid-cols-2 gap-4">
        {visibleCards.map((item, idx) => (
          <div key={idx} className="bg-white shadow-sm rounded-lg p-8">
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
              <p className="mb-3 mt-4">{item.description}</p>
            </div>
            <Btn href={`/practice-area/${slugify(item.slug)}`} />
          </div>
        ))}
      </div>

      {/* Button below the grid */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-10 text-white bg-[#C1A246] py-4 rounded-lg"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
