"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import provider from "@/components/Provider";
import CustomButton from "@/components/CustomButton";

const Top = () => {
  const { data: session } = useSession();

  console.log(session);

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response: any = await getProviders();

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
                    containerStyles="w-full bg-primary-blue text-white rounded-full"
                    handleClick={() => signOut({ callbackUrl: "/" })}
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link href="/signin">
              <CustomButton
                title="Вход"
                containerStyles="bg-primary-blue text-white rounded-full"
              />
            </Link>
          </>
        )}
        <Link href="/cart" className="flex gap-2">
          <Image
            src="/assets/images/i-cart-black-stroke.svg"
            alt="Cart"
            width={22}
            height={19}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default Top;
