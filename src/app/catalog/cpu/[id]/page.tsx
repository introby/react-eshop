import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 600,
      },
    },
  );

  return response.json();
}

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  const post = await getData(id);
  return {
    title: post.title,
  };
};

const CpuItem = async ({ params: { id } }: Props) => {
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <br />
      <p>{post.body}</p>
    </>
  );
};

export default CpuItem;
