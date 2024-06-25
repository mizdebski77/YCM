import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Footer } from "./features/footer";
import xd from './common/Images/icon.svg'
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "YCM - Your CV Creator",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
