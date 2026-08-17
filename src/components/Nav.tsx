import { useState, useEffect } from 'react';
import { navigation } from '../data/navigation';
import { asset } from '../utils/assets';

interface NavProps {
    current: string;
    navigate: (page: string) => void;
}

export default function Nav({ current, navigate }: NavProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const handleNav = (pageId: string) => {
        navigate(pageId);
        setMobileOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled ? 'bg-cream/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
                }`}
            >
                <div className='max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16'>
                    <button
                        onClick={() => handleNav('accueil')}
                        className='flex items-center gap-2.5 group'
                        aria-label='Héka — Accueil'
                    >
                        <img
                            src={asset('public/images/Heka_2025_LogoComplet-CouleurNoir.svg')}
                            alt='Héka'
                            className='h-10 w-auto object-contain'
                        />
                    </button>

                    <nav className='hidden lg:flex items-center gap-1'>
                        {navigation.map((link) => (
                            <button
                                key={link.pageId}
                                onClick={() => handleNav(link.pageId)}
                                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    current === link.pageId
                                        ? 'text-heka bg-heka-light'
                                        : 'text-muted hover:text-charcoal hover:bg-border'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    <div className='hidden lg:flex items-center gap-3'>
                        <button
                            onClick={() => handleNav('contact')}
                            className='px-4 py-2 rounded-lg text-sm font-semibold bg-heka-yellow text-charcoal hover:bg-[#e8b84e] transition-colors duration-200'
                        >
                            Rejoindre Héka
                        </button>
                    </div>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className='lg:hidden p-2 rounded-lg text-charcoal hover:bg-[#F2EEE8] transition-colors'
                        aria-label='Menu'
                    >
                        <div className='w-5 flex flex-col gap-1'>
                            <span
                                className={`block h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                            />
                            <span
                                className={`block h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`}
                            />
                            <span
                                className={`block h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {mobileOpen && (
                <div className='fixed inset-0 z-40 lg:hidden'>
                    <div
                        className='absolute inset-0 bg-black/20'
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className='absolute top-0 right-0 bottom-0 w-72 bg-cream shadow-xl pt-20 pb-8 px-6 flex flex-col gap-2'>
                        {navigation.map((link) => (
                            <button
                                key={link.pageId}
                                onClick={() => handleNav(link.pageId)}
                                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                                    current === link.pageId
                                        ? 'text-heka bg-heka-light'
                                        : 'text-charcoal hover:bg-[#F2EEE8]'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className='mt-4 pt-4 border-t border-border'>
                            <button
                                onClick={() => handleNav('contact')}
                                className='w-full px-4 py-3 rounded-xl text-base font-semibold bg-heka-yellow text-charcoal hover:bg-[#e8b84e] transition-colors'
                            >
                                Rejoindre Héka
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
