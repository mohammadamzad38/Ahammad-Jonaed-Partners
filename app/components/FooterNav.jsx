import Link from "next/link";

const navLinks = [
  { category: "About Us", url: "#about" },
  { category: "Practice Areas", url: "#practice" },
  { category: "Our Team", url: "#team" },
  { category: "Our Clients", url: "#clients" },
  { category: "Contact Us", url: "#contact" },
  
];

export default function Header() {
  return (
    <section className="mt-10 md:mt-0">
      <div className="flex flex-col md:flex-row items-center text-white gap-6">
        <nav className="flex flex-wrap justify-center px-4 md:px-0 gap-6">
          {navLinks.map((item, idx) => (
            <div key={idx}>
              <Link href={item.url}>{item.category}</Link>
            </div>
          ))}
        </nav>
        <a href="terms-and-conditions">Terms & Conditions</a>
      </div>
    </section>
  );
}
