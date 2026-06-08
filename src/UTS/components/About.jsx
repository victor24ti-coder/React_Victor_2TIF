import { useEffect, useRef } from "react";

const keunggulan = [
  { icon: "🥗", title: "Bahan Segar Setiap Hari", desc: "Semua bahan dipilih langsung dari supplier terpercaya setiap pagi." },
  { icon: "👨‍🍳", title: "Chef Berpengalaman", desc: "Tim chef profesional kami berpengalaman lebih dari 10 tahun." },
  { icon: "🚀", title: "Pengiriman 30 Menit", desc: "Jaringan kurir kami memastikan makananmu tiba tepat waktu." },
  { icon: "💰", title: "Harga Terjangkau", desc: "Nikmati cita rasa restoran premium dengan harga ramah di kantong." },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="sedap-about" ref={ref}>
      <div className="sedap-section-container">
        <div className="sedap-about-grid">
          <div className="sedap-about-images reveal">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=700&fit=crop"
              alt="Tentang Sedap"
              className="sedap-about-img-main"
            />
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=280&fit=crop"
              alt="Dapur Sedap"
              className="sedap-about-img-accent"
            />
            <div className="sedap-about-badge">
              <span className="sedap-about-badge-num">10+</span>
              <span className="sedap-about-badge-label">Tahun Melayani</span>
            </div>
          </div>

          <div className="sedap-about-content">
            <span className="sedap-section-label reveal">Tentang Kami</span>
            <h2 className="sedap-section-title reveal">
              Passion Kami adalah<br />
              <span className="sedap-text-green">Memuaskan Selera Kamu</span>
            </h2>
            <p className="sedap-about-desc reveal">
              Sedap adalah platform pesan antar makanan yang lahir dari kecintaan terhadap kuliner
              Indonesia. Sejak 2015, kami telah menghubungkan pecinta kuliner dengan restoran-restoran
              terbaik di kota kamu.
            </p>
            <p className="sedap-about-desc reveal">
              Kami percaya bahwa makanan enak seharusnya bisa dinikmati siapa saja, di mana saja,
              kapan saja — tanpa harus keluar rumah atau mengorbankan kualitas.
            </p>

            <div className="sedap-keunggulan-grid">
              {keunggulan.map((item, i) => (
                <div key={i} className="sedap-keunggulan-item reveal">
                  <div className="sedap-keunggulan-icon">{item.icon}</div>
                  <div>
                    <h4 className="sedap-keunggulan-title">{item.title}</h4>
                    <p className="sedap-keunggulan-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "32px" }} className="reveal">
              <a href="#products" className="sedap-btn-primary" style={{ display: "inline-flex" }}>
                🍽️ Lihat Menu Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}