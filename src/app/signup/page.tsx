"use client";

import React from "react";
import { SignUpForm } from "@/components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex-center flex-col gap-2 w-1/5 border-2 m-auto pt-8 pb-8">
      <h1 className="text-left">Регистрация</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
