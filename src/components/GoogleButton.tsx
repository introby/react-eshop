"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import CustomButton from "@/components/CustomButton";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <CustomButton
      title="Войти с Google"
      handleClick={() => signIn("google", { callbackUrl: callbackUrl })}
      containerStyles="bg-primary-blue text-white rounded-full"
    />
  );
};

export default GoogleButton;
