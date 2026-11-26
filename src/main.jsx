import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Layers3, Menu, Smartphone, Sparkles } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    name: 'Apex Auto Detailing',
    category: 'Automotive · Website design & development',
    description: 'A polished digital home for a premium detailing service, designed to make the quality of the work clear from the first visit.',
    url: 'https://jjguerrero108-ship-it.github.io/apex-auto-detailing/',
    type: 'apex'
  }
];

const services = [
  { number: '01', title: 'Business websites', text: 'A considered online presence that tells your story and helps the right customers take the next step.', icon: Layers3 },
  { number: '02', title: 'Landing pages', text: 'Focused, persuasive pages for a service, launch, or campaign—with a clear path to action.', icon: ArrowUpRight },
  { number: '03', title: 'Website redesigns', text: 'A sharper, more modern experience built around what your business needs today.', icon: Sparkles },
  { number: '04', title: 'Mobile-friendly websites', text: 'Responsive layouts that feel effortless to use on every screen, from desktop to phone.', icon: Smartphone }
];

function ProjectPreview() {
  return <div className="preview" aria-label="Apex Auto Detailing website preview">
    <div className="preview-top"><span className="preview-brand"><span className="brand-mark">A</span> APEX <small>AUTO DETAILING</small></span><span className="preview-nav">SERVICES　 ABOUT　 CONTACT <b>BOOK NOW ↗</b></span></div>
    <div className="preview-content"><span className="preview-kicker">PRECISION IN EVERY DETAIL</span><div className="preview-title">THE ART OF<br/><i>THE FINISH.</i></div><p>Premium auto detailing, delivered with care.</p><span className="preview-cta">EXPLORE SERVICES　↗</span></div>
    <div className="preview-car" aria-hidden="true"><div className="car-glow"/><div className="car-body"><i/><b/></div><div className="wheel one"/><div className="wheel two"/></div>
    <span className="preview-index">01 / 01</span><span className="preview-caption">A CLEANER KIND OF LUXURY</span>
  </div>
}

function App() {
  return <>
    <header className="header">
      <a className="wordmark" href="#top" aria-label="JJG Studio home"><span className="wordmark-icon">J</span><span>JJG<span className="wordmark-light"> / STUDIO</span></span></a>
      <nav className="nav" aria-label="Main navigation"><a href="#about">About</a><a href="#work">Selected work</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a>
      <a className="mobile-menu" href="#contact" aria-label="Go to contact"><Menu size={21}/></a>
    </header>

    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy reveal"><div className="eyebrow"><span className="eyebrow-line"/> INDEPENDENT WEB DEVELOPER <span className="eyebrow-location">BASED IN THE U.S.</span></div>
          <h1>Websites that<br/>help businesses <span className="grow">grow<span className="period">.</span></span></h1>
          <div className="hero-bottom"><p>I create thoughtful, modern websites that bring your business online—and move it forward.</p><div className="hero-actions"><a className="button button-light" href="#work">View my work <ArrowDownRight size={16}/></a><a className="button button-outline" href="#contact">Contact me <ArrowUpRight size={16}/></a></div></div>
        </div>
        <div className="hero-meta"><span>DESIGN WITH INTENTION. BUILT TO PERFORM.</span><a href="#about"><ArrowDown size={16}/><span>SCROLL TO EXPLORE</span></a><span>AVAILABLE FOR SELECT PROJECTS <i className="status-dot"/></span></div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label"><span>01 / ABOUT</span><span>PERSONAL, BY DESIGN</span></div>
        <div className="about-grid"><h2>A small studio<br/>with a <em>clear focus.</em></h2><div className="about-copy"><p className="about-lead">Good websites make good businesses easier to find, understand, and choose.</p><p>I’m an independent web developer working with small businesses to create a strong, lasting first impression. From the first idea to the final detail, I bring clarity, care, and craft to every project.</p><p>Every website is designed to feel right for your business—and work beautifully wherever your customers find you.</p><a className="text-link" href="#contact">A little more about working together <ArrowRight size={15}/></a></div></div>
        <div className="about-foot"><span>INDEPENDENT BY CHOICE</span><span>THOUGHTFUL BY DEFAULT</span><span>BUILT AROUND YOUR BUSINESS</span></div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label"><span>02 / SELECTED WORK</span><span>A FEW THINGS, DONE WELL</span></div>
        <div className="work-heading"><h2>Featured <em>project.</em></h2><p>Every project starts with a conversation<br/>and a clear understanding of what matters.</p></div>
        {projects.map(project => <article className="project" key={project.number}>
          <a className="project-visual" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} website`}><ProjectPreview/><span className="visual-link"><ArrowUpRight size={19}/></span></a>
          <div className="project-details"><div><span className="project-number">{project.number} — FEATURED PROJECT</span><h3>{project.name}</h3><span className="project-category">{project.category}</span></div><p>{project.description}</p><a className="project-link" href={project.url} target="_blank" rel="noreferrer">Visit live website <ArrowUpRight size={16}/></a></div>
        </article>)}
        <div className="work-note"><span className="work-note-icon"><Code2 size={17}/></span><span>More work is in progress. <a href="#contact">Let’s make something great.</a></span></div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-label"><span>03 / SERVICES</span><span>MADE FOR YOUR NEXT CHAPTER</span></div>
        <div className="services-intro"><h2>Good work.<br/><em>Good people.</em></h2><p>Whether you’re starting fresh or ready for a change, I can help you show up online with confidence.</p></div>
        <div className="service-list">{services.map(({number,title,text,icon:Icon})=><article className="service-item" key={number}><span className="service-number">{number}</span><div className="service-name"><Icon size={19} strokeWidth={1.5}/><h3>{title}</h3></div><p>{text}</p><ArrowUpRight className="service-arrow" size={18}/></article>)}</div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="section-label"><span>04 / GET IN TOUCH</span><span>YOUR NEXT CHAPTER STARTS HERE</span></div>
        <div className="contact-main"><div><span className="contact-kicker"><i className="status-dot"/> OPEN TO NEW PROJECTS</span><h2>Have a good one<br/>in <em>mind?</em></h2></div><div className="contact-aside"><p>Tell me a little about your business and what you’re looking to build. I’ll be in touch to talk through the next steps.</p><a className="button button-light contact-button" href="mailto:your-email@example.com?subject=Let%27s%20talk%20about%20a%20website">Start a conversation <ArrowUpRight size={16}/></a><span className="placeholder-note">Replace this placeholder email before launch.</span></div></div>
        <div className="contact-bottom"><span>EMAIL <b>your-email@example.com</b></span><span>LOCATION <b>United States · Working worldwide</b></span><a href="#top">BACK TO TOP <ArrowUpRight size={13}/></a></div>
      </section>
    </main>
    <footer className="footer"><a className="wordmark" href="#top"><span className="wordmark-icon">J</span><span>JJG<span className="wordmark-light"> / STUDIO</span></span></a><span>INDEPENDENT WEB DEVELOPER</span><span>© 2025 JJG STUDIO</span></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
