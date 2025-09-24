import AssociatesData from "../../Data/Associates.json";
import PublicationCard from "../../components/PublicationCard";

export default function page({ params }) {
  const { slug } = params;

  const associates = AssociatesData.find((items) => items.slug === slug);
  return (
    <div>
      <div className="max-w-xl mx-auto text-center pt-12 pb-14">
        <p className="text-5xl theFont mb-2 text-[#171742]">
          {associates.name}
        </p>
        <p className="text-[#231F20]">{associates.details}</p>
        <div className="mt-12">
          <p className="text-2xl mb-4 font-bold">Professional Qualifications</p>
          <ul className="list-disc text-start">
            <li className="text-[#231F20]">{associates.institute}</li>
            <li className="text-[#231F20]">{associates.graduation}</li>
          </ul>
        </div>
      </div>
      <PublicationCard />
    </div>
  );
}
