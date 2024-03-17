import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About header',
  description: "Desc from about",
  // openGraph: {
  //   type: "profile",
  //   lastName: "Arya",
  //   firstName: "Vick"
  // }
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>About header</h1>
      {children}
    </>
  );
}
