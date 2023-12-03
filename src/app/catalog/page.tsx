import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { tiles } from "@/HardcodedElements";

export const metadata: Metadata = {
  title: "Catalog | Noliner shop",
};
const Catalog: React.FC = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl lg:px-6 mt-6">
      <div className="grid grid-cols-4 max-w-screen-xl mt-1">
        {tiles.map((tile) => (
          <div key={tile.name} className="tile-container">
            <Link href={tile.link} className="tile-link">
              <Image
                className="tile-img"
                src={tile.imgUrl}
                width={500}
                height={500}
                alt="Картинка"
              />
              <p className="tile-name">{tile.name}</p>
              <p className="tile-description">{tile.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
