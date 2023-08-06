"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

type SessionProps = React.ComponentProps<typeof SessionProvider>;

type ProviderProps = {
  children: React.ReactNode;
  session: SessionProps["session"];
};

const Provider = ({ children, session }: ProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
