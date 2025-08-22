function Logo({ text }) {
  return (
    <div className="logo">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.9 }}>
        <circle cx="12" cy="12" r="10" stroke="#3b8cff" strokeWidth="2" />
        <path d="M7 13l3 3 7-7" stroke="#3b8cff" strokeWidth="2" fill="none" />
      </svg>
      <span>{text}</span>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="card">
      <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
      <div className="title">{title}</div>
      <div className="text">{children}</div>
    </div>
  );
}

function Step({ n, title, children }) {
  return (
    <li className="step">
      <div className="n">{n}</div>
      <div>
        <div className="t">{title}</div>
        <div className="d">{children}</div>
      </div>
    </li>
  );
}

function Pipe({ title, value, note }) {
  return (
    <div className="pipebox">
      <div className="a">{title}</div>
      <div className="b">{value}</div>
      <div className="c">{note}</div>
    </div>
  );
}

function Testi({ text, author }) {
  return (
    <div className="testi">
      <div style={{ fontStyle: "italic" }}>"{text}"</div>
      <div style={{ opacity: 0.8, marginTop: 10 }}>— {author}</div>
    </div>
  );
}

function QA({ q, a }) {
  return (
    <div className="item">
      <div className="q">{q}</div>
      <div className="a">{a}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="badge">#1 Fokus: Qualität & Geschwindigkeit</div>
          <h1 className="h1">Pflegekräfte aus der Türkei – <span className="accent">schnell, geprüft, einsatzbereit</span></h1>
          <p className="sub">
            Wir verbinden Kliniken & Pflegeeinrichtungen in Deutschland mit qualifizierten, deutschsprachigen Fachkräften.
            Voller Service: Rekrutierung, Sprachlevel, Anerkennung, Visa, Relocation.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/kontakt">Unverbindlich anfragen</a>
            <a className="btn btn-secondary" href="#prozess">Ablauf ansehen</a>
          </div>
          <div className="kpis">
            <div className="kpi"><span className="num">48–90 Tage</span><span className="label">Time‑to‑Hire</span></div>
            <div className="divider" />
            <div className="kpi"><span className="num">B2</span><span className="label">Deutsch‑Level (i. d. R.)</span></div>
            <div className="divider" />
            <div className="kpi"><span className="num">92%</span><span className="label">Retention 12 Monate</span></div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container">
          <div style={{ fontSize: 12, opacity: .7 }}>Vertraut von</div>
          <div className="trust-row">
            <Logo text="Kommunale Kliniken" />
            <Logo text="Private Klinikketten" />
            <Logo text="Reha & Pflege" />
            <Logo text="MVZ & Ambulanzen" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Warum AnkaBridge?</h2>
          <div className="grid-3">
            <Card icon="✅" title="Vorgeprüfte Kandidat:innen">Fachliche Eignung, Referenzen, Sprachstand und Motivation sind vorqualifiziert – Sie sehen nur passende Profile.</Card>
            <Card icon="🧭" title="End‑to‑End Service">Von der Ansprache bis zum ersten Arbeitstag: Anerkennung, Visa, Einreise, Wohnung, Integration.</Card>
            <Card icon="📈" title="Planbare Pipeline">Wöchentliche Kandidaten‑Drops, transparente Status‑Reports, klare Time‑to‑Hire‑Ziele.</Card>
          </div>
        </div>
      </section>

      <section id="prozess" className="section alt">
        <div className="container">
          <h2 className="h2">So läuft’s – in 6 Schritten</h2>
          <ol className="steps">
            <Step n={1} title="Anforderungsprofil">Qualifikationen, Stationen, Sprachlevel, Starttermin und Kontingent festlegen.</Step>
            <Step n={2} title="Sourcing & Vorqualifizierung">Zielgerichtete Ansprache, Pre‑Screening, Dokumente und Referenzen prüfen.</Step>
            <Step n={3} title="Interview & Matching">Videointerviews, Fach‑/Sprachcheck, Kultur‑Fit. Sie entscheiden.</Step>
            <Step n={4} title="Anerkennung & Visa">Unterlagen, Termine, Behördenprozesse – wir koordinieren Ende‑zu‑Ende.</Step>
            <Step n={5} title="Einreise & Relocation">Wohnraum, Anreise, Onboarding‑Plan. Reibungsloser Start statt Papierkrieg.</Step>
            <Step n={6} title="Onboarding & Bindung">Begleitung in den ersten 6–12 Monaten, Mentoring, Sprach‑Booster.</Step>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Compliance zuerst</h2>
          <div className="grid-3">
            <Card icon="⚖️" title="EU‑/Aufenthaltsrecht">Visa, §16d, Anerkennung – rechtskonform und dokumentiert.</Card>
            <Card icon="🤝" title="Ethical Recruiting">Keine Gebühren für Kandidat:innen. Transparente Prozesse.</Card>
            <Card icon="🔐" title="Datenschutz (DSGVO)">Sichere Datenflüsse, Einwilligungen, Auftragsverarbeitung.</Card>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="h2">Aktuelle Pipeline (Beispiel)</h2>
          <div className="pipe">
            <Pipe title="Pflegefachkräfte" value="37 verfügbar" note="B2/B1+, Station: Innere, Chirurgie, Geriatrie" />
            <Pipe title="Operationstechnische Assistenz" value="11 verfügbar" note="OP‑Erfahrung 2–6 Jahre" />
            <Pipe title="Anästhesietechnische Assistenz" value="8 verfügbar" note="Schichtbereit, Großstadt bevorzugt" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Was Partner sagen</h2>
          <div className="grid-3">
            <Testi text="In 7 Wochen drei VZ‑Stellen besetzt – ohne Qualitätseinbußen." author="Pflegedienstleitung, kommunale Klinik" />
            <Testi text="Anerkennung & Visa liefen geräuschlos. Starkes Projektmanagement." author="HR, private Klinikkette" />
            <Testi text="Kandidaten bleiben. Spürbar bessere Bindung durch Begleitung." author="Einrichtungsleitung, Pflegeheim" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="h2">Häufige Fragen</h2>
          <div className="faq">
            <QA q="Wie schnell können wir starten?" a="Erstes Abstimmungsgespräch innerhalb von 48h. Erste Profile typ. nach 1–2 Wochen." />
            <QA q="Welches Sprachniveau bringen Kandidat:innen mit?" a="In der Regel B1+/B2. Wir organisieren Sprach‑Boosting bis zur Berufsanerkennung." />
            <QA q="Wie sieht das Preismodell aus?" a="Transparente Success‑Fee pro Einstellung; keine Kandidatengebühren. Fixpreise für Visa/Relocation‑Pakete." />
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="h2">Fachkräfte sichern statt Betten sperren</h2>
          <p className="sub" style={{ margin: "0 auto 16px" }}>Teilen Sie uns Ihren Bedarf mit – wir liefern passende Profile mit klarem Zeitplan.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/kontakt">Jetzt Bedarf melden</a>
            <a className="btn btn-secondary" href="/impressum">Impressum</a>
          </div>
        </div>
      </section>
    </main>
  );
}
