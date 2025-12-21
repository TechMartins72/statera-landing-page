import React from "react";

const ProductDetailsCard = ({
  url,
  details,
  name,
  index,
}: {
  url: string;
  details: string;
  name: string;
  index: number;
}) => {
  return (
    <div
      className={`text-center md:text-left flex items-center flex-col-reverse md:flex-row md:justify-between gap-2 max-w-5xl! mx-auto ${
        index % 2 == 0 && "md:flex-row-reverse"
      }`}
    >
      <div>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl mb-4 font-semibold bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #5E78FA 0%, #D1B2E8 25%, #F0F2F4 50%, #EE6EE5 75%, #076DE2 100%)",
          }}
        >
          {name}
        </h1>
        <p className="text-md md:text-xl">{details}</p>
      </div>
      <img
        src={url}
        alt={name}
        className="w-48 md:w-auto md:-translate-y-10 md:scale-70 lg:scale-100"
      />
    </div>
  );
};

export default ProductDetailsCard;
