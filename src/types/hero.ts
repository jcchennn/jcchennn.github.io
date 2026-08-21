export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email'
  url: string
  labelKey: string
}

export interface TechBadge {
  name: string
  category?: string
  iconName?: string
}

export interface HeroProfile {
  nameKey: string
  titleKey: string
  sloganKey: string
  bioKey: string
  statusKey?: string
  greetingKey?: string
  resumeUrl: string
  socialLinks: SocialLink[]
  techBadges: TechBadge[]
}
