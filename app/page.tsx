import Image from "next/image";
import Practice from "./components/Practice";
import Team from "./components/Team";
import TrustedBy from "./components/TrustedBy";
import PublicationsCard from "./components/PublicationCard";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div>
      <section className="space-y-6">
        <div className="max-w-[1200px] mx-auto ">
          <video
            className="rounded-xl shadow-lg w-full"
            width="1200"
            height="480"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/cover-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container py-6">
          <p className="theFont text-[#171742] text-5xl">
            At Ahammad, Jonaed & Partners, we help clients manage risk and
            capitalize on opportunity with confidence.
          </p>
          <p className="theFont text-2xl ">
            More than legal experience, we are a strategic partner in both the
            regulatory spectrum and the litigation arena.
          </p>
        </div>
      </section>

      <main className="container">
        <div className=" flex flex-row justify-center items-center gap-10 my-27">
          <div className="relative w-[470px] h-[548px] rounded-2xl shadow-xl">
            <Image
              src={"/images/story-picture.png"}
              fill
              alt="Story Image"
              className="p-4 rounded-2xl bg-white"
            />
          </div>
          <div className="w-3/5 space-y-16 mx-4">
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
        <div className="space-y-4">
          <p className="text-6xl text-center theFont text-[#C1A246]">
            Practice Areas
          </p>
          <p className="text-base text-center">
            Ahammad, Jonaed & Partners is a full-service law firm that handles
            both contentious and non-contentious <br /> matters. They offer an
            extensive range of specialist legal services across various fields.
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
