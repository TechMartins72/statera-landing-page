import { MeetCard } from "./index";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="flex flex-1 container relative">
      <section className="relative w-full">
        <h1 className="text-7xl font-bold mt-20">
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
      </section>
      <div className="absolute top-30 right-0 flex flex-col z-100">
        <img
          src="/futuristic.png"
          alt="futuristic-icon"
          className="w-200 h-200"
        />
      </div>
    </main>
  );
};

export default HeroSection;
