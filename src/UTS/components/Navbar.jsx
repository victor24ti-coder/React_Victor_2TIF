import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="sedap-topbar">
        <div className="sedap-topbar-container">
          <div className="sedap-topbar-left">
            <span>📞 +62 812-3456-7890</span>
            <span>✉️ hello@sedap.id</span>
            <span>🕐 Buka 07.00 – 22.00 WIB</span>
          </div>
          <div className="sedap-topbar-right">
            <a href="#">Lacak Pesanan</a>
            <a href="#">Bantuan</a>
          </div>
        </div>
      </div>

      <nav className={`sedap-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="sedap-navbar-container">
          <Link to="/guest" className="sedap-logo">
            Sedap<span className="sedap-logo-dot">.</span>
          </Link>

          <ul className="sedap-nav-menu">
            <li><Link to="/guest">Beranda</Link></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#products">Menu</a></li>
            <li><a href="#testimonials">Ulasan</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>

          <div className="sedap-nav-icons">
            <button className="sedap-nav-icon-btn" title="Cari Menu">🔍</button>
            <button className="sedap-nav-icon-btn" title="Wishlist">🤍</button>
            <button className="sedap-nav-icon-btn" title="Keranjang" style={{ position: "relative" }}>
              🛒
              <span className="sedap-nav-badge">3</span>
            </button>
            <div className="sedap-nav-divider"></div>
            <Link to="/login" className="sedap-btn-login">Masuk</Link>
            <Link to="/register" className="sedap-btn-register">Daftar</Link>
          </div>

          <button className="sedap-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>

        {menuOpen && (
          <div className="sedap-mobile-menu">
            <Link to="/guest" onClick={() => setMenuOpen(false)}>Beranda</Link>
            <a href="#about" onClick={() => setMenuOpen(false)}>Tentang</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Ulasan</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Kontak</a>
            <div className="sedap-mobile-auth">
              <Link to="/login" className="sedap-btn-login" onClick={() => setMenuOpen(false)}>Masuk</Link>
              <Link to="/register" className="sedap-btn-register" onClick={() => setMenuOpen(false)}>Daftar</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}