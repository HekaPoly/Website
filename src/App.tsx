import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectBIRA from './pages/ProjectBIRA';
import ProjectPODI from './pages/ProjectPODI';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

export default function App() {
    const [page, setPage] = useState('accueil');
    const navigate = (p: string) => setPage(p);

    const renderPage = () => {
        switch (page) {
            case 'accueil':
                return <Home navigate={navigate} />;
            case 'apropos':
                return <About navigate={navigate} />;
            case 'projet-bira':
                return <ProjectBIRA navigate={navigate} />;
            case 'projet-podi':
                return <ProjectPODI navigate={navigate} />;
            case 'projets':
                return <Projects navigate={navigate} />;
            case 'realisations':
                return <Achievements />;
            case 'equipe':
                return <Team />;
            case 'partenaires':
                return <Partners />;
            case 'contact':
                return <Contact />;
            default:
                return <Home navigate={navigate} />;
        }
    };

    const navPage = page.startsWith('projet-') ? 'projets' : page;

    return (
        <div className='min-h-screen bg-[#F8F7F3] flex flex-col'>
            <Nav
                current={navPage}
                navigate={navigate}
            />
            <main className='flex-1'>{renderPage()}</main>
            <Footer navigate={navigate} />
        </div>
    );
}
