import { team } from '../data/team'
import { getTeamMembersByGroup, getMemberInitials, getProjectBadgeStyle } from '../utils/content'
import type { TeamMember } from '../types/content'

function MemberCard({ member }: { member: TeamMember }) {
  const initials = member.photo ? null : getMemberInitials(member.name)

  return (
    <div className="p-6 rounded-2xl border border-border bg-white hover:border-heka-mid transition-colors group">
      <div className="w-14 h-14 rounded-full bg-heka-light flex items-center justify-center mb-4 overflow-hidden">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="text-lg font-semibold text-heka" style={{ fontFamily: 'var(--font-mono)' }}>{initials}</span>
        ) : (
          <svg className="w-7 h-7 text-heka opacity-40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        )}
      </div>
      <div className="text-xs font-medium text-muted mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
        {member.role}
      </div>
      <h3 className="font-semibold text-charcoal text-sm mb-2">{member.name}</h3>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {member.program && member.program !== 'À confirmer' && (
          <span className="text-xs text-muted bg-[#F2EEE8] px-2 py-0.5 rounded">{member.program}</span>
        )}
        {member.project && (
          <span className={`text-xs px-2 py-0.5 rounded ${getProjectBadgeStyle(member.project)}`} style={{ fontFamily: 'var(--font-mono)' }}>
            {member.project.toUpperCase()}
          </span>
        )}
        {(!member.program || member.program === 'À confirmer') && (
          <span className="text-xs text-[#C8C3BB] bg-cream px-2 py-0.5 rounded" style={{ fontFamily: 'var(--font-mono)' }}>
            [À confirmer]
          </span>
        )}
      </div>
      {(member.linkedin || member.email) && (
        <div className="flex gap-3 mt-2">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-heka hover:underline">
              LinkedIn
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-xs text-heka hover:underline">
              Courriel
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Team() {
  const exec = getTeamMembersByGroup('direction')
  const podi = getTeamMembersByGroup('podi')
  const bira = getTeamMembersByGroup('bira')

  return (
    <div className="pt-16">
      <section className="py-20 lg:py-28 bg-cream border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-medium text-muted uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
              Équipe
            </span>
            <h1 className="text-4xl lg:text-6xl mt-4 mb-6 text-charcoal leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Des étudiants de toutes les disciplines.
            </h1>
            <p className="text-muted leading-relaxed">
              Héka réunit des membres issus du génie mécanique, logiciel, électrique, industriel et de l'intelligence artificielle autour de projets concrets.
            </p>
          </div>
        </div>
      </section>

      {exec.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <span className="text-xs font-medium text-muted uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                Conseil exécutif
              </span>
              <h2 className="text-2xl lg:text-3xl mt-2 text-charcoal" style={{ fontFamily: 'var(--font-display)' }}>
                Direction de l'organisation
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {exec.map((m) => <MemberCard key={m.id} member={m} />)}
            </div>
          </div>
        </section>
      )}

      {podi.length > 0 && (
        <section className="py-16 bg-podi-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <span className="text-xs font-medium text-podi uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                Équipe PODI
              </span>
              <h2 className="text-2xl lg:text-3xl mt-2 text-charcoal" style={{ fontFamily: 'var(--font-display)' }}>
                Exosquelette passif
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {podi.map((m) => <MemberCard key={m.id} member={m} />)}
            </div>
          </div>
        </section>
      )}

      {bira.length > 0 && (
        <section className="py-16 bg-bira-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <span className="text-xs font-medium text-bira uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
                Équipe BIRA
              </span>
              <h2 className="text-2xl lg:text-3xl mt-2 text-charcoal" style={{ fontFamily: 'var(--font-display)' }}>
                Bras robotique intelligent
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bira.map((m) => <MemberCard key={m.id} member={m} />)}
            </div>
          </div>
        </section>
      )}

      {team.length === 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-[#C8C3BB]" style={{ fontFamily: 'var(--font-mono)' }}>
              Ajoutez les membres de l'équipe dans src/data/team.ts.
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
