# AGENTS.md

## 1. Overview

This is a personal portfolio site that presents profile information, project listings, and project case-study pages. The implementation is content-driven: reusable Vue pages and components render structured profile data, Markdown project entries, and static assets.

## 2. Folder Structure

- `app`: Nuxt application source, because `nuxt.config.ts` sets `srcDir` to this directory.
  - `app.vue`: root shell; keep the `UApp` -> `NuxtLayout` -> `NuxtPage` wrapper as the app-level composition boundary.
  - `app.config.ts`: Nuxt UI app configuration; current project-level UI color customization lives here.
  - `assets/css`: global CSS imports and cross-site visual defaults. `main.css` owns Tailwind/Nuxt UI imports, global dark color scheme, body background, typography, selection, link, and prose colors.
  - `components`: reusable presentation components shared by pages.
    - `SectionHeader.vue`: standard section heading block with optional eyebrow and description.
    - `ProjectCard.vue`: project summary card used by project grids and the home page.
  - `data`: typed static site data. `profile.ts` centralizes personal copy, social links, resume path, image paths, skill groups, timeline entries, and derived contact links.
  - `layouts`: route wrappers. `default.vue` owns the sticky header, active nav state, resume button, page slot, and footer.
  - `pages`: file-based route views.
    - `index.vue`: home page, profile sections, featured case study, and selected project cards.
    - `about.vue`: profile detail, work summary, architecture copy, and timeline.
    - `contact.vue`: contact cards from `contactLinks` and secondary social profiles.
    - `projects/index.vue`: full project listing from the `projects` content collection.
    - `projects/[slug].vue`: dynamic project detail page for a single Markdown project entry.
- `content`: Nuxt Content source files.
  - `projects`: project case-study Markdown files with frontmatter matching the `projects` schema.
  - `case-studies` and `notes`: reserved content collections; currently kept with `.gitkeep` placeholders.
- `public`: static assets served from root-relative URLs. Portfolio images, project screenshots, logos, and `OJT-resume.pdf` are referenced from `profile.ts` and content frontmatter with paths like `/eons-dashboard.png`.
- `content.config.ts`: Nuxt Content collection definitions and Zod schemas. Update this when Markdown frontmatter shape changes.
- `nuxt.config.ts`: Nuxt app configuration, module registration, global CSS registration, head metadata defaults, source directory, and Nuxt UI theme color names.
- `tsconfig.json`: TypeScript project config extending Nuxt-generated types.

## 3. Core Behaviors & Patterns

- **App shell and route composition**: `app.vue` stays minimal and delegates page framing to the active layout. `layouts/default.vue` provides the shared header, navigation, main slot, and footer so page files focus on page content rather than repeating chrome. New pages should rely on the layout unless they need a genuinely different shell.
- **Centralized profile data**: Personal details, social links, resume path, images, skills, timeline copy, and high-level portfolio messaging live in `app/data/profile.ts`. Pages import `profile` or `contactLinks` and bind to those values instead of duplicating copy or paths. When the same personal detail appears in multiple views, change the data object first and let pages render from it.
- **Content-driven project flow**: Project data starts in `content/projects/*.md`, is validated by the `projects` collection schema in `content.config.ts`, and is read in pages through `queryCollection('projects')`. Listing pages order all projects by `date`, the home page derives featured/other project groups from the collection, and the detail route builds `/projects/${route.params.slug}` before fetching the matching page.
- **Structured project pages with Markdown extension points**: `projects/[slug].vue` renders frontmatter fields into dedicated UI sections for metadata, stack, links, problem, architecture, features, learning, outcome, and gallery. The Markdown body is rendered afterward through `ContentRenderer`, so keep repeatable data in frontmatter and use body Markdown for extra notes or longer writeups.
- **SEO is page-owned**: Each route sets `useSeoMeta` near the top of its `<script setup>`. Static pages derive title/description from `profile` or literal page copy, while the dynamic project page uses functions against `project.value` so metadata follows the fetched content. Add route metadata in the page that owns the route.
- **Missing and optional content is contained at render boundaries**: The content schema gives defaults for repeatable arrays such as `links`, `gallery`, `highlights`, and `features`. Templates use `v-if`, optional chaining, and fallback labels such as `project.projectType || project.role` before rendering optional fields. Keep this pattern when adding optional content so incomplete drafts do not break listing cards or detail pages.
- **Nuxt UI component layer over Tailwind utility styling**: The UI is built from `UContainer`, `UCard`, `UButton`, `UBadge`, and `UIcon`, with Tailwind utilities passed through normal `class` attributes and Nuxt UI `:ui` overrides. The repeated visual system is dark slate surfaces, orange primary accents, `rounded-lg` corners, slate borders, soft transparent card backgrounds, and responsive grids.
- **Project cards are intentionally compact summaries**: `ProjectCard.vue` receives a project-like object, renders an optional cover, badges, title, description, up to two highlights, up to four stack items, and a detail button. Listing contexts should reuse this component instead of recreating project cards with slightly different behavior.
- **Static assets are root-addressed**: Images and PDFs in `public` are referenced as root-relative paths in data and Markdown, not imported through page scripts. When adding a screenshot or profile asset, place it in `public` and reference it consistently from the data source that owns the content.

