"use client";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import publications from "../Data/Publications.json";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import Btn from "./Btn";
import Slugify from "./Slugify";

export default function PublicationCard() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div id="publications" className="my-12 md:my-27 place-items-center">
      <p className="text-4xl md:text-6xl theFont text-[#C1A246]">Recent Publications</p>
      <div className=" w-full place-items-end md:place-items-center">
        <div className="flex gap-2 mt-8">
          <button
            onClick={scrollPrev}
            className="p-4 rounded-full bg-gray-400 hover:bg-[#171742] text-white"
          >
            <GrFormPreviousLink size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="p-4 rounded-full bg-gray-400 hover:bg-[#171742] text-white"
          >
            <GrFormNextLink size={20} />
          </button>
        </div>

        <div className="container overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 mt-4">
            {publications.map((published, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] md:flex-[0_0_28%] w-[340px] h-[412px] rounded-2xl mx-2 text-white shadow"
              >
                <div className="relative md:w-full h-full">
                  <Image
                    src={published.image}
                    fill
                    alt={published.title}
                    className="rounded-2xl object-cover"
                  />

                  <div className="absolute p-4 rounded-t-2xl bg-gradient-to-t from-[#17174200] via-[#171742BD] pb-10 to-[#171742]">
                    <p className="text-base flex justify-end">
                      {published.date}
                    </p>
                    <p className="theFont text-2xl mt-6">{published.title}</p>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Btn href={`/publications/${Slugify(published.title)}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
