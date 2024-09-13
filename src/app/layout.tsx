import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });
const monsterrat = Montserrat({
  subsets: ["cyrillic", "latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Navneet.dev",
  description: "hey I am Navneet , Welcome to my portfolio,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="icon"
          type="image/gif"
          href="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnR3dzQza2gweXFsZTV1eDhreHJ4cTN3bm80Z2I4N3ZodTI1MHltYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.webp"
        /> */}
        <link rel="icon" type="image/png" href="/favicon-modified.png" />
      </head>
      <body className={monsterrat.className + " bg-black text-white "}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
