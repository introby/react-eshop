import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tile } from "@/types";

export const metadata: Metadata = {
  title: "Catalog | Noliner shop",
};
const Catalog: React.FC = () => {
  const tiles: Tile[] = [
    {
      link: "/catalog/monitors",
      imgUrl: "/assets/images/catalog/1.webp",
      name: "Мониторы",
      description: "Для игр и работы",
    },
    {
      link: "/catalog/smartphones",
      imgUrl: "/assets/images/catalog/2.webp",
      name: "Смартфоны",
      description: "Удобный подбор по железу",
    },
    {
      link: "/catalog/notebooks",
      imgUrl: "/assets/images/catalog/3.webp",
      name: "Ноутбуки",
      description: "Поможем выбрать в онлайн-чате",
    },
    {
      link: "/catalog/earphone",
      imgUrl: "/assets/images/catalog/4.webp",
      name: "Наушники",
      description: "5000 моделей для любимой музыки",
    },
    {
      link: "/catalog/tv",
      imgUrl: "/assets/images/catalog/5.webp",
      name: "Телевизоры",
      description: "Удобное сравнение характеристик и цен",
    },
    {
      link: "/catalog/cl-vacuum-cleaners",
      imgUrl: "/assets/images/catalog/6.webp",
      name: "Беспроводные пылесосы",
      description: "Уборка на новом уровне удобства",
    },
    {
      link: "/catalog/motor-oils",
      imgUrl: "/assets/images/catalog/7.webp",
      name: "Моторные масла",
      description: "Сравните цены в Каталоге и сэкономьте на замене",
    },
    {
      link: "/catalog/washing-machines",
      imgUrl: "/assets/images/catalog/8.webp",
      name: "Стиральные машины",
      description: "Онлайн-помощь в выборе",
    },
  ];

  return (
    <div className="px-4 mx-auto max-w-screen-xl lg:px-6 mt-6">
      <div className="grid grid-cols-4 max-w-screen-xl mt-1">
        {tiles.map((tile) => (
          <div key={tile.name} className="tile-container">
            <Link href={tile.link} className="tile-link">
              <Image
                className="tile-img"
                src={tile.imgUrl}
                responsive
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
