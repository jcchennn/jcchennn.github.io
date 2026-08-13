<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Sun, Moon, Languages } from '@lucide/vue'

const { locale, t } = useI18n()

// Theme switcher state
const isDark = ref<boolean>(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const newTheme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('portfolio-theme', newTheme)
}

const toggleLanguage = () => {
  locale.value = locale.value === 'zh-TW' ? 'en-US' : 'zh-TW'
}

onMounted(() => {
  const savedTheme = localStorage.getItem('portfolio-theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  } else {
    // Default to dark theme as per PRD
    document.documentElement.setAttribute('data-theme', 'dark')
    isDark.value = true
  }
})
</script>

<template>
  <header
    class="sticky top-0 z-50 backdrop-blur-md bg-base-100/80 border-b border-base-content/10 transition-colors duration-300"
  >
    <div class="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Navbar Start: Logo -->
      <div class="navbar-start">
        <!-- <a href="#hero" class="btn btn-ghost text-xl font-bold gap-2 tracking-wide font-mono hover:scale-105 transition-transform">
          <Code2 class="w-6 h-6 text-primary" />
          <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {{ t('nav.logo') }}
          </span>
        </a> -->
      </div>

      <!-- Navbar Center: Navigation Links -->
      <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal px-1 gap-1 font-medium">
          <li>
            <a href="#about" class="hover:text-primary transition-colors">{{ t('nav.about') }}</a>
          </li>
          <li>
            <a href="#skills" class="hover:text-primary transition-colors">{{ t('nav.skills') }}</a>
          </li>
          <!-- <li>
            <a href="#experience" class="hover:text-primary transition-colors">{{
              t('nav.experience')
            }}</a>
          </li>
          <li>
            <a href="#projects" class="hover:text-primary transition-colors">{{
              t('nav.projects')
            }}</a>
          </li>
          <li>
            <a href="#contact" class="hover:text-primary transition-colors">{{
              t('nav.contact')
            }}</a>
          </li> -->
        </ul>
      </div>

      <!-- Navbar End: Controls -->
      <div class="navbar-end gap-2">
        <!-- Language Switcher -->
        <button
          class="btn btn-ghost btn-circle btn-sm sm:btn-md"
          :title="t('nav.language')"
          @click="toggleLanguage"
        >
          <Languages class="w-5 h-5" />
          <span class="sr-only">Toggle Language</span>
        </button>

        <!-- Theme Switcher -->
        <button
          class="btn btn-ghost btn-circle btn-sm sm:btn-md"
          :title="t('nav.theme')"
          @click="toggleTheme"
        >
          <Sun v-if="isDark" class="w-5 h-5 text-warning" />
          <Moon v-else class="w-5 h-5 text-primary" />
          <span class="sr-only">Toggle Theme</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Smooth scroll behavior is recommended globally in html */
</style>
