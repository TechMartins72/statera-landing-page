import React from "react";

const data = [
  {
    name: "Stable Coin",
    url: "/stablecoinicon.png",
    alt: "/stablecoin",
  },
  {
    name: "Launchpad",
    url: "/launch-icon.png",
    alt: "/launchpad",
  },
  {
    name: "Liquid Staking",
    url: "/liquidstakingicon.png",
    alt: "/liquid-staking-icon",
  },
];

const ProductCard = () => {
  return (
    <section className="flex gap-10 mt-24">
      {data.map((product, idx) => (
        <div
          key={idx}
          className="bg-white h-60 w-60 rounded-4xl text-black font-semibold text-2xl relative"
        >
          <div className="absolute -translate-y-22">
            <img src={product.url} alt={product.alt} />
            <h2>Stable Coin</h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
