import { navigation } from '../data/navigation'
import { site } from '../data/site'

interface FooterProps {
  navigate: (page: string) => void
}

export default function Footer({ navigate }: FooterProps) {
  const handleNav = (pageId: string) => {
    navigate(pageId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#111110] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#41699d] flex items-center justify-center">
                <span className="text-white text-xs font-bold" style={{ fontFamily: 'var(--font-mono)' }}>H</span>
              </div>
              <span className="text-white font-semibold text-lg">{site.name}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              {site.description}
            </p>
            <div className="flex items-center gap-3">
              {site.socialMedia.linkedin && (
                <a href={site.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#41699d] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
              )}
              {site.socialMedia.instagram && (
                <a href={site.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#41699d] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              )}
              {/* Show placeholder icons if social media not yet configured */}
              {!site.socialMedia.linkedin && !site.socialMedia.instagram && (
                <span className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                  Réseaux sociaux à configurer dans site.ts
                </span>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((link) => (
                <li key={link.pageId}>
                  <button
                    onClick={() => handleNav(link.pageId)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="leading-relaxed whitespace-pre-line">{site.address}</li>
            </ul>
            <div className="mt-6">
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#41699d] hover:text-[#6B93C4] transition-colors"
              >
                Rejoindre Héka →
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/40 text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} {site.name} — {site.organization}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Politique de confidentialité
            </a>
            <a href="https://www.polymtl.ca" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 text-xs transition-colors">
              {site.organization} ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
