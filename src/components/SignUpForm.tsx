"use client";

import { useRouter } from "next/navigation";
import type { FormEventHandler } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SignUpForm: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const url = process.env.NEXT_PUBLIC_SERVER_URL + "/auth/register";
      const res = await axios.post(url, user);
      if (res) {
        router.push("/signin");
      }
    } catch (e) {
      toast.error(e.message);
      console.log("Signup failed", e.message);
    } finally {
      setLoading(false);
    }
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
          <span className="flex-1">Зарегистрироваться</span>
        </button>
      </form>
      <Toaster />
    </>
  );
};

export { SignUpForm };
