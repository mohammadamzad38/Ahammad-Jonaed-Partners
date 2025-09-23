"use client";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import publications from "../Data/Publications.json";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import Btn from "./Btn";

export default function PublicationCard() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaRef) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaRef) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="my-27 place-items-center">
      <p className="text-6xl theFont text-[#C1A246]">Recent Publications</p>
      <div className=" w-full place-items-center">
        <div className="flex gap-2 mt-8">
          <button onClick={scrollPrev} className="p-4 rounded-full bg-white">
            <GrFormPreviousLink size={20} />
          </button>
          <button onClick={scrollNext} className="p-4 rounded-full bg-white">
            <GrFormNextLink size={20} />
          </button>
        </div>

        <div className="container overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 mt-4">
            {publications.map((published, idx) => (
              <div
                key={idx}
                className="flex-[0_0_28%] rounded-2xl min-w-0 mx-2 text-white shadow "
              >
                <div className="relative w-[340px] h-[412px]">
                  <Image
                    src={published.image}
                    fill
                    alt={published.title}
                    className="rounded-2xl"
                  />

                  <div className="absolute p-4 rounded-t-2xl bg-gradient-to-t from-[#17174200] via-[#171742BD] pb-10 to-[#171742]">
                    <p className="text-base flex justify-end">
                      {published.date}
                    </p>
                    <p className="theFont text-2xl mt-6">{published.title}</p>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Btn href={""} />
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
