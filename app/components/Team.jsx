import Image from "next/image";
import samiImage from "../../public/images/sami-ahammad.png";
import jonaedImage from "../../public/images/iftekhar-jonaed.png";
import maishaImage from "../../public/images/maisha-ahammad.png";
import Associates from "../components/Associates"

export default function Team() {
  return (
    <div className="container my-27">
      <p className="text-6xl theFont text-center text-[#C1A246]">Our Team</p>
      <p className="my-4 text-base text-center mx-15">
        Our firm is composed of a team of young, committed lawyers who are
        passionate about delivering the absolute best to our clients. Our panel
        of multi-jurisdictional, highly-qualified, and skilled lawyers
        collectively holds extensive resources, commendable expertise, and
        exemplary experience spanning a broad spectrum of the law, both
        nationally and internationally.
      </p>
      <p className="theFont text-4xl text-center mb-4 mt-8">
        Managing Partners
      </p>
      <div className="place-items-center">
        <div className="flex flex-row gap-4">
          <div className="relative w-[300px] h-[420px]">
            <Image
              src={samiImage}
              alt="SAJED SAMI AHAMMAD"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute w-full rounded-b-lg right-0 left-0 bottom-0 z-10 p-4 text-white bg-gradient-to-b from-[#17174200] via-[#171742BD] to-[#171742]">
              <p className="text-base font-bold">SAJED SAMI AHAMMAD</p>
              <p className="text-xs">Attorney-at-Law (New York, USA)</p>
              <p className="text-xs">Barrister-at-Law (Lincoln's Inn, UK)</p>
            </div>
          </div>

          <div className="relative w-[300px] h-[420px]">
            <Image
              src={jonaedImage}
              alt="MOHAMMAD IFTEKHAR JONAED"
              fill
              className="object-cover rounded-lg"
            />

            <div className="absolute p-4 w-full rounded-b-lg right-0 left-0 bottom-0 z-10 text-white bg-gradient-to-b from-[#17174200] via-[#171742BD] to-[#171742]">
              <p className="text-base font-bold">MOHAMMAD IFTEKHAR JONAED</p>
              <p className="text-xs">Barrister-at-Law (Inner Temple, UK)</p>
              <p className="text-xs">Advocate (Supreme Court of Bangladesh)</p>
            </div>
          </div>
        </div>
        <p className="text-3xl  theFont mb-4 mt-8">Partner</p>
        <div className="relative w-[300px] h-[420px]">
          <Image
            src={maishaImage}
            alt="MAISHA ABDULLAH AHAMMAD"
            fill
            className="object-cover rounded-lg"
          />

          <div className="absolute z-10 left-0 right-0 bottom-0 w-full p-4 rounded-b-lg text-white bg-gradient-to-b from-[#17174200] via-[#171742BD] to-[#171742]">
            <p className="text-base font-bold">MAISHA ABDULLAH AHAMMAD</p>
            <p className="text-xs">Barrister-at-Law (Grays’ Inn, UK)</p>
            <p className="text-xs">Advocate, Supreme Court of Bangladesh</p>
          </div>
        </div>
      </div>
      <p className="theFont text-center text-4xl mb-4 mt-8">Associates</p>
      <Associates />
    </div>
  );
}
