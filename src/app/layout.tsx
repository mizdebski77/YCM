import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Footer } from "./common/footer";
import { Navigation } from "./common/navigation";
import StoreProvider from "./core/store/storeProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    <StoreProvider>

      <html lang="en">
        <head>
          <link rel="icon" href="./common/Images/icon.svg" />
        </head>
        <body className={poppins.className}>
          <Navigation />
          {children}
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
          />
        </body>
      </html>
    </StoreProvider>
  );
}
