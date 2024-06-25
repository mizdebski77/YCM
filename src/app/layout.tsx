import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Footer } from "./common/footer";
import { Navigation } from "./common/navigation";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Your CV Maker",
  description: "Create perfect CV with our AI CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./common/Images/icon.svg" />
      </head>
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
