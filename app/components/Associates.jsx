import Link from "next/link";
import associatesTeam from "../Data/Associates.json";
import Slugify from "./Slugify";

export default function Associates() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-4">
        {associatesTeam.map((member, idx) => (
          <Link href={`/associates/${Slugify(member.slug)}`}>
            <div
              key={idx}
              className="bg-[#BFBFE9] space-y-1 rounded-lg text-center w-[256px] h-[88px] py-4"
            >
              <p className="font-bold text-xs">{member.name}</p>
              <p className="text-[10px]">{member.graduation}</p>
              <p className="text-[10px]">{member.institute}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
