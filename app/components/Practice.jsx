import investment from "../../public/icon/investment.png";
import commercial from "../../public/icon/commercial-property.png";
import anchor from "../../public/icon/icons-anchor.png";
import bank from "../../public/icon/icons-bank.png";
import construction from "../../public/icon/icons-construction.png";
import tax from "../../public/icon/icons-council-tax.png";
import Bankruptcy from "../../public/icon/icons-debt.png";
import dispute from "../../public/icon/icons-dispute.png";
import energy from "../../public/icon/icons-energy.png";
import trust from "../../public/icon/icons-genealogy.png";
import justice from "../../public/icon/icons-justice.png";
import rocket from "../../public/icon/icons-rocket.png";
import tourism from "../../public/icon/icons-tourism.png";
import trade from "../../public/icon/icons-trade.png";
import insurance from "../../public/icon/worker-insurance.png";
import satellite from "../../public/icon/satellite.png";
import practice from "../../public/icon/practice-icon.png";
import puzzle from "../../public/icon/puzzle.png";
import Image from "next/image";

import Btn from "./Btn";

const practiceArea = [
  {
    icon: investment,
    title: "Corporate and Foreign Direct Investments",
    description:
      "Major practice part, advising corporations, banks, and government on transactions and foreign direct investments.",
  },
  {
    icon: puzzle,
    title: "Mergers and Acquisitions",
    description:
      "Experienced teams handle all aspects of M&A, from documentation and due diligence to regulatory approvals.",
  },
  {
    icon: bank,
    title: "Banking and Finance",
    description:
      "Providing sound advice on complex finance transactions, including structured finance, debt recovery, and insolvency.",
  },
  {
    icon: commercial,
    title: "Commercial Property",
    description:
      "Specialist advice on all commercial property transactions, including land acquisitions, leases, and property development.",
  },
  {
    icon: practice,
    title: "Intellectual Property",
    description:
      "Providing a wide array of legal services for the establishment and protection of patents, trademarks, and copyrights.",
  },
  {
    icon: satellite,
    title: "Telecommunications & Broadcasting",
    description:
      "Advising clients on M&A, regulatory advice, data protection, licensing, and compliance in the sector.",
  },
  {
    icon: tourism,
    title: "Tourism and Hospitality",
    description:
      "Advising clients from hotels to travel operators on corporate structuring, permitting, licensing, and financing.",
  },
  {
    icon: construction,
    title: "Construction and Development",
    description:
      "Providing sound advice on complex finance transactions, including structured finance, debt recovery, and insolvency.",
  },
  {
    icon: trade,
    title: "Construction and Development",
    description:
      "Offering in-depth consultation on construction and development issues, including contracts, joint ventures, and disputes.",
  },
  {
    icon: energy,
    title: "Energy and Natural Resources",
    description:
      "Expert lawyers advise on corporate environment strategies for both renewable and non-renewable energy projects.",
  },
  {
    icon: insurance,
    title: "Labour and Employment",
    description:
      "Representing clients in employment law, including dispute resolution, restructuring, and drafting contracts and policies.",
  },
  {
    icon: tax,
    title: "Taxation",
    description:
      "Providing specialized legal services on taxation law, including customs, excise, and corporate tax structuring.",
  },
  {
    icon: Bankruptcy,
    title: "Debt Recovery, Bankruptcy and Insolvency",
    description:
      "Advising on all aspects of bankruptcy and insolvency at both corporate and personal levels, including winding-up.",
  },
  {
    icon: trust,
    title: "Trusts and Estates",
    description:
      "Advising individuals and institutions on estate planning, property distribution, and trust administration.",
  },
  {
    icon: anchor,
    title: "Admiralty and Maritime",
    description:
      "Advising on maritime issues, from ship arrests and cargo claims to maritime accidents and insurance claims.",
  },
  {
    icon: justice,
    title: "Litigation",
    description:
      "We offer a full-service litigation experience , specializing in Criminal and Civil Appeal, Writ Jurisdiction, & Company Matters.",
  },
  {
    icon: dispute,
    title: "Arbitration & Alternative Dispute Resolution",
    description:
      "A team of lawyers with international experience who strive to settle disputes amicably and cost-effectively.",
  },
  {
    icon: rocket,
    title: "Tech Start up and FinTech",
    description:
      "Experienced teams look into the establishment and regulation of local and multinational firms in the tech world.",
  },
];

export default function Practice() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {practiceArea.map((item, idx) => (
          <div key={idx} className="bg-white shadow-sm rounded-lg p-8">
            <div className="relative flex justify-center items-center w-[60px] h-[60px] bg-[#C1A246] rounded-xl">
              <Image
                src={item.icon}
                alt={item.title}
                className="object-cover w-[30px] h-[30px]"
              />
            </div>
            <div className="space-y-3 my-4">
              <p className="font-bold">{item.title}</p>
              <p className="mb-3 mt-4">{item.description}</p>
            </div>
            <Btn href={"/"} />
          </div>
        ))}
      </div>
    </div>
  );
}
