const CATEGORIES = [
  {
    icon: '⚙️',
    title: 'No-Code / Bubble.io',
    items: ['Advanced Workflow Design', 'Database Architecture', 'Performance Optimization', 'Custom Plugin Logic', 'Admin Dashboard Builds'],
  },
  {
    icon: '🔧',
    title: 'Backend & Frontend',
    items: ['Node.js', 'EJS Templating', 'HTML / CSS / JavaScript', 'REST API Design', 'Webhooks'],
  },
  {
    icon: '🔗',
    title: 'Integrations & APIs',
    items: ['Bubble.io API Connector', 'REST APIs & Webhooks', 'Make (Integromat)', 'n8n Automation', 'Third-party Services'],
  },
  {
    icon: '💳',
    title: 'Payments',
    items: ['Stripe', 'Apple Pay / Google Pay', 'Amazon Pay', 'Paidy / GMO-PG', 'Fincode'],
  },
]

const TAGS = [
  'Scalable Architecture', 'Workflow Optimization', 'Performance Tuning',
  'Complex Business Logic', 'Hybrid No-Code + Backend', 'Database Design',
  'API Integration', 'SaaS Platforms', 'MVP Development', 'Payment Systems',
]

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <h2 className="section__title text-center reveal">Skills</h2>
        <p className="section__subtitle text-center reveal">What I bring to every project</p>

        <div className="skills__grid reveal">
          {CATEGORIES.map(({ icon, title, items }) => (
            <div className="skill-category" key={title}>
              <div className="skill-category__icon">{icon}</div>
              <h3 className="skill-category__title">{title}</h3>
              <ul className="skill-category__list">
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills__tags reveal">
          {TAGS.map(tag => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </section>
  )
}
