import Link from "next/link";
import React from "react";
import { socials } from "@/HardcodedElements";

const Footer: React.FC = () => {
  return (
    <footer className="flex p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 items-center flex-wrap justify-center gap-2">
      {socials.map((social) => {
        const className =
          social.class +
          " fa-brands text-slate-400 hover:text-slate-300 cursor-pointer text-2xl sm:text-3xl md:text-4xl";
        return (
          <Link key={social.class} href={social.href} target={"_blank"}>
            <i className={className}></i>
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
