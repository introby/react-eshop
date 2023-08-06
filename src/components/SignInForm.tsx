"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import React from "react";

const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        className="border-2 border-gray-200"
        type="email"
        name="email"
        required
      />
      <input
        className="border-2 border-gray-200"
        type="password"
        name="password"
        required
      />
      <button
        className="custom-btn bg-primary-blue text-white rounded-full"
        type="submit"
      >
        <span className={`flex-1`}>Войти</span>
      </button>
    </form>
  );
};

export { SignInForm };
