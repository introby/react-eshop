"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import { useSession } from "next-auth/react";

const Baraholka: React.FC = () => {
  const { data: session } = useSession();
  const [hello, setHello] = useState("");
  const getAuthorizedResponse = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });
    const response = await res.text();
    setHello(response);
  };
  return (
    <div>
      <button
        type="button"
        onClick={getAuthorizedResponse}
        className="border border-solid border-slate-700"
      >
        Get data with token only -
      </button>
      {hello}
    </div>
  );
};

export default Baraholka;
