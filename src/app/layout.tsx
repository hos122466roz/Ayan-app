import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/common/footer/Footer";
import AccountModal from "./components/modals/AccountModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import AddMenuModal from "./components/modals/AddMenuModal";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayan  ",
  description: "کباب و جوجه زغالی اعیان در اصفهان",
  icons: {
    icon: "./image/logo/IMG_20250224_014354_555-removebg-preview.ico", // /public path
  },
};
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cuurentUser=await getCurrentUser()
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header currentUser={cuurentUser} />
        <AccountModal />
        <ToasterProvider />
        <AddMenuModal/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
