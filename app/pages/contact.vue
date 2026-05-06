<script setup lang="ts">
import { contactLinks, profile } from '~/data/profile'

useSeoMeta({
  title: 'Contact',
  description: `Contact ${profile.name} for software engineering, fullstack systems, and automation work.`
})
</script>

<template>
  <UContainer class="grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr]">
    <div class="space-y-6">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something maintainable."
        description="Reach out for software engineering work, business systems, dashboards, automation tools, or fullstack applications."
      />

      <UCard :ui="{ root: 'rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0', body: 'space-y-3 p-5 sm:p-6' }">
        <p class="text-sm font-medium text-orange-400">Best fit</p>
        <p class="leading-7 text-slate-300">
          Business problems that need clear interfaces, scalable structure, maintainable code, and practical automation.
        </p>
      </UCard>
    </div>

    <div class="space-y-4">
      <UCard
        v-for="link in contactLinks"
        :key="link.label"
        :ui="{ root: 'rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0', body: 'p-5 sm:p-5' }"
      >
        <div class="flex items-center justify-between gap-4">
          <div class="flex min-w-0 items-center gap-4">
            <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-800">
              <UIcon :name="link.icon" class="size-5 text-orange-400" />
            </div>
            <div class="min-w-0">
              <p class="text-sm text-slate-500">{{ link.label }}</p>
              <p class="truncate font-medium text-slate-100">{{ link.value }}</p>
            </div>
          </div>
          <UButton
            :to="link.to"
            icon="i-lucide-arrow-up-right"
            color="primary"
            variant="ghost"
            :target="link.to.startsWith('http') || link.to.endsWith('.pdf') ? '_blank' : undefined"
            :aria-label="`Open ${link.label}`"
          />
        </div>
      </UCard>

      <div class="pt-4">
        <p class="mb-3 text-sm font-medium text-slate-500">Secondary profiles</p>
        <div class="flex flex-wrap gap-3">
          <UButton
            v-for="link in profile.secondarySocials"
            :key="link.label"
            :to="link.to"
            :icon="link.icon"
            :label="link.label"
            color="primary"
            variant="outline"
            :target="link.to.startsWith('http') ? '_blank' : undefined"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>
