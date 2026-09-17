import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

const DISABLED_PROJECT_PATHS = new Set([
    '/projet-bira',
    '/projet-podi',
    '/projets/bira',
    '/projets/podi',
    '/projects/bira',
    '/projects/podi',
]);

function isDisabledProjectPath(pathname: string) {
    return DISABLED_PROJECT_PATHS.has(pathname.toLowerCase().replace(/\/+$/, '') || '/');
}

export default function App() {
    const [page, setPage] = useState(() => (isDisabledProjectPath(window.location.pathname) ? 'projets' : 'accueil'));

    useEffect(() => {
        if (isDisabledProjectPath(window.location.pathname)) {
            window.history.replaceState(null, '', '/projets');
        }
    }, []);
    const navigate = (p: string) => setPage(p);

    const renderPage = () => {
        switch (page) {
            case 'accueil':
                return <Home navigate={navigate} />;
            case 'apropos':
                return <About navigate={navigate} />;
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

    return (
        <div className='min-h-screen bg-[#F8F7F3] flex flex-col'>
            <Nav
                current={page}
                navigate={navigate}
            />
            <main className='flex-1'>{renderPage()}</main>
            <Footer navigate={navigate} />
        </div>
    );
}
