export default function Kontakt() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2" style={{ fontSize: 34 }}>Kontakt</h1>
        <p>Schreiben Sie uns Ihr Anliegen – wir melden uns schnell zurück.</p>

        <form action="mailto:hello@ankabridge.de" method="GET" style={{ marginTop: 16 }}>
          <div style={{ display: "grid", gap: 12 }}>
            <input name="subject" placeholder="Betreff" required
                  style={{ padding: 12, borderRadius: 10, border: "1px solid #3b4657", background: "transparent", color: "inherit" }}/>
            <textarea name="body" rows="6" placeholder="Nachricht"
                      style={{ padding: 12, borderRadius: 10, border: "1px solid #3b4657", background: "transparent", color: "inherit" }}/>
            <button type="submit" className="btn btn-secondary">E‑Mail öffnen</button>
          </div>
        </form>

        <p style={{ opacity: .8, marginTop: 16 }}>
          Alternativ: <a href="mailto:hello@ankabridge.de">hello@ankabridge.de</a>
        </p>
      </div>
    </main>
  );
}
