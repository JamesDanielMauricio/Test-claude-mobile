export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">

        <div className="about__visual reveal">
          <div className="about__avatar" aria-label="James Daniel Mauricio">JDM</div>
          <div className="about__status">
            <span className="status-dot" /> Available for new projects
          </div>
        </div>

        <div className="about__text reveal">
          <h2 className="section__title">About Me</h2>
          <p>
            I'm a Senior Bubble.io Developer based in the Philippines with over 5 years of experience
            turning complex business ideas into production-grade web applications. I specialize in
            building systems that scale — from internal ops tools to consumer platforms handling
            hundreds of thousands of concurrent users.
          </p>
          <p>
            My edge is bridging the gap between no-code speed and custom-code power. When Bubble.io
            hits its limits, I extend it with Node.js backend services, custom APIs, and advanced
            automation — delivering full-stack results without full-stack timelines.
          </p>
          <p>
            I've shipped for startups, agencies, and enterprise clients in Japan, Belgium, and across
            the globe — always with a focus on performance, clean database architecture, and reliability.
          </p>

          <ul className="about__details">
            <li><span className="about__label">Location</span> Philippines (GMT+8)</li>
            <li><span className="about__label">Email</span> jamesdanielmauricio@gmail.com</li>
            <li><span className="about__label">LinkedIn</span> linkedin.com/in/jamesdanielmauricio</li>
            <li><span className="about__label">Education</span> BS Industrial Engineering, Tarlac State University</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
