export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>Designed &amp; built by <strong>James Daniel Mauricio</strong></p>
        <p className="footer__copy">&copy; {new Date().getFullYear()} · Philippines (GMT+8)</p>
      </div>
    </footer>
  )
}
