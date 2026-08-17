interface Props {
  navigate: (page: string) => void
}

export default function ProjectPODI({ navigate }: Props) {
  const handleNav = (page: string) => {
    navigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#111110] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504667290505-eee11f23905a?w=1600&h=900&fit=crop&auto=format')` }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <button
            onClick={() => handleNav('projets')}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-10 transition-colors"
          >
            ← Retour aux projets
          </button>
          <div className="inline-block px-2.5 py-1 rounded-md bg-[#FEF0EF] text-[#C8281A] text-xs font-medium mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
            PODI — Exosquelette passif d'assistance
          </div>
          <h1 className="text-4xl lg:text-6xl text-white leading-tight max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
            Réduire les contraintes physiques vécues par les pompiers.
          </h1>
        </div>
      </section>

      {/* Le problème */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-medium text-[#C8281A] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                01 — Le problème
              </span>
              <h2 className="text-3xl lg:text-4xl mt-3 mb-6 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
                Un métier physiquement éprouvant.
              </h2>
              <div className="space-y-4 text-[#7A7269] leading-relaxed text-sm">
                <p>
                  Les pompiers interviennent dans des environnements hostiles tout en portant un équipement de protection individuelle pouvant dépasser les 25 kilogrammes. Ces interventions impliquent des mouvements répétitifs, des postures contraignantes et des efforts soutenus sur de longues périodes.
                </p>
                <p>
                  Cette réalité entraîne une fatigue musculaire importante et des contraintes musculosquelettiques qui augmentent le risque de blessures et réduisent l'efficacité opérationnelle, notamment en fin d'intervention.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '25 kg+', label: 'Équipement porté lors d\'une intervention' },
                { value: '↑ 40%', label: 'Des blessures liées aux contraintes physiques' },
                { value: '4–6 h', label: 'Durée typique d\'une intervention exigeante' },
                { value: '100%', label: 'Passif — aucune source d\'énergie requise' },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#E2DDD5] bg-[#F8F7F3]">
                  <div className="text-2xl font-light text-[#C8281A] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#7A7269] leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* La solution */}
      <section className="py-20 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="rounded-2xl h-72 lg:h-96 bg-cover bg-center bg-[#FEF0EF]"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1575507371089-cd0a12c5aae9?w=800&h=800&fit=crop&auto=format')` }}
            />
            <div>
              <span className="text-xs font-medium text-[#C8281A] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                02 — La solution
              </span>
              <h2 className="text-3xl lg:text-4xl mt-3 mb-6 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
                PODI — Un exosquelette mécanique passif.
              </h2>
              <div className="space-y-4 text-[#7A7269] leading-relaxed text-sm">
                <p>
                  PODI est un exosquelette mécanique passif — c'est-à-dire sans moteur ni batterie — conçu pour redistribuer les charges pesant sur les membres inférieurs et le dos lors d'interventions.
                </p>
                <p>
                  Le système utilise des mécanismes de transfert de force pour réduire les contraintes sur les articulations critiques, sans limiter la liberté de mouvement indispensable au travail des premiers répondants.
                </p>
                <p>
                  La conception tient compte des contraintes réelles du terrain : chaleur, fumée, espaces restreints, compatibilité avec l'équipement existant et facilité d'enfilage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs techniques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="text-xs font-medium text-[#C8281A] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
              03 — Objectifs techniques
            </span>
            <h2 className="text-3xl lg:text-4xl mt-3 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
              Ce que PODI doit accomplir.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Réduction de la charge', desc: 'Redistribuer significativement la force exercée sur le dos et les membres inférieurs.' },
              { title: 'Légèreté', desc: 'Maintenir un poids propre minimal afin de ne pas alourdir l\'équipement du pompier.' },
              { title: 'Liberté de mouvement', desc: 'Permettre une plage de mouvement complète pour toutes les tâches opérationnelles.' },
              { title: 'Résistance aux conditions', desc: 'Fonctionner de manière fiable dans des environnements chauds, humides et poussiéreux.' },
              { title: 'Compatibilité', desc: 'S\'adapter à l\'équipement de protection individuelle standard sans modification.' },
              { title: 'Facilité d\'utilisation', desc: 'Pouvoir être enfilé et retiré rapidement, sans assistance et sous stress.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-[#E2DDD5] hover:border-[#F5BCBA] transition-colors">
                <div className="w-7 h-7 rounded-full bg-[#FEF0EF] flex items-center justify-center mb-4">
                  <span className="text-xs font-medium text-[#C8281A]" style={{ fontFamily: 'var(--font-mono)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-semibold text-[#111110] mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-[#7A7269] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines & Statut */}
      <section className="py-20 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-medium text-[#C8281A] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                04 — Disciplines mobilisées
              </span>
              <h2 className="text-2xl mt-3 mb-6 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
                Une équipe pluridisciplinaire.
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Génie mécanique',
                  'Biomécanique',
                  'Ergonomie',
                  'Génie industriel',
                  'Prototypage',
                  'Fabrication additive',
                  'Conception CAO',
                  'Analyse structurale',
                ].map((d) => (
                  <span key={d} className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#C8281A] bg-[#FEF0EF] border border-[#F5BCBA]">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-medium text-[#C8281A] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                05 — État du développement
              </span>
              <h2 className="text-2xl mt-3 mb-6 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
                Où en sommes-nous?
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Définition du problème', status: 'Complété' },
                  { label: 'Revue de littérature', status: 'Complété' },
                  { label: 'Définition des exigences', status: 'Complété' },
                  { label: 'Conception préliminaire', status: 'Complété' },
                  { label: 'Premier prototype', status: 'Complété' },
                  { label: 'Tests fonctionnels', status: 'En cours' },
                  { label: 'Itérations et amélioration', status: 'À venir' },
                  { label: 'Présentation en compétition', status: 'À venir' },
                ].map((step) => (
                  <div key={step.label} className="flex items-center justify-between py-3 border-b border-[#E2DDD5] last:border-0">
                    <span className="text-sm text-[#111110]">{step.label}</span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                      step.status === 'Complété'
                        ? 'text-[#1A6B4A] bg-[#EDF5F0]'
                        : step.status === 'En cours'
                        ? 'text-[#C8281A] bg-[#FEF0EF]'
                        : 'text-[#7A7269] bg-[#F2EEE8]'
                    }`} style={{ fontFamily: 'var(--font-mono)' }}>
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="text-xs font-medium text-[#7A7269] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
            06 — Galerie
          </span>
          <h2 className="text-2xl mt-3 mb-8 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
            Prototype en images.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl border border-dashed border-[#E2DDD5] bg-[#F8F7F3] flex items-center justify-center text-xs text-center text-[#C8C3BB] p-4"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Photo prototype<br />à venir
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FEF0EF]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl text-[#111110] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Rejoindre l'équipe PODI?
          </h2>
          <p className="text-[#7A7269] mb-8 text-sm">
            Nous cherchons des étudiants en génie mécanique, industriel et biomécanique.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#C8281A] text-white font-semibold text-sm hover:bg-[#A01C10] transition-colors"
          >
            Soumettre ma candidature
          </button>
        </div>
      </section>
    </div>
  )
}
