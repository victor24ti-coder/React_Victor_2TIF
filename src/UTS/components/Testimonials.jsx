import { useState } from "react";
import testimonials from "../data/testimonials.json";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const maxIndex = testimonials.length - visible;

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  return (
    <section id="testimonials" className="sedap-testimonials">
      <div className="sedap-section-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
          <div>
            <span className="sedap-section-label">Ulasan Pelanggan</span>
            <h2 className="sedap-section-title" style={{ marginBottom: 0 }}>Apa Kata Mereka?</h2>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={prev} disabled={current === 0}
              style={{ width: "44px", height: "44px", borderRadius: "50%", background: current === 0 ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.12)", color: "white", fontSize: "18px", cursor: current === 0 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: current === 0 ? 0.4 : 1 }}>‹</button>
            <button onClick={next} disabled={current >= maxIndex}
              style={{ width: "44px", height: "44px", borderRadius: "50%", background: current >= maxIndex ? "rgba(255,255,255,0.06)" : "#00B074", border: "none", color: "white", fontSize: "18px", cursor: current >= maxIndex ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: current >= maxIndex ? 0.4 : 1 }}>›</button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px", marginBottom: "40px" }}>
          {[{ num: "50K+", label: "Pelanggan Puas" }, { num: "4.9", label: "Rata-rata Rating" }, { num: "98%", label: "Pesan Lagi" }].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: "700", color: "#00B074" }}>{s.num}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="sedap-testimonials-slider">
          <div className="sedap-testimonials-track"
            style={{ transform: `translateX(calc(-${current} * (33.33% + 7px)))` }}>
            {testimonials.map((t) => (
              <div key={t.id} className="sedap-testimonial-card">
                <div className="sedap-testimonial-quote">"</div>
                <div className="sedap-testimonial-stars">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
                <p className="sedap-testimonial-review">{t.review}</p>
                <div className="sedap-testimonial-author">
                  <img
                    src={t.avatar} alt={t.name} className="sedap-testimonial-avatar"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=00B074&color=fff`; }}
                  />
                  <div>
                    <p className="sedap-testimonial-name">{t.name}</p>
                    <p className="sedap-testimonial-verified">✅ Pelanggan Terverifikasi</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sedap-testimonials-nav">
          {testimonials.map((_, i) => (
            <button key={i} className={i === current ? "active" : ""} onClick={() => setCurrent(Math.min(i, maxIndex))} />
          ))}
        </div>
      </div>
    </section>
  );
}