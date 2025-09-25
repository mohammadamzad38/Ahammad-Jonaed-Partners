"use client";

import Image from "next/image";
import React from "react";
import logo from "../../public/images/Logo-footer.png";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <div className="bg-[#463A17]">
      <footer className="flex flex-col justify-center md:justify-end items-center md:items-end container pt-16 px-4 px-0">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
          <a href="/">
            <div className="relative w-[358px] md:w-[546px] mb-10 md:mb-0 h-[236px] md:h-[360px]">
              <Image src={logo} fill alt="Logo" className="object-cover" />
            </div>
          </a>
          <div className="w-full md:w-2/5 text-center md:text-start text-white space-y-5">
            <p>
              <span className="font-bold">Law Offices:</span> B-1 (1st Floor),
              Plot#11/A-1, Road#41, Gulshan-2, Dhaka-1212, Bangladesh
            </p>
            <div className="flex flex-col">
              <a target="_blank" href="mailto:info@ahammadjonaed.com">
                <span className="font-bold">Email:</span> info@ahammadjonaed.com
              </a>
              <a target="_blank" href="https://ahammad-jonaed.com">
                <span className="font-bold">Website:</span>{" "}
                www.ahammad-jonaed.com
              </a>
            </div>
            <p>
              <span className="font-bold">Court Chambers:</span> Room#5029
              (Annex-4th Floor), Supreme Court Bar Association, Ramna, Dhaka,
              Bangladesh
            </p>
          </div>
        </div>
        <FooterNav />
        <div className="flex flex-col md:flex-row gap-2 text-white my-5">
          <div className="flex gap-2">
            <p className="">Designed and Developed By</p>
            <a
              target="_blank"
              href="https://mrztech.com"
              className="text-[#B19540]"
            >
              MRZ Tech
            </a>
          </div>
          <p> Copyright: © 2025. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
