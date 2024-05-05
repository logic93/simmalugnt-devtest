import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const simmalugnt_sans = localFont({
  src: [
    {
      path: "./assets/fonts/SimmaLugnt-Sans-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/SimmaLugnt-Sans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-simmalugnt",
});

export const metadata: Metadata = {
  title: "Simma Lugnt | Newsletter",
  description: "Newsletter",
  appleWebApp: {
    title: "SL Newsletter",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "var(--theme-color)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={simmalugnt_sans.variable}>
      <body>{children}</body>
    </html>
  );
}
