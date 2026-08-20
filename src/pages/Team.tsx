import { team } from '../data/team';
import { getTeamMembersByGroup, getMemberInitials } from '../utils/content';
import type { TeamMember } from '../types/content';
import { useEffect, useState } from 'react';
import { asset } from '../utils/assets';

function MemberCard({ member, onOpen }: { member: TeamMember; onOpen: () => void }) {
    const initials = member.photo ? null : getMemberInitials(member.name);

    return (
        <button
            type='button'
            onClick={onOpen}
            className='group relative w-full aspect-3/4 overflow-hidden rounded-2xl bg-charcoal text-left'
        >
            {member.photo ? (
                <img
                    src={asset(member.photo)}
                    alt={member.name}
                    className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                />
            ) : (
                <div className='absolute inset-0 flex items-center justify-center bg-heka-light'>
                    <span
                        className='text-4xl font-semibold text-heka'
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        {initials}
                    </span>
                </div>
            )}

            <div className='absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent' />
            <div className='absolute inset-x-0 bottom-0 p-6 text-white'>
                <h3
                    className='mb-1 text-2xl font-semibold'
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    {member.name}
                </h3>
                <p className='text-sm text-white/90'>{member.role}</p>
                <div className='mt-3 flex flex-wrap gap-2'>
                    {member.program && member.program !== 'À confirmer' && (
                        <span className='rounded-full bg-white/15 px-2 py-1 text-[11px] backdrop-blur-sm'>
                            {member.program}
                        </span>
                    )}
                    {member.project && (
                        <span
                            className='rounded-full bg-white/15 px-2 py-1 text-[11px] backdrop-blur-sm'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            {member.project.toUpperCase()}
                        </span>
                    )}
                </div>
            </div>
            <span className='absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 text-2xl font-light text-white transition-all duration-300 group-hover:bg-white group-hover:text-charcoal'>
                +
            </span>
        </button>
    );
}

function MemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        requestAnimationFrame(() => setVisible(true));

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            className={`fixed inset-0 z-[60] flex bg-heka transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
            role='dialog'
            aria-modal='true'
            aria-label={`Détails de ${member.name}`}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className={`flex h-full w-full flex-col overflow-y-auto transition-transform duration-500 lg:flex-row ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='relative min-h-[42vh] shrink-0 bg-charcoal lg:min-h-0 lg:w-[43%]'>
                    {member.photo ? (
                        <img
                            src={asset(member.photo)}
                            alt={member.name}
                            className='absolute inset-0 h-full w-full object-cover'
                        />
                    ) : (
                        <div className='absolute inset-0 flex items-center justify-center bg-heka-light'>
                            <span
                                className='text-7xl font-semibold text-heka'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {getMemberInitials(member.name)}
                            </span>
                        </div>
                    )}
                    <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10' />
                </div>

                <div className='relative min-h-[58vh] flex-1 overflow-y-auto px-5 py-8 text-white sm:px-8 sm:py-10 lg:min-h-0 lg:px-[6vw] lg:py-[6vh]'>
                    <button
                        type='button'
                        onClick={onClose}
                        className='absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-3xl font-light leading-none text-heka transition-transform hover:scale-105 sm:right-8 sm:top-8'
                        aria-label='Fermer les détails'
                    >
                        ×
                    </button>

                    <div className='max-w-3xl'>
                        <div className='flex flex-wrap items-center gap-3 pr-16'>
                            <h2
                                className='text-3xl leading-tight sm:text-4xl lg:text-5xl'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {member.name}
                            </h2>
                            {member.project && (
                                <span className='rounded-full border border-white/70 px-3 py-1 text-xs uppercase tracking-widest'>
                                    {member.project}
                                </span>
                            )}
                        </div>
                        <p className='mt-4 text-base font-semibold leading-relaxed sm:text-lg'>{member.role}</p>

                        <div className='mt-7 space-y-1.5 text-sm sm:text-base'>
                            {member.program && <p>Programme : {member.program}</p>}
                            {member.email && (
                                <a className='block transition-colors hover:text-heka-yellow' href={`mailto:${member.email}`}>
                                    Courriel : {member.email}
                                </a>
                            )}
                        </div>

                        <div className='mt-6 flex gap-3'>
                            {member.email && (
                                <a
                                    href={`mailto:${member.email}`}
                                    aria-label={`Courriel de ${member.name}`}
                                    className='flex h-11 w-11 items-center justify-center rounded-full border border-white/80 text-lg transition-colors hover:bg-white hover:text-heka'
                                >
                                    @
                                </a>
                            )}
                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={`LinkedIn de ${member.name}`}
                                    className='flex h-11 w-11 items-center justify-center rounded-full border border-white/80 text-sm font-semibold transition-colors hover:bg-white hover:text-heka'
                                >
                                    in
                                </a>
                            )}
                        </div>

                        <div className='mt-12 border-t border-white/30 pt-6'>
                            <p className='text-lg leading-relaxed sm:text-xl' style={{ fontFamily: 'var(--font-display)' }}>
                                “{member.message || 'Un petit mot du membre sera bientôt ajouté.'}”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const exec = getTeamMembersByGroup('direction').sort((a, b) => {
        const aIsDirecteur = a.id.includes('directeur');
        const bIsDirecteur = b.id.includes('directeur');

        if (aIsDirecteur === bIsDirecteur) return 0;

        return aIsDirecteur ? -1 : 1;
    });
    const podi = getTeamMembersByGroup('podi');
    const bira = getTeamMembersByGroup('bira');

    return (
        <div className='pt-16'>
            <section className='relative py-20 lg:py-28 border-b border-border overflow-hidden'>
                {/* Background image */}
                <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                        backgroundImage: `url('${asset('public/images/team/team_photo.JPG')}')`,
                        backgroundPosition: 'center 40%',
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
                            Équipe
                        </span>

                        <h1
                            className='text-4xl lg:text-6xl mt-4 mb-6 text-white leading-tight font-bold'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Des étudiants de toutes les disciplines.
                        </h1>

                        <p className='text-white/80 leading-relaxed max-w-xl'>
                            Héka réunit des membres issus du génie mécanique, logiciel, électrique, biomédical,
                            logiciel, physique, médecine et plus encore autour de projets concrets.
                        </p>
                    </div>
                </div>
            </section>

            {exec.length > 0 && (
                <section className='py-20 bg-white'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <div className='mb-10'>
                            <span
                                className='text-xs font-medium text-muted uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Conseil exécutif
                            </span>
                            <h2
                                className='text-2xl lg:text-3xl mt-2 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Direction de l'organisation
                            </h2>
                        </div>
                        <div className='flex flex-wrap justify-center gap-4'>
                            {exec.map((m) => (
                                <div
                                    key={m.id}
                                    className='w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]'
                                >
                                    <MemberCard member={m} onOpen={() => setSelectedMember(m)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {podi.length > 0 && (
                <section className='py-16 bg-podi-light'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <div className='mb-10'>
                            <span
                                className='text-xs font-medium text-podi uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Équipe PODI
                            </span>
                            <h2
                                className='text-2xl lg:text-3xl mt-2 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Exosquelette passif
                            </h2>
                        </div>
                        <div className='flex flex-wrap justify-center gap-4'>
                            {podi.map((m) => (
                                <div
                                    key={m.id}
                                    className='w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]'
                                >
                                    <MemberCard member={m} onOpen={() => setSelectedMember(m)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {bira.length > 0 && (
                <section className='py-16 bg-bira-light'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                        <div className='mb-10'>
                            <span
                                className='text-xs font-medium text-bira uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                Équipe BIRA
                            </span>
                            <h2
                                className='text-2xl lg:text-3xl mt-2 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Bras robotique intelligent
                            </h2>
                        </div>
                        <div className='flex flex-wrap justify-center gap-4'>
                            {bira.map((m) => (
                                <div
                                    key={m.id}
                                    className='w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]'
                                >
                                    <MemberCard member={m} onOpen={() => setSelectedMember(m)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {team.length === 0 && (
                <section className='py-20 bg-white'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-10 text-center'>
                        <p
                            className='text-[#C8C3BB]'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Ajoutez les membres de l'équipe dans src/data/team.ts.
                        </p>
                    </div>
                </section>
            )}

            {selectedMember && (
                <MemberModal
                    member={selectedMember}
                    onClose={() => setSelectedMember(null)}
                />
            )}
        </div>
    );
}
