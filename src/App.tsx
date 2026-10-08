import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { experience } from "./data";

function App() {
  return (
    <div id="page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <section className="section-shell experience-section section-light">
          <div className="section-heading compact-heading">
            <Reveal><p className="eyebrow">05 — Contexto</p></Reveal>
            <Reveal delayMs={60}><h2>Onde tenho feito este trabalho.</h2></Reveal>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal key={item.company} delayMs={index * 40}>
                <div className="experience-row"><strong>{item.company}</strong><span>{item.role}</span><time>{item.period}</time></div>
              </Reveal>
            ))}
          </div>
          <a className="text-link" href="/portofolio/cv/Nelson_Matsinhe_CV.pdf" download>Descarregar CV <span aria-hidden="true">↓</span></a>
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
