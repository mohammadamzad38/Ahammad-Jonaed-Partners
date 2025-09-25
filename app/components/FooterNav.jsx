import Link from "next/link";

const navLinks = [
  { category: "About Us", url: "#about" },
  { category: "Practice Areas", url: "#practice" },
  { category: "Our Team", url: "#team" },
  { category: "Our Clients", url: "#clients" },
  { category: "Contact Us", url: "#contact" },
  { category: "Terms & Conditions", url: "terms-and-conditions" },
];

export default function Header() {
  return (
    <section className="mt-10 md:mt-0">
      <div className="flex flex-row items-center text-white gap-10">
        <nav className="flex flex-wrap justify-center md:flex-row gap-6">
          {navLinks.map((item, idx) => (
            <div key={idx}>
              <Link href={item.url}>{item.category}</Link>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
