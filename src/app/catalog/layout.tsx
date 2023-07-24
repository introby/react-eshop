import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog | Noliner shop",
};
const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl space-x-4">
        <li>
          <Link href="/catalog/cpu">Процессоры</Link>
        </li>
        <li>
          <Link href="/catalog/motherboard">Материнские платы</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default ProfileLayout;
