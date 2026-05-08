import type { Metadata } from "next";
import { Syne, Fira_Code } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bernard S. Gudyanga — Developer",
  description:
    "CS Developer & Builder based in Zimbabwe. Student at NUST Zimbabwe, building software that genuinely helps people.",
  keywords: ["developer", "Zimbabwe", "NUST", "Flutter", "Next.js", "portfolio"],
  authors: [{ name: "Bernard S. Gudyanga" }],
  openGraph: {
    title: "Bernard S. Gudyanga — Developer",
    description:
      "CS Developer & Builder based in Zimbabwe. Student at NUST Zimbabwe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
