import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="/">AnkaBridge</a>
          <nav className="nav-links">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
            <a href="/kontakt">Kontakt</a>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className="footer">© {new Date().getFullYear()} AnkaBridge</footer>
    </div>
  );
}
