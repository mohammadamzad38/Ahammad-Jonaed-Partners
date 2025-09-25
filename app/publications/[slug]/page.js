import Image from "next/image";
import publicationsData from "../../Data/Publications.json";
import PublicationCard from "../../components/RecentPublication";
import Slugify from "../../components/Slugify";
import { MdOutlineDateRange } from "react-icons/md";

export default function page({ params }) {
  const { slug } = params;

  const convertedSlug = publicationsData.map((items) => ({
    ...items,
    slug: Slugify(items.title),
  }));
  const article = convertedSlug.find((items) => items.slug === slug);

  console.log(article, "this is sisissisisis");

  return (
    <div className="px-4 md:px-0">
      <section className="container place-items-center ">
        <div className="relative w-[360px] md:w-[1280px] h-[143px] md:h-[480px]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="mx-8 ">
          <p className="theFont text-2xl md:text-5xl leading-[1.2] text-start tracking-wide mb-2 mt-6 mt">
            {article.title}
          </p>
          <div className="flex flex-col items-center md:flex-row mt-4 md:mt-0 md:gap-4 justify-center">
            <p className="text-[#C1A246]">{article.author}</p>
            <p className="flex items-center gap-1 bg-white px-2 rounded-3xl">
              <span className="text-[#C1A246]">
                <MdOutlineDateRange />
              </span>
              {article.date}
            </p>
          </div>
        </div>
      </section>
      <PublicationCard />
    </div>
  );
}
