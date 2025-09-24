import Image from "next/image";
import Publications from "../components/PublicationCard";

export default function SajedSamiAhammad() {
  return (
    <div className="container">
      <div className="flex gap-8">
        <div className="relative w-[480px] mt-6 h-[480px]">
          <Image
            src={"/images/jonaed-image.png"}
            alt="Iftekhar Jonaed"
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="w-[50%] mt-10">
          <p className="text-5xl theFont mb-2 text-[#171742]">
            SAJED SAMI AHAMMAD
          </p>
          <p>no content</p>
          <p className="text-2xl font-bold mb-2 mt-12">
            Professional Qualifications
          </p>
          <ul className="list-disc ml-5">
            <li>Attorney-at-Law (New York, USA)</li>
            <li>Barrister-at-Law (Lincoln's Inn, UK)</li>
          </ul>
        </div>
      </div>
      <Publications />
    </div>
  );
}
