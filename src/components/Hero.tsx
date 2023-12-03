import React from "react";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find, order, use —quick and super easy!</h1>

        <p className="hero__subtitle">Streamline your PC buying experience.</p>

        <Link href="/catalog" className="hover:scale-110">
          <CustomButton
            title="Explore PCs"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
          />
        </Link>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/assets/images/pc.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
