"use client";

import publications from "../Data/Publications.json";
import Image from "next/image";
import Btn from "./Btn";
import Slugify from "./Slugify";

export default function AuthPublication() {
  return (
    <div>
          <div className="container my-15 md:my-27 px-4 md:px-0 overflow-hidden">
              <p className="text-4xl md:text-5xl theFont text-center text-[#C1A246]">Published Articles</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {publications.map((published, idx) => (
            <div
              key={idx}
              className="w-full h-[412px] rounded-2xl text-white shadow"
            >
              <div className="relative w-full h-full">
                <Image
                  src={published.image}
                  fill
                  alt={published.title}
                  className="rounded-2xl object-cover"
                />

                <div className="absolute p-4 rounded-t-2xl bg-gradient-to-t from-[#17174200] via-[#171742BD] pb-10 to-[#171742]">
                  <p className="text-base flex justify-end">{published.date}</p>
                  <p className="theFont text-2xl mt-6">{published.title}</p>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Btn href={`/publications/${Slugify(published.slug)}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
