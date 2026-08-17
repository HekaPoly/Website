import { site } from '../data/site'

interface AboutProps {
  navigate: (page: string) => void
}

export default function About({ navigate }: AboutProps) {
  return (
    <div className="pt-16">
      {/* Header */}
      <section
          className="relative py-20 lg:py-28 border-b border-border bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/projects/podi/ACE2024-146-1.jpg')",
          }}
      >
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.62)_40%,rgba(15,23,42,0.18)_70%,transparent_100%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
      <span
          className="text-xs font-medium text-heka-yellow uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
      >
        À propos
      </span>

            <h1
                className="text-4xl lg:text-6xl mt-4 text-white leading-tight font-bold"
                style={{ fontFamily: "var(--font-display)" }}
            >
              Une organisation étudiante bâtie autour de l&apos;impact humain.
            </h1>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span
                className="text-xs font-medium text-muted uppercase tracking-widest "
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Notre histoire
              </span>
              <h2
                className="text-3xl lg:text-4xl mt-4 mb-6 text-charcoal font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                De Métis à Héka.
              </h2>
            </div>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                L'organisation a vu le jour sous le nom{" "}
                <strong className="text-charcoal">Métis</strong> en 2013, un comité
                technique réunissant des étudiants de Polytechnique Montréal
                autour de projets multidisciplinaires.
              </p>
              <p>
                Au fil du développement de ses projets, l'organisation a évolué
                vers une mission plus ciblée — celle de concevoir des
                technologies répondant à des enjeux concrets en santé, en
                assistance humaine et en sécurité physique.
              </p>
              <p>
                Ce changement de cap a mené à une transformation de l'identité :{" "}
                <strong className="text-charcoal">Héka</strong>, en référence à
                la divinité égyptienne de la guérison et de la magie, représente
                mieux la mission biomédicale et l'ambition de l'organisation.
              </p>
              <p>
                Aujourd'hui, Héka compte des membres issus de plusieurs
                disciplines du génie et mène deux projets principaux — PODI et
                BIRA — avec une démarche rigoureuse allant du problème jusqu'au
                prototype.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl border border-white/10 bg-white/5">
              <div
                className="text-xs font-medium text-heka-yellow mb-6 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Mission
              </div>
              <p
                className="text-white text-xl leading-relaxed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Réunir des étudiants de différentes disciplines afin de
                concevoir des solutions d'ingénierie innovantes répondant à des
                enjeux concrets en santé, en assistance humaine et en sécurité
                physique.
              </p>
            </div>
            <div className="p-10 rounded-2xl border border-white/10 bg-white/5">
              <div
                className="text-xs font-medium text-heka-yellow mb-6 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Vision
              </div>
              <p
                className="text-white text-xl leading-relaxed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Faire de Héka un environnement de référence où les étudiants
                peuvent transformer des besoins humains réels en technologies
                utiles, responsables et accessibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span
              className="text-xs font-medium text-muted uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Nos valeurs
            </span>
            <h2
              className="text-3xl lg:text-4xl mt-3 text-charcoal"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ce qui guide nos décisions.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.values.map((v, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white border border-border hover:border-heka-mid transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-heka-light flex items-center justify-center mb-5">
                  <span
                    className="text-xs font-medium text-heka"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre différence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="rounded-2xl h-72 lg:h-96 bg-cover bg-center bg-heka-light"
              style={{
                backgroundImage: `url('public/images/projects/bira/TDB_20250806_Poly_083.jpg')`,
              }}
            />
            <div>
              <span
                className="text-xs font-medium text-muted uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Notre différence
              </span>
              <h2
                className="text-3xl lg:text-4xl mt-3 mb-6 text-charcoal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Pas un simple club. Une organisation d'innovation.
              </h2>
              <ul className="space-y-4">
                {[
                  "Projets centrés sur des besoins humains documentés, pas des concepts abstraits",
                  "Croisement entre ingénierie, santé et robotique — une combinaison rare en milieu étudiant",
                  "Équipes multidisciplinaires où chaque discipline joue un rôle essentiel",
                  "Utilisation de technologies mécaniques, robotiques et intelligentes sur des systèmes réels",
                  "Solutions conçues pour fonctionner dans des contextes d'utilisation concrets",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-sm text-muted"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-heka-light flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-heka"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  navigate("projets")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="mt-8 px-6 py-3.5 rounded-xl bg-heka text-white font-semibold text-sm hover:bg-heka-mid transition-colors"
              >
                Découvrir nos projets
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
