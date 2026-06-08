import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Order";
import Customers from "./pages/Customers";
const Guest = lazy(() => import("./UTS/pages/Guest"));
import DashboardP5 from "./pertemuan-5/pages/Dashboard";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import "./assets/tailwind.css";
import Notes from "./pages/Notes";

function App() {
  const location = useLocation();

  // Semua path yang TIDAK pakai layout Sidebar/Header
  const noLayoutPaths = ["/guest", "/p5", "/p5/dashboard"];
  const isNoLayout = noLayoutPaths.some((p) => location.pathname.startsWith(p));

  return (
    <div
      id="app-container"
      className="bg-gray-100 min-h-screen w-full overflow-x-hidden"
    >
      {isNoLayout ? (
        // Tampilan Tanpa Layout (Guest / P5)
        <main className="w-full min-h-screen">
          <Suspense fallback={<div className="p-6">Loading...</div>}>
            <Routes>
              <Route path="/guest" element={<Guest />} />
              <Route path="/p5/dashboard" element={<DashboardP5 />} />
            </Routes>
          </Suspense>
        </main>
      ) : (
        // Tampilan Dengan Layout Utama (Dashboard, Orders, Customers)
        <div id="layout-wrapper" className="flex min-h-screen w-full">
          {/* Pastikan Sidebar memiliki lebar statis, misal: w-64 */}
          <Sidebar />

          {/* Main Content Area */}
          <div id="main-content" className="flex-1 flex flex-col min-w-0">
            <Header />
            {/* Area Konten Halaman */}
            <main className="flex-1 p-6 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/product" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/notes" element={<Notes />} />
                
              </Routes>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
