import type { Metadata } from "next";
import { ToastContainer, toast } from 'react-toastify';

import Navigation from "./Components/Menu/Navigation";

import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="bottom-center"
          closeButton={false}
          autoClose={1800}
          hideProgressBar
        />
        <div>
          <Navigation />
        </div>
        <main className="mx-auto mt-12 w-2/3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
