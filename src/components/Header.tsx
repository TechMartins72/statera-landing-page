import Image from "next/image";

const NAV_LINKS = [
  { id: "about", label: "About us" },
  { id: "product", label: "Product" },
  { id: "team", label: "Our Team" },
];

const Header = () => {
  return (
    <div className="w-full h-20">
      <header className="container w-full flex justify-between items-center p-6">
        <div className="flex gap-6 items-center">
          <Image src="/lucentlabs logo.png" alt="Logo" width={40} height={40} />
          <Image
            src="/lucentlabs.png"
            alt="lucentlabs logo"
            height={24}
            width={196}
          />
        </div>

        <ul className="flex gap-8 *:cursor-pointer">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>{link.label}</li>
          ))}
        </ul>

        <button className="bg-linear-to-r from-[#0506264A] via-[#DB201982] to-[#1D75E861] text-white px-8 py-2 rounded-full cursor-pointer">
          Try Product
        </button>
      </header>
    </div>
  );
};

export default Header;
