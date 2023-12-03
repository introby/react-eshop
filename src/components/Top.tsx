"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession, getProviders } from "next-auth/react";
import provider from "@/components/Provider";
import CustomButton from "@/components/CustomButton";
import { ClientSafeProvider, LiteralUnion } from "next-auth/src/react/types";
import { BuiltInProviderType } from "next-auth/src/providers";
import { useSelector } from "react-redux";

const Top: React.FC = () => {
  const { data: session } = useSession();
  const items = useSelector((state) => state.cart.items);
  console.log(session);

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType>,
    ClientSafeProvider
  > | null>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response: Record<
        LiteralUnion<BuiltInProviderType>,
        ClientSafeProvider
      > | null = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <div className="flex-between w-full p-3 h-28">
      <Link href="/" className="flex flex-center gap-2 pb-2">
        <Image
          src="/assets/images/logo.png"
          alt="Noliner logo"
          width={180}
          height={45}
          className="object-contain"
        />
      </Link>

      <form className="flex-1 pl-20 pr-20 h-10">
        <input
          className="w-full h-full"
          placeholder='Поиск в Каталоге. Например, как "выбрать телевизор"'
          type="text"
        />
      </form>

      <div className="flex gap-2 relative">
        {session?.user ? (
          <>
            <div className="flex">
              <Image
                src={
                  session?.user?.image
                    ? session.user.image
                    : "/assets/images/unknown_avatar.png"
                }
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full object-contain"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
              {toggleDropdown && (
                <div className="dropdown z-10">
                  <Link
                    href="/profile"
                    className="flex gap-2"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Профиль
                  </Link>
                  <CustomButton
                    title="Выход"
                    key={provider.name}
                    containerStyles="w-full bg-primary-blue text-white rounded-full hover:scale-110"
                    handleClick={() => signOut({ callbackUrl: "/" })}
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link href="/signin" className="hover:scale-110">
              <CustomButton
                title="Вход"
                containerStyles="bg-primary-blue text-white rounded-full"
              />
            </Link>
          </>
        )}
        <Link href="/cart" className="flex gap-2 ml-1 mr-1">
          <Image
            src="/assets/images/i-cart-black-stroke.svg"
            alt="Cart"
            width={40}
            height={40}
            className="object-contain hover:scale-110"
          />
          <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-primary-blue text-white text-center text-xs">
            {items.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Top;
