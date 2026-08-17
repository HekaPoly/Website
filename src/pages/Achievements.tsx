import { useState } from 'react'
import { achievements } from '../data/achievements'
import { getAchievementTypes, ACHIEVEMENT_TYPE_LABELS, getAchievementStatusLabel, getAchievementStatusStyle, getProjectBadgeStyle } from '../utils/content'

export default function Achievements() {
  const [active, setActive] = useState('Tous')

  const types = getAchievementTypes()

  const filtered = active === 'Tous'
    ? achievements
    : achievements.filter((a) => ACHIEVEMENT_TYPE_LABELS[a.type] === active)

  const sorted = [...filtered].sort((a, b) => String(b.date).localeCompare(String(a.date)))

  return (
    <div className="pt-16">
      <section className="relative py-20 lg:py-28 border-b border-border overflow-hidden">
        {/* Background image */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('public/images/genial.webp')",
              backgroundPosition: "center 20%",
            }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.65)_38%,rgba(15,23,42,0.28)_68%,transparent_100%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
      <span
          className="text-xs font-medium text-heka-yellow uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
      >
        Réalisations
      </span>

            <h1
                className="text-4xl lg:text-6xl mt-4 mb-6 text-white leading-tight font-bold"
                style={{ fontFamily: "var(--font-display)" }}
            >
              Notre parcours en chiffres et en faits.
            </h1>

            <p className="text-white/80 leading-relaxed max-w-xl">
              Compétitions, prototypes, événements, prix — voici l&apos;historique
              des réalisations de Héka, du plus récent au plus ancien.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {['Tous', ...types.map((t) => ACHIEVEMENT_TYPE_LABELS[t] ?? t)].map((label) => (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === label
                    ? 'bg-heka text-white'
                    : 'bg-[#F2EEE8] text-muted hover:bg-[#E8E3DC] hover:text-charcoal'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Items */}
          {sorted.length > 0 ? (
            <div className="space-y-5">
              {sorted.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start p-7 rounded-2xl bg-cream border border-border hover:border-heka-mid transition-colors group"
                >
                  <div className="shrink-0 w-32">
                    <div className="text-xs text-muted" style={{ fontFamily: 'var(--font-mono)' }}>{item.date}</div>
                    <span className={`inline-block mt-1.5 px-2 py-0.5 rounded text-xs font-medium ${getAchievementStatusStyle(item.status)}`} style={{ fontFamily: 'var(--font-mono)' }}>
                      {item.result ?? getAchievementStatusLabel(item.status)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-muted uppercase tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
                        {ACHIEVEMENT_TYPE_LABELS[item.type] ?? item.type}
                      </span>
                      {item.project && (
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${getProjectBadgeStyle(item.project)}`} style={{ fontFamily: 'var(--font-mono)' }}>
                          {item.project.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-charcoal mb-2 group-hover:text-heka transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#C8C3BB]" style={{ fontFamily: 'var(--font-mono)' }}>
              Aucune réalisation dans cette catégorie pour le moment.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
