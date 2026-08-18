import { useState, useEffect, useRef } from 'react';
import { site } from '../data/site';
import { currentProjects } from '../data/projects';
import { partners } from '../data/partners';
import { asset } from '../utils/assets';
import {
    getLatestAchievements,
    getAchievementStatusLabel,
    getAchievementStatusStyle,
    getProjectBadgeStyle,
    ACHIEVEMENT_TYPE_LABELS,
} from '../utils/content';

interface HomeProps {
    navigate: (page: string) => void;
}

function useCountUp(target: number, duration = 1500) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = performance.now();
                    const animate = (now: number) => {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.round(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
}

function StatCard({ raw, label }: { raw: string; label: string }) {
    const numeric = parseInt(raw.replace(/\D/g, ''), 10);
    const suffix = raw.replace(/\d/g, '');
    const isNumeric = !isNaN(numeric) && numeric > 0;
    const { count, ref } = useCountUp(isNumeric ? numeric : 0);

    return (
        <div
            ref={ref}
            className='text-center'
        >
            <div
                className='text-4xl lg:text-5xl font-light text-heka mb-2'
                style={{ fontFamily: 'var(--font-display)' }}
            >
                {isNumeric ? `${count}${suffix}` : raw}
            </div>
            <div className='text-sm text-muted'>{label}</div>
        </div>
    );
}

const PROJECT_THEME = {
    podi: {
        accent: '#C8281A',
        accentBg: '#FEF0EF',
        accentBorder: '#F5BCBA',
        pageId: 'projet-podi',
    },

    bira: {
        accent: '#1B4F72',
        accentBg: '#E8F0F7',
        accentBorder: '#A8C5DC',
        pageId: 'projet-bira',
    },

    default: {
        accent: '#6B7280',
        accentBg: '#F3F4F6',
        accentBorder: '#D1D5DB',
        pageId: 'projets',
    },
};
export default function Home({ navigate }: HomeProps) {
    const handleNav = (page: string) => {
        navigate(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const recentAchievements = getLatestAchievements(3);

    return (
        <div>
            {/* Hero */}
            <section className='relative min-h-screen flex items-center pt-16 overflow-hidden'>
                {/* Video background */}
                <video
                    className='absolute inset-0 h-full w-full object-cover'
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src={asset('/videos/heka-hero.mp4')}
                        type='video/mp4'
                    />
                </video>

                {/* Uniform overlay */}
                <div className='absolute inset-0 bg-black/45' />

                {/* Optional subtle blue tint */}
                <div className='absolute inset-0 bg-heka/10' />

                {/* Content */}
                <div className='relative z-10 w-full px-6 lg:px-20 py-24 lg:py-32'>
                    <div className='max-w-3xl'>
                        <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8'>
                            <span className='w-1.5 h-1.5 rounded-full bg-white' />

                            <span
                                className='text-xs font-medium text-white/90'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Société technique — {site.organization}
                            </span>
                        </div>

                        <h1
                            className='text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight text-white mb-7 font-bold'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {site.tagline}
                        </h1>

                        <p className='text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl'>
                            {site.description}
                        </p>

                        <div className='flex flex-col sm:flex-row gap-3'>
                            <button
                                onClick={() => handleNav('projets')}
                                className='px-7 py-3.5 rounded-xl bg-heka text-white font-semibold text-sm hover:bg-[#2D5585] hover:-translate-y-0.5 transition-all'
                            >
                                Découvrir nos projets
                            </button>

                            <button
                                onClick={() => handleNav('contact')}
                                className='px-7 py-3.5 rounded-xl bg-white text-charcoal font-semibold text-sm hover:bg-white/90 hover:-translate-y-0.5 transition-all'
                            >
                                Rejoindre Héka
                            </button>
                        </div>

                        <button
                            onClick={() => handleNav('partenaires')}
                            className='mt-7 text-sm text-white/65 hover:text-white transition-colors'
                        >
                            Vous êtes une organisation ?{' '}
                            <span className='underline underline-offset-4'>Collaborer avec nous</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Défis */}
            <section className='py-24 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='mb-14'>
                        <span
                            className='text-xs font-medium text-muted uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            02 — Les défis auxquels nous répondons
                        </span>
                        <h2
                            className='text-3xl lg:text-4xl mt-3 text-charcoal'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Deux problèmes humains concrets. Deux équipes en action.
                        </h2>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        {currentProjects.map((project) => {
                            const t = PROJECT_THEME[project.theme] ?? PROJECT_THEME.default;
                            return (
                                <div
                                    key={project.slug}
                                    className='group relative overflow-hidden rounded-2xl border border-border bg-cream'
                                >
                                    <div
                                        className='h-56 bg-cover bg-center'
                                        style={{
                                            backgroundColor: t.accent,
                                            backgroundImage: `url('${asset(project.images.hero)}')`,
                                        }}
                                    >
                                        <div
                                            className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent'
                                            style={{ top: 0, height: '14rem' }}
                                        />
                                    </div>
                                    <div className='p-8'>
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
                                        <h3 className='text-xl font-semibold text-charcoal mb-3'>
                                            {project.challenge}
                                        </h3>
                                        <p className='text-muted text-sm leading-relaxed mb-6'>{project.problem}</p>
                                        <p className='text-charcoal text-sm leading-relaxed mb-6'>
                                            {project.shortDescription}
                                        </p>
                                        {
                                            <button
                                                onClick={() => handleNav(`projet-${project.slug}`)}
                                                className='inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all'
                                                style={{ color: t.accent }}
                                            >
                                                Découvrir le projet →
                                            </button>
                                        }
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className='py-24 bg-charcoal'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='mb-14'>
                        <span
                            className='text-xs font-medium text-white/40 uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            03 — Notre mission
                        </span>
                        <h2
                            className='text-3xl lg:text-4xl mt-3 text-white'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {site.mission.map((p) => p.title).join('. ')}.
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-3 gap-6'>
                        {site.mission.map((pillar, i) => (
                            <div
                                key={i}
                                className='p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 transition-colors'
                            >
                                <div
                                    className='text-xs font-medium text-heka-yellow mb-6'
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <h3
                                    className='text-2xl text-white mb-4'
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {pillar.title}
                                </h3>
                                <p className='text-white/60 text-sm leading-relaxed'>{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approche */}
            <section className='py-24 bg-cream'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-16 items-start'>
                        <div>
                            <span
                                className='text-xs font-medium text-muted uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                04 — Notre approche
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 mb-6 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Une démarche d'ingénierie rigoureuse.
                            </h2>
                            <p className='text-muted leading-relaxed'>
                                Nos projets ne sont pas de simples concepts. Chaque solution passe par un processus
                                structuré, de la compréhension du problème réel jusqu'à la validation auprès d'experts.
                            </p>
                        </div>
                        <div className='space-y-0'>
                            {site.processSteps.map((step, i) => (
                                <div
                                    key={i}
                                    className='flex gap-5 group'
                                >
                                    <div className='flex flex-col items-center'>
                                        <div className='w-9 h-9 rounded-full border-2 border-border group-hover:border-heka bg-white flex items-center justify-center transition-colors shrink-0'>
                                            <span
                                                className='text-xs font-medium text-muted group-hover:text-heka transition-colors'
                                                style={{ fontFamily: 'var(--font-mono)' }}
                                            >
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        {i < site.processSteps.length - 1 && (
                                            <div className='w-px flex-1 bg-border my-1 min-h-8' />
                                        )}
                                    </div>
                                    <div className='pb-6 pt-1.5'>
                                        <p className='text-sm font-medium text-charcoal group-hover:text-heka transition-colors'>
                                            {step.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className='py-20 bg-heka-light'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                        {site.statistics.map((stat, i) => (
                            <StatCard
                                key={i}
                                raw={stat.value}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projets vedettes */}
            <section className='py-24 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4'>
                        <div>
                            <span
                                className='text-xs font-medium text-muted uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                05 — Projets vedettes
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Ce que nous construisons.
                            </h2>
                        </div>
                        <button
                            onClick={() => handleNav('projets')}
                            className='text-sm font-medium text-heka hover:text-[#2D5585] transition-colors shrink-0'
                        >
                            Voir tous les projets →
                        </button>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        {currentProjects.map((project) => {
                            const t = PROJECT_THEME[project.theme] ?? PROJECT_THEME.default;
                            return (
                                <div
                                    key={project.slug}
                                    className='rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow'
                                >
                                    <div
                                        className='h-52 bg-cover bg-center'
                                        style={{
                                            backgroundColor: t.accentBg,
                                            backgroundImage: `url('${asset(project.images.hero)}')`,
                                        }}
                                    />
                                    <div className='p-8'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <span
                                                className='px-2.5 py-1 rounded-md text-xs font-medium border'
                                                style={{
                                                    backgroundColor: t.accentBg,
                                                    color: t.accent,
                                                    borderColor: t.accentBorder,
                                                    fontFamily: 'var(--font-mono)',
                                                }}
                                            >
                                                {project.name}
                                            </span>
                                            <span
                                                className='px-2.5 py-1 rounded-md text-xs font-medium bg-[#F2EEE8] text-muted'
                                                style={{ fontFamily: 'var(--font-mono)' }}
                                            >
                                                {project.status}
                                            </span>
                                        </div>
                                        <h3 className='text-xl font-semibold text-charcoal mb-3'>{project.title}</h3>
                                        <p className='text-sm text-muted leading-relaxed mb-5'>{project.problem}</p>
                                        <div className='flex flex-wrap gap-2 mb-6'>
                                            {project.disciplines.slice(0, 3).map((d) => (
                                                <span
                                                    key={d}
                                                    className='px-2.5 py-1 rounded-md text-xs text-muted bg-[#F2EEE8]'
                                                >
                                                    {d}
                                                </span>
                                            ))}
                                            {project.disciplines.length > 3 && (
                                                <span className='px-2.5 py-1 rounded-md text-xs text-muted bg-[#F2EEE8]'>
                                                    +{project.disciplines.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleNav(`projet-${project.slug}`)}
                                            className='text-sm font-semibold hover:opacity-75 transition-opacity'
                                            style={{ color: t.accent }}
                                        >
                                            Voir le projet →
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Réalisations récentes */}
            {recentAchievements.length > 0 && (
                <section className='py-24 bg-cream'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <div className='flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4'>
                            <div>
                                <span
                                    className='text-xs font-medium text-muted uppercase tracking-widest'
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    06 — Réalisations récentes
                                </span>
                                <h2
                                    className='text-3xl lg:text-4xl mt-3 text-charcoal'
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Notre parcours jusqu'ici.
                                </h2>
                            </div>
                            <button
                                onClick={() => handleNav('realisations')}
                                className='text-sm font-medium text-heka hover:text-[#2D5585] transition-colors shrink-0'
                            >
                                Toutes les réalisations →
                            </button>
                        </div>
                        <div className='space-y-4'>
                            {recentAchievements.map((r) => (
                                <div
                                    key={r.id}
                                    className='flex flex-col sm:flex-row gap-4 sm:gap-8 items-start p-6 rounded-2xl bg-white border border-border hover:border-heka-mid transition-colors group'
                                >
                                    <div className='shrink-0 w-32'>
                                        <div
                                            className='text-xs text-muted'
                                            style={{ fontFamily: 'var(--font-mono)' }}
                                        >
                                            {r.date}
                                        </div>
                                        <span
                                            className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${getAchievementStatusStyle(r.status)}`}
                                            style={{ fontFamily: 'var(--font-mono)' }}
                                        >
                                            {getAchievementStatusLabel(r.status)}
                                        </span>
                                    </div>
                                    <div>
                                        <div className='flex flex-wrap items-center gap-2 mb-1'>
                                            <span
                                                className='text-xs font-medium text-muted uppercase tracking-wider'
                                                style={{ fontFamily: 'var(--font-mono)' }}
                                            >
                                                {ACHIEVEMENT_TYPE_LABELS[r.type] ?? r.type}
                                            </span>
                                            {r.project && (
                                                <span
                                                    className={`px-2 py-0.5 rounded text-xs font-medium ${getProjectBadgeStyle(r.project)}`}
                                                    style={{ fontFamily: 'var(--font-mono)' }}
                                                >
                                                    {r.project.toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                        <h4 className='text-base font-semibold text-charcoal mb-1 group-hover:text-heka transition-colors'>
                                            {r.title}
                                        </h4>
                                        <p className='text-sm text-muted leading-relaxed'>{r.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Recrutement */}
            <section className='py-24 bg-[#2D5585]'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-16 items-center'>
                        <div>
                            <span
                                className='text-xs font-medium text-white/60 uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                07 — Rejoindre Héka
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 mb-6 text-white'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Construis la prochaine version de Héka.
                            </h2>
                            <p className='text-white/80 leading-relaxed mb-8'>
                                Que tu sois en génie mécanique, électrique, logiciel ou dans une autre discipline, Héka
                                t'offre l'opportunité de travailler sur de vrais prototypes et de représenter
                                Polytechnique en compétition.
                            </p>
                            <ul className='space-y-3 mb-10'>
                                {site.recruitmentBenefits.map((b, i) => (
                                    <li
                                        key={i}
                                        className='flex items-start gap-3 text-sm text-white/80'
                                    >
                                        <span className='mt-0.5 w-4 h-4 rounded-full border border-white/40 flex items-center justify-center shrink-0'>
                                            <span className='w-1.5 h-1.5 rounded-full bg-white' />
                                        </span>
                                        {b.label}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => handleNav('contact')}
                                className='px-6 py-3.5 rounded-xl bg-heka-yellow text-charcoal font-semibold text-sm hover:bg-[#e8b84e] transition-colors shrink-0'
                            >
                                Soumettre ma candidature
                            </button>
                        </div>
                        <div
                            className='rounded-2xl overflow-hidden h-80 lg:h-112.5 bg-cover bg-center bg-[#1B3D63]'
                            style={{
                                backgroundImage: `url('${asset('public/images/projects/bira/IMG_0427.JPG')}')`,
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Partenaires */}
            <section className='py-24 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='text-center mb-12'>
                        <span
                            className='text-xs font-medium text-muted uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            08 — Partenaires
                        </span>
                        <h2
                            className='text-3xl lg:text-4xl mt-3 mb-4 text-charcoal'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Construire ensemble.
                        </h2>
                        <p className='text-muted max-w-xl mx-auto text-sm leading-relaxed'>
                            Nos partenaires contribuent au développement de Héka par du financement, de l'équipement, du
                            mentorat, de l'expertise et des occasions de validation.
                        </p>
                    </div>

                    {partners.length > 0 ? (
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 items-center'>
                            {partners.map((p) => (
                                <a
                                    key={p.id}
                                    href={p.website || '#'}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center justify-center'
                                >
                                    {p.logo ? (
                                        <img
                                            src={asset(p.logo)}
                                            alt={p.name}
                                            className='h-16 w-auto object-contain'
                                        />
                                    ) : (
                                        <span className='text-sm font-medium text-muted'>{p.name}</span>
                                    )}
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-10'>
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className='h-20 rounded-xl border border-dashed border-border flex items-center justify-center text-xs text-muted text-center p-4'
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    Logo partenaire {i}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className='text-center'>
                        <button
                            onClick={() => handleNav('partenaires')}
                            className='px-6 py-3.5 rounded-xl border border-border text-charcoal font-semibold text-sm hover:bg-[#F2EEE8] transition-colors'
                        >
                            Devenir partenaire
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className='py-20 bg-cream border-t border-border'>
                <div className='max-w-3xl mx-auto px-6 text-center'>
                    <h2
                        className='text-3xl lg:text-4xl text-charcoal mb-4'
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Vous souhaitez rejoindre, soutenir ou collaborer avec {site.name}?
                    </h2>
                    <p className='text-muted mb-10'>Parlons-en.</p>
                    <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                        <button
                            onClick={() => handleNav('contact')}
                            className='px-6 py-3.5 rounded-xl bg-heka text-white font-semibold text-sm hover:bg-[#2D5585] transition-colors'
                        >
                            Recrutement
                        </button>
                        <button
                            onClick={() => handleNav('partenaires')}
                            className='px-6 py-3.5 rounded-xl border border-border text-charcoal font-semibold text-sm hover:bg-[#F2EEE8] transition-colors'
                        >
                            Partenariats et collaborations
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
