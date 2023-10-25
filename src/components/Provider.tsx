"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

type SessionProps = React.ComponentProps<typeof SessionProvider>;

type ProviderProps = {
  children: React.ReactNode;
  session: SessionProps["session"];
};

const Provider: React.FC<ProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
