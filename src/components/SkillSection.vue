<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  FileDown,
  Mail,
  ArrowDown,
  Sparkles,
  Code,
  Zap,
} from '@lucide/vue'
import type { HeroProfile } from '../types/hero'
import ProfileCard from './ProfileCard.vue'

const { t } = useI18n()

// Default hero profile data structure conforming to HeroProfile interface
const profile = computed<HeroProfile>(() => ({
  nameKey: 'hero.name',
  titleKey: 'hero.title',
  sloganKey: 'hero.slogan',
  bioKey: 'hero.bio',
  resumeUrl: '#resume',
  socialLinks: [
    {
      platform: 'github',
      url: 'https://github.com/jcchennn',
      labelKey: 'hero.social.github',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/jcchen',
      labelKey: 'hero.social.linkedin',
    },
    {
      platform: 'email',
      url: 'mailto:contact@jcchen.dev',
      labelKey: 'hero.social.email',
    },
  ],
  techBadges: [
    { name: 'Vue 3', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Vite', category: 'Build' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'DaisyUI', category: 'UI Component' },
    { name: 'Vitest', category: 'Testing' },
  ],
}))

const handleResumeDownload = () => {
  // Triggers download or navigate to resume PDF
  window.open(profile.value.resumeUrl, '_blank')
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  } else {
    // Fallback URL hash change
    window.location.hash = 'contact'
  }
}
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[calc(100vh-4rem)] w-full flex flex-col justify-between items-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-base-100"
  >
    <!-- Background Ambient Glow & Visual Accents -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
      <div class="absolute top-1/2 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-70 animate-pulse" style="animation-delay: 1.5s;"></div>
      <div class="absolute bottom-10 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl opacity-60"></div>
    </div>

    <!-- Main Hero Content Container -->
    <div class="my-auto max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Left Column: Intro Text & Call To Actions -->
      <div class="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
        
        <!-- Status Indicator Badge -->
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-base-200/90 border border-base-content/10 shadow-sm backdrop-blur-sm hover:border-primary/40 transition-colors">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
          </span>
          <span class="text-xs sm:text-sm font-medium text-base-content/80">
            {{ t(profile.statusKey || 'hero.status') }}
          </span>
        </div>

        <!-- Title & Slogan -->
        <div class="space-y-3">
          <div class="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
            <Sparkles class="w-4 h-4 text-primary" />
            <span>{{ t(profile.greetingKey || 'hero.greeting') }} {{ t(profile.nameKey) }}</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
            <span class="bg-gradient-to-r from-base-content via-primary to-secondary bg-clip-text text-transparent">
              {{ t(profile.sloganKey) }}
            </span>
          </h1>

          <p class="text-lg sm:text-xl font-medium text-primary/90 pt-1">
            {{ t(profile.titleKey) }}
          </p>
        </div>

        <!-- Bio Description -->
        <p class="text-base sm:text-lg text-base-content/75 leading-relaxed max-w-2xl">
          {{ t(profile.bioKey) }}
        </p>

        <!-- Tech Stack Pill Badges -->
        <div class="w-full pt-2">
          <p class="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-3 flex items-center gap-1.5">
            <Zap class="w-3.5 h-3.5 text-warning" />
            {{ t('hero.techHeader') }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="badge in profile.techBadges"
              :key="badge.name"
              class="badge badge-lg gap-1.5 bg-base-200 hover:bg-primary/10 hover:border-primary/40 border-base-content/10 transition-all font-mono text-xs cursor-default py-3 px-3 shadow-xs"
            >
              <Code class="w-3.5 h-3.5 text-primary" />
              {{ badge.name }}
            </span>
          </div>
        </div>

        <!-- CTA Buttons & Social Links -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
          <!-- Primary CTA: Resume -->
          <button
            class="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            @click="handleResumeDownload"
          >
            <FileDown class="w-5 h-5" />
            <span>{{ t('hero.downloadResume') }}</span>
          </button>

          <!-- Secondary CTA: Contact -->
          <button
            class="btn btn-outline btn-lg gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            @click="scrollToContact"
          >
            <Mail class="w-5 h-5" />
            <span>{{ t('hero.contactMe') }}</span>
          </button>

          <!-- Social Media Icon Buttons -->
          <div class="flex items-center justify-center gap-2 pt-2 sm:pt-0 sm:ml-2">
            <a
              v-for="link in profile.socialLinks"
              :key="link.platform"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-circle btn-ghost btn-md hover:bg-primary/10 hover:text-primary transition-all"
              :aria-label="t(link.labelKey)"
              :title="t(link.labelKey)"
            >
              <svg v-if="link.platform === 'github'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <svg v-else-if="link.platform === 'linkedin'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <Mail v-else-if="link.platform === 'email'" class="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      <!-- Right Column: Interactive Code Visual / Profile Card -->
      <div class="lg:col-span-5 flex justify-center lg:justify-end">
        <ProfileCard />
      </div>

    </div>

    <!-- Scroll Down Guide Indicator -->
    <div class="mt-8 z-10 flex flex-col items-center gap-2 text-base-content/50 hover:text-primary transition-colors cursor-pointer group" @click="scrollToContact">
      <span class="text-xs font-medium tracking-wider uppercase font-mono">{{ t('hero.scrollDown') }}</span>
      <ArrowDown class="w-5 h-5 animate-bounce text-primary" />
    </div>
  </section>
</template>

<style scoped>
/* Scoped custom styling if necessary */
</style>
