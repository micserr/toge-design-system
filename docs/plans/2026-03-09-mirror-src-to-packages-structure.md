# Mirror src/ to Packages Structure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reorganize root `src/` so its folder names mirror `packages/` (legacy, toge, tokens), then eliminate the duplicate source copies inside each package so there is a single source of truth.

**Architecture:** Currently `src/components/` and `packages/legacy/src/components/` are duplicates — the packages were scaffolded by copying root files. After this change, the packages will have no `src/` subfolder of their own; they'll reference the canonical root `src/legacy/`, `src/toge/`, and `src/tokens/` via relative paths. The built `dist/` is what gets published to npm so source location does not affect consumers.

**Tech Stack:** Vue 3, Vite 6, TypeScript, npm workspaces, vite-plugin-dts, Tailwind CSS

---

## Final Target Structure

```
src/
├── legacy/       ← was src/components/ + src/stores/ (spr- snackbar)
│   ├── components/
│   └── stores/
├── toge/         ← unchanged (already correctly named)
│   ├── primitives/
│   ├── molecules/
│   ├── patterns/
│   └── stores/
├── tokens/       ← was src/assets/
│   ├── scripts/
│   ├── styles/
│   └── images/
├── mock/         ← unchanged
├── playground/   ← unchanged
├── App.vue
├── main.ts
└── ...

packages/
├── legacy/
│   ├── lib/        ← updated paths pointing to ../../src/legacy/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
│   (NO src/ — removed, now uses root src/legacy/)
├── toge/
│   ├── lib/        ← updated paths pointing to ../../src/toge/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
│   (NO src/ — removed, now uses root src/toge/)
└── tokens/
    ├── package.json
    ├── tailwind.config.js
    └── tsconfig.json
    (NO src/ — removed, now uses root src/tokens/)
```

---

## Task 1: Set up worktree

**Files:** none (git operations only)

**Step 1: Create feature branch in worktree**
```bash
cd "/Users/maaraquel/Coding/Design System/Sprout-Design-System-Next"
git worktree add .worktrees/feat/mirror-src-structure -b feat/mirror-src-structure
cd .worktrees/feat/mirror-src-structure
npm install
```

Expected: `.worktrees/feat/mirror-src-structure/` exists with all files, npm install completes cleanly.

**Step 2: Commit baseline (confirm clean state)**
```bash
git status
```
Expected: "nothing to commit, working tree clean"

---

## Task 2: Rename src/components/ → src/legacy/ and move spr- stores

**Files:**
- Rename: `src/components/` → `src/legacy/`
- Move: `src/stores/useSnackbarStore.ts` → `src/legacy/stores/useSnackbarStore.ts`

**Step 1: Rename components directory (git mv preserves history)**
```bash
git mv src/components src/legacy
```
Expected: `src/legacy/` now has all 43 component directories.

**Step 2: Move spr- snackbar store**
```bash
mkdir -p src/legacy/stores
git mv src/stores/useSnackbarStore.ts src/legacy/stores/useSnackbarStore.ts
```
Expected: `src/legacy/stores/useSnackbarStore.ts` exists.

> Note: `src/stores/` may become empty — if so remove it:
```bash
rmdir src/stores 2>/dev/null || true
```

**Step 3: Commit**
```bash
git add -A
git commit -m "refactor: rename src/components → src/legacy, move spr- store"
```

---

## Task 3: Rename src/assets/ → src/tokens/

**Files:**
- Rename: `src/assets/` → `src/tokens/`

**Step 1: Rename assets directory**
```bash
git mv src/assets src/tokens
```
Expected: `src/tokens/scripts/`, `src/tokens/styles/`, `src/tokens/images/` exist.

**Step 2: Commit**
```bash
git commit -m "refactor: rename src/assets → src/tokens"
```

---

## Task 4: Update root-level path references

These files reference the old paths and must be updated BEFORE anything can build.

**Files to modify:**
- `lib/main.ts`
- `lib/toge.ts`
- `lib/types.ts`
- `vite.config.ts`
- `vite.toge.config.ts`
- `tailwind.config.js`
- `tsconfig.json`
- `tsconfig.app.json`
- `docs/vite.config.ts`
- `src/main.ts` (if it imports from `./assets/`)

**Step 1: Update `lib/main.ts`**

Find and update the CSS import and the glob pattern:
- `import '@/assets/styles/tailwind.css'` → `import '@/tokens/styles/tailwind.css'`
- `import.meta.glob('../src/components/**/*.vue'` → `import.meta.glob('../src/legacy/**/*.vue'`

**Step 2: Update `lib/types.ts`**

All 46 type exports use paths like `'../src/components/accordion/accordion'`.
- Global find+replace: `../src/components/` → `../src/legacy/`

**Step 3: Update `lib/toge.ts`**

