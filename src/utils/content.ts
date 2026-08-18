// Helper functions for resolving relationships between data files.
// Pages should use these instead of writing filter logic inline.

import { currentProjects } from '../data/projects';
import { team } from '../data/team';
import { partners } from '../data/partners';
import { achievements } from '../data/achievements';
import type { Project, TeamMember, Partner, Achievement, AchievementType, MemberGroup } from '../types/content';

// ─── Projects ─────────────────────────────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
    return currentProjects.find((p) => p.slug === slug);
}

export function getProjectPageId(slug: string): string {
    return `projet-${slug}`;
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export function getTeamMembersByProject(projectSlug: string): TeamMember[] {
    return team.filter((m) => m.project === projectSlug);
}

export function getTeamMembersByGroup(group: MemberGroup): TeamMember[] {
    return team.filter((m) => m.group.includes(group));
}

export function getMemberInitials(name: string): string {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0].toUpperCase())
        .join('');
}

// ─── Partners ─────────────────────────────────────────────────────────────────

export function getPartnersByProject(projectSlug: string): Partner[] {
    const project = getProjectBySlug(projectSlug);
    if (!project) return [];
    return partners.filter((p) => project.partners.includes(p.id));
}

export function getPartnersByCategory(category: string): Partner[] {
    return partners.filter((p) => p.category === category);
}

// ─── Achievements ─────────────────────────────────────────────────────────────

export function getAchievementsByProject(projectSlug: string): Achievement[] {
    return achievements.filter((a) => a.project === projectSlug);
}

export function getLatestAchievements(limit: number): Achievement[] {
    return [...achievements].sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, limit);
}

export function getAchievementsByType(type: AchievementType): Achievement[] {
    return achievements.filter((a) => a.type === type);
}

/** Returns deduplicated achievement types that are actually present in the data. */
export function getAchievementTypes(): AchievementType[] {
    const types = new Set(achievements.map((a) => a.type));
    return Array.from(types);
}

/** Returns a display label for an achievement type. */
export const ACHIEVEMENT_TYPE_LABELS: Record<string, string> = {
    competition: 'Compétitions',
    award: 'Prix',
    event: 'Événements',
    conference: 'Conférences',
    media: 'Médias',
    milestone: 'Jalons',
};

/** Returns a display label for an achievement status. */
export function getAchievementStatusLabel(status: string): string {
    switch (status) {
        case 'completed':
            return 'Terminé';
        case 'upcoming':
            return 'À venir';
        case 'cancelled':
            return 'Annulé';
        default:
            return status;
    }
}

/** Returns Tailwind classes for an achievement status badge. */
export function getAchievementStatusStyle(status: string): string {
    switch (status) {
        case 'completed':
            return 'text-[#41699d] bg-[#EAF0F8]';
        case 'upcoming':
            return 'text-[#C8281A] bg-[#FEF0EF]';
        case 'cancelled':
            return 'text-[#7A7269] bg-[#F2EEE8]';
        default:
            return 'text-[#7A7269] bg-[#F2EEE8]';
    }
}

/** Returns Tailwind classes for a project badge given its slug. */
export function getProjectBadgeStyle(projectSlug: string): string {
    switch (projectSlug) {
        case 'podi':
            return 'text-[#C8281A] bg-[#FEF0EF]';
        case 'bira':
            return 'text-[#1B4F72] bg-[#E8F0F7]';
        default:
            return 'text-[#41699d] bg-[#EAF0F8]';
    }
}
