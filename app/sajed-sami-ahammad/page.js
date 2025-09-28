import Image from "next/image";
import AuthPublication from "../components/AuthPublication";

export default function SajedSamiAhammad() {
  return (
    <div className="container ">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative w-[358px] md:w-[480px] mt-6 h-[358px] md:h-[480px]">
          <Image
            src={"/images/sami-ahammad.png"}
            alt="Iftekhar Jonaed"
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[50%] mt-10 px-4 md:px-0 ml-5 md:ml-0">
          <p className="text-2xl md:text-5xl theFont mb-2 text-[#171742]">
            SAJED SAMI AHAMMAD
          </p>
          <p className="text-base md:text-2xl font-bold mb-2 mt-6 md:mt-12">
            Professional Qualifications
          </p>
          <ul className="list-disc ml-5 mt-5">
            <li>Attorney-at-Law (New York, USA)</li>
            <li>Attorney-at-Law (New York, USA)</li>
            <li>Advocate (Appellate Division of theSupreme Court of Bangladesh)</li>
            <li>Master of Laws (Distinction)</li>
            <li>Georgetown University Law Center, Washington DC (USA)</li>
            <li>PgDL(BVC), LL.B.(Hons), Newcastle Upon Tyne, UK</li>
          </ul>
        </div>
      </div>
      <AuthPublication />
    </div>
  );
}
