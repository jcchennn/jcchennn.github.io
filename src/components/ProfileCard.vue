<script setup lang="ts">
import { Terminal, Layers } from '@lucide/vue'

export interface ProfileCardProps {
  fileName?: string
  developerName?: string
  role?: string
  status?: string
}

withDefaults(defineProps<ProfileCardProps>(), {
  fileName: 'DeveloperProfile.ts',
  developerName: 'Geraldine (JC) Chen',
  role: 'Senior Frontend Engineer',
  status: 'Ready to innovate 🚀',
})
</script>

<template>
  <div
    class="w-full max-w-md card bg-base-200/60 border border-base-content/10 shadow-2xl backdrop-blur-md hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
  >
    <!-- Window Header bar -->
    <div class="card-body p-5">
      <div class="flex items-center justify-between border-b border-base-content/10 pb-3 mb-3">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-error"></div>
          <div class="w-3 h-3 rounded-full bg-warning"></div>
          <div class="w-3 h-3 rounded-full bg-success"></div>
        </div>
        <div class="flex items-center gap-1.5 text-xs font-mono text-base-content/60">
          <Terminal class="w-3.5 h-3.5 text-primary" />
          <span>{{ fileName }}</span>
        </div>
        <div class="w-8"></div>
      </div>

      <!-- Code Content Body -->
      <pre
        class="font-mono text-xs sm:text-sm text-base-content/90 overflow-x-auto leading-relaxed p-2"
      >
<span class="text-secondary font-semibold">interface</span> <span class="text-primary font-semibold">Engineer</span> {
  name: <span class="text-success">string</span>
  role: <span class="text-success">string</span>
  stack: <span class="text-success">string</span>[]
  status?: <span class="text-success">string</span>
}

<span class="text-secondary font-semibold">const</span> <span class="text-accent font-semibold">me</span>: Engineer = {
  name: <span class="text-success">'{{ developerName }}'</span>,
  role: <span class="text-success">'{{ role }}'</span>,
  stack: [<span class="text-warning">'JavaScript'</span>, <span class="text-warning">'Vue'</span>, <span class="text-warning">'React'</span>],
  status: <span class="text-success">'{{ status }}'</span>
}
</pre>

      <div
        class="mt-4 pt-3 border-t border-base-content/10 flex items-center justify-between text-xs text-base-content/60"
      >
        <span class="flex items-center gap-1">
          <Layers class="w-3.5 h-3.5 text-primary" />
          Vue 3 Composition API
        </span>
        <span class="badge badge-xs badge-primary">Strict Mode</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
