import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        <h2>Currency-Swift</h2>
        <p>Your trusted currency conversion tool.</p>
      </span>
      <div className="links">
        <h2>Quick Links</h2>
        <ul>
          <li><Link href="#hero" className="downeffect">Home</Link></li>
          <li><Link href="#wrap1" className="downeffect">Converter</Link></li>
          <li><Link href="#features" className="downeffect">Features</Link></li>
          <li><Link href="#about" className="downeffect">About</Link></li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <p>Email: info@exchange-paisa.com</p>
        <p>Phone: +92 311-999-1973</p>
      </div>

    </footer>
  )
}

