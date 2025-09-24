import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";

export default function Btn({ href }) {
  return (
    <div className="inline-block">
      <Link
        className="flex coursor-pointer flex-row gap-3 rounded-xl text-white items-center px-8 py-2 bg-[#C1A246]"
        href={href}
      >
        Read more <GrFormNextLink />
      </Link>
    </div>
  );
}
