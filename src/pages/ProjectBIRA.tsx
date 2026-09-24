import { asset } from '../utils/assets';
import { useLocale } from '../i18n';

interface Props {
    navigate: (page: string) => void;
}

export default function ProjectBIRA({ navigate }: Props) {
    const { t } = useLocale();
    const handleNav = (page: string) => {
        navigate(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='pt-16'>
            {/* Hero */}
            <section className='relative py-24 lg:py-32 bg-[#0F2D42] overflow-hidden'>
                <div
                    className='absolute inset-0 bg-cover bg-center opacity-25'
                    style={{
                        backgroundImage: `url('${asset('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1600&h=900&fit=crop&auto=format')}')`,
                    }}
                />
                <div className='relative max-w-7xl mx-auto px-6 lg:px-10'>
                    <button
                        onClick={() => handleNav('projets')}
                        className='inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-10 transition-colors'
                    >
                        {t('bira.back')}
                    </button>
                    <div
                        className='inline-block px-2.5 py-1 rounded-md bg-[#E8F0F7] text-[#1B4F72] text-xs font-medium mb-4'
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        BIRA — {t('project.bira.category')}
                    </div>
                    <h1
                        className='text-4xl lg:text-6xl text-white leading-tight max-w-3xl'
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {t('bira.title')}
                    </h1>
                </div>
            </section>

            {/* Le problème */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-16 items-start'>
                        <div>
                            <span
                                className='text-xs font-medium text-[#1B4F72] uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                01 — {t('project.problem')}
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {t('bira.problemTitle')}
                            </h2>
                            <div className='space-y-4 text-[#7A7269] leading-relaxed text-sm'>
                                {[0, 1, 2].map((index) => <p key={index}>{t(`bira.problem.${index}`)}</p>)}
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            {[
                                {
                                    value: 'NLP',
                                    label: 'bira.stat.nlp',
                                },
                                {
                                    value: 'IA',
                                    label: 'bira.stat.ai',
                                },
                                {
                                    value: t('common.realTime'),
                                    label: 'bira.stat.realtime',
                                },
                                { value: '6 DOF', label: 'bira.stat.dof' },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className='p-6 rounded-2xl border border-[#E2DDD5] bg-[#F8F7F3]'
                                >
                                    <div
                                        className='text-2xl font-light text-[#1B4F72] mb-1'
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
                        <div>
                            <span
                                className='text-xs font-medium text-[#1B4F72] uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                02 — {t('project.solution')}
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {t('bira.solutionTitle')}
                            </h2>
                            <div className='space-y-4 text-[#7A7269] leading-relaxed text-sm'>
                                <p>{t('bira.solution.0')}</p>
                                <p>{t('bira.solution.1')}</p>
                                <p>
                                    <strong className='text-[#111110]'>
                                        {t('bira.inDevelopment')}
                                    </strong>{' '}
                                    {t('bira.solution.2')}
                                </p>
                                <p className='italic text-xs'>
                                    {t('bira.note')}
                                </p>
                            </div>
                        </div>
                        <div
                            className='rounded-2xl h-72 lg:h-96 bg-cover bg-center bg-[#E8F0F7]'
                            style={{
                                backgroundImage: `url('${asset('https://images.unsplash.com/photo-1563968559507-d87412ef19d6?w=800&h=800&fit=crop&auto=format')}')`,
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Architecture */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='mb-12'>
                        <span
                            className='text-xs font-medium text-[#1B4F72] uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            03 — {t('bira.architecture')}
                        </span>
                        <h2
                            className='text-3xl lg:text-4xl mt-3 text-[#111110]'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {t('bira.architectureTitle')}
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-3 gap-6'>
                        {[
                            {
                                step: '01',
                                title: 'bira.arch.user',
                                desc: 'bira.arch.userDesc',
                            },
                            {
                                step: '02',
                                title: 'bira.arch.ai',
                                desc: 'bira.arch.aiDesc',
                            },
                            {
                                step: '03',
                                title: 'bira.arch.robot',
                                desc: 'bira.arch.robotDesc',
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className='p-8 rounded-2xl bg-[#F8F7F3] border border-[#E2DDD5] hover:border-[#A8C5DC] transition-colors'
                            >
                                <div
                                    className='text-xs font-medium text-[#1B4F72] mb-5'
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {item.step}
                                </div>
                                <h3 className='text-lg font-semibold text-[#111110] mb-3'>{t(item.title)}</h3>
                                <p className='text-sm text-[#7A7269] leading-relaxed'>{t(item.desc)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Disciplines & statut */}
            <section className='py-20 bg-[#F8F7F3]'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-12'>
                        <div>
                            <span
                                className='text-xs font-medium text-[#1B4F72] uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                04 — {t('bira.disciplines')}
                            </span>
                            <h2
                                className='text-2xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {t('bira.disciplinesTitle')}
                            </h2>
                            <div className='flex flex-wrap gap-2'>
                                {[
                                    'Intelligence artificielle',
                                    'Traitement du langage naturel',
                                    'Génie logiciel',
                                    'Génie électrique',
                                    'Robotique',
                                    'Systèmes embarqués',
                                    'Interface utilisateur',
                                    'Conception biomédicale',
                                ].map((d, index) => (
                                    <span
                                        key={d}
                                        className='px-3 py-1.5 rounded-lg text-xs font-medium text-[#1B4F72] bg-[#E8F0F7] border border-[#A8C5DC]'
                                    >
                                        {t(`bira.discipline.${index}`)}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span
                                className='text-xs font-medium text-[#1B4F72] uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                05 — {t('bira.development')}
                            </span>
                            <h2
                                className='text-2xl mt-3 mb-6 text-[#111110]'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {t('bira.developmentTitle')}
                            </h2>
                            <div className='space-y-3'>
                                {[
                                    { label: 'bira.status.problem', status: 'Complété' },
                                    { label: 'bira.status.literature', status: 'Complété' },
                                    { label: 'bira.status.architecture', status: 'Complété' },
                                    { label: 'bira.status.nlp', status: 'En cours' },
                                    { label: 'bira.status.control', status: 'En cours' },
                                    { label: 'bira.status.integration', status: 'À venir' },
                                    { label: 'bira.status.tests', status: 'À venir' },
                                    { label: 'bira.status.competition', status: 'À venir' },
                                ].map((step) => (
                                    <div
                                        key={step.label}
                                        className='flex items-center justify-between py-3 border-b border-[#E2DDD5] last:border-0'
                                    >
                                        <span className='text-sm text-[#111110]'>{t(step.label)}</span>
                                        <span
                                            className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                                                step.status === 'Complété'
                                                    ? 'text-[#1A6B4A] bg-[#EDF5F0]'
                                                    : step.status === 'En cours'
                                                      ? 'text-[#1B4F72] bg-[#E8F0F7]'
                                                      : 'text-[#7A7269] bg-[#F2EEE8]'
                                            }`}
                                            style={{ fontFamily: 'var(--font-mono)' }}
                                        >
                                            {t(step.status === 'Complété' ? 'status.completed' : step.status === 'En cours' ? 'status.current' : 'status.upcoming')}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='py-16 bg-[#E8F0F7]'>
                <div className='max-w-3xl mx-auto px-6 text-center'>
                    <h2
                        className='text-2xl lg:text-3xl text-[#111110] mb-4'
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {t('bira.joinTitle')}
                    </h2>
                    <p className='text-[#7A7269] mb-8 text-sm'>
                        {t('bira.joinText')}
                    </p>
                    <button
                        onClick={() => handleNav('contact')}
                        className='px-6 py-3.5 rounded-xl bg-[#1B4F72] text-white font-semibold text-sm hover:bg-[#163F5C] transition-colors'
                    >
                        {t('common.apply')}
                    </button>
                </div>
            </section>
        </div>
    );
}
