const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section__title text-center reveal">Featured Projects</h2>
        <p className="section__subtitle text-center reveal">Production apps I've built and shipped</p>

        <div className="projects__grid">

          <article className="project-card project-card--featured reveal">
            <div className="project-card__top">
              <span className="project-card__badge">Featured</span>
              <a href="https://ichica.co" target="_blank" rel="noopener" className="project-card__link" aria-label="Visit ichica.co">
                <ExternalIcon />
              </a>
            </div>
            <h3 className="project-card__title">ichica.co</h3>
            <p className="project-card__desc">
              A high-traffic lottery-style web platform serving <strong>140,000+ users</strong> in Japan.
              Features complex draw mechanics, randomized selection logic, ticketing systems, and
              a full admin dashboard — all built to handle high concurrency and live production load.
            </p>
            <div className="project-card__metrics">
              <div className="metric"><span className="metric__val">140K+</span><span className="metric__label">Users</span></div>
              <div className="metric"><span className="metric__val">Japan</span><span className="metric__label">Market</span></div>
              <div className="metric"><span className="metric__val">Live</span><span className="metric__label">Status</span></div>
            </div>
            <ul className="project-card__stack">
              <li>Bubble.io</li><li>Node.js</li><li>Paidy</li><li>GMO-PG</li><li>Fincode</li>
            </ul>
          </article>

          <article className="project-card project-card--featured reveal">
            <div className="project-card__top">
              <span className="project-card__badge">Featured</span>
              <a href="https://sparkable.cc" target="_blank" rel="noopener" className="project-card__link" aria-label="Visit sparkable.cc">
                <ExternalIcon />
              </a>
            </div>
            <h3 className="project-card__title">sparkable.cc</h3>
            <p className="project-card__desc">
              A social content platform where users share ideas, post media, and engage with a growing
              community. Contributed to core feature development, workflow optimization, and database
              restructuring for improved scalability and performance.
            </p>
            <div className="project-card__metrics">
              <div className="metric"><span className="metric__val">Social</span><span className="metric__label">Platform</span></div>
              <div className="metric"><span className="metric__val">Global</span><span className="metric__label">Reach</span></div>
              <div className="metric"><span className="metric__val">Live</span><span className="metric__label">Status</span></div>
            </div>
            <ul className="project-card__stack">
              <li>Bubble.io</li><li>REST APIs</li><li>Media Workflows</li><li>Database Design</li>
            </ul>
          </article>

          <article className="project-card reveal">
            <h3 className="project-card__title">Client Apps — G-AIM Consulting</h3>
            <p className="project-card__desc">
              Delivered multiple end-to-end Bubble.io applications for international clients across
              industries. Designed scalable database architectures, automated complex business workflows,
              and extended platform capabilities with Node.js backend services.
            </p>
            <ul className="project-card__stack">
              <li>Bubble.io</li><li>Node.js</li><li>API Connector</li><li>Make</li><li>n8n</li>
            </ul>
          </article>

          <article className="project-card reveal">
            <h3 className="project-card__title">MVPs &amp; SaaS Platforms — Upwork</h3>
            <p className="project-card__desc">
              Built MVPs, SaaS platforms, dashboards, and internal tools for global clients.
              Integrated payment gateways (Stripe, Apple Pay, Google Pay), designed custom backend
              logic with Node.js and EJS, and maintained long-term client relationships.
            </p>
            <ul className="project-card__stack">
              <li>Bubble.io</li><li>Node.js</li><li>Stripe</li><li>EJS</li><li>REST APIs</li>
            </ul>
          </article>

        </div>
      </div>
    </section>
  )
}
