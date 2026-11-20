import { Route, Routes } from 'react-router-dom'
import Background from './components/Background.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Achievements from './components/Achievements.jsx'
import BeyondTechnical from './components/BeyondTechnical.jsx'
import Interests from './components/Interests.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './components/NotFound.jsx'

function PortfolioHome() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <BeyondTechnical />
        <Interests />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
