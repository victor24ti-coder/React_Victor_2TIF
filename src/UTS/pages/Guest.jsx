import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import DealOfTheDay from "../components/DealOfTheDay";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import "../guest.css";

export default function Guest() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sedap-guest">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <DealOfTheDay />
      <Testimonials />
      <Footer />
    </div>
  );
}