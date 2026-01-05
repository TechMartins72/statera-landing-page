import React from "react";

const data = [
  {
    name: "Stable Coin",
    url: "/statera.png",
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
    <section className="container flex flex-col justify-center items-center md:flex-row gap-24 md:gap-10 md:mt-12">
      {data.map((product, idx) => (
        <div
          key={idx}
          className="bg-white h-60 w-60 rounded-4xl text-black font-semibold text-2xl relative"
        >
          <div
            className={`absolute -translate-y-22 ${
              idx === 0 && "scale-75 md:scale-80"
            }`}
          >
            <img src={product.url} alt={product.alt} />
          </div>
          <h2 className="absolute bottom-8 -translate-x-1/2 left-1/2 text-nowrap">
            {product.name}
          </h2>
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
