import Link from "next/link";

const navLinks = [
  { category: "About Us", url: "about-us" },
  { category: "Practice Areas", url: "practice-areas" },
  { category: "Our Team", url: "our-team" },
  { category: "Our Clients", url: "our-clients" },
  { category: "Contact Us", url: "contact-us" },
  { category: "Terms & Conditions", url: "terms-and-conditions" },
];

export default function Header() {
  return (
    <section>
      <header>
        <div className="flex flex-row items-center text-white gap-10">
          <nav className="flex flex-row gap-6">
            {navLinks.map((item, idx) => (
              <div key={idx}>
                <Link href={item.url}>{item.category}</Link>
              </div>
            ))}
          </nav>
        </div>
      </header>
    </section>
  );
}
