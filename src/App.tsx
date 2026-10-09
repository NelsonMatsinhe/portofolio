import HeroSection from "./components/HeroSection";
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
      <a className="skip-link" href="#main-content">Avançar para o conteúdo</a>
      <main id="main-content">
        <HeroSection />
        <Projects />
        <section id="experience" className="section-shell experience-section section-light">
          <div className="section-heading compact-heading">
            <Reveal><p className="eyebrow">03 — Experiência</p></Reveal>
            <Reveal delayMs={60}><h2>Trabalho real, em poucas linhas.</h2></Reveal>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal key={item.company} delayMs={index * 40}>
                <article className={"experience-card" + (index === 0 ? " experience-card-featured" : "")}>
                  <div className="experience-card-heading">
                    <div><h3>{item.company}</h3><p className="experience-role">{item.role}</p></div>
                    <p className="experience-period">{item.period}</p>
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
