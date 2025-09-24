import Image from "next/image";
import logoImg from "../../public/images/logo.png";
import Link from "next/link";

const navLinks = [
  { category: "Home", url: "/" },
  { category: "About Us", url: "#about" },
  { category: "Practice Areas", url: "#practice" },
  { category: "Our Team", url: "#team" },
  { category: "Our Clients", url: "#clients" },
  { category: "Recent Publications", url: "#publications" },
];

export default function Header() {
  return (
    <section className="sticky top-0 z-50 bg-[#E7E8E8]">
      <header className="max-w-6xl mx-auto flex flex-row justify-between items-center pt-[36px] pb-[12px] ">
        <Link href={"/"}>
          <div className="relative h-[68px] w-[168px]">
            <Image src={logoImg} fill alt="Logo" />
          </div>
        </Link>
        <div className="flex flex-row items-center gap-10">
          <nav className="flex flex-row gap-6">
            {navLinks.map((item, idx) => (
              <div key={idx}>
                <Link href={item.url}>{item.category}</Link>
              </div>
            ))}
          </nav>
          <a
            className="px-4 text-white py-3 bg-[#171742] rounded-xl"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </header>
    </section>
  );
}
