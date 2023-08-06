import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noliner shop",
  description: "Noliner main page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Provider>
          <Header />
          <main className="overflow-hidden bg-lime-50">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
