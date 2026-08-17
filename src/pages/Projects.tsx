import {allProjects} from '../data/projects'

interface ProjectsProps {
  navigate: (page: string) => void
}

const THEME_MAP = {
  podi:    { accent: '#C8281A', accentBg: '#FEF0EF', accentBorder: '#F5BCBA', hover: '#A01C10' },
  bira:    { accent: '#1B4F72', accentBg: '#E8F0F7', accentBorder: '#A8C5DC', hover: '#163F5C' },
  default: { accent: '#41699d', accentBg: '#EAF0F8', accentBorder: '#B8CDDF', hover: '#2D5585' },
}

export default function Projects({ navigate }: ProjectsProps) {
  const handleNav = (page: string) => {
    navigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
      <div className="pt-16">
        <section className="relative py-20 lg:py-28 border-b border-border overflow-hidden">
          {/* Background image */}
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('public/images/projects/bira/att.Qr1e276Fz3eb8Xsh5VP6TMCCp6ooGYsYHFgDj97w03k.jpg')",
                backgroundPosition: "center 35%",
              }}
          />

          {/* Dark / soft overlay for readability */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.78)_0%,rgba(15,23,42,0.62)_35%,rgba(15,23,42,0.25)_65%,rgba(15,23,42,0.08)_100%)]" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
        <span
            className="text-xs font-medium text-heka-yellow uppercase tracking-widest"
            style={{ fontFamily: "var(--font-mono)" }}
        >
          Projets
        </span>

              <h1
                  className="text-4xl lg:text-6xl mt-4 mb-6 text-white leading-tight font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
              >
                Des solutions ancrées dans des besoins réels.
              </h1>

              <p className="text-white/80 leading-relaxed max-w-xl">
                Chaque projet de Héka commence par un problème humain concret. Voici les
                projets actuellement en développement par nos équipes.
              </p>
            </div>
          </div>
        </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-8">
          {allProjects.map((project, i) => {
            const t = THEME_MAP[project.theme] ?? THEME_MAP.default
            const imageLeft = i % 2 === 0

            return (
              <div key={project.slug} className="rounded-2xl border border-border overflow-hidden grid lg:grid-cols-2">
                {imageLeft && (
                  <div
                    className="h-72 lg:h-auto bg-cover bg-center min-h-64"
                    style={{ backgroundColor: t.accent, backgroundImage: `url('${project.images.hero}')` }}
                  />
                )}
                <div className={`p-10 lg:p-12 bg-cream ${!imageLeft ? 'order-2 lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-2.5 py-1 rounded-md text-xs font-medium border"
                      style={{ backgroundColor: t.accentBg, color: t.accent, borderColor: t.accentBorder, fontFamily: 'var(--font-mono)' }}>
                      {project.name}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F2EEE8] text-muted" style={{ fontFamily: 'var(--font-mono)' }}>
                      {project.status}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-charcoal mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {project.challenge}
                  </h2>
                  <p className="text-sm text-muted mb-5 font-medium">{project.title}</p>
                  <p className="text-muted leading-relaxed mb-8 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.disciplines.slice(0, 4).map((d) => (
                      <span key={d} className="px-2.5 py-1 rounded-md text-xs text-muted bg-white border border-border">{d}</span>
                    ))}
                    {project.disciplines.length > 4 && (
                      <span className="px-2.5 py-1 rounded-md text-xs text-muted bg-white border border-border">+{project.disciplines.length - 4}</span>
                    )}
                  </div>
                  {project.showProjectPage && (
                  <button
                    onClick={() => handleNav(`projet-${project.slug}`)}
                    className="px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-colors"
                    style={{ backgroundColor: t.accent }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.hover)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = t.accent)}
                  >
                    Voir le projet {project.name} →
                  </button>
                  )}
                </div>
                {!imageLeft && (
                  <div
                    className="h-72 lg:h-auto bg-cover bg-center min-h-64 order-1 lg:order-2"
                    style={{ backgroundColor: t.accent, backgroundImage: `url('${project.images.hero}')` }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 bg-heka-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl text-charcoal mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Tu veux contribuer à ces projets?
          </h2>
          <p className="text-muted mb-8 text-sm">
            Héka recrute des étudiants motivés de toutes les disciplines du génie.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="px-6 py-3.5 rounded-xl bg-heka text-white font-semibold text-sm hover:bg-[#2D5585] transition-colors"
          >
            Rejoindre Héka
          </button>
        </div>
      </section>
    </div>
  )
}
