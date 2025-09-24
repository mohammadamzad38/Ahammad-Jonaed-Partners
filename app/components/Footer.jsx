"use client";

import Image from "next/image";
import React from "react";
import logo from "../../public/images/Logo-footer.png";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <div className=" bg-[#463A17]">
      <footer className="flex flex-col justify-end items-end container pt-16">
        <div className="flex justify-between">
          <div className="relative w-[546px] h-[360px]">
            <Image src={logo} fill alt="Logo" className="object-cover" />
          </div>
          <div className="w-2/5 text-white space-y-5">
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
        <div className="flex gap-2 text-white my-5">
          <p className="">Designed and Developed By</p>
          <a
            target="_blank"
            href="https://mrztech.com"
            className="text-[#B19540]"
          >
            MRZ Tech
          </a>
          |<p> Copyright: © 2025. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
