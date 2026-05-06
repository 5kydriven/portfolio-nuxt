<script setup lang="ts">
	import { profile } from '~/data/profile';

	useSeoMeta({
		title: 'About',
		description: `About ${profile.name}, a ${profile.role} based in the ${profile.location}.`,
	});
</script>

<template>
	<UContainer
		class="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
		<div class="space-y-6">
			<SectionHeader
				eyebrow="About"
				:title="profile.about.title"
				:description="profile.about.description" />
			<img
				:src="profile.aboutImage"
				:alt="profile.name"
				class="aspect-square w-full max-w-sm rounded-lg border border-slate-800 object-cover" />
			<div class="flex flex-wrap gap-3">
				<UButton
					:to="profile.resumePath"
					target="_blank"
					label="View resume"
					icon="i-lucide-file-text" />
				<UButton
					:to="`mailto:${profile.email}`"
					label="Contact me"
					icon="i-lucide-send"
					color="primary"
					variant="outline" />
			</div>
		</div>

		<div class="space-y-4">
			<UCard
				:ui="{
					root: 'rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0',
					body: 'space-y-4 p-6 sm:p-6',
				}">
				<div class="flex items-center gap-3">
					<div
						class="flex size-10 items-center justify-center rounded-lg bg-slate-800">
						<UIcon
							name="i-lucide-briefcase-business"
							class="size-5 text-orange-400" />
					</div>
					<div>
						<p class="text-sm font-medium text-slate-500">Current work</p>
						<h2 class="text-xl font-semibold text-slate-50">
							Software Engineer at Koda Kollectiv Inc.
						</h2>
					</div>
				</div>
				<p class="leading-7 text-slate-400">
					2025 - Present · {{ profile.workLocation }}
				</p>
			</UCard>

			<UCard
				v-for="item in profile.about.details"
				:key="item.label"
				:ui="{
					root: 'rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0',
					body: 'p-6 sm:p-6',
				}">
				<div class="grid gap-2 sm:grid-cols-[10rem_1fr]">
					<p class="text-sm font-medium text-slate-500">{{ item.label }}</p>
					<p class="leading-7 text-slate-300">{{ item.value }}</p>
				</div>
			</UCard>

			<UCard
				:ui="{
					root: 'rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0',
					body: 'space-y-5 p-6 sm:p-6',
				}">
				<div>
					<p class="text-sm font-medium text-orange-400">
						{{ profile.architecture.title }}
					</p>
					<h2 class="mt-2 text-2xl font-semibold text-slate-50">
						Maintainable and scalable by default
					</h2>
				</div>
				<p class="leading-7 text-slate-400">
					{{ profile.architecture.description }}
				</p>
			</UCard>

			<UCard
				:ui="{
					root: 'rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0',
					body: 'p-6 sm:p-6',
				}">
				<div class="space-y-5">
					<div>
						<p class="text-sm font-medium text-orange-400">Timeline</p>
						<h2 class="mt-2 text-2xl font-semibold text-slate-50">
							Current direction
						</h2>
					</div>
					<div class="space-y-4">
						<div
							v-for="item in profile.about.timeline"
							:key="item.period"
							class="grid gap-2 border-t border-slate-800 pt-4 sm:grid-cols-[6rem_1fr]">
							<p class="text-sm font-medium text-slate-500">
								{{ item.period }}
							</p>
							<div>
								<p class="font-medium text-slate-100">{{ item.title }}</p>
								<p class="mt-1 leading-7 text-slate-400">
									{{ item.description }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</UCard>
		</div>
	</UContainer>
</template>
