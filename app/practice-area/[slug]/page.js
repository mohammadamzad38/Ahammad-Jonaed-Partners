import Image from "next/image";
import practiceData from "../../Data/PracticeData.json";
import PublicationCard from "../../components/RecentPublication";

export default function page({ params }) {
  const { slug } = params;

  const practiceItems = practiceData.find((item) => item.slug === slug);

  if (!practiceItems) return <div>Not found</div>;

  return (
    <div className="mt-5">
      <div className="relative w-[358px] md:w-[1200px]  h-[144px] md:h-[480px] mx-auto">
        <Image
          src={practiceItems.image}
          alt="Practice Images"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="container my-4">
          <h1 className="text-2xl md:text-6xl theFont text-[#C1A246]">
            {practiceItems.title}
          </h1>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: practiceItems.details }}
          ></div>
        </div>
        <PublicationCard />
      </div>
    </div>
  );
}
