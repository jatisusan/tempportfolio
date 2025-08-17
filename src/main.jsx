import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./sections/Services.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Blog from "./sections/Blog.jsx";
import Contact from "./sections/Contact.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
