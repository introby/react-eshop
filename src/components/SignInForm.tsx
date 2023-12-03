"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { signIn, SignInOptions, SignInResponse } from "next-auth/react";
import type { FormEventHandler } from "react";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignInForm: React.FC = () => {
  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setLoading(true);

    const options: SignInOptions = {
      email: user.email,
      password: user.password,
      redirect: false,
    };

    signIn("credentials", options)
      .then((res: SignInResponse | undefined) => {
        if (res && !res.error) {
          toast.success("Login successful");
          router.push(callbackUrl);
        } else if (res && res.error) {
          toast.error(res.error ? res.error : "Sign in failed");
        }
        setLoading(false);
      })
      .catch((e: ErrorEvent) => {
        toast.error(e.message);
        setLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border-2 border-gray-200 p-2"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="введите email"
          type="email"
          name="email"
          required
        />
        <input
          className="border-2 border-gray-200 p-2"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          placeholder="введите пароль"
          type="password"
          name="password"
          required
        />
        <button
          className={`custom-btn bg-primary-blue text-white rounded-full ${
            buttonDisabled || loading ? "opacity-25 cursor-not-allowed" : ""
          }`}
          type="submit"
        >
          <span className="flex-1">Войти</span>
        </button>
      </form>
      <Toaster />
    </>
  );
};

export { SignInForm };
