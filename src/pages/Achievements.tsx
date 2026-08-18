import { useState } from 'react';
import { achievements } from '../data/achievements';
import {
    getAchievementTypes,
    ACHIEVEMENT_TYPE_LABELS,
    getAchievementStatusLabel,
    getAchievementStatusStyle,
    getProjectBadgeStyle,
} from '../utils/content';
import { asset } from '../utils/assets';

export default function Achievements() {
    const [active, setActive] = useState('Tous');

    const types = getAchievementTypes();

    const filtered =
        active === 'Tous' ? achievements : achievements.filter((a) => ACHIEVEMENT_TYPE_LABELS[a.type] === active);

    const sorted = [...filtered].sort((a, b) => String(b.date).localeCompare(String(a.date)));

    return (
        <div className='pt-16'>
            <section className='relative py-20 lg:py-28 border-b border-border overflow-hidden'>
                {/* Background image */}
                <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                        backgroundImage: `url('${asset('public/images/genial.webp')}')`,
                        backgroundPosition: 'center 20%',
                    }}
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.65)_38%,rgba(15,23,42,0.28)_68%,transparent_100%)]' />

                {/* Content */}
                <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='max-w-2xl'>
                        <span
                            className='text-xs font-medium text-heka-yellow uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Réalisations
                        </span>

                        <h1
                            className='text-4xl lg:text-6xl mt-4 mb-6 text-white leading-tight font-bold'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Notre parcours en chiffres et en faits.
                        </h1>

                        <p className='text-white/80 leading-relaxed max-w-xl'>
                            Compétitions, prototypes, événements, prix — voici l&apos;historique des réalisations de
                            Héka, du plus récent au plus ancien.
                        </p>
                    </div>
                </div>
            </section>

            <section className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    {/* Filters */}
                    <div className='max-w-6xl mx-auto'>
                        <div className='flex flex-wrap gap-2 mb-12'>
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

                        {/* Timeline */}
                        {sorted.length > 0 ? (
                            <div className='relative'>
                                <div className='space-y-8'>
                                    {sorted.map((item, index) => {
                                        const previousItem = sorted[index - 1];
                                        const showDate = !previousItem || previousItem.date !== item.date;
                                        const isLast = index === sorted.length - 1;

                                        return (
                                            <div
                                                key={item.id}
                                                className='relative grid grid-cols-[60px_32px_1fr] sm:grid-cols-[80px_40px_1fr] lg:grid-cols-[90px_44px_1fr]'
                                            >
                                                {/* Year */}
                                                <div className='pr-4 pt-[12px] text-right'>
                                                    {showDate && (
                                                        <span
                                                            className='text-xs text-muted'
                                                            style={{
                                                                fontFamily: 'var(--font-mono)',
                                                            }}
                                                        >
                                                            {item.date}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Timeline */}
                                                <div className='relative flex justify-center'>
                                                    {/* Vertical line */}
                                                    {!isLast && (
                                                        <div className='absolute top-[18px] bottom-[-32px] left-1/2 -translate-x-1/2 w-px bg-border' />
                                                    )}

                                                    {/* Line continuing upward for same year */}
                                                    {!showDate && (
                                                        <div className='absolute -top-8 top-0 left-1/2 -translate-x-1/2 w-px bg-border' />
                                                    )}

                                                    {/* Dot */}
                                                    <div className='relative z-10 mt-[12px] w-3 h-3 rounded-full bg-white border-2 border-heka group-hover:bg-heka transition-colors' />

                                                    {/* Horizontal connector */}
                                                    <div className='absolute top-[17px] left-1/2 w-[calc(50%+1rem)] border-t border-border' />
                                                </div>

                                                {/* Card */}
                                                <div className='pl-4 pb-1 group w-full max-w-4xl'>
                                                    <div className='rounded-2xl border border-border bg-cream px-7 py-6 transition-all hover:border-heka-mid'>
                                                        {/* Metadata */}
                                                        <div className='flex flex-wrap items-center gap-2 mb-3'>
                                                            <span
                                                                className='text-xs font-medium text-muted uppercase tracking-wider'
                                                                style={{
                                                                    fontFamily: 'var(--font-mono)',
                                                                }}
                                                            >
                                                                {ACHIEVEMENT_TYPE_LABELS[item.type] ?? item.type}
                                                            </span>

                                                            {item.project && (
                                                                <span
                                                                    className={`px-2 py-0.5 rounded text-xs font-medium ${getProjectBadgeStyle(
                                                                        item.project,
                                                                    )}`}
                                                                    style={{
                                                                        fontFamily: 'var(--font-mono)',
                                                                    }}
                                                                >
                                                                    {item.project.toUpperCase()}
                                                                </span>
                                                            )}

                                                            <span
                                                                className={`px-2 py-0.5 rounded text-xs font-medium ${getAchievementStatusStyle(
                                                                    item.status,
                                                                )}`}
                                                                style={{
                                                                    fontFamily: 'var(--font-mono)',
                                                                }}
                                                            >
                                                                {item.result ?? getAchievementStatusLabel(item.status)}
                                                            </span>
                                                        </div>

                                                        {/* Title */}
                                                        <h3 className='text-base font-semibold text-charcoal mb-2 group-hover:text-heka transition-colors'>
                                                            {item.title}
                                                        </h3>

                                                        {/* Description */}
                                                        <p className='text-sm text-muted leading-relaxed max-w-4xl'>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div
                                className='text-center py-20 text-[#C8C3BB]'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Aucune réalisation dans cette catégorie pour le moment.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
