export default function Footer() {
  const partners = [
    { name: "GrabFood",   logo: "https://themesindustry.com/html/eren/images/logo1.png" },
    { name: "GoFood",     logo: "https://themesindustry.com/html/eren/images/logo2.png" },
    { name: "ShopeeFood", logo: "https://themesindustry.com/html/eren/images/logo3.png" },
    { name: "OVO",        logo: "https://themesindustry.com/html/eren/images/logo4.png" },
    { name: "GoPay",      logo: "https://themesindustry.com/html/eren/images/logo5.png" },
  ];

  return (
    <footer id="contact" className="sedap-footer">
      <div className="sedap-footer-partners">
        <div className="sedap-section-container">
          <p className="sedap-partners-title">Partner & Metode Pembayaran</p>
          <div className="sedap-partners-row">
            {partners.map((p, i) => (
              <img key={i} src={p.logo} alt={p.name} className="sedap-partner-logo" />
            ))}
          </div>
        </div>
      </div>

      <div className="sedap-footer-main">
        <div className="sedap-section-container">
          <div className="sedap-footer-grid">
            <div className="sedap-footer-brand">
              <div className="sedap-footer-logo">Sedap<span className="sedap-logo-dot">.</span></div>
              <p className="sedap-footer-tagline">
                Menghadirkan cita rasa terbaik restoran langsung ke pintumu.
                Pesan mudah, makanan lezat, pengiriman cepat.
              </p>
              <div className="sedap-social-links">
                <a href="#" className="sedap-social-btn" aria-label="Instagram">📷</a>
                <a href="#" className="sedap-social-btn" aria-label="Facebook">📘</a>
                <a href="#" className="sedap-social-btn" aria-label="Twitter">🐦</a>
                <a href="#" className="sedap-social-btn" aria-label="TikTok">🎵</a>
              </div>
            </div>

            <div className="sedap-footer-col">
              <h4 className="sedap-footer-col-title">Navigasi</h4>
              <ul className="sedap-footer-links">
                <li><a href="#">Beranda</a></li>
                <li><a href="#about">Tentang Kami</a></li>
                <li><a href="#products">Menu</a></li>
                <li><a href="#testimonials">Ulasan</a></li>
              </ul>
            </div>

            <div className="sedap-footer-col">
              <h4 className="sedap-footer-col-title">Kategori Menu</h4>
              <ul className="sedap-footer-links">
                <li><a href="#">Nasi & Lauk</a></li>
                <li><a href="#">Mie & Pasta</a></li>
                <li><a href="#">Sup & Soto</a></li>
                <li><a href="#">Minuman & Dessert</a></li>
              </ul>
            </div>

            <div className="sedap-footer-col">
              <h4 className="sedap-footer-col-title">Kontak Kami</h4>
              <ul className="sedap-footer-contact">
                <li>
                  <div className="sedap-footer-contact-icon">📍</div>
                  <span>Jl. Sudirman No. 88, Pekanbaru, Riau</span>
                </li>
                <li>
                  <div className="sedap-footer-contact-icon">📞</div>
                  <span>+62 812-3456-7890</span>
                </li>
                <li>
                  <div className="sedap-footer-contact-icon">✉️</div>
                  <span>hello@sedap.id</span>
                </li>
                <li>
                  <div className="sedap-footer-contact-icon">🕐</div>
                  <span>Setiap Hari, 07.00 – 22.00 WIB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sedap-footer-bottom">
        <div className="sedap-section-container">
          <p>© 2025 Sedap Restaurant. Hak Cipta Dilindungi.</p>
          <div className="sedap-footer-bottom-links">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}