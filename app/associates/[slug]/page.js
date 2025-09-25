import AssociatesData from "../../Data/Associates.json";
import PublicationCard from "../../components/RecentPublication";

export default function page({ params }) {
  const { slug } = params;

  const associates = AssociatesData.find((items) => items.slug === slug);
  return (
    <div className="mx-4 md:mx-0">
      <div className="max-w-xl mx-auto text-center pt-12 pb-0 md:pb-14">
        <p className="text-3xl md:text-5xl theFont mb-2 text-[#171742]">
          {associates.name}
        </p>
        <p className="text-[#231F20]">{associates.details}</p>
        <div className="mt-6 md:mt-12">
          <p className="text-base md:text-2xl mb-4 font-bold">Professional Qualifications</p>
          <ul className="list-disc text-sm text-start ml-6">
            <li className="text-[#231F20]">{associates.institute}</li>
            <li className="text-[#231F20]">{associates.graduation}</li>
          </ul>
        </div>
      </div>
      <PublicationCard />
    </div>
  );
}
