import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

const quickSand = Quicksand({
  variable: "--quick-sand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "iFome Next",
  description: "Tô com fome",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${quickSand.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
