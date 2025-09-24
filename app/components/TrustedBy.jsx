import Image from "next/image";
import ae from "../../public/icon/ae.png";
import airtel from "../../public/icon/airtel.png";
import aktel from "../../public/icon/aktel.png";
import aml from "../../public/icon/aml.png";
import amtob from "../../public/icon/amtob.png";
import ananta from "../../public/icon/ananta.png";
import lamp from "../../public/icon/bangladesh-lamp.png";
import bay from "../../public/icon/bay.png";
import chaldal from "../../public/icon/chaldal.png";
import click from "../../public/icon/click-bd.png";
import cri from "../../public/icon/cri.png";
import crystal from "../../public/icon/crystal-group.png";
import delco from "../../public/icon/delco.png";
import generation from "../../public/icon/e-generation.png";
import hand from "../../public/icon/hand.png";
import hungrinaki from "../../public/icon/hungrinaki.png";
import icon from "../../public/icon/icon-1.png";
import islami from "../../public/icon/islami-bank.png";
import knit from "../../public/icon/knit.png";
import malido from "../../public/icon/malido.png";
import mbdatra from "../../public/icon/mbdatra.png";
import mutual from "../../public/icon/mutual.png";
import mys from "../../public/icon/mys.png";
import nrb from "../../public/icon/nrb-bank.png";
import pathao from "../../public/icon/pathao.png";
import pragati from "../../public/icon/pragati-life.png";
import priyo from "../../public/icon/priyo.png";
import ts from "../../public/icon/t&s.png";
import telenor from "../../public/icon/telenor.png";
import logistics from "../../public/icon/tg-logistics.png";
import transcom from "../../public/icon/transcom.png";
import vanguard from "../../public/icon/vanguard.png";

const Trusted = [
  { image: amtob },
  { image: icon },
  { image: aktel },
  { image: transcom },
  { image: lamp },
  { image: ananta },
  { image: aml },
  { image: pragati },
  { image: cri },
  { image: crystal },
  { image: islami },
  { image: knit },
  { image: hand },
  { image: mys },
  { image: vanguard },
  { image: click },
  { image: ae },
  { image: pathao },
  { image: priyo },
  { image: telenor },
  { image: malido },
  { image: mbdatra },
  { image: airtel },
  { image: delco },
  { image: chaldal },
  { image: nrb },
  { image: logistics },
  { image: mutual },
  { image: ts },
  { image: bay },
  { image: hungrinaki },
  { image: generation },
];

export default function TrustedBy() {
  return (
    <div id="clients">
      <p className="text-6xl theFont text-center text-[#C1A246]">Trusted By</p>
      <p className="text-base text-center mx-15 pb-4 pt-8">
        We take pride in catering to all our clients on an individual level,
        providing our niche expertise, personal care, and a full spectrum of
        legal services. Our well-diversified clientele ranges from some of the
        largest conglomerates of Bangladesh to entrepreneurial enterprises of
        the high-tech world, as well as top-end real estate developers,
        telecommunications operators, and more.
      </p>
      <div className="grid grid-cols-4">
        {Trusted.map((items, idx) => (
          <div key={idx}>
            <div className="relative w-full overflow-hidden h-[120px] border border-gray-100 bg-white flex items-center justify-center ">
              <Image
                src={items.image}
                alt="Trusted Partners Logo"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
