import Image from "next/image";
import { MeetCard } from "./index";

const HeroSection = () => {
  return (
    <main className="flex justify-center items-center container relative md:top-12 pb-82 md:pb-50 lg:pb-30 mt-16">
      <Image
        src="/Ellipse.png"
        alt="ellipse"
        height={800}
        width={800}
        className="max-sm:w-[70%] absolute -bottom-50 z-0 md:top-0 right-0 pointer-events-none"
      />
      <div className="max-sm:w-[70%] absolute md:top-0 right-0 z-0 -bottom-65 pointer-events-none">
        <Image
          src="/background.png"
          alt="background"
          width={750}
          height={750}
          className="background-fade"
        />
      </div>
      <div className="w-full h-fit flex justify-center items-center">
        <section className="w-full z-10">
          <div>
            <h1 className="text-[1.4rem] text-center md:text-left md:text-5xl lg:text-7xl font-bold">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #5E78FA 0%, #D1B2E8 25%, #F0F2F4 50%, #EE6EE5 75%, #076DE2 100%)",
                }}
              >
                "Privacy-First DeFi <br /> Infrastructure
              </span>{" "}
              <br />
              <span className="italic">Powered by Midnight"</span>
            </h1>

            <MeetCard />
          </div>
        </section>

        <div className="absolute -bottom-80 md:right-0 md:-bottom-50 lg:-bottom-30 z-20">
          <img
            src="/futuristic.png"
            alt="futuristic-icon"
            className="w-110 h-100 md:w-150 md:h-150 lg:w-180 lg:h-180 xl:w-220 xl:h-220"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
