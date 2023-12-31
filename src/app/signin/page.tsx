import React from "react";
import GoogleButton from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";
import Link from "next/link";

const SignIn = async () => {
  return (
    <div className="flex-center flex-col gap-2 w-1/5 border-2 m-auto pt-8 pb-8">
      <h1>Вход</h1>
      <div className="text-gray-400">через социальные сети</div>
      <GoogleButton />
      <div className="text-gray-400">или через email</div>
      <SignInForm />

      <Link href="/signup" className="underline">
        Зарегистрироваться
      </Link>
    </div>
  );
};

export default SignIn;
