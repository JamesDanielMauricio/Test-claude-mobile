const JOBS = [
  {
    role: 'Bubble.io Developer',
    company: 'Sparkable',
    type: 'Volunteer',
    date: 'Oct 2025 – Present',
    bullets: [
      'Contributing to sparkable.cc — a social content platform for sharing posts, media, and ideas',
      'Improved workflow efficiency and restructured the database to enhance system performance',
      'Collaborating with cross-functional teams on feature development and platform stability',
    ],
  },
  {
    role: 'Bubble.io Developer',
    company: 'Seleby Inc., Japan',
    type: 'Full-Time',
    date: 'Jan 2024 – Jan 2026',
    bullets: [
      <>Built and maintained ichica.co — a lottery-style platform scaled to <strong>140,000+ users</strong></>,
      'Engineered complex draw mechanics, randomized selection logic, and a full ticketing system',
      'Integrated secure payment systems (Paidy, GMO-PG, Fincode) with reliable transaction handling',
      'Built admin dashboards for managing draws, users, and live platform configuration',
      'Optimized workflows for high concurrency, improving performance and system stability in production',
    ],
  },
  {
    role: 'Bubble.io Developer',
    company: 'G-AIM Consulting, Belgium',
    type: 'Freelance',
    date: 'Sep 2023 – Present',
    bullets: [
      'Developing and maintaining Bubble.io applications for international clients across multiple industries',
      'Designing scalable database architectures and implementing complex business workflows',
      'Extending platform capabilities with custom Node.js backend services when needed',
      'Delivering end-to-end solutions from concept to deployment with a focus on performance',
    ],
  },
  {
    role: 'Bubble.io Developer',
    company: '247 Back Office Professionals',
    type: 'Full-Time',
    date: 'Feb 2021 – Dec 2022',
    bullets: [
      'Developed and maintained internal systems relied on by daily operations teams',
      'Designed efficient data models and enforced privacy rules across the platform',
      'Improved application performance through workflow and database optimization',
    ],
  },
  {
    role: 'Bubble.io Developer',
    company: 'Upwork',
    type: 'Freelance',
    date: 'Jan 2021 – Present',
    bullets: [
      'Delivering end-to-end Bubble.io and hybrid (no-code + Node.js) solutions for global clients',
      'Built MVPs, SaaS dashboards, internal tools, and payment-integrated platforms',
      'Developed custom backend logic with Node.js and EJS for advanced use cases beyond Bubble.io',
      'Maintained long-term client relationships through consistent delivery and quality',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <h2 className="section__title text-center reveal">Experience</h2>
        <p className="section__subtitle text-center reveal">5+ years building production applications</p>

        <div className="timeline">
          {JOBS.map(({ role, company, type, date, bullets }) => (
            <div className="timeline__item reveal" key={company + date}>
              <div className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{role}</h3>
                    <p className="timeline__company">
                      {company} <span className="timeline__type">{type}</span>
                    </p>
                  </div>
                  <span className="timeline__date">{date}</span>
                </div>
                <ul className="timeline__list">
                  {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
