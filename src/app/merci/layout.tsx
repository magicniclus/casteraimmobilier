/* eslint-disable @next/next/no-page-custom-font */
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Poppins, Updock } from "next/font/google";
import "./globals.css";

// Configuration de la police Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"], // Poids disponibles pour Poppins
  style: ["normal", "italic"],
});

// Configuration de la police Updock
const updock = Updock({
  subsets: ["latin"],
  weight: "400", // Poids disponible pour Updock
});

export const metadata: Metadata = {
  title:
    "Agence Castera, agence immobilière à Bordeaux et sur le bassin d'Arcachon",
  description: "Merci",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM = process.env.NEXT_PUBLIC_GTM_ID ?? "";

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16741644311"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16741644311');
            `,
          }}
        />
      </head>
      <body className={`${poppins.className}`}>
        {children}
        <GoogleTagManager gtmId={GTM} />
        {/* Event snippet for Envoi de formulaire pour prospects conversion */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-16741644311/GqIkCN2X9d0ZEJfwhK8-'
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
