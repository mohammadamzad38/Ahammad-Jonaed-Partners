import Image from "next/image";
import Publications from "../components/PublicationCard";

export default function Jonaed() {
  return (
    <div className="container">
      <div className="flex gap-8 items-center">
        <div className="relative w-[480px] mt-6 h-[480px]">
          <Image
            src={"/images/jonaed-image.png"}
            alt="Iftekhar Jonaed"
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="w-[50%]">
          <p className="text-5xl theFont mb-2 text-[#171742]">
            Mohammad Iftekhar Jonaed
          </p>
          <p>
            Mohammad Iftekhar Jonaed is a Barrister-at-Law and an Advocate of
            the Supreme Court of Bangladesh. He is a founding partner of
            Ahammad, Jonaed & Partners, bringing extensive legal experience to
            the firm.
          </p>
          <p className="text-2xl font-bold mb-2 mt-12">
            Professional Qualifications
          </p>
          <ul className="list-disc ml-5">
            <li>Barrister-at-Law, Inner Temple, UK </li>
            <li>Advocate, Supreme Court of Bangladesh </li>
            <li>Masters of Law (UEL, UK)</li>
            <li>PgDL (BVC), City University London, UK</li>
            <li>LL.B (Hons), University of London, UK </li>
          </ul>
        </div>
      </div>
      <Publications />
    </div>
  );
}
