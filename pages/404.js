export default function NotFound() {
  return (
    <main className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="h2" style={{ fontSize: 34 }}>Seite nicht gefunden</h1>
        <p style={{ opacity: .85, marginBottom: 20 }}>Die angeforderte Seite existiert nicht (404).</p>
        <a className="btn btn-secondary" href="/">Zur Startseite</a>
      </div>
    </main>
  );
}
