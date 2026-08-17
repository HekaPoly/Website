import { useState } from 'react'
import { partners } from '../data/partners'
import { partnershipForm } from '../data/forms'
import { site } from '../data/site'

export default function Partners() {
  const [form, setForm] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#E2DDD5] bg-[#F8F7F3] text-sm text-[#111110] focus:outline-none focus:border-[#41699d] transition-colors"

  return (
    <div className="pt-16">
        <section className="relative py-20 lg:py-28 border-b border-border overflow-hidden">
          {/* Background image */}
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('public/images/team/4cc53130-ecc2-4901-9329-c58d022b59fa.jpg')",
                backgroundPosition: "center 45%",
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
          Partenaires
        </span>

              <h1
                  className="text-4xl lg:text-6xl mt-4 mb-6 text-white leading-tight font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
              >
                Construire l&apos;avenir de la technologie d&apos;assistance.
              </h1>

              <p className="text-white/80 leading-relaxed max-w-xl">
                Nous collaborons avec des entreprises, des organismes et des chercheurs
                qui partagent notre volonté de développer des technologies utiles,
                responsables et accessibles.
              </p>
            </div>
          </div>
        </section>

      {/* Pourquoi collaborer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <span className="text-xs font-medium text-muted uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
              Pourquoi collaborer avec Héka
            </span>
            <h2 className="text-3xl lg:text-4xl mt-3 text-charcoal" style={{ fontFamily: 'var(--font-display)' }}>
              Ce que votre collaboration rend possible.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Soutenir la formation', desc: "Permettre à des étudiants talentueux d'acquérir une expérience pratique sur des problèmes industriels réels." },
              { title: 'Accéder à une relève qualifiée', desc: "Rencontrer des étudiants multidisciplinaires avant qu'ils terminent leurs études." },
              { title: "Contribuer à l'innovation", desc: "Participer activement au développement de technologies d'assistance à fort potentiel." },
              { title: "Offrir de l'expertise", desc: "Partager vos connaissances techniques avec des équipes motivées et rigoureuses." },
              { title: 'Fournir du matériel', desc: 'Soutenir concrètement nos projets avec les ressources nécessaires à la fabrication et aux tests.' },
              { title: 'Visibilité et réseautage', desc: "Associer votre organisation à des projets innovants présentés lors de compétitions et d'événements." },
            ].map((item, i) => (
              <div key={i} className="p-7 rounded-2xl border border-border hover:border-heka-mid transition-colors">
                <div className="w-7 h-7 rounded-full bg-heka-light flex items-center justify-center mb-4">
                  <span className="text-xs text-heka" style={{ fontFamily: 'var(--font-mono)' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires actuels */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <span className="text-xs font-medium text-muted uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
              Partenaires actuels
            </span>
            <h2 className="text-2xl lg:text-3xl mt-2 text-charcoal" style={{ fontFamily: 'var(--font-display)' }}>
              Ils soutiennent Héka.
            </h2>
          </div>
          {partners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {partners.map((p) => (
                <a key={p.id} href={p.website || '#'} target="_blank" rel="noopener noreferrer"
                  className="h-24 rounded-xl border border-border bg-white flex items-center justify-center hover:border-heka-mid transition-colors p-4">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain" />
                  ) : (
                    <span className="text-sm font-medium text-muted text-center">{p.name}</span>
                  )}
                </a>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 rounded-xl border border-dashed border-border bg-white flex items-center justify-center text-xs text-muted text-center p-4" style={{ fontFamily: 'var(--font-mono)' }}>
                  Logo partenaire<br />{i}
                </div>
              ))}
            </div>
          )}
          <p className="text-xs text-[#C8C3BB]" style={{ fontFamily: 'var(--font-mono)' }}>
            * Les logos partenaires seront ajoutés avec leur autorisation.
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-medium text-muted uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                Nous contacter
              </span>
              <h2 className="text-3xl lg:text-4xl mt-3 mb-6 text-charcoal" style={{ fontFamily: 'var(--font-display)' }}>
                Commencer une collaboration.
              </h2>
              <p className="text-muted leading-relaxed mb-8 text-sm">
                Que vous souhaitiez commanditer un projet, offrir du matériel, partager votre expertise ou simplement en savoir plus, nous sommes ouverts à toute forme de collaboration.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-heka-light flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-heka" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href={`mailto:${site.emailPartnership}`} className="text-heka hover:underline">
                    {site.emailPartnership}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-heka-light flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-heka" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-muted">Polytechnique Montréal, Montréal (Québec)</span>
                </div>
              </div>
            </div>

            {sent ? (
              <div className="flex items-center justify-center p-12 rounded-2xl bg-heka-light border border-heka-mid">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-heka flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: 'var(--font-display)' }}>Message envoyé</h3>
                  <p className="text-sm text-muted">Nous vous répondrons dans les meilleurs délais.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {partnershipForm.fields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-xs font-medium text-charcoal mb-2">
                      {field.label}{field.required ? ' *' : ''}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        required={field.required}
                        rows={field.rows ?? 4}
                        value={form[field.id] ?? ''}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder={field.placeholder}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        required={field.required}
                        value={form[field.id] ?? ''}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Sélectionner</option>
                        {field.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.id] ?? ''}
                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className={inputClass}
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
                <button type="submit" className="w-full px-6 py-3.5 rounded-xl bg-heka text-white font-semibold text-sm hover:bg-[#2D5585] transition-colors">
                  {partnershipForm.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
