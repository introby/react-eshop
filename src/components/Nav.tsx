import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex-start w-full p-3 space-x-4 bg-amber-400">
      <Link href="/catalog" className="flex gap-2 flex-center">
        Каталог
      </Link>
      <Link href="/baraholka" className="flex gap-2 flex-center">
        Барахолка
      </Link>
      <Link href="/forum" className="flex gap-2 flex-center">
        Форум
      </Link>
    </nav>
  );
};

export default Nav;
