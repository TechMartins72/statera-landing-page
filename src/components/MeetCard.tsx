import Image from "next/image";
import React from "react";

const subProduct = [
  {
    product: "Stable Coin",
    icon: "/stablecoinicon.png",
  },
  {
    product: "Launchpad",
    icon: "/launch-icon.png",
  },
  {
    product: "Liquid Staking",
    icon: "/liquidstakingicon.png",
  },
];

const MeetCard = () => {
  return (
    <div className="w-114 rounded-4xl p-8 bg-linear-to-r from-[#1d01b994] to-[#060124] mt-18 relative">
      <div className="">
        <span className="py-2 px-10 tracking-widest text-2xl bg-white text-black font-semibold rounded-2xl absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2">
          Offering
        </span>
        <div className="">
          <li className="list-none flex flex-col gap-2 bg-linear-to-r from-[#000001] to-[#0F0067] p-4 rounded-2xl mt-4">
            {subProduct.map((item, idx) => (
              <div
                key={idx}
                className="w-full rounded-lg flex justify-between items-center p-2 "
              >
                <p className="text-2xl font-semibold">{item.product}</p>
                <span>
                  <Image
                    src={item.icon}
                    alt={item.product}
                    width={50}
                    height={50}
                  />
                </span>
              </div>
            ))}
            <button className="mt-4 py-4 px-12 uppercase bg-white rounded-2xl text-black text-2xl font-bold">
              <h3 className="">In One Ecosystem</h3>
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default MeetCard;
