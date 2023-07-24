import React from "react";
import Image from "next/image";
import Link from "next/link";

const Top = () => {
  const isUserLoggedIn = true;
  return (
    <div className="flex-center p-3 h-28">
      <Link href="/" className="gap-2 pb-2">
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

      <div className="flex-center gap-2">
        {isUserLoggedIn ? (
          <Link href="/profile" className="flex gap-2">
            <Image
              src="/assets/images/unknown_avatar.png"
              alt="Avatar"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>
        ) : (
          <Link href="/" className="flex gap-2">
            <button>Вход</button>
          </Link>
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
