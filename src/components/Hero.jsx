export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__content">
        <p className="hero__greeting fade-in">👋 Hi, I'm</p>
        <h1 className="hero__name fade-in delay-1">
          James Daniel<br />Mauricio<span className="accent">.</span>
        </h1>
        <h2 className="hero__title fade-in delay-2">
          Senior Bubble.io Developer
          <span className="hero__title-sub">&amp; Hybrid Backend Engineer</span>
        </h2>
        <p className="hero__intro fade-in delay-3">
          I build scalable, production-ready web applications using Bubble.io and custom backend
          solutions — serving over <strong>140,000 users</strong> across Japan, Belgium, and beyond.
        </p>
        <div className="hero__cta fade-in delay-4">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--outline">Hire Me</a>
        </div>
        <div className="hero__badges fade-in delay-5">
          <div className="badge">
            <span className="badge__num">5+</span>
            <span className="badge__label">Years Experience</span>
          </div>
          <div className="badge">
            <span className="badge__num">140K+</span>
            <span className="badge__label">Users Served</span>
          </div>
          <div className="badge">
            <span className="badge__num">GMT+8</span>
            <span className="badge__label">Philippines</span>
          </div>
        </div>
      </div>
      <div className="hero__blob" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
    </section>
  )
}
