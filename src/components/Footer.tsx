import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 items-center flex-wrap justify-center gap-2">
      <Link href={"https://www.instagram.com/"} target={"_blank"}>
        <i
          className="fa-brands fa-instagram text-slate-400 hover:text-slate-300 cursor-pointer
      text-2xl sm:text-3xl md:text-4xl"
        ></i>
      </Link>
      <Link href={"https://www.vk.com/"} target={"_blank"}>
        <i
          className="fa-brands fa-vk text-slate-400 hover:text-slate-300 cursor-pointer
      text-2xl sm:text-3xl md:text-4xl"
        ></i>
      </Link>
      <Link href={"https://www.facebook.com/"} target={"_blank"}>
        <i
          className="fa-brands fa-facebook text-slate-400 hover:text-slate-300 cursor-pointer
      text-2xl sm:text-3xl md:text-4xl"
        ></i>
      </Link>
      <Link href={"https://www.twitter.com/"} target={"_blank"}>
        <i
          className="fa-brands fa-twitter text-slate-400 hover:text-slate-300 cursor-pointer
      text-2xl sm:text-3xl md:text-4xl"
        ></i>
      </Link>
      <Link href={"https://www.youtube.com/"} target={"_blank"}>
        <i
          className="fa-brands fa-youtube text-slate-400 hover:text-slate-300 cursor-pointer
      text-2xl sm:text-3xl md:text-4xl"
        ></i>
      </Link>
    </footer>
  );
};

export default Footer;
