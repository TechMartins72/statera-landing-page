import Image from "next/image";

const NAV_LINKS = [
  { id: "about", label: "About us" },
  { id: "product", label: "Product" },
  { id: "team", label: "Our Team" },
];

const Header = () => {
  return (
    <div className="w-full py-2 bg-[#0a0a0a] fixed top-0 z-50 left-0">
      <div className="container p-0!">
        <div className="w-full flex justify-between items-center p-px! rounded-full bg-linear-to-r from-[#FF5151B5] via-[#CCC5C500] via-[#C9DEFB55] via-[#E9ECEF80] to-[#177BFDAB]">
          <header className="container w-full flex justify-between items-center p-3! px-4! rounded-full bg-[#0a0a0a]">
            <div className="flex gap-6 items-center ml-4">
              <Image
                src="/stateralogo.png"
                alt="statera logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
              />
              {/* <Image
                src="/lucentlabs.png"
                alt="lucentlabs logo"
                height={24}
                width={196}
                className="h-4 w-32 md:h-6 md:w-49"
              /> */}
            </div>

            <ul className="hidden md:flex gap-4 lg:gap-8 *:cursor-pointer">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>{link.label}</li>
              ))}
            </ul>

            <div className="p-px bg-linear-to-r from-[#F80808] via-[#FFFFFF] to-[#2b1de8] rounded-full w-fit">
              <button className="bg-linear-to-r from-[#050626] via-[#85110d] to-[#0a045a] text-white px-4 py-p md:py-2 md:px-6 rounded-full cursor-pointer font-semibold md:text-md">
                Try Product
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
