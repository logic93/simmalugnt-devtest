import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import type { Viewport } from "next";

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
    title: "SM Newsletter",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#090A0B",
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
