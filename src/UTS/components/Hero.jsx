import { useState, useEffect } from "react";

const slides = [
  {
    badge: "🍽️ Pesan Sekarang, Nikmati Sekarang",
    title: (<>Cita Rasa Terbaik<br /><span className="sedap-hero-highlight">Diantar ke Pintumu</span></>),
    subtitle: "Sedap menghadirkan pengalaman kuliner restoran langsung ke rumahmu. Ratusan menu lezat dari bahan segar pilihan.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
    floatIcon: "⚡", floatTitle: "Pengiriman Kilat", floatSub: "Tiba dalam 30 menit",
    blobColor: "#e6f9f2",
  },
  {
    badge: "🔥 Menu Baru Setiap Minggu",
    title: (<>Temukan Menu<br /><span className="sedap-hero-highlight">Favorit Barumu</span></>),
    subtitle: "Lebih dari 200 menu autentik dari restoran-restoran terbaik di kotamu. Selalu ada yang baru untuk dicoba.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=600&fit=crop",
    floatIcon: "🌟", floatTitle: "Menu Terpilih", floatSub: "Chef's Recommendation",
    blobColor: "#fff7e6",
  },
  {
    badge: "💸 Harga Terjangkau",
    title: (<>Makan Enak<br /><span className="sedap-hero-highlight">Tanpa Bikin Kantong Kempes</span></>),
    subtitle: "Nikmati cita rasa restoran premium dengan harga yang ramah di kantong. Promo setiap hari untuk semua kalangan.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop",
    floatIcon: "🎁", floatTitle: "Promo Hari Ini", floatSub: "Diskon hingga 40%",
    blobColor: "#f0e6ff",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <div className="sedap-slider-wrapper">
      {/* Promo Strip */}
      <div className="sedap-promo-strip">
        <div className="sedap-promo-track">
          {[...Array(2)].flatMap((_, ri) =>
            [
              { icon: "🚀", text: "Gratis Ongkir Pesanan Pertama" },
              { icon: "🎉", text: "Promo Spesial Setiap Hari" },
              { icon: "🔥", text: "Menu Baru Setiap Minggu" },
              { icon: "⭐", text: "Rating 4.9 dari 50.000+ Pelanggan" },
              { icon: "💳", text: "Bayar Pakai GoPay, OVO, Dana" },
            ].map((item, i) => (
              <div key={`${ri}-${i}`} className="sedap-promo-item">
                <span>{item.icon}</span>
                <span>{item.text}</span>
                <span style={{ opacity: 0.4 }}>•</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Slider */}
      <div className="sedap-slider-inner" style={{ position: "relative" }}>
        <div
          className="sedap-hero-slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="sedap-hero-slide" style={{ position: "relative" }}>
              <div className="sedap-hero-slide-bg">
                <div className="sedap-hero-slide-bg-circle" style={{ background: s.blobColor }}></div>
              </div>

              <div className="sedap-hero-content">
                <span className="sedap-hero-badge">{s.badge}</span>
                <h1 className="sedap-hero-title">{s.title}</h1>
                <p className="sedap-hero-subtitle">{s.subtitle}</p>
                <div className="sedap-hero-actions">
                  <a href="#products" className="sedap-btn-primary">🛒 Pesan Sekarang</a>
                  <a href="#about" className="sedap-btn-ghost">Pelajari Lebih</a>
                </div>
                <div className="sedap-hero-stats">
                  <div className="sedap-stat">
                    <span className="sedap-stat-num">200+</span>
                    <span className="sedap-stat-label">Menu Pilihan</span>
                  </div>
                  <div className="sedap-stat-divider"></div>
                  <div className="sedap-stat">
                    <span className="sedap-stat-num">50K+</span>
                    <span className="sedap-stat-label">Pesanan</span>
                  </div>
                  <div className="sedap-stat-divider"></div>
                  <div className="sedap-stat">
                    <span className="sedap-stat-num">4.9★</span>
                    <span className="sedap-stat-label">Rating</span>
                  </div>
                </div>
              </div>

              <div className="sedap-hero-image-wrapper">
                <div className="sedap-hero-blob" style={{ background: s.blobColor }}></div>
                <img src={s.image} alt="Makanan Lezat Sedap" className="sedap-hero-image" />
                <div className="sedap-hero-float-card">
                  <span className="sedap-float-icon">{s.floatIcon}</span>
                  <div>
                    <p className="sedap-float-title">{s.floatTitle}</p>
                    <p className="sedap-float-sub">{s.floatSub}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="sedap-slider-btn sedap-slider-btn-prev" onClick={prev}>‹</button>
        <button className="sedap-slider-btn sedap-slider-btn-next" onClick={next}>›</button>

        <div className="sedap-slider-dots">
          {slides.map((_, i) => (
            <button key={i} className={`sedap-slider-dot${i === current ? " active" : ""}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </div>
  );
}