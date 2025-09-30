import Image from "next/image";
import publicationsData from "../../Data/Publications.json";
import PublicationCard from "../../components/RecentPublication";
import { MdOutlineDateRange } from "react-icons/md";

export default function page({ params }) {
  const { slug } = params;

  const Blog = publicationsData.find((items) => items.slug === slug);

  console.log(Blog, "this is sisissisisis");

  return (
    <div className="px-4 md:px-0">
      <section className="container place-items-center ">
        <div className="relative w-[358px] md:w-[1280px] h-[144px] md:h-[480px]">
          <Image
            src={Blog?.image}
            alt={Blog?.title}
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div>
          <p className="theFont text-2xl md:text-5xl leading-[1.2] text-start tracking-wide mb-2 mt-6 mt">
            {Blog?.title}
          </p>
          <div className="flex flex-col items-center md:flex-row mt-4 md:mt-0 md:gap-4 justify-center">
            <p className="text-[#C1A246]">{Blog?.author}</p>
            <p className="flex items-center gap-1 bg-white px-2 rounded-3xl">
              <span className="text-[#C1A246]">
                <MdOutlineDateRange />
              </span>
              {Blog?.date}
            </p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: Blog?.article }}></div>
      </section>
      <PublicationCard />
    </div>
  );
}
