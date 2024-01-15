import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Castle Datastore",
  description: "日本の城の情報をまとめたサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
