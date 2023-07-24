import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CPU | Noliner shop",
};

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 600,
    },
  });

  return response.json();
}

const Cpu = async () => {
  const posts = await getData();

  return (
    <>
      <h1>Процессоры</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/catalog/cpu/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cpu;
