import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExperiencePage from "./pages/ExperiencePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header className="header"></Header>
        <main className="rutas">
          <Routes>
            <Route className="landing" path="/" element={<LandingPage></LandingPage>} />
            <Route className="landing" path="*" element={<LandingPage />} /> {/* cualquier ruta desconocida me manda a la landingpage */}

            <Route path="/experience" element={<ExperiencePage></ExperiencePage>} />
            <Route path="/portfolio" element={<PortfolioPage></PortfolioPage>} />
            <Route path="/contact" element={<ContactPage></ContactPage>} />


          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

