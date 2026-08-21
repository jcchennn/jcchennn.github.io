<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <div
    class="min-h-screen bg-base-100 text-base-content font-sans antialiased selection:bg-primary selection:text-primary-content flex flex-col"
  >
    <!-- Top Navigation Bar -->
    <NavBar />

    <!-- Main Content Area -->
    <main class="flex-grow">
      <!-- Hero / Intro Section (Full-size page design) -->
      <HeroSection />

      <!-- Future sections like Skills, Experience, Projects, Contact will follow -->
    </main>
  </div>
</template>

<style scoped></style>
