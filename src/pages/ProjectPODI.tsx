import { asset } from '../utils/assets';
import { currentProjects } from '../data/projects';

interface Props {
    navigate: (page: string) => void;
}

// Tout le contenu de cette page provient de src/data/projects.ts (projet "podi").
// Pour modifier les textes, les statistiques, les disciplines ou l'état du
// developpement, editez ce fichier de donnees — pas cette page.
const project = currentProjects.find((p) => p.slug === 'podi');

export default function ProjectPODI({ navigate }: Props) {
    const handleNav = (page: string) => {
        navigate(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!project) return null;

    const problemStats = project.problemStats ?? [];
    const technicalObjectives = project.technicalObjectives ?? [];
    const roadmap = project.roadmap ?? [];
    const gallery = project.images.gallery ?? [];

    return (
        <div className='pt-16'>
            {/* Hero */}
            <section className='relative py-24 lg:py-32 bg-[#111110] overflow-hidden'>
                <div
                    className='absolute inset-0 bg-cover bg-center opacity-20'
                    style={{
                        backgroundImage: `url('${asset(project.images.hero)}')`,
                    }}
                />
                <div className='relative max-w-7xl mx-auto px-6 lg:px-10'>
                    <button
                        onClick={() => handleNav('projets')}
                        className='inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-10 transition-colors'
                    >
                        ← Retour aux projets
                    </button>
                    <div
                        className='inline-block px-2.5 py-1 rounded-md bg-[#FEF0EF] text-[#C8281A] text-xs font-medium mb-4'
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        {project.name} — {project.category}
                    </div>
                    <h1
                        className='text-4xl lg:text-6xl text-white leading-tight max-w-3xl'
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {project.title}
                    </h1>
                </div>
            </section>

            {/* Le problème */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-16 items-start'>
                        <div>
                            <span
                                className='text-xs font-medium text-[#C8281A] uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                01 — Le problème
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Un métier physiquement éprouvant.
                            </h2>
                            <div className='space-y-4 text-[#7A7269] leading-relaxed text-sm'>
                                {(project.problemBody ?? [project.problem]).map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                            {problemStats.map((stat, i) => (
                                <div
                                    key={i}
                                    className='p-6 rounded-2xl border border-[#E2DDD5] bg-[#F8F7F3]'
                                >
                                    <div
                                        className='text-2xl font-light text-[#C8281A] mb-1'
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className='text-xs text-[#7A7269] leading-snug'>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* La solution */}
            <section className='py-20 bg-[#F8F7F3]'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-16 items-center'>
                        <div
                            className='rounded-2xl h-72 lg:h-96 bg-cover bg-center bg-[#FEF0EF]'
                            style={{
                                backgroundImage: `url('${asset(project.images.solution ?? project.images.hero)}')`,
                            }}
                        />
                        <div>
                            <span
                                className='text-xs font-medium text-[#C8281A] uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                02 — La solution
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {project.solutionTitle ?? project.name}
                            </h2>
                            <div className='space-y-4 text-[#7A7269] leading-relaxed text-sm'>
                                {(project.solutionBody ?? [project.description ?? project.shortDescription]).map(
                                    (paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ),
                                )}
                            </div>
                            {project.solutionNote && (
                                <p className='mt-6 text-xs text-[#7A7269] italic'>{project.solutionNote}</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectifs techniques */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='mb-12'>
                        <span
                            className='text-xs font-medium text-[#C8281A] uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            03 — Objectifs techniques
                        </span>
                        <h2
                            className='text-3xl lg:text-4xl mt-3 text-[#111110]'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Ce que {project.name} doit accomplir.
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {technicalObjectives.map((item, i) => (
                            <div
                                key={item.title}
                                className='p-6 rounded-2xl border border-[#E2DDD5] hover:border-[#F5BCBA] transition-colors'
                            >
                                <div className='w-7 h-7 rounded-full bg-[#FEF0EF] flex items-center justify-center mb-4'>
                                    <span
                                        className='text-xs font-medium text-[#C8281A]'
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className='font-semibold text-[#111110] mb-2 text-sm'>{item.title}</h3>
                                <p className='text-xs text-[#7A7269] leading-relaxed'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Disciplines & Statut */}
            <section className='py-20 bg-[#F8F7F3]'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-12'>
                        <div>
                            <span
                                className='text-xs font-medium text-[#C8281A] uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                04 — Disciplines mobilisées
                            </span>
                            <h2
                                className='text-2xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Une équipe pluridisciplinaire.
                            </h2>
                            <div className='flex flex-wrap gap-2'>
                                {project.disciplines.map((d) => (
                                    <span
                                        key={d}
                                        className='px-3 py-1.5 rounded-lg text-xs font-medium text-[#C8281A] bg-[#FEF0EF] border border-[#F5BCBA]'
                                    >
                                        {d}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span
                                className='text-xs font-medium text-[#C8281A] uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                05 — État du développement
                            </span>
                            <h2
                                className='text-2xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Où en sommes-nous?
                            </h2>
                            <div className='space-y-3'>
                                {roadmap.map((step) => (
                                    <div
                                        key={step.label}
                                        className='flex items-center justify-between py-3 border-b border-[#E2DDD5] last:border-0'
                                    >
                                        <span className='text-sm text-[#111110]'>{step.label}</span>
                                        <span
                                            className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                                                step.status === 'Complété'
                                                    ? 'text-[#1A6B4A] bg-[#EDF5F0]'
                                                    : step.status === 'En cours'
                                                      ? 'text-[#C8281A] bg-[#FEF0EF]'
                                                      : 'text-[#7A7269] bg-[#F2EEE8]'
                                            }`}
                                            style={{ fontFamily: 'var(--font-mono)' }}
                                        >
                                            {step.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Travaux en cours & prochaines étapes */}
            {(project.currentWork?.length || project.nextSteps?.length) && (
                <section className='py-20 bg-white'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <span
                            className='text-xs font-medium text-[#C8281A] uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            06 — Travaux en cours
                        </span>
                        <h2
                            className='text-2xl mt-3 mb-8 text-[#111110]'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Sur quoi l'équipe travaille.
                        </h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {[
                                { heading: 'En ce moment', items: project.currentWork ?? [] },
                                { heading: 'Prochaines étapes', items: project.nextSteps ?? [] },
                            ]
                                .filter((block) => block.items.length > 0)
                                .map((block) => (
                                    <div
                                        key={block.heading}
                                        className='p-6 rounded-2xl border border-[#E2DDD5] bg-[#F8F7F3]'
                                    >
                                        <h3 className='font-semibold text-[#111110] mb-4 text-sm'>{block.heading}</h3>
                                        <ul className='space-y-2.5'>
                                            {block.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className='flex gap-3 text-sm text-[#7A7269] leading-relaxed'
                                                >
                                                    <span className='text-[#C8281A] mt-0.5'>—</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Galerie */}
            <section className='py-20 bg-[#F8F7F3]'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <span
                        className='text-xs font-medium text-[#7A7269] uppercase tracking-widest'
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        07 — Galerie
                    </span>
                    <h2
                        className='text-2xl mt-3 mb-8 text-[#111110]'
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Prototype en images.
                    </h2>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        {gallery.length > 0
                            ? gallery.map((image) => (
                                  <div
                                      key={image}
                                      className='aspect-square rounded-xl bg-cover bg-center border border-[#E2DDD5]'
                                      style={{ backgroundImage: `url('${asset(image)}')` }}
                                  />
                              ))
                            : [1, 2, 3, 4].map((i) => (
                                  <div
                                      key={i}
                                      className='aspect-square rounded-xl border border-dashed border-[#E2DDD5] bg-white flex items-center justify-center text-xs text-center text-[#C8C3BB] p-4'
                                      style={{ fontFamily: 'var(--font-mono)' }}
                                  >
                                      Photo prototype
                                      <br />à venir
                                  </div>
                              ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='py-16 bg-[#FEF0EF]'>
                <div className='max-w-3xl mx-auto px-6 text-center'>
                    <h2
                        className='text-2xl lg:text-3xl text-[#111110] mb-4'
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Rejoindre l'équipe {project.name}?
                    </h2>
                    <p className='text-[#7A7269] mb-8 text-sm'>
                        Nous cherchons des étudiants en génie mécanique, industriel et biomécanique.
                    </p>
                    <button
                        onClick={() => handleNav('contact')}
                        className='px-6 py-3.5 rounded-xl bg-[#C8281A] text-white font-semibold text-sm hover:bg-[#A01C10] transition-colors'
                    >
                        Soumettre ma candidature
                    </button>
                </div>
            </section>
        </div>
    );
}
