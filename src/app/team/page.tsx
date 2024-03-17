import type { Metadata } from "next";


export async function generateMetadata({ params }): Promise<Metadata> {
  return { title: "users name" };
}

export default function Team() {
  return <h1>Team</h1>;
}
