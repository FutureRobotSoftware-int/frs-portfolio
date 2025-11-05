export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>We build clear, fast, reliable software.</h1>
        <p>
          Future Robot Software is a development studio focused on{" "}
          <strong>AI/LLM evaluation</strong>,{" "}
          <strong>analytics platforms</strong>, and{" "}
          <strong>game tech pipelines</strong>. We turn complex ideas into
          production-ready software.
        </p>
        <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
          <a className="btn" href="/projects">
            See Projects
          </a>
          <a className="btn outline" href="/contact">
            Get in touch
          </a>
        </div>
      </section>

      <hr className="hr" />

      <section>
        <h2 style={{ margin: "0 0 .75rem", fontFamily: "var(--font-title)" }}>
          Focus Areas
        </h2>
        <div className="grid cols-2">
          <div className="card" style={{ padding: "1rem" }}>
            <h3>AI / LLM Evaluation</h3>
            <p style={{ opacity: 0.8 }}>
              Benchmarking, prompt orchestration, analytics scoring, and secure
              deployments.
            </p>
          </div>
          <div className="card" style={{ padding: "1rem" }}>
            <h3>Analytics, Dashboards</h3>
            <p style={{ opacity: 0.8 }}>
              Web analytics for decision-making: data models, filters, synced
              media, charts.
            </p>
          </div>
          <div className="card" style={{ padding: "1rem" }}>
            <h3>Unity Pipelines</h3>
            <p style={{ opacity: 0.8 }}>
              Reusable frameworks, editor tooling, and content workflows.
            </p>
          </div>
          <div className="card" style={{ padding: "1rem" }}>
            <h3>Infra & Delivery</h3>
            <p style={{ opacity: 0.8 }}>
              AWS/Netlify, HTTPS, reverse proxies, monitoring, automation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