The toge entry point may import `@/assets/styles/tailwind.css`:
- `import '@/assets/styles/tailwind.css'` → `import '@/tokens/styles/tailwind.css'`
- The glob `../src/toge/` stays unchanged (src/toge/ doesn't move).

**Step 4: Update `vite.config.ts`** (root build config for legacy)

- `dts.include`: change `'src/components/**/*.ts'`, `'src/components/**/*.vue'` → `'src/legacy/**/*.ts'`, `'src/legacy/**/*.vue'`
- Keep `@` alias as `resolve(__dirname, 'src')` — it now covers all of `src/` including `src/legacy/` and `src/tokens/`

**Step 5: Update `vite.toge.config.ts`** (root build config for toge)

- `dts.include`: `'src/toge/**/*.ts'` stays unchanged.
- CSS import if any: `src/assets/styles/tailwind.css` → `src/tokens/styles/tailwind.css`

**Step 6: Update `tailwind.config.js`** (root Tailwind config)

- Update token script imports: `from './src/assets/scripts/colors'` → `from './src/tokens/scripts/colors'` (and same for spacing, border-radius, max-width, utilities)

**Step 7: Update `tsconfig.json` and `tsconfig.app.json`**

- `include` globs: `src/**/*.ts` and `src/**/*.vue` — these catch-all globs stay valid (they cover `src/legacy/`, `src/toge/`, `src/tokens/` automatically)
- `paths`: `@/*` → `./src/*` — stays valid

**Step 8: Update `docs/vite.config.ts`**

- The `@` alias currently points to `'../src'`. After renaming, docs theme components import from `@/components/switch/switch.vue` and `@/components/lozenge/lozenge.vue`.
- These must be updated to `@/legacy/switch/switch.vue` and `@/legacy/lozenge/lozenge.vue` in the theme files.
- OR change the alias to point to `'../src/legacy'` so `@/components/` still resolves. **Recommended:** Change alias to `'../src/legacy'` — this is a config-only change with no component file edits.

**Step 9: Commit**
```bash
git add -A
git commit -m "refactor: update root-level paths after src/ restructure"
```

---

## Task 5: Update packages/legacy/ to reference root src/legacy/

The `packages/legacy/src/` is a copy of the old `src/components/`. Delete it and update paths.

**Files to modify:**
- `packages/legacy/vite.config.ts`
- `packages/legacy/lib/main.ts`
- `packages/legacy/lib/types.ts`
- `packages/legacy/tailwind.config.js`
- `packages/legacy/tsconfig.json`

**Step 1: Delete the package-local copy**
```bash
rm -rf packages/legacy/src/
```

**Step 2: Update `packages/legacy/vite.config.ts`**
- `@` alias: change `resolve(__dirname, './src')` → `resolve(__dirname, '../../src/legacy')`
- `dts.include`: `'src/components/**/*.ts'` → `'../../src/legacy/**/*.ts'`, `'../../src/legacy/**/*.vue'`
- `lib.entry`: `resolve(__dirname, 'lib/main.ts')` — stays the same (lib/ is still inside packages/legacy/)

**Step 3: Update `packages/legacy/lib/main.ts`**
- CSS import: `@toge-design-system/tokens/styles` — stays (already correct)
- `import.meta.glob('../src/components/**/*.vue'` → `import.meta.glob('../../src/legacy/**/*.vue'`
- Named exports: all paths like `'../src/components/accordion/accordion.vue'` → `'../../src/legacy/accordion/accordion.vue'`

**Step 4: Update `packages/legacy/lib/types.ts`**
- Global find+replace: `'../src/components/` → `'../../src/legacy/`

**Step 5: Update `packages/legacy/tailwind.config.js`**
- content paths: `'./src/**/*.{vue,js,ts}'` → `'../../src/legacy/**/*.{vue,js,ts}'`

**Step 6: Update `packages/legacy/tsconfig.json`**
- `baseUrl`: `"."` stays (relative to packages/legacy/)
- `paths`: `"@/*": ["src/*"]` → `"@/*": ["../../src/legacy/*"]`
- `include`: `["src", "lib"]` → `["../../src/legacy", "lib"]`

**Step 7: Verify build**
```bash
npm run build --workspace=packages/legacy
```
Expected: `packages/legacy/dist/design-system-next.es.js`, `design-system-next.umd.js`, `main.css` all produced without errors.

**Step 8: Commit**
```bash
git add -A
git commit -m "refactor: packages/legacy now references root src/legacy (no local copy)"
```

---

## Task 6: Update packages/toge/ to reference root src/toge/

**Files to modify:**
- `packages/toge/vite.config.ts`
- `packages/toge/lib/toge.ts`
- `packages/toge/tailwind.config.js`
- `packages/toge/tsconfig.json`

**Step 1: Delete the package-local copy**
```bash
rm -rf packages/toge/src/
```

**Step 2: Update `packages/toge/vite.config.ts`**
- `@` alias: `resolve(__dirname, './src')` → `resolve(__dirname, '../../src')`
  (toge components use `@/toge/...` internally so `@` should point to root `src/` which contains `toge/`)
- `dts.include`: `'src/toge/**/*.ts'` → `'../../src/toge/**/*.ts'`, `'../../src/toge/**/*.vue'`

**Step 3: Update `packages/toge/lib/toge.ts`**
- CSS import: `@toge-design-system/tokens/styles` — stays
- glob: `'../src/toge/{primitives,molecules,patterns}/**/*.vue'` → `'../../src/toge/{primitives,molecules,patterns}/**/*.vue'`
  (also update the exclusion glob: `'!../src/toge/primitives/button/button-dropdown/**'` → `'!../../src/toge/primitives/button/button-dropdown/**'`)
- Named exports (if any): update from `'../src/toge/...'` → `'../../src/toge/...'`

**Step 4: Update `packages/toge/tailwind.config.js`**
- content: `'./src/**/*.{vue,js,ts}'` → `'../../src/toge/**/*.{vue,js,ts}'`

**Step 5: Update `packages/toge/tsconfig.json`**
- `paths`: `"@/*": ["src/*"]` → `"@/*": ["../../src/*"]`
- `include`: `["src", "lib"]` → `["../../src/toge", "lib"]`

**Step 6: Verify build**
```bash
npm run build --workspace=packages/toge
```
Expected: `packages/toge/dist/toge.es.js` and `toge.css` produced without errors.

**Step 7: Commit**
```bash
git add -A
git commit -m "refactor: packages/toge now references root src/toge (no local copy)"
```

---

## Task 7: Update packages/tokens/ to reference root src/tokens/

**Files to modify:**
- `packages/tokens/tailwind.config.js`
- `packages/tokens/package.json` (exports)
- `packages/tokens/tsconfig.json`

**Step 1: Delete the package-local copy**
```bash
rm -rf packages/tokens/src/
```

**Step 2: Update `packages/tokens/tailwind.config.js`**
- Import paths: `from './src/scripts/colors'` → `from '../../src/tokens/scripts/colors'` (all 5 imports)

**Step 3: Update `packages/tokens/package.json` exports**
- `"."` entry: `"./src/scripts/index.ts"` → `"../../src/tokens/scripts/index.ts"`
- `"./styles"` entry: `"./src/styles/tailwind.css"` → `"../../src/tokens/styles/tailwind.css"`

**Step 4: Update `packages/tokens/tsconfig.json`**
- `include`: `["src"]` → `["../../src/tokens"]`

**Step 5: Commit**
```bash
git add -A
git commit -m "refactor: packages/tokens now references root src/tokens (no local copy)"
```

---

## Task 8: Final verification

**Step 1: Clean and reinstall**
```bash
cd "/Users/maaraquel/Coding/Design System/Sprout-Design-System-Next/.worktrees/feat/mirror-src-structure"
npm install
```

**Step 2: Build legacy**
```bash
npm run build --workspace=packages/legacy
```
Expected: `packages/legacy/dist/` has `design-system-next.es.js`, `.umd.js`, `main.css`

**Step 3: Build toge**
```bash
npm run build --workspace=packages/toge
```
Expected: `packages/toge/dist/` has `toge.es.js`, `toge.css`

**Step 4: TypeScript check**
```bash
npm run types --workspace=packages/legacy
npm run types --workspace=packages/toge
```
Expected: Both exit cleanly (no errors)

**Step 5: Verify docs dev server starts**
```bash
npm run docs:dev &
sleep 5 && curl -s http://localhost:5173 | head -5
kill %1
```
Expected: HTML response returned, no build errors in console

**Step 6: Verify workspace links**
```bash
ls node_modules/@toge-design-system/
```
Expected: `design-system-next`, `toge`, `tokens`

**Step 7: Merge to main**
```bash
cd "/Users/maaraquel/Coding/Design System/Sprout-Design-System-Next"
git merge feat/mirror-src-structure
git worktree remove .worktrees/feat/mirror-src-structure
```

---

## Critical Files Reference

| File | Change |
|------|--------|
| `src/components/` | → `src/legacy/` (git mv) |
| `src/assets/` | → `src/tokens/` (git mv) |
| `src/stores/useSnackbarStore.ts` | → `src/legacy/stores/` |
| `lib/main.ts` | glob + CSS import paths |
| `lib/types.ts` | 46 type import paths |
| `lib/toge.ts` | CSS import path (toge stays) |
| `vite.config.ts` | dts.include paths |
| `vite.toge.config.ts` | CSS import if any |
| `tailwind.config.js` | token script imports |
| `docs/vite.config.ts` | `@` alias → `../src/legacy` |
| `packages/legacy/src/` | DELETE (now uses root src/legacy/) |
| `packages/legacy/vite.config.ts` | `@` alias + dts.include |
| `packages/legacy/lib/main.ts` | glob + named exports paths |
| `packages/legacy/lib/types.ts` | 46 type import paths |
| `packages/legacy/tailwind.config.js` | content paths |
| `packages/legacy/tsconfig.json` | paths + include |
| `packages/toge/src/` | DELETE (now uses root src/toge/) |
| `packages/toge/vite.config.ts` | `@` alias + dts.include |
| `packages/toge/lib/toge.ts` | glob patterns |
| `packages/toge/tailwind.config.js` | content paths |
| `packages/toge/tsconfig.json` | paths + include |
| `packages/tokens/src/` | DELETE (now uses root src/tokens/) |
| `packages/tokens/tailwind.config.js` | import paths |
| `packages/tokens/package.json` | exports paths |
| `packages/tokens/tsconfig.json` | include path |
