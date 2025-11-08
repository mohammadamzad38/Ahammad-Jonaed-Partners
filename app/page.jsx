import Image from "next/image";
import Practice from "./components/Practice";
import Team from "./components/Team";
import TrustedBy from "./components/OurClients";
import PublicationsCard from "./components/RecentPublication";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div>
      <section className="space-y-0 md:space-y-6 px-4 lg:px-0">
        <div className="max-w-[358px] md:max-w-[1200px] h-[170px] md:h-[480px] mx-auto ">
          <video
            className="rounded-xl mt-2 object-cover shadow-lg w-full h-[170px] md:h-[480px]"
            width="1200"
            height="480"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/images/cover-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container py-6">
          <p className="theFont leading-[1.3] tracking-wide text-[#171742] text-2xl md:text-5xl">
            At Ahammad, Jonaed & Partners, we help clients manage risk and
            capitalize on opportunity with confidence.
          </p>
          <p className="theFont tracking-wider mt-4 text-base md:text-2xl ">
            More than legal experience, we are a strategic partner in both the
            regulatory spectrum and the litigation arena.
          </p>
        </div>
      </section>

      <main id="about" className="container px-4 lg:px-0">
        <div className=" flex flex-col md:flex-row justify-center items-center gap-10 my-4 md:my-27">
          <div className="relative w-[357px] md:w-[470px] h-[496px] md:h-[548px] rounded-2xl shadow-xl">
            <Image
              src={"/images/story-picture.png"}
              fill
              alt="Story Image"
              className="p-4 rounded-2xl bg-white"
            />
          </div>
          <div className="w-full md:w-3/5 space-y-4 md:space-y-16 mx-0 md:mx-4">
            <div className="space-y-4">
              <p className="text-2xl text-[#171742] font-bold mb-4">
                Our Story
              </p>
              <p>
                We evolve with the dynamic legal sector in Bangladesh. Ahammad,
                Jonaed & Partners was formed in April 2012, when Ahammad,
                Ahammad & Associates joined forces with Iftekhar Jonaed &
                Associates. The firm brings together a panel of
                highly-qualified, multi-jurisdictional lawyers with almost two
                decades at legal background. Our team collectively holds more
                experience in transactional and corporate matters, as well as
                litigation, than most major law firms in Dhaka, Bangladesh.
              </p>
            </div>
            <div>
              <p className="text-2xl text-[#171742] font-bold mb-4">
                Our Philosophy and Commitments
              </p>
              <p>
                Our philosophy is simple: <br />{" "}
                <span className="text-[#C1A246]">
                  the client must always be satisfied
                </span>
                . We believe this is our framework for success. We take pride in
                our commitment to excellence and our ever-evolving approach to
                client care. At Ahammad, Jonaed & Partners, our clients are the
                strategic partner, not just a file number.
              </p>
            </div>
          </div>
        </div>
        <div id="practice" className="space-y-4">
          <p className="text-4xl md:text-6xl text-center mt-10 md:mt-0 theFont text-[#C1A246]">
            Practice Areas
          </p>
          <p className="hidden max-w-3xl mx-auto place-items-center md:block text-base text-center">
            We are a full service law firm, specializing in catering to the
            needs of any corporate body or individual, both in contentious and
            non-contentious matters. Our extensive range of specialist legal
            services includes, inter alia, the following areas:
          </p>
          <Practice />
        </div>
        <Team />
        <TrustedBy />
        <PublicationsCard />
        <ContactUs />
      </main>
    </div>
  );
}
