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
      className={`flex justify-center gap-4 max-w-5xl mx-auto ${
        index % 2 == 0 && "flex-row-reverse"
      }`}
    >
      <div>
        <h1 className="text-5xl mb-4 font-semibold">{name}</h1>
        <p className="text-xl">{details}</p>
      </div>
      <img src={url} alt={name} className="-translate-y-10" />
    </div>
  );
};

export default ProductDetailsCard;
