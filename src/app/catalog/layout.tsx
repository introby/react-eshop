import Link from "next/link";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Catalog | Noliner shop",
};

type ProfileLayoutProps = {
  children: React.ReactNode;
};

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl space-x-4">
        <li>
          <Link href="/catalog/cpu">Процессоры</Link>
        </li>
        <li>
          <Link href="/catalog/videocard">Видеокарты</Link>
        </li>
        <li>
          <Link href="/catalog/motherboard">Материнские платы</Link>
        </li>
        <li>
          <Link href="/catalog/dram">Оперативная память</Link>
        </li>
        <li>
          <Link href="/catalog/hdd">Жесткие диски</Link>
        </li>
        <li>
          <Link href="/catalog/ssd">SSD</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default ProfileLayout;
