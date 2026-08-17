import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import Achievements from './pages/Achievements'
import Team from './pages/Team'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import { getProjectBySlug } from './utils/content'

export default function App() {
  const [page, setPage] = useState('accueil')
  const navigate = (p: string) => setPage(p)

  const renderPage = () => {
    if (page.startsWith('projet-')) {
      const slug = page.slice('projet-'.length)
      const project = getProjectBySlug(slug)
      if (project) return <ProjectPage project={project} navigate={navigate} />
    }
    switch (page) {
      case 'accueil':      return <Home navigate={navigate} />
      case 'apropos':      return <About navigate={navigate} />
      case 'projets':      return <Projects navigate={navigate} />
      case 'realisations': return <Achievements />
      case 'equipe':       return <Team />
      case 'partenaires':  return <Partners />
      case 'contact':      return <Contact />
      default:             return <Home navigate={navigate} />
    }
  }

  const navPage = page.startsWith('projet-') ? 'projets' : page

  return (
    <div className="min-h-screen bg-[#F8F7F3] flex flex-col">
      <Nav current={navPage} navigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  )
}
