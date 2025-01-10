"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Posts() {
  const { data, error, isLoading } = useSWR(
    "https://api.escuelajs.co/api/v1/products",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