## 4. Conventions

- **Vue file shape**: Page and component files use `<script setup lang="ts">` followed by the template. Keep route data fetching, computed derivations, and SEO setup in the script block; keep rendering decisions in the template.
- **Nuxt auto-imports**: Nuxt composables and components are used without local imports (`useAsyncData`, `queryCollection`, `useSeoMeta`, `useRoute`, `computed`, `UButton`, `SectionHeader`, `ProjectCard`). Explicit imports are used for local data modules such as `~/data/profile`.
- **Routing names**: Route files follow Nuxt file routing. Static routes are lowercase `.vue` files under `app/pages`; project details use the dynamic segment file `app/pages/projects/[slug].vue`. Project content slugs use kebab-case Markdown filenames that map to paths such as `/projects/eons-system`.
- **Component names and props**: Reusable component files use PascalCase names. Props are defined with TypeScript object types through `defineProps`; small component-specific types may stay colocated in the component, as `ProjectCard.vue` does with its `Project` type.
- **Data module shape**: Shared portfolio data is exported as constants from `app/data/profile.ts` and closed with `as const` when values are intended to be readonly literals. Derived arrays such as `contactLinks` should be built from `profile` values to avoid copy drift.
- **Content schema shape**: Frontmatter fields must match the Zod schema in `content.config.ts`. Required project fields include `title`, `description`, `date`, `role`, and `stack`; optional fields such as `projectType`, `status`, `timeline`, `cover`, `problem`, `architecture`, `learned`, and `outcome` should remain optional unless every project entry is updated. Repeatable optional fields should use schema defaults when possible.
- **Project Markdown structure**: Project entries use YAML frontmatter for data rendered by cards and structured detail sections, then Markdown headings/body copy for extra case-study notes. Keep screenshot paths in `cover` and `gallery`; keep outbound actions in `links` as `{ label, url }` items.
- **Styling vocabulary**: Prefer Nuxt UI primitives plus Tailwind classes already used across the app: `UContainer` for page width, `UCard` with `rounded-lg border border-slate-800 bg-slate-900/55 shadow-none ring-0`, orange accent text/icons, and responsive grid utilities such as `sm:grid-cols-*`, `md:grid-cols-*`, and `lg:grid-cols-*`.
- **Section composition**: Use `SectionHeader` for repeated page-section intros with `eyebrow`, `title`, and optional `description`. Do not create ad hoc heading blocks when the existing component fits.
- **Icons and actions**: Icons use Iconify/Lucide names through Nuxt UI (`i-lucide-*`). Buttons use `to`, `label`, `icon`, `variant`, `color`, and `trailing` props rather than custom anchor/button markup unless a Nuxt UI primitive cannot represent the interaction.
- **External targets**: External links and PDFs open with `target="_blank"` where already established. Conditional target logic is used for mixed link lists, such as contact/social links.
- **Visual media**: Images use descriptive `alt` text, stable aspect-ratio utilities, `object-cover`, and slate borders. Gallery figures include captions generated from project title and index.
- **Formatting reality**: Most files use two-space indentation and no semicolons, while `about.vue` currently uses tabs and semicolons. Match the surrounding file style for touched lines instead of reformatting unrelated code.

## 5. Working Agreements

- Respond in the user's preferred language; if unspecified, use English as the repository's app copy and documentation are English.
- Keep technical terms such as Nuxt, Vue, TypeScript, Tailwind, Nuxt Content, schema, route, and component in English; never translate fenced code blocks.
- Ask the user before introducing tests, lint, formatter setups, or broad tooling changes; add them only on explicit request.
- Before editing, review related usages of the same data source, page, component, content schema, and static asset path so changes stay consistent across listing cards, detail pages, and SEO.
- Prefer the smallest focused change that satisfies the request and fits the existing Nuxt/content-driven structure.
- Ask actively when scope, content wording, visual behavior, public URLs, or portfolio facts require user judgment.
- Preserve public routes, content paths, schema field meanings, and profile data behavior unless the user asks to change them.
- New functions, components, and data modules should be small, single-purpose, and colocated near the page or component that uses them.
- Avoid new external dependencies unless necessary; if one is added, explain why it is needed and how it affects the project.
