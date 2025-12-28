import { MeetCard } from "./index";

const HeroSection = () => {
  return (
    <main className="h-[107vh] md:h-screen flex justify-center items-center container relative top-14 md:top-22">
      <div className="container absolute top-0 left-0 w-full h-fit flex justify-center items-center">
        <section className="w-full z-10">
          <div>
            <h1 className="text-[1.6rem] text-center md:text-left md:text-5xl lg:text-7xl font-bold">
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

        <div className="absolute -bottom-82 md:right-0 md:-bottom-50 lg:-bottom-30 z-20">
          <img
            src="/futuristic.png"
            alt="futuristic-icon"
            className="w-110 h-110 md:w-150 md:h-150 lg:w-180 lg:h-180 xl:w-220 xl:h-220"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
