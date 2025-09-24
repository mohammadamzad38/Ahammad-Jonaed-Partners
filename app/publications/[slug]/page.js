import Image from "next/image";
import publicationsData from "../../Data/Publications.json";
import PublicationCard from "../../components/PublicationCard";
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
    <div>
      <section className="container">
        <div className="relative w-[1280px] h-[480px]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="mx-8">
          <p className="theFont text-5xl leading-[1.2] tracking-wide mb-2 mt-6 mt">
            {article.title}
          </p>
          <div className="flex gap-4 justify-center">
            <p className="text-[#C1A246]">{article.author}</p>
            <p className="flex items-center gap-1">
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
