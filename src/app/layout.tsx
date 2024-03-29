import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App Nick",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link
                href="/"
                // prefetch={false}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team/aboutteam">About team</Link>
            </li>
          </ul>
        </nav>
        <h1>Main Header</h1>
        {children}
      </body>
    </html>
  );
}
