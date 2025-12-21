import { ProductCard } from "./index";

const Overview = () => {
  return (
    <section className="container mt-24 md:mt-0 text-center flex flex-col justify-center items-center gap-4 md:min-h-screen">
      <h1
        className="bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-semibold py-3"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D1B2E8 25%, #FFFFFF 100%)",
        }}
      >
        Statera Ecosystem
      </h1>
      <p className="md:text-xl md:w-4/5 lg:w-3/5 md:font-semibold">
        Statera is the foundational financial layer built on Midnight Network.
        It brings together three interconnected DeFi protocols powered by sUSD —
        a stable, secure, overcollateralized token designed for the
        privacy‑first blockchain economy.
      </p>

      <ProductCard />
    </section>
  );
};

export default Overview;
