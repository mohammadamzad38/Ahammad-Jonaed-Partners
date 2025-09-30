import Image from "next/image";

export default function MaishaAbdullah() {
  return (
    <div className="container py-15">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative w-[358px] md:w-[480px]  h-[358px] md:h-[480px]">
          <Image
            src={"/images/maisha-ahammad.png"}
            alt="Iftekhar Jonaed"
            fill
            className="rounded-2xl"
          />
        </div>
        <div className="-full md:w-[50%] mt-10 px-4 md:px-0">
          <p className="text-2xl md:text-5xl theFont mb-2 text-[#171742]">
            MAISHA ABDULLAH AHAMMAD
          </p>
          <p className="text-base md:text-2xl font-bold mb-2 mt-6 md:mt-12">
            Professional Qualifications
          </p>
          <ul className="list-disc ml-5 mt-5">
            <li>Barrister-at-Law (Grays’ Inn, UK)</li>
            <li>Advocate, Supreme Court of Bangladesh</li>
            <li>PgDL& BVC, City University, London, UK</li>
            <li>LL.B (Hons), Queen Mary, University of London, UK</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
