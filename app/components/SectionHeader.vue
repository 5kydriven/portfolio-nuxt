<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="motion-fade-up max-w-2xl space-y-3">
    <p v-if="eyebrow" class="text-sm font-medium text-orange-400">
      {{ eyebrow }}
    </p>
    <h1 class="text-3xl font-semibold tracking-normal text-slate-50 sm:text-4xl">
      {{ title }}
    </h1>
    <p v-if="description" class="text-base leading-7 text-slate-400">
      {{ description }}
    </p>
  </div>
</template>
