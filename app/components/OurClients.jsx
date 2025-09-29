import Image from "next/image";

import airtel from "../../public/icon/airtel.png";
import amtob from "../../public/icon/amtob.png";
import chaldal from "../../public/icon/chaldal.png";
import islami from "../../public/icon/islami-bank.png";
import pathao from "../../public/icon/pathao.png";
import priyo from "../../public/icon/priyo.png";
import telenor from "../../public/icon/telenor.png";
import transcom from "../../public/icon/transcom.png";
import grameen from "../../public/icon/Grameenphone-Logo.png";
import robi from "../../public/icon/robi-logo.png";
import batLogo from "../../public/icon/bat-bangladesh-logo.png";
import saudiLogo from "../../public/icon/Saudia-air.png";
import gulfAir from "../../public/icon/Gulf-Air.png";
import kuwit from "../../public/icon/Kuwait_Air.png";
import mercantile from "../../public/icon/mercantile-bank.jpg";
import alarafah from "../../public/icon/al-arafah-islami.jpg";
import bureau from "../../public/icon/Bureau_Veritas.png";
import nagad from "../../public/icon/nagaf-logo.jpg";
import fasFinance from "../../public/icon/fas-logo.png";

const Trusted = [
  { image: amtob },
  { image: telenor },
  { image: grameen },
  { image: robi },
  { image: airtel },
  { image: batLogo },
  { image: saudiLogo },
  { image: gulfAir },
  { image: kuwit },
  { image: islami },
  { image: mercantile },
  { image: alarafah },
  { image: fasFinance },
  { image: bureau },
  { image: nagad },
  { image: pathao },
  { image: priyo },
  { image: chaldal },
  { image: transcom },
];

export default function TrustedBy() {
  return (
    <div id="clients">
      <p className="text-4xl md:text-6xl theFont text-center text-[#C1A246]">
        Trusted By
      </p>
      <p className="text-base text-center mx-0 md:mx-15 pb-4 pt-4 md:pt-8">
        W e take pride in catering for all our clients on a very individual
        level, with our niche expertise, personal care and full spectrum of
        legal services. Our well diversified clientele ranges from some of the
        largest conglomerates of Bangladesh to entrepreneurial enterprises of
        high-tech world, from top end real estate developers to eco-savvy
        resorts, from large telecommunications operators to manufacturer of high
        street fashion garments, from sea going mother vessels to high flying
        airliners, to name a few below:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {Trusted.map((items, idx) => (
          <div key={idx}>
            <div className="relative w-full px-6 md:px-0 overflow-hidden h-[120px] border border-gray-100 bg-white flex items-center justify-center ">
              <Image
                src={items.image}
                alt="Trusted Partners Logo"
                className="object-contain p-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
