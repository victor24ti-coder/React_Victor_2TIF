import { useState } from "react";
import products from "../data/products.json";

function formatRupiah(num) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);
}

const CATEGORIES = ["Semua", "Nasi & Lauk", "Mie & Sup", "Minuman"];

export default function Products() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [wishlist, setWishlist] = useState([]);
  const [addedToCart, setAddedToCart] = useState(null);

  const toggleWishlist = (id) =>
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

  const handleAddToCart = (id) => {
    setAddedToCart(id);
    setTimeout(() => setAddedToCart(null), 1500);
  };

  return (
    <section id="products" className="sedap-products">
      <div className="sedap-section-container">
        <div className="sedap-section-header reveal">
          <span className="sedap-section-label">Menu Pilihan</span>
          <h2 className="sedap-section-title">Produk Unggulan Kami</h2>
          <p className="sedap-section-subtitle">
            Pilihan menu terlezat yang paling banyak dipesan oleh pelanggan setia Sedap.
          </p>
        </div>

        <div className="sedap-category-tabs reveal">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`sedap-tab-btn${activeTab === cat ? " active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sedap-products-grid">
          {products.map((product) => (
            <div key={product.id} className="sedap-product-card reveal">
              <div className="sedap-product-img-wrapper">
                {product.badge && (
                  <span className={`sedap-badge ${
                    product.badge === "Terlaris" ? "sedap-badge-green" :
                    product.badge === "Favorit"  ? "sedap-badge-yellow" : "sedap-badge-blue"
                  }`}>{product.badge}</span>
                )}

                <div className="sedap-product-actions">
                  <button
                    className="sedap-product-action-btn"
                    onClick={() => toggleWishlist(product.id)}
                    style={wishlist.includes(product.id) ? { background: "#fee2e2", color: "#ef4444" } : {}}
                  >
                    {wishlist.includes(product.id) ? "❤️" : "🤍"}
                  </button>
                  <button className="sedap-product-action-btn" title="Lihat Detail">🔍</button>
                </div>

                <img src={product.image} alt={product.name} className="sedap-product-img" />

                <div className="sedap-product-overlay">
                  <button className="sedap-btn-order" onClick={() => handleAddToCart(product.id)}>
                    {addedToCart === product.id ? "✅ Ditambahkan!" : "🛒 Pesan"}
                  </button>
                </div>
              </div>

              <div className="sedap-product-info">
                <h3 className="sedap-product-name">{product.name}</h3>
                <div className="sedap-product-meta">
                  <p className="sedap-product-price">{formatRupiah(product.price)}</p>
                  <div className="sedap-product-rating">
                    <span className="star">★</span>
                    <span>4.{(product.id * 3 % 5) + 5}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sedap-products-cta reveal">
          <a href="#" className="sedap-btn-outline">Lihat Semua Menu →</a>
        </div>
      </div>
    </section>
  );
}