import Image from "next/image";
import practiceData from "../../Data/PracticeData.json";
import PublicationCard from "../../components/PublicationCard";

export default function page({ params }) {
  const { slug } = params;

  const practiceItems = practiceData.find((item) => item.slug === slug);

  if (!practiceItems) return <div>Not found</div>;

  return (
    <div>
      <div className="relative w-[1200px] h-[480px] mx-auto">
        <Image
          src={practiceItems.image}
          alt="Practice Images"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="container my-4">
        <h1 className="text-6xl theFont text-[#C1A246]">
          {practiceItems.title}
        </h1>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: practiceItems.details }}
        ></div>
      </div>
      <PublicationCard />
    </div>
  );
}
