import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile | Noliner shop",
};
const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const session: any = await getServerSession(authConfig);
  return (
    <div>
      <h1>{session?.user?.name}</h1>
      <Image
        src={
          session?.user?.image
            ? session.user.image
            : "/assets/images/unknown_avatar.png"
        }
        alt="Avatar"
        width={120}
        height={120}
        className="object-contain"
      />
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
