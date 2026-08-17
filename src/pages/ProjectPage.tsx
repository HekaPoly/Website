import { getAchievementsByProject, getTeamMembersByProject, getMemberInitials } from '../utils/content';
import type { Project } from '../types/content';
import { asset } from '../utils/assets';

const THEME_MAP = {
    podi: {
        accent: '#C8281A',
        accentBg: '#FEF0EF',
        accentBorder: '#F5BCBA',
        heroBg: '#111110',
        hover: '#A01C10',
        completed: '#C8281A',
        current: '#f2c664',
        upcoming: '#E2DDD5',
    },
    bira: {
        accent: '#1B4F72',
        accentBg: '#E8F0F7',
        accentBorder: '#A8C5DC',
        heroBg: '#0F2D42',
        hover: '#163F5C',
        completed: '#1B4F72',
        current: '#f2c664',
        upcoming: '#E2DDD5',
    },
    default: {
        accent: '#41699d',
        accentBg: '#EAF0F8',
        accentBorder: '#B8CDDF',
        heroBg: '#111110',
        hover: '#2D5585',
        completed: '#41699d',
        current: '#f2c664',
        upcoming: '#E2DDD5',
    },
};

interface Props {
    project: Project;
    navigate: (page: string) => void;
}

export default function ProjectPage({ project, navigate }: Props) {
    const t = THEME_MAP[project.theme] ?? THEME_MAP.default;
    const achievements = getAchievementsByProject(project.slug);
    const teamMembers = getTeamMembersByProject(project.slug);

    const handleNav = (page: string) => {
        navigate(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='pt-16'>
            {/* Hero */}
            <section
                className='relative py-24 lg:py-32 overflow-hidden'
                style={{ backgroundColor: t.heroBg }}
            >
                <div
                    className='absolute inset-0 bg-cover bg-center opacity-20'
                    style={{ backgroundImage: `url('${asset(project.images.hero)}')` }}
                />
                <div className='relative max-w-7xl mx-auto px-6 lg:px-10'>
                    <button
                        onClick={() => handleNav('projets')}
                        className='inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-10 transition-colors'
                    >
                        ← Retour aux projets
                    </button>
                    <div
                        className='inline-block px-2.5 py-1 rounded-md text-xs font-medium mb-4'
                        style={{
                            backgroundColor: t.accentBg,
                            color: t.accent,
                            fontFamily: 'var(--font-mono)',
                        }}
                    >
                        {project.name} — {project.category}
                    </div>
                    <h1
                        className='text-4xl lg:text-6xl text-white leading-tight max-w-3xl'
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {project.title}
                    </h1>
                    <div className='mt-8 flex flex-wrap gap-2'>
                        {project.disciplines.map((d) => (
                            <span
                                key={d}
                                className='px-3 py-1 rounded-full text-xs text-white/70 bg-white/10'
                            >
                                {d}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Le problème */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-16 items-start'>
                        <div>
                            <span
                                className='text-xs font-medium uppercase tracking-widest'
                                style={{ color: t.accent, fontFamily: 'var(--font-mono)' }}
                            >
                                01 — Le problème
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 mb-6 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {project.problem}
                            </h2>
                            {project.problemBody && (
                                <div className='space-y-4 text-muted leading-relaxed text-sm'>
                                    {project.problemBody.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                        {project.problemStats && (
                            <div className='grid grid-cols-2 gap-4'>
                                {project.problemStats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className='p-6 rounded-2xl border border-border bg-cream'
                                    >
                                        <div
                                            className='text-3xl font-light mb-2'
                                            style={{
                                                color: t.accent,
                                                fontFamily: 'var(--font-display)',
                                            }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div className='text-xs text-muted leading-snug'>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {!project.problemStats && (
                            <div
                                className='rounded-2xl overflow-hidden h-64 bg-cover bg-center'
                                style={{
                                    backgroundColor: t.accentBg,
                                    backgroundImage: `url('${asset(project.images.hero)}')`,
                                }}
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* La solution */}
            <section className='py-20 bg-cream'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-16 items-center'>
                        <div
                            className='rounded-2xl overflow-hidden h-80 bg-cover bg-center'
                            style={{
                                backgroundColor: t.accentBg,
                                backgroundImage: `url('${asset(project.images.solution)}')`,
                            }}
                        />
                        <div>
                            <span
                                className='text-xs font-medium uppercase tracking-widest'
                                style={{ color: t.accent, fontFamily: 'var(--font-mono)' }}
                            >
                                02 — La solution
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 mb-6 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {project.solutionTitle ?? project.shortDescription}
                            </h2>
                            {project.solutionBody && (
                                <div className='space-y-4 text-muted leading-relaxed text-sm'>
                                    {project.solutionBody.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            )}
                            {!project.solutionBody && (
                                <p className='text-muted leading-relaxed text-sm'>{project.description}</p>
                            )}
                            {project.solutionNote && (
                                <p
                                    className='mt-4 text-xs text-muted italic border-l-2 pl-4'
                                    style={{ borderColor: t.accent }}
                                >
                                    {project.solutionNote}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture (BIRA) */}
            {project.architecture && (
                <section className='py-20 bg-white'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <div className='mb-12 text-center'>
                            <span
                                className='text-xs font-medium uppercase tracking-widest'
                                style={{ color: t.accent, fontFamily: 'var(--font-mono)' }}
                            >
                                Architecture du système
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {project.architecture.sectionSubtitle}
                            </h2>
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            {project.architecture.steps.map((step, i) => (
                                <div
                                    key={i}
                                    className='flex flex-col md:flex-row items-center gap-4 flex-1'
                                >
                                    <div
                                        className='flex-1 p-6 rounded-2xl border text-center'
                                        style={{
                                            borderColor: t.accentBorder,
                                            backgroundColor: t.accentBg,
                                        }}
                                    >
                                        <div
                                            className='text-xs font-medium mb-2'
                                            style={{
                                                color: t.accent,
                                                fontFamily: 'var(--font-mono)',
                                            }}
                                        >
                                            {step.step}
                                        </div>
                                        <h3 className='font-semibold text-charcoal mb-1 text-sm'>{step.title}</h3>
                                        <p className='text-xs text-muted'>{step.desc}</p>
                                    </div>
                                    {i < project.architecture!.steps.length - 1 && (
                                        <div
                                            className='text-2xl font-light rotate-90 md:rotate-0'
                                            style={{ color: t.accent }}
                                        >
                                            →
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Objectifs techniques */}
            {project.technicalObjectives && (
                <section className={`py-20 ${project.architecture ? 'bg-cream' : 'bg-white'}`}>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <div className='mb-12'>
                            <span
                                className='text-xs font-medium uppercase tracking-widest'
                                style={{ color: t.accent, fontFamily: 'var(--font-mono)' }}
                            >
                                03 — Objectifs techniques
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Ce que nous cherchons à atteindre.
                            </h2>
                        </div>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {project.technicalObjectives.map((obj, i) => (
                                <div
                                    key={i}
                                    className='p-7 rounded-2xl border border-border bg-white hover:border-heka-mid transition-colors'
                                >
                                    <div
                                        className='w-7 h-7 rounded-full flex items-center justify-center mb-4'
                                        style={{ backgroundColor: t.accentBg }}
                                    >
                                        <span
                                            className='text-xs font-medium'
                                            style={{
                                                color: t.accent,
                                                fontFamily: 'var(--font-mono)',
                                            }}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h3 className='font-semibold text-charcoal mb-2 text-sm'>{obj.title}</h3>
                                    <p className='text-xs text-muted leading-relaxed'>{obj.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Roadmap */}
            {project.roadmap && (
                <section className='py-20 bg-[#111110]'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <div className='mb-12'>
                            <span
                                className='text-xs font-medium text-white/40 uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                04 — Feuille de route
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 text-white'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Où en sommes-nous.
                            </h2>
                        </div>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {project.roadmap.map((step, i) => {
                                const isCompleted = step.status === 'Complété';
                                const isCurrent = step.status === 'En cours';
                                return (
                                    <div
                                        key={i}
                                        className='p-5 rounded-xl border border-white/10 bg-white/5'
                                    >
                                        <div className='flex items-center gap-2 mb-3'>
                                            <div
                                                className='w-2.5 h-2.5 rounded-full flex-shrink-0'
                                                style={{
                                                    backgroundColor: isCompleted
                                                        ? t.accent
                                                        : isCurrent
                                                          ? '#f2c664'
                                                          : '#3D3D3A',
                                                }}
                                            />
                                            <span
                                                className='text-xs font-medium'
                                                style={{
                                                    color: isCompleted ? t.accent : isCurrent ? '#f2c664' : '#7A7269',
                                                    fontFamily: 'var(--font-mono)',
                                                }}
                                            >
                                                {step.status}
                                            </span>
                                        </div>
                                        <p className='text-sm text-white/80'>{step.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Travaux actuels */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-16'>
                        <div>
                            <span
                                className='text-xs font-medium uppercase tracking-widest'
                                style={{ color: t.accent, fontFamily: 'var(--font-mono)' }}
                            >
                                Travaux en cours
                            </span>
                            <h2
                                className='text-2xl lg:text-3xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Ce sur quoi nous travaillons.
                            </h2>
                            <ul className='space-y-3'>
                                {project.currentWork?.map((item, i) => (
                                    <li
                                        key={i}
                                        className='flex items-start gap-3 text-sm text-[#7A7269]'
                                    >
                                        <span
                                            className='mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0'
                                            style={{ backgroundColor: t.accentBg }}
                                        >
                                            <span
                                                className='w-1.5 h-1.5 rounded-full'
                                                style={{ backgroundColor: t.accent }}
                                            />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span
                                className='text-xs font-medium uppercase tracking-widest'
                                style={{ color: t.accent, fontFamily: 'var(--font-mono)' }}
                            >
                                Prochaines étapes
                            </span>
                            <h2
                                className='text-2xl lg:text-3xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Ce qui arrive ensuite.
                            </h2>
                            <ul className='space-y-3'>
                                {project.nextSteps?.map((item, i) => (
                                    <li
                                        key={i}
                                        className='flex items-start gap-3 text-sm text-[#7A7269]'
                                    >
                                        <span
                                            className='mt-0.5 text-xs text-[#C8C3BB]'
                                            style={{ fontFamily: 'var(--font-mono)' }}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Réalisations liées */}
            {achievements.length > 0 && (
                <section className='py-20 bg-[#F8F7F3]'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <div className='mb-10'>
                            <span
                                className='text-xs font-medium uppercase tracking-widest'
                                style={{ color: t.accent, fontFamily: 'var(--font-mono)' }}
                            >
                                Réalisations
                            </span>
                            <h2
                                className='text-2xl lg:text-3xl mt-3 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Ce que nous avons accompli.
                            </h2>
                        </div>
                        <div className='space-y-4'>
                            {achievements.map((a) => (
                                <div
                                    key={a.id}
                                    className='flex gap-6 items-start p-6 rounded-xl bg-white border border-[#E2DDD5]'
                                >
                                    <div className='flex-shrink-0 w-24'>
                                        <div
                                            className='text-xs text-[#7A7269]'
                                            style={{ fontFamily: 'var(--font-mono)' }}
                                        >
                                            {a.date}
                                        </div>
                                        {a.result && (
                                            <div
                                                className='mt-1 text-xs font-medium'
                                                style={{
                                                    color: t.accent,
                                                    fontFamily: 'var(--font-mono)',
                                                }}
                                            >
                                                {a.result}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className='text-sm font-semibold text-[#111110] mb-1'>{a.title}</h4>
                                        <p className='text-xs text-[#7A7269] leading-relaxed'>{a.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Équipe */}
            {teamMembers.length > 0 && (
                <section className='py-20 bg-white'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <div className='mb-10'>
                            <span
                                className='text-xs font-medium uppercase tracking-widest'
                                style={{ color: t.accent, fontFamily: 'var(--font-mono)' }}
                            >
                                L'équipe
                            </span>
                            <h2
                                className='text-2xl lg:text-3xl mt-3 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Qui travaille sur {project.name}.
                            </h2>
                        </div>
                        <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {teamMembers.map((m) => (
                                <div
                                    key={m.id}
                                    className='p-5 rounded-xl border border-[#E2DDD5] bg-[#F8F7F3] text-center'
                                >
                                    <div
                                        className='w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden'
                                        style={{ backgroundColor: t.accentBg }}
                                    >
                                        {m.photo ? (
                                            <img
                                                src={asset(m.photo)}
                                                alt={m.name}
                                                className='w-full h-full object-cover'
                                            />
                                        ) : (
                                            <span
                                                className='text-sm font-semibold'
                                                style={{
                                                    color: t.accent,
                                                    fontFamily: 'var(--font-mono)',
                                                }}
                                            >
                                                {getMemberInitials(m.name)}
                                            </span>
                                        )}
                                    </div>
                                    <div className='text-sm font-medium text-[#111110]'>{m.name}</div>
                                    <div className='text-xs text-[#7A7269] mt-0.5'>{m.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className='py-20 bg-[#F8F7F3] border-t border-[#E2DDD5]'>
                <div className='max-w-3xl mx-auto px-6 text-center'>
                    <h2
                        className='text-2xl lg:text-3xl text-[#111110] mb-4'
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Intéressé·e par {project.name}?
                    </h2>
                    <p className='text-[#7A7269] mb-8 text-sm'>
                        Rejoignez l'équipe ou contactez-nous pour en savoir plus.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                        <button
                            onClick={() => handleNav('contact')}
                            className='px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-colors'
                            style={{ backgroundColor: t.accent }}
                        >
                            Rejoindre {project.name}
                        </button>
                        <button
                            onClick={() => handleNav('projets')}
                            className='px-6 py-3.5 rounded-xl border border-[#E2DDD5] text-[#111110] font-semibold text-sm hover:bg-[#F2EEE8] transition-colors'
                        >
                            Voir tous les projets
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
