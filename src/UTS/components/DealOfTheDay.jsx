import { useState, useEffect } from "react";

function getTimeLeft() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 0);
  const diff = end - now;
  return {
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function DealOfTheDay() {
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="sedap-deal">
      <div className="sedap-section-container">
        <div className="sedap-deal-grid">
          <div>
            <p className="sedap-deal-label">⏰ Penawaran Hari Ini</p>
            <h2 className="sedap-deal-title">Promo Spesial<br />Habis Tengah Malam!</h2>
            <p className="sedap-deal-desc">
              Jangan lewatkan penawaran eksklusif ini. Dapatkan diskon hingga 40% untuk menu-menu terpilih kami.
            </p>
            <div className="sedap-countdown">
              {[{ num: "00", label: "Hari" }, { num: pad(time.hours), label: "Jam" }, { num: pad(time.minutes), label: "Menit" }, { num: pad(time.seconds), label: "Detik" }].map((item, i) => (
                <div key={i} className="sedap-countdown-item">
                  <span className="sedap-countdown-num">{item.num}</span>
                  <span className="sedap-countdown-label">{item.label}</span>
                </div>
              ))}
            </div>
            <a href="#products" className="sedap-btn-primary" style={{ display: "inline-flex" }}>
              🔥 Ambil Promo Sekarang
            </a>
          </div>

          <div>
            <div className="sedap-deal-product">
              <img
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=200&h=200&fit=crop"
                alt="Rendang"
                className="sedap-deal-product-img"
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: "inline-block", background: "rgba(0,176,116,0.15)", color: "#00B074", fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "100px", marginBottom: "8px" }}>
                  🔥 DEAL OF THE DAY
                </div>
                <p className="sedap-deal-product-name">Rendang Daging Sapi Premium</p>
                <p className="sedap-deal-product-price"><s>Rp 75.000</s><strong> Rp 55.000</strong></p>
                <div className="sedap-deal-progress-bar">
                  <div className="sedap-deal-progress-fill"></div>
                </div>
                <p className="sedap-deal-progress-label">65 dari 100 porsi terjual</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "16px" }}>
              {[
                { img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=100&h=100&fit=crop", name: "Nasi Goreng Spesial", orig: "Rp 45.000", disc: "Rp 35.000" },
                { img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=100&h=100&fit=crop", name: "Ayam Bakar Madu",    orig: "Rp 60.000", disc: "Rp 45.000" },
              ].map((p, i) => (
                <div key={i} className="sedap-deal-product" style={{ padding: "12px" }}>
                  <img src={p.img} alt={p.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: "600", color: "white", marginBottom: "4px" }}>{p.name}</p>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}><s>{p.orig}</s></p>
                    <p style={{ fontSize: "13px", color: "#00B074", fontWeight: "700" }}>{p.disc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}