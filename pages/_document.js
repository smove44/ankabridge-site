import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0b1220" />
        <meta name="description" content="AnkaBridge – Vermittlung qualifizierter Pflegekräfte für Kliniken & Pflegeeinrichtungen in Deutschland." />
        <meta property="og:title" content="AnkaBridge – Pflegekräfte schnell, geprüft, einsatzbereit" />
        <meta property="og:description" content="End-to-End Recruiting: Sprache, Anerkennung, Visa, Relocation. Zeitnahe Besetzung statt Personallücke." />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
