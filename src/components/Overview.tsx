import { ProductCard } from "./index";

const Overview = () => {
  return (
    <section className="container text-center flex flex-col justify-center items-center gap-4 py-36 h-screen">
      <h1
        className="bg-clip-text text-transparent text-6xl font-semibold py-3"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D1B2E8 25%, #FFFFFF 100%)",
        }}
      >
        Statera Ecosystem
      </h1>
      <p className="text-xl w-3/5 font-semibold">
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
