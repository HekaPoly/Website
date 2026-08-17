import { team } from '../data/team';
import { getTeamMembersByGroup, getMemberInitials } from '../utils/content';
import type { TeamMember } from '../types/content';
import { useState } from 'react';
import { asset } from '../utils/assets';

function MemberCard({ member }: { member: TeamMember }) {
    const [flipped, setFlipped] = useState(false);
    const initials = member.photo ? null : getMemberInitials(member.name);
    const getMessageSize = (message?: string) => {
        const length = message?.length ?? 0;

        if (length > 300) return 'text-xs leading-relaxed';
        if (length > 220) return 'text-sm leading-relaxed';
        if (length > 150) return 'text-base leading-relaxed';
        if (length > 90) return 'text-lg leading-relaxed';

        return 'text-xl leading-relaxed';
    };

    return (
        <button
            type='button'
            onClick={() => setFlipped((value) => !value)}
            className='group relative w-full aspect-3/4 text-left perspective-distant'
            aria-pressed={flipped}
        >
            <div
                className={`
                  relative w-full h-full
                  transition-transform duration-500
                  transform-3d
                  ${flipped ? 'transform-[rotateY(180deg)]' : ''}
                `}
            >
                {/* RECTO */}
                <div
                    className='
                    absolute inset-0
                    overflow-hidden
                    rounded-2xl
                    bg-charcoal
                    backface-hidden
                  '
                >
                    {member.photo ? (
                        <img
                            src={asset(member.photo)}
                            alt={member.name}
                            className='
                            absolute inset-0
                            w-full h-full
                            object-cover
                            transition-transform duration-500
                            group-hover:scale-[1.03]
                          '
                        />
                    ) : (
                        <div className='absolute inset-0 bg-heka-light flex items-center justify-center'>
                            <span
                                className='text-4xl font-semibold text-heka'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {initials}
                            </span>
                        </div>
                    )}

                    <div className='absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent' />

                    {/* Infos */}
                    <div className='absolute inset-x-0 bottom-0 p-6 text-white'>
                        <h3
                            className='text-2xl font-semibold mb-1'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {member.name}
                        </h3>

                        <p className='text-sm text-white/90'>{member.role}</p>

                        <div className='flex flex-wrap gap-2 mt-3'>
                            {member.program && member.program !== 'À confirmer' && (
                                <span className='text-[11px] px-2 py-1 rounded-full bg-white/15 backdrop-blur-sm'>
                                    {member.program}
                                </span>
                            )}

                            {member.project && (
                                <span
                                    className='text-[11px] px-2 py-1 rounded-full bg-white/15 backdrop-blur-sm'
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    {member.project.toUpperCase()}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Bouton + */}
                    <div
                        className='
                          absolute bottom-5 right-5
                          w-9 h-9
                          rounded-full
                          border border-white/80
                          flex items-center justify-center
                          text-white
                          text-2xl
                          font-light
                          transition-all duration-300
                          group-hover:bg-white
                          group-hover:text-charcoal
                        '
                    >
                        +
                    </div>
                </div>

                {/* VERSO */}
                <div
                    className='
                        absolute
                        inset-0
                        rounded-2xl
                        bg-heka-light
                        text-charcoal
                        p-7
                        flex flex-col
                        justify-between
                        transform-[rotateY(180deg)]
                        backface-hidden
                    '
                >
                    <div>
                        <span
                            className='text-xs  text-gray-900 uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Un mot de {member.name.split(' ')[0]}
                        </span>

                        <p
                            className={`mt-6 ${getMessageSize(member.message)}`}
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            “{member.message || 'Un petit mot du membre sera bientôt ajouté.'}”
                        </p>
                    </div>

                    <div>
                        {(member.linkedin || member.email) && (
                            <div className='flex gap-4 mb-5'>
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        onClick={(e) => e.stopPropagation()}
                                        className='text-sm hover:text-heka-yellow transition-colors'
                                    >
                                        LinkedIn ↗
                                    </a>
                                )}

                                {member.email && (
                                    <a
                                        href={`mailto:${member.email}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className='text-sm hover:text-heka-yellow transition-colors'
                                    >
                                        Courriel ↗
                                    </a>
                                )}
                            </div>
                        )}

                        <div className='flex items-center justify-between'>
                            <span className='text-xs text-charcoal'>Cliquer pour revenir</span>

                            <div className='w-9 h-9 rounded-full border border-charcoal/70 flex items-center justify-center text-xl'>
                                ×
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
}
export default function Team() {
    const exec = getTeamMembersByGroup('direction');
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
                        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {exec.map((m) => (
                                <MemberCard
                                    key={m.id}
                                    member={m}
                                />
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
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {podi.map((m) => (
                                <MemberCard
                                    key={m.id}
                                    member={m}
                                />
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
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {bira.map((m) => (
                                <MemberCard
                                    key={m.id}
                                    member={m}
                                />
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
        </div>
    );
}
