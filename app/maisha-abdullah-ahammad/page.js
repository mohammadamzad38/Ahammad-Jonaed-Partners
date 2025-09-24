import Image from "next/image";
import Publications from "../components/PublicationCard";

export default function MaishaAbdullah() {
  return (
    <div className="container">
      <div className="flex gap-8 items-center">
        <div className="relative w-[480px] mt-6 h-[480px]">
          <Image
            src={"/images/maisha-ahammad.png"}
            alt="Iftekhar Jonaed"
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="w-[50%]">
          <p className="text-5xl theFont mb-2 text-[#171742]">
            MAISHA ABDULLAH AHAMMAD
          </p>
          <p>no Content</p>
          <p className="text-2xl font-bold mb-2 mt-12">
            Professional Qualifications
          </p>
          <ul className="list-disc ml-5">
            <li>Barrister-at-Law (Grays’ Inn, UK)</li>
            <li>Advocate, Supreme Court of Bangladesh</li>
          </ul>
        </div>
      </div>
      <Publications />
    </div>
  );
}
