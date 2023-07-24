import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Noliner shop",
};
const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Ник пользователя + иконка</h1>
      <ul className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl space-x-4">
        <li>
          <Link href="/profile">Главная</Link>
        </li>
        <li>
          <Link href="/profile/personal">Личные данные</Link>
        </li>
        <li>
          <Link href="/profile/payments">Способы оплаты</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default ProfileLayout;
