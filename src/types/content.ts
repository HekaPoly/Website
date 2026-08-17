// ─── Shared primitive types ───────────────────────────────────────────────────

export type ProjectTheme = 'podi' | 'bira' | 'default';

export type AchievementType = 'competition' | 'award' | 'event' | 'conference' | 'media' | 'milestone';

export type AchievementStatus = 'completed' | 'upcoming' | 'cancelled';

export type RoadmapStatus = 'Complété' | 'En cours' | 'À venir';

export type MemberGroup = 'direction' | 'administration' | 'podi' | 'bira' | 'other';

export type PartnerCategory = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

// ─── Site ────────────────────────────────────────────────────────────────────

export interface MissionPillar {
    title: string;
    description: string;
}

export interface Statistic {
    value: string;
    label: string;
}

export interface ProcessStep {
    label: string;
    image?: string;
}

export interface SiteValue {
    title: string;
    desc: string;
}

export interface RecruitmentBenefit {
    label: string;
}

export interface SocialMedia {
    instagram: string;
    linkedin: string;
    facebook: string;
    youtube: string;
    linktree: string;
}

export interface SiteConfiguration {
    name: string;
    organization: string;
    tagline: string;
    description: string;
    email: string;
    emailRecruitment: string;
    emailPartnership: string;
    address: string;
    socialMedia: SocialMedia;
    mission: MissionPillar[];
    statistics: Statistic[];
    processSteps: ProcessStep[];
    values: SiteValue[];
    recruitmentBenefits: RecruitmentBenefit[];
}

// ─── Projects ────────────────────────────────────────────────────────────────

export interface ArchitectureStep {
    step: string;
    title: string;
    desc: string;
}

export interface ProjectArchitecture {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: ArchitectureStep[];
}

export interface RoadmapStep {
    label: string;
    status: RoadmapStatus;
}

export interface TechnicalObjective {
    title: string;
    desc: string;
}

export interface ProjectStat {
    value: string;
    label: string;
}

export interface Project {
    slug: string;
    name: string;
    category: string;
    challenge: string;
    title: string;
    shortDescription: string;
    description?: string;
    status: string;
    theme: ProjectTheme;
    disciplines: string[];
    problem: string;
    objective: string;
    currentWork?: string[];
    nextSteps?: string[];
    achievements: string[]; // achievement IDs
    teamMembers: string[]; // team member IDs
    partners: string[]; // partner IDs
    images: {
        hero: string;
        solution?: string;
        gallery: string[];
    };
    showProjectPage: boolean;

    // Rich detail-page content (optional — for existing projects)
    problemBody?: string[];
    problemStats?: ProjectStat[];
    solutionTitle?: string;
    solutionBody?: string[];
    solutionNote?: string;
    technicalObjectives?: TechnicalObjective[];
    roadmap?: RoadmapStep[];
    architecture?: ProjectArchitecture;
}

// ─── Team ────────────────────────────────────────────────────────────────────

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    program: string;
    project: string | null; // project slug or null
    group: MemberGroup;
    photo: string; // path like /images/team/name.jpg or '' for initials
    linkedin: string;
    email: string;
    message?: string;
}

// ─── Partners ────────────────────────────────────────────────────────────────

export interface Partner {
    id: string;
    name: string;
    logo: string; // path like /images/partners/name.svg or ''
    website: string;
    category: PartnerCategory;
    description: string;
}

// ─── Achievements ────────────────────────────────────────────────────────────

export interface Achievement {
    id: string;
    date: string; // ISO date string e.g. "2026-05-01" or year "2026"
    type: AchievementType;
    title: string;
    project: string | null; // project slug or null
    status: AchievementStatus;
    location?: string;
    description: string;
    result?: string; // e.g. "1re place"
    image: string;
    link: string;
}

// ─── Forms ───────────────────────────────────────────────────────────────────

export interface SelectOption {
    value: string;
    label: string;
}

export interface FormField {
    id: string;
    label: string;
    type: 'text' | 'email' | 'select' | 'textarea';
    required: boolean;
    placeholder?: string;
    options?: SelectOption[]; // for select fields
    rows?: number; // for textarea fields
}

export interface FormConfiguration {
    title: string;
    description: string;
    fields: FormField[];
    submitLabel: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavigationItem {
    label: string;
    pageId: string;
}
