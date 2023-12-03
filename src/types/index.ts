import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  type?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
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

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image: string;
  aud: string;
  given_name: string;
  family_name: string;
}
