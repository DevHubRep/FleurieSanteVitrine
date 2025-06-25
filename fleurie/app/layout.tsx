import { Goudy_Bookletter_1911 } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const goudy = Goudy_Bookletter_1911({
  subsets: ['latin'],
  weight: ['400'], // Cette police n'a qu'un seul poids (normal)
  variable: '--font-goudy',
});

export const metadata: Metadata = {
  title: 'Mon super site',
  description: 'Description du site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${goudy.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
