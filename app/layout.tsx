import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

const als = Inter({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Letícia Jardim",
  description: "Fenomenologia sempre presente!",
  icons: "/Marca d'água - Leticia Jardim-25.png",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={cn("h-screen bg-background antialiased", als.className)}>
        {children}
      </body>
    </html>
  );
}
