import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import { categories } from "@/HardcodedElements";

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
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={category.href}>{category.name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default ProfileLayout;
