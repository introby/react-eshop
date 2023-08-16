"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import { useSession } from "next-auth/react";

export const metadata: Metadata = {
  title: "Барахолка | Noliner shop",
};

const Baraholka = () => {
  const { data: session } = useSession();
  const [hello, setHello] = useState("");
  const fetchGet = async () => {
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
      <button type="button" onClick={fetchGet}>
        Get Hello
      </button>
      {hello}
    </div>
  );
};

export default Baraholka;
