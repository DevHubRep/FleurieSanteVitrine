import { Goudy_Bookletter_1911 } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

const goudy = Goudy_Bookletter_1911({
  subsets: ['latin'],
  weight: ['400'], // Cette police n'a qu'un seul poids (normal)
  variable: '--font-goudy',
});

export const metadata: Metadata = {
  title: 'Fleurie Sante',
  description: 'Site officiel de Fleurie Santé, votre partenaire pour des soins esthétiques et cosmétiques de qualité.',
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
