
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";

import ServicePage from "./pages/ServicePage";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}

function NotFound() {
  return (
    <main className="not-found section-padding">
      <p className="section-label">404 — PAGE NOT FOUND</p>
      <h1>Looks like you're lost.</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" className="btn-primary">
        Back to home
      </a>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/services/website-development"
          element={<ServicePage serviceKey="website" />}
        />

        <Route
          path="/services/web-applications"
          element={<ServicePage serviceKey="applications" />}
        />

        <Route
          path="/services/website-redesign"
          element={<ServicePage serviceKey="redesign" />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
