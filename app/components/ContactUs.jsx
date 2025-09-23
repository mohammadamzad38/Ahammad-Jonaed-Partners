import React from "react";

export default function ContactUs() {
  return (
    <div className="flex gap-10 justify-center items-center mb-24">
      <div>
        <p className="text-6xl theFont text-[#C1A246]">Contact Us</p>
        <p className="text-3xl">Reach out for legal support!</p>
      </div>
      <div className="w-3/5 bg-white py-12 px-8 rounded-2xl">
        <p className="text-3xl mt-12 text-center font-bold">
          Send us a Message
        </p>
        <form action="onSubmit" className="mt-6 space-y-4">
          <div className="flex gap-2">
            <input
              name="fName"
              type="text"
              placeholder="First name"
              className="bg-[#F3F3FA] border-[#EAE6ED] rounded-lg text-sm p-3 w-full "
            />
            <input
              name="lName"
              type="text"
              placeholder="Last name"
              className="bg-[#F3F3FA] border-[#EAE6ED] rounded-lg text-sm p-3 w-full"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="bg-[#F3F3FA] border-[#EAE6ED] rounded-lg text-sm p-3 w-full "
          />
          <input
            name="phone"
            type="number"
            placeholder="Enter your phone number"
            className="bg-[#F3F3FA] border-[#EAE6ED] rounded-lg text-sm p-3 w-full "
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="bg-[#F3F3FA] border-[#EAE6ED] rounded-lg text-sm p-3 w-full "
          />

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="bg-[#F3F3FA] border-[#EAE6ED] h-[130px] rounded-lg text-sm p-3 w-full "
          ></textarea>
          <button className="text-base text-center w-full py-4  rounded-xl bg-[#C1A246]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
