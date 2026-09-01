import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Atelier Print Archive Seller Tools",
    template: "%s | Atelier Print Archive",
  },
  description:
    "Public information and policies for the private Etsy seller application used by Atelier Print Archive.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
