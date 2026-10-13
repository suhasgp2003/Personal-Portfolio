import { useState } from 'react'

import heroGraphic from './assets/hero-graphic.svg'
import { projects } from './data/projects'
import Contact from './components/Contact'
import './App.css'

const ArrowUpRight = () => <span aria-hidden="true">↗</span>

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Suhas home"><span className="brand-mark">S</span><span>Suhas<span className="brand-dot">.</span></span></a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><i></i><i></i></button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Projects</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-resume" href="mailto:suhasgp20@gmail.com" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight /></a>
        </nav>
      </header>
      <section id="home" className="hero-section">
        <div className="hero-copy"><p className="eyebrow"><span></span> Available for opportunities</p><h1>Building useful<br /><em>digital</em> experiences.</h1><p className="hero-intro">I&apos;m Suhas, a developer in progress who enjoys turning practical ideas into clean, thoughtful web experiences.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore projects <ArrowUpRight /></a><a className="text-link" href="#contact">Get in touch <span>↓</span></a></div></div>
        <div className="hero-art" aria-hidden="true"><div className="orb orb-one"></div><div className="orb orb-two"></div><div className="art-grid"></div><img src={heroGraphic} alt="" /><p className="art-label">CODE<br />WITH<br />PURPOSE</p><span className="orbit orbit-a">React</span><span className="orbit orbit-b">Django</span><span className="orbit orbit-c">Python</span></div>
        <div className="hero-foot"><p>Based in India</p><div className="scroll-cue"><span></span> Scroll to discover</div><p>2026</p></div>
      </section>
      <section id="about" className="about-section section-shell"><p className="section-number">01 / ABOUT</p><div className="about-content"><h2>I enjoy making the web feel <em>simple, useful,</em> and a little more human.</h2><div className="about-detail"><p>I&apos;m a Python full-stack developer in progress, learning by building projects that solve everyday problems. My focus is on the intersection of clear design and dependable functionality.</p><a className="text-link" href="mailto:suhasgp20@gmail.com">More about me <ArrowUpRight /></a></div></div></section>
      <section className="skills-section section-shell"><p className="section-number">02 / TOOLBOX</p><div className="skills-wrap"><h2>Tools I&apos;m growing with</h2><div className="skills-list">{['Python', 'Django', 'JavaScript', 'React', 'HTML & CSS', 'SQLite', 'Git & GitHub'].map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}</div></div></section>
      <section id="work" className="work-section section-shell"><div className="section-heading"><p className="section-number">03 / PROJECTS</p><h2>A few things I&apos;ve brought to life.</h2></div><div className="projects-list">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.title}><div className="project-visual" aria-hidden="true"><span className="project-index">0{index + 1}</span><div className="window"><i></i><i></i><i></i><strong>{index === 0 ? 'Library' : index === 1 ? 'Balance' : 'Coming soon'}</strong><small>{index === 0 ? 'Find your next read' : index === 1 ? 'Your money, organised' : 'The next experiment'}</small></div></div><div className="project-info"><p className="project-type">{index === 0 ? 'WEB APPLICATION' : index === 1 ? 'PERSONAL FINANCE' : 'IN DEVELOPMENT'}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><span>{index === 0 ? 'Python · Django · SQLite' : index === 1 ? 'HTML · CSS · JavaScript' : 'More to come'}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>View project <ArrowUpRight /></a></div></div></article>)}</div></section>
      <Contact />
    </main>
  )
}
export default App
