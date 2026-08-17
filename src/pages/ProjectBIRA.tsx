interface Props {
  navigate: (page: string) => void
}

export default function ProjectBIRA({ navigate }: Props) {
  const handleNav = (page: string) => {
    navigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#0F2D42] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1600&h=900&fit=crop&auto=format')` }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <button
            onClick={() => handleNav('projets')}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-10 transition-colors"
          >
            ← Retour aux projets
          </button>
          <div className="inline-block px-2.5 py-1 rounded-md bg-[#E8F0F7] text-[#1B4F72] text-xs font-medium mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
            BIRA — Bras robotique intelligent d'assistance
          </div>
          <h1 className="text-4xl lg:text-6xl text-white leading-tight max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
            Rendre l'assistance robotique plus intuitive.
          </h1>
        </div>
      </section>

      {/* Le problème */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-medium text-[#1B4F72] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                01 — Le problème
              </span>
              <h2 className="text-3xl lg:text-4xl mt-3 mb-6 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
                L'accessibilité des outils d'assistance.
              </h2>
              <div className="space-y-4 text-[#7A7269] leading-relaxed text-sm">
                <p>
                  Plusieurs millions de personnes vivent avec des limitations motrices qui rendent difficiles ou impossibles certaines tâches physiques du quotidien : saisir un objet, déplacer quelque chose, interagir avec leur environnement immédiat.
                </p>
                <p>
                  Les systèmes d'assistance robotique existants sont souvent coûteux, difficiles à prendre en main et nécessitent un apprentissage technique important, ce qui freine leur adoption dans la vie réelle.
                </p>
                <p>
                  L'enjeu n'est pas uniquement technique. C'est aussi un enjeu d'accessibilité : un système d'assistance n'a de valeur que s'il peut être utilisé confortablement, de façon autonome, par la personne qui en a besoin.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 'NLP', label: 'Traitement automatique du langage naturel pour l\'interaction' },
                { value: 'IA', label: 'Modèles d\'apprentissage pour interpréter les commandes' },
                { value: 'Temps réel', label: 'Objectif d\'exécution des commandes' },
                { value: '6 DOF', label: 'Degrés de liberté ciblés pour le bras' },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#E2DDD5] bg-[#F8F7F3]">
                  <div className="text-2xl font-light text-[#1B4F72] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
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
            <div>
              <span className="text-xs font-medium text-[#1B4F72] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                02 — La solution
              </span>
              <h2 className="text-3xl lg:text-4xl mt-3 mb-6 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
                BIRA — Un bras robotique qui comprend le langage naturel.
              </h2>
              <div className="space-y-4 text-[#7A7269] leading-relaxed text-sm">
                <p>
                  BIRA est un bras robotique intelligent conçu pour interpréter des commandes exprimées en langage naturel. Plutôt que de forcer l'utilisateur à apprendre un langage de commande rigide, BIRA s'adapte à la façon naturelle de communiquer.
                </p>
                <p>
                  Le système intègre un module de traitement du langage naturel (NLP) couplé à un modèle d'IA capable d'interpréter les intentions de l'utilisateur et de les traduire en actions du bras robotique.
                </p>
                <p>
                  <strong className="text-[#111110]">Ce qui est actuellement en développement :</strong> le module d'interprétation des commandes vocales, le système de contrôle du bras et l'interface de retour visuel à l'utilisateur.
                </p>
                <p className="italic text-xs">
                  Note : Les capacités cliniques et les applications thérapeutiques de BIRA n'ont pas encore été validées. Le projet est actuellement en phase de développement.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl h-72 lg:h-96 bg-cover bg-center bg-[#E8F0F7]"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563968559507-d87412ef19d6?w=800&h=800&fit=crop&auto=format')` }}
            />
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="text-xs font-medium text-[#1B4F72] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
              03 — Architecture du système
            </span>
            <h2 className="text-3xl lg:text-4xl mt-3 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
              Comment fonctionne BIRA?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Entrée utilisateur',
                desc: 'L\'utilisateur formule une commande vocale ou textuelle en langage naturel ("Passe-moi le verre sur la table à droite").',
              },
              {
                step: '02',
                title: 'Interprétation IA',
                desc: 'Le module NLP analyse la commande, en extrait l\'intention et les paramètres clés (objet, direction, action) et génère une instruction structurée.',
              },
              {
                step: '03',
                title: 'Exécution robotique',
                desc: 'Le système de contrôle traduit l\'instruction en mouvements du bras robotique, avec vérification de sécurité à chaque étape.',
              },
            ].map((item) => (
              <div key={item.step} className="p-8 rounded-2xl bg-[#F8F7F3] border border-[#E2DDD5] hover:border-[#A8C5DC] transition-colors">
                <div className="text-xs font-medium text-[#1B4F72] mb-5" style={{ fontFamily: 'var(--font-mono)' }}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#111110] mb-3">{item.title}</h3>
                <p className="text-sm text-[#7A7269] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines & statut */}
      <section className="py-20 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-medium text-[#1B4F72] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                04 — Disciplines mobilisées
              </span>
              <h2 className="text-2xl mt-3 mb-6 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
                À la croisée de plusieurs expertises.
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Intelligence artificielle',
                  'Traitement du langage naturel',
                  'Génie logiciel',
                  'Génie électrique',
                  'Robotique',
                  'Systèmes embarqués',
                  'Interface utilisateur',
                  'Conception biomédicale',
                ].map((d) => (
                  <span key={d} className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#1B4F72] bg-[#E8F0F7] border border-[#A8C5DC]">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-medium text-[#1B4F72] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                05 — État du développement
              </span>
              <h2 className="text-2xl mt-3 mb-6 text-[#111110]" style={{ fontFamily: 'var(--font-display)' }}>
                Où en sommes-nous?
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Définition du problème', status: 'Complété' },
                  { label: 'Revue de littérature', status: 'Complété' },
                  { label: 'Architecture du système', status: 'Complété' },
                  { label: 'Module NLP — prototype', status: 'En cours' },
                  { label: 'Contrôle du bras robotique', status: 'En cours' },
                  { label: 'Intégration des modules', status: 'À venir' },
                  { label: 'Tests fonctionnels', status: 'À venir' },
                  { label: 'Présentation en compétition', status: 'À venir' },
                ].map((step) => (
                  <div key={step.label} className="flex items-center justify-between py-3 border-b border-[#E2DDD5] last:border-0">
                    <span className="text-sm text-[#111110]">{step.label}</span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                      step.status === 'Complété'
                        ? 'text-[#1A6B4A] bg-[#EDF5F0]'
                        : step.status === 'En cours'
                        ? 'text-[#1B4F72] bg-[#E8F0F7]'
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

      {/* CTA */}
      <section className="py-16 bg-[#E8F0F7]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl text-[#111110] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Rejoindre l'équipe BIRA?
          </h2>
          <p className="text-[#7A7269] mb-8 text-sm">
            Nous cherchons des étudiants en génie logiciel, électrique et en intelligence artificielle.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#1B4F72] text-white font-semibold text-sm hover:bg-[#163F5C] transition-colors"
          >
            Soumettre ma candidature
          </button>
        </div>
      </section>
    </div>
  )
}
