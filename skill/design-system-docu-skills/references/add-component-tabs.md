# Adding Tabbed Documentation to a Component

## Prerequisites

Before starting, gather:
1. The component's prop types file: `src/components/{name}/{name}.ts`
2. The composable file: `src/components/{name}/use-{name}.ts` (for design tokens, Tailwind classes)
3. The existing documentation (if any): `docs/locales/en/documentation/components/{name}.md`

## Step 1: Read the Component Source

Extract from the `.ts` file:
- All prop names, types, validators, and defaults
- Emit definitions
- Exported TypeScript types

Extract from the `use-{name}.ts` composable:
- Tailwind class mappings per state/variant/tone
- Sizing values
- Transition durations
- Background/text/border token names

## Step 2: Create Directory Structure

Create a subfolder for the component under its parent group:

```
docs/locales/en/documentation/components/{parent}/{component}/
├── index.md               # Live Example tab (main page)
├── code.md                # Code Documentation
├── guidelines.md          # Guidelines
├── ui-specs.md            # UI Specs
└── accessibility.md       # Accessibility
```

**Examples:**
- Top-level component: `button/button/index.md`
- Sub-component: `button/button-dropdown/index.md`
- Standalone component: `accordion/accordion/index.md`

## Step 3: Add VitePress Rewrites

In `docs/.vitepress/config.ts`, add rewrites so `index.md` maps to the clean component URL:

```typescript
rewrites: {
  // English
  'en/documentation/components/{parent}/{component}/index.md': 'en/documentation/components/{parent}/{component}.md',
  // Thai
  'th/documentation/components/{parent}/{component}/index.md': 'th/documentation/components/{parent}/{component}.md',
}
```

Only `index.md` needs rewrites. The other tab files (`code.md`, `guidelines.md`, etc.) resolve naturally.

## Step 4: Write Each Tab Page

Each page must include:
1. Frontmatter with `title`, `description`, `outline: deep`
2. `# Component Name` heading
3. Component description paragraph (identical on every tab)
4. `<ComponentTabBar>` with the same tabs array
5. Tab-specific content
6. `<script setup>` with required component imports (for pages with live demos)

### ComponentTabBar — Standard Component

```markdown
<ComponentTabBar component-name="{component}" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />
```

### ComponentTabBar — Nested Sub-Component

Add the `parent` prop so tab URLs resolve correctly:

```markdown
<ComponentTabBar component-name="{component}" parent="{parent}" :tabs="[
  { label: 'Live Example', slug: '' },
  { label: 'Code Docu', slug: 'code' },
  { label: 'Guidelines', slug: 'guidelines' },
  { label: 'UI Specs', slug: 'ui-specs' },
  { label: 'Accessibility', slug: 'accessibility' },
]" />
```

## Step 5: Update Sidebar Configuration

In `docs/.vitepress/locales/en.ts`, add or update the component entry. Tab pages are **NOT** listed as sidebar children — only the component and its sub-components:

```typescript
{
  text: 'Component Name',
  link: '/en/documentation/components/{parent}/{component}',
  items: [
    { text: 'Component Name', link: '/en/documentation/components/{parent}/{component}' },
    { text: 'Sub Component', link: '/en/documentation/components/{parent}/{sub-component}' },
  ],
},
```

Repeat for `th.ts` with Thai text labels.

## Step 6: Thai Locale

Create the same 5 files under `docs/locales/th/documentation/components/{parent}/{component}/`. Use English content initially — the team will translate later. The `<ComponentTabBar>` tab labels must be in Thai:

```markdown
<ComponentTabBar
  component-name="{component}"
  :tabs="[
    { label: 'ตัวอย่างสด', slug: '' },
    { label: 'เอกสารโค้ด', slug: 'code' },
    { label: 'แนวทาง', slug: 'guidelines' },
    { label: 'UI Specs', slug: 'ui-specs' },
    { label: 'การเข้าถึง', slug: 'accessibility' },
  ]"
/>
```

Don't forget to add the corresponding rewrites in `config.ts` for the Thai locale.

## Step 7: Verify

1. Run `npm run docs:dev`
2. Navigate to the component page
3. Verify all 5 tabs render with correct active state
4. Verify right-side "On this page" outline updates per tab
5. Verify PropsPlayground renders the live component (if applicable)
6. Verify sidebar shows the component correctly (no tab children)
7. Switch to Thai locale and confirm tabs work
8. Run `npx vitepress build docs` to verify no dead link errors
