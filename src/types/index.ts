import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  type?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

declare module "next-auth" {
  interface User {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    image: string;
    archive: string;
    role: string;
    bucket: string;
    authenticated: boolean;
    accessToken: string;
  }
  interface Session {
    user: User;
  }
}

export interface Tile {
  link: string;
  imgUrl: string;
  name: string;
  description: string;
}
