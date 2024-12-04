import type { Metadata } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header";

const fontsPoppins = [
  {
    src: "./fonts/poppins-v21-latin-300.woff2",
    variable: "--font-poppins-300",
    weight: "300",
  },
  {
    src: "./fonts/poppins-v21-latin-regular.woff2",
    variable: "--font-poppins-400",
    weight: "400",
  },
  {
    src: "./fonts/poppins-v21-latin-500.woff2",
    variable: "--font-poppins-500",
    weight: "500",
  },
  {
    src: "./fonts/poppins-v21-latin-600.woff2",
    variable: "--font-poppins-600",
    weight: "600",
  },
  {
    src: "./fonts/poppins-v21-latin-900.woff2",
    variable: "--font-poppins-900",
    weight: "900",
  },
];

export const metadata: Metadata = {
  title: "Games Loop",
  description: "Os melhores games, com os melhores preços!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontsPoppins.map((font) => font.variable).join()}`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
