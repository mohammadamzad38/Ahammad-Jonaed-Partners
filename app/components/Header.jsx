"use client";

import Image from "next/image";
import logoImg from "../../public/images/logo.png";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { category: "Home", url: "/" },
  { category: "About Us", url: "#about" },
  { category: "Practice Areas", url: "#practice" },
  { category: "Our Team", url: "#team" },
  { category: "Our Clients", url: "#clients" },
  { category: "Recent Publications", url: "#publications" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <section className="sticky top-0 z-50 bg-[#E7E8E8] shadow md:shadow-none">
      <header className="max-w-6xl mx-auto flex flex-row justify-between items-center px-4 md:px-0 pt-[36px] pb-[12px] ">
        <Link href={"/"}>
          <div className="relative h-[38px] md:h-[68px] w-[94px] md:w-[168px]">
            <Image src={logoImg} fill alt="Logo" />
          </div>
        </Link>
        <div className="hidden md:block">
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
        </div>

        {/* Mobile Menue */}

        <button className=" md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <div className="bg-[#171742] p-2 rounded-sm">
              <IoClose className="text-white" />
            </div>
          ) : (
            <div className="bg-[#171742] p-2 rounded-sm">
              <TiThMenu className="text-white" />
            </div>
          )}
        </button>

        {open ? (
          <div
            className={`flex absolute top-20 left-0 p-5 bg-white w-full z-50 md:hidden`}
          >
            <div className="flex flex-col mx-10 items-center gap-10">
              <nav className="flex flex-wrap justify-center  gap-6">
                {navLinks.map((item, idx) => (
                  <div key={idx} className="border-b text-sm border-dotted">
                    <Link href={item.url}>{item.category}</Link>
                  </div>
                ))}
              </nav>
              <a
                className="px-4 text-white py-2 bg-[#171742] rounded-xl"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
    </section>
  );
}
