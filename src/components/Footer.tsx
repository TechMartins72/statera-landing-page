import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    icon: FaDiscord,
    href: "https://discord.com/invite/statera",
    label: "Discord",
  },
  { icon: FaXTwitter, href: "https://x.com/stateraprotocol", label: "Twitter" },
  { icon: CiMail, href: "mailto:stateraprotocol@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <div className="relative">
      <Image
        src="/footerbg.png"
        alt="ellipse"
        fill
        className="object-cover"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,2.9) 40%, rgba(0,0,0,2.9) 60% black 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,2.9) 40%,  rgba(0,0,0,2.9) 60% black 75%",
        }}
      />
      <footer className="container relative z-10 flex justify-between items-center mb-12 py-8">
        <div className="flex gap-3 items-center justify-center">
          <Image
            src="/lucentlabs logo.png"
            alt="lucentlabs"
            height={40}
            width={40}
          />
          <Image
            src="/lucentlabs.png"
            alt="lucentlabs logo"
            height={24}
            width={196}
          />
        </div>
        <p>@2026 all right reserved</p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((social, idx) => (
            <Link
              href={social.href}
              key={idx}
              aria-label={social.label}
              target="_blank"
            >
              <social.icon className="text-gray-400 hover:text-white transition-colors text-3xl" />
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
