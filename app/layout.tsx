import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.kronex.cl"),
  title: {
    default: "Kronex | Soluciones Digitales para Empresas",
    template: "%s | Kronex",
  },
  description:
    "Kronex desarrolla soluciones digitales, herramientas financieras y sistemas para ordenar, automatizar y hacer crecer empresas en Chile.",
  openGraph: {
    title: "Kronex | Soluciones Digitales para Empresas",
    description:
      "Automatiza procesos, mejora la gestión y usa herramientas digitales para hacer crecer tu empresa.",
    url: "https://www.kronex.cl",
    siteName: "Kronex",
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "https://www.kronex.cl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
