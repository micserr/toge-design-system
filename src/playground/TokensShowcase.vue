<template>
  <div class="spr-font-main spr-text-color-strong spr-space-y-16">

    <!-- Header -->
    <div class="spr-space-y-2">
      <p class="spr-label-sm-medium spr-text-color-brand-base spr-uppercase spr-tracking-wider">Sprout Design System</p>
      <h1 class="spr-heading-md spr-text-color-strong">Design Tokens</h1>
      <p class="spr-body-md-regular spr-text-color-base">Visual foundations — typography, colors, spacing, radius, and shadows.</p>
    </div>

    <hr class="spr-border-color-base spr-border-t" />

    <!-- Typography -->
    <section class="spr-space-y-6">
      <div>
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase spr-mb-1">Type Scale</p>
        <h2 class="spr-subheading-sm spr-text-color-strong">Typography</h2>
      </div>

      <!-- Headings -->
      <div class="spr-space-y-4">
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase">Headings</p>
        <div class="spr-space-y-3">
          <div v-for="h in headings" :key="h.class" class="spr-flex spr-items-baseline spr-gap-6">
            <span class="spr-label-xs-regular spr-text-color-weak spr-w-28 spr-shrink-0 spr-tabular-nums">{{ h.label }}</span>
            <span :class="h.class">The quick brown fox</span>
          </div>
        </div>
      </div>

      <!-- Subheadings -->
      <div class="spr-space-y-4">
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase">Subheadings</p>
        <div class="spr-space-y-3">
          <div v-for="s in subheadings" :key="s.class" class="spr-flex spr-items-baseline spr-gap-6">
            <span class="spr-label-xs-regular spr-text-color-weak spr-w-28 spr-shrink-0">{{ s.label }}</span>
            <span :class="s.class">The quick brown fox jumps over the lazy dog</span>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="spr-space-y-4">
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase">Body</p>
        <div class="spr-space-y-3">
          <div v-for="b in bodyStyles" :key="b.class" class="spr-flex spr-items-baseline spr-gap-6">
            <span class="spr-label-xs-regular spr-text-color-weak spr-w-28 spr-shrink-0">{{ b.label }}</span>
            <span :class="b.class">The quick brown fox jumps over the lazy dog</span>
          </div>
        </div>
      </div>

      <!-- Labels -->
      <div class="spr-space-y-4">
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase">Labels</p>
        <div class="spr-space-y-3">
          <div v-for="l in labelStyles" :key="l.class" class="spr-flex spr-items-baseline spr-gap-6">
            <span class="spr-label-xs-regular spr-text-color-weak spr-w-28 spr-shrink-0">{{ l.label }}</span>
            <span :class="l.class">Label text example</span>
          </div>
        </div>
      </div>
    </section>

    <hr class="spr-border-color-base spr-border-t" />

    <!-- Semantic Text Colors -->
    <section class="spr-space-y-6">
      <div>
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase spr-mb-1">Semantic</p>
        <h2 class="spr-subheading-sm spr-text-color-strong">Text Colors</h2>
      </div>
      <div class="spr-grid spr-grid-cols-2 spr-gap-4 md:spr-grid-cols-3 lg:spr-grid-cols-4">
        <div v-for="t in textColors" :key="t.class" class="spr-space-y-1">
          <p :class="['spr-body-md-regular', t.class]">{{ t.label }}</p>
          <p class="spr-label-xs-regular spr-text-color-weak">{{ t.class }}</p>
        </div>
      </div>
    </section>

    <hr class="spr-border-color-base spr-border-t" />

    <!-- Color Palettes -->
    <section class="spr-space-y-6">
      <div>
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase spr-mb-1">Palette</p>
        <h2 class="spr-subheading-sm spr-text-color-strong">Colors</h2>
      </div>
      <div class="spr-space-y-6">
        <div v-for="palette in colorPalettes" :key="palette.name" class="spr-space-y-2">
          <p class="spr-label-sm-medium spr-text-color-base spr-capitalize">{{ palette.name }}</p>
          <div class="spr-flex spr-gap-1 spr-flex-wrap">
            <div
              v-for="swatch in palette.shades"
              :key="swatch.shade"
              :class="['spr-h-10 spr-w-10 spr-rounded-border-radius-md spr-flex spr-items-end spr-pb-0.5 spr-justify-center', swatch.bgClass]"
              :title="`${palette.name}-${swatch.shade}`"
            >
              <span :class="['spr-label-xs-regular', swatch.shade >= 600 ? 'spr-text-white-50' : 'spr-text-mushroom-950']">{{ swatch.shade }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="spr-border-color-base spr-border-t" />

    <!-- Border Radius -->
    <section class="spr-space-y-6">
      <div>
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase spr-mb-1">Shape</p>
        <h2 class="spr-subheading-sm spr-text-color-strong">Border Radius</h2>
      </div>
      <div class="spr-flex spr-flex-wrap spr-gap-6 spr-items-end">
        <div v-for="r in radii" :key="r.class" class="spr-flex spr-flex-col spr-items-center spr-gap-2">
          <div :class="['spr-bg-kangkong-100 spr-border-2 spr-border-kangkong-400 spr-h-16 spr-w-16', r.class]" />
          <p class="spr-label-xs-regular spr-text-color-weak spr-text-center">{{ r.label }}</p>
        </div>
      </div>
    </section>

    <hr class="spr-border-color-base spr-border-t" />

    <!-- Shadows -->
    <section class="spr-space-y-6">
      <div>
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase spr-mb-1">Elevation</p>
        <h2 class="spr-subheading-sm spr-text-color-strong">Shadows</h2>
      </div>
      <div class="spr-flex spr-flex-wrap spr-gap-8 spr-items-end">
        <div v-for="s in shadows" :key="s.class" class="spr-flex spr-flex-col spr-items-center spr-gap-3">
          <div :class="['spr-background-color spr-rounded-border-radius-lg spr-h-20 spr-w-32', s.class]" />
          <p class="spr-label-xs-regular spr-text-color-weak">{{ s.label }}</p>
        </div>
      </div>
    </section>

    <hr class="spr-border-color-base spr-border-t" />

    <!-- Spacing Scale -->
    <section class="spr-space-y-6 spr-pb-16">
      <div>
        <p class="spr-label-xs-medium spr-text-color-weak spr-uppercase spr-mb-1">Scale</p>
        <h2 class="spr-subheading-sm spr-text-color-strong">Spacing</h2>
      </div>
      <div class="spr-space-y-3">
        <div v-for="sp in spacingScale" :key="sp.label" class="spr-flex spr-items-center spr-gap-4">
          <span class="spr-label-xs-regular spr-text-color-weak spr-w-20 spr-shrink-0 spr-tabular-nums">{{ sp.label }}</span>
          <div :class="['spr-h-4 spr-bg-kangkong-300 spr-rounded-border-radius-sm', sp.widthClass]" />
          <span class="spr-label-xs-regular spr-text-color-weak">{{ sp.value }}</span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const headings = [
  { class: 'spr-heading-xl', label: 'heading-xl' },
  { class: 'spr-heading-lg', label: 'heading-lg' },
  { class: 'spr-heading-md', label: 'heading-md' },
  { class: 'spr-heading-sm', label: 'heading-sm' },
  { class: 'spr-heading-xs', label: 'heading-xs' },
]

const subheadings = [
  { class: 'spr-subheading-sm', label: 'subheading-sm' },
  { class: 'spr-subheading-xs', label: 'subheading-xs' },
]

const bodyStyles = [
  { class: 'spr-body-lg-regular', label: 'body-lg-regular' },
  { class: 'spr-body-lg-regular-medium', label: 'body-lg-medium' },
  { class: 'spr-body-md-regular', label: 'body-md-regular' },
  { class: 'spr-body-md-regular-medium', label: 'body-md-medium' },
  { class: 'spr-body-sm-regular', label: 'body-sm-regular' },
  { class: 'spr-body-sm-regular-medium', label: 'body-sm-medium' },
  { class: 'spr-body-xs-regular', label: 'body-xs-regular' },
  { class: 'spr-body-xs-regular-medium', label: 'body-xs-medium' },
]

const labelStyles = [
  { class: 'spr-label-sm-regular', label: 'label-sm-regular' },
  { class: 'spr-label-sm-medium', label: 'label-sm-medium' },
  { class: 'spr-label-xs-regular', label: 'label-xs-regular' },
  { class: 'spr-label-xs-medium', label: 'label-xs-medium' },
]

const textColors = [
  { class: 'spr-text-color-strong', label: 'Strong' },
  { class: 'spr-text-color-base', label: 'Base' },
  { class: 'spr-text-color-supporting', label: 'Supporting' },
  { class: 'spr-text-color-weak', label: 'Weak' },
  { class: 'spr-text-color-disabled', label: 'Disabled' },
  { class: 'spr-text-color-brand-base', label: 'Brand' },
  { class: 'spr-text-color-success-base', label: 'Success' },
  { class: 'spr-text-color-danger-base', label: 'Danger' },
  { class: 'spr-text-color-caution-base', label: 'Caution' },
  { class: 'spr-text-color-pending-base', label: 'Pending' },
  { class: 'spr-text-color-information-base', label: 'Information' },
  { class: 'spr-text-color-accent-base', label: 'Accent' },
]

const colorPalettes = [
  {
    name: 'mushroom',
    shades: [
      { shade: 50, bgClass: 'spr-bg-mushroom-50' }, { shade: 100, bgClass: 'spr-bg-mushroom-100' },
      { shade: 200, bgClass: 'spr-bg-mushroom-200' }, { shade: 300, bgClass: 'spr-bg-mushroom-300' },
      { shade: 400, bgClass: 'spr-bg-mushroom-400' }, { shade: 500, bgClass: 'spr-bg-mushroom-500' },
      { shade: 600, bgClass: 'spr-bg-mushroom-600' }, { shade: 700, bgClass: 'spr-bg-mushroom-700' },
      { shade: 800, bgClass: 'spr-bg-mushroom-800' }, { shade: 900, bgClass: 'spr-bg-mushroom-900' },
      { shade: 950, bgClass: 'spr-bg-mushroom-950' },
    ],
  },
  {
    name: 'kangkong',
    shades: [
      { shade: 50, bgClass: 'spr-bg-kangkong-50' }, { shade: 100, bgClass: 'spr-bg-kangkong-100' },
      { shade: 200, bgClass: 'spr-bg-kangkong-200' }, { shade: 300, bgClass: 'spr-bg-kangkong-300' },
      { shade: 400, bgClass: 'spr-bg-kangkong-400' }, { shade: 500, bgClass: 'spr-bg-kangkong-500' },
      { shade: 600, bgClass: 'spr-bg-kangkong-600' }, { shade: 700, bgClass: 'spr-bg-kangkong-700' },
      { shade: 800, bgClass: 'spr-bg-kangkong-800' }, { shade: 900, bgClass: 'spr-bg-kangkong-900' },
      { shade: 950, bgClass: 'spr-bg-kangkong-950' },
    ],
  },
  {
    name: 'tomato',
    shades: [
      { shade: 50, bgClass: 'spr-bg-tomato-50' }, { shade: 100, bgClass: 'spr-bg-tomato-100' },
      { shade: 200, bgClass: 'spr-bg-tomato-200' }, { shade: 300, bgClass: 'spr-bg-tomato-300' },
      { shade: 400, bgClass: 'spr-bg-tomato-400' }, { shade: 500, bgClass: 'spr-bg-tomato-500' },
      { shade: 600, bgClass: 'spr-bg-tomato-600' }, { shade: 700, bgClass: 'spr-bg-tomato-700' },
      { shade: 800, bgClass: 'spr-bg-tomato-800' }, { shade: 900, bgClass: 'spr-bg-tomato-900' },
      { shade: 950, bgClass: 'spr-bg-tomato-950' },
    ],
  },
  {
    name: 'carrot',
    shades: [
      { shade: 50, bgClass: 'spr-bg-carrot-50' }, { shade: 100, bgClass: 'spr-bg-carrot-100' },
      { shade: 200, bgClass: 'spr-bg-carrot-200' }, { shade: 300, bgClass: 'spr-bg-carrot-300' },
      { shade: 400, bgClass: 'spr-bg-carrot-400' }, { shade: 500, bgClass: 'spr-bg-carrot-500' },
      { shade: 600, bgClass: 'spr-bg-carrot-600' }, { shade: 700, bgClass: 'spr-bg-carrot-700' },
      { shade: 800, bgClass: 'spr-bg-carrot-800' }, { shade: 900, bgClass: 'spr-bg-carrot-900' },
      { shade: 950, bgClass: 'spr-bg-carrot-950' },
    ],
  },
  {
    name: 'mango',
    shades: [
      { shade: 50, bgClass: 'spr-bg-mango-50' }, { shade: 100, bgClass: 'spr-bg-mango-100' },
      { shade: 200, bgClass: 'spr-bg-mango-200' }, { shade: 300, bgClass: 'spr-bg-mango-300' },
      { shade: 400, bgClass: 'spr-bg-mango-400' }, { shade: 500, bgClass: 'spr-bg-mango-500' },
      { shade: 600, bgClass: 'spr-bg-mango-600' }, { shade: 700, bgClass: 'spr-bg-mango-700' },
      { shade: 800, bgClass: 'spr-bg-mango-800' }, { shade: 900, bgClass: 'spr-bg-mango-900' },
      { shade: 950, bgClass: 'spr-bg-mango-950' },
    ],
  },
  {
    name: 'wintermelon',
    shades: [
      { shade: 50, bgClass: 'spr-bg-wintermelon-50' }, { shade: 100, bgClass: 'spr-bg-wintermelon-100' },
      { shade: 200, bgClass: 'spr-bg-wintermelon-200' }, { shade: 300, bgClass: 'spr-bg-wintermelon-300' },
      { shade: 400, bgClass: 'spr-bg-wintermelon-400' }, { shade: 500, bgClass: 'spr-bg-wintermelon-500' },
      { shade: 600, bgClass: 'spr-bg-wintermelon-600' }, { shade: 700, bgClass: 'spr-bg-wintermelon-700' },
      { shade: 800, bgClass: 'spr-bg-wintermelon-800' }, { shade: 900, bgClass: 'spr-bg-wintermelon-900' },
      { shade: 950, bgClass: 'spr-bg-wintermelon-950' },
    ],
  },
  {
    name: 'blueberry',
    shades: [
      { shade: 50, bgClass: 'spr-bg-blueberry-50' }, { shade: 100, bgClass: 'spr-bg-blueberry-100' },
      { shade: 200, bgClass: 'spr-bg-blueberry-200' }, { shade: 300, bgClass: 'spr-bg-blueberry-300' },
      { shade: 400, bgClass: 'spr-bg-blueberry-400' }, { shade: 500, bgClass: 'spr-bg-blueberry-500' },
      { shade: 600, bgClass: 'spr-bg-blueberry-600' }, { shade: 700, bgClass: 'spr-bg-blueberry-700' },
      { shade: 800, bgClass: 'spr-bg-blueberry-800' }, { shade: 900, bgClass: 'spr-bg-blueberry-900' },
      { shade: 950, bgClass: 'spr-bg-blueberry-950' },
    ],
  },
  {
    name: 'ubas',
    shades: [
      { shade: 50, bgClass: 'spr-bg-ubas-50' }, { shade: 100, bgClass: 'spr-bg-ubas-100' },
      { shade: 200, bgClass: 'spr-bg-ubas-200' }, { shade: 300, bgClass: 'spr-bg-ubas-300' },
      { shade: 400, bgClass: 'spr-bg-ubas-400' }, { shade: 500, bgClass: 'spr-bg-ubas-500' },
      { shade: 600, bgClass: 'spr-bg-ubas-600' }, { shade: 700, bgClass: 'spr-bg-ubas-700' },
      { shade: 800, bgClass: 'spr-bg-ubas-800' }, { shade: 900, bgClass: 'spr-bg-ubas-900' },
      { shade: 950, bgClass: 'spr-bg-ubas-950' },
    ],
  },
]

const radii = [
  { class: 'spr-rounded-border-radius-2xs', label: '2xs · 2px' },
  { class: 'spr-rounded-border-radius-xs', label: 'xs · 4px' },
  { class: 'spr-rounded-border-radius-sm', label: 'sm · 6px' },
  { class: 'spr-rounded-border-radius-md', label: 'md · 8px' },
  { class: 'spr-rounded-border-radius-lg', label: 'lg · 12px' },
  { class: 'spr-rounded-border-radius-xl', label: 'xl · 16px' },
  { class: 'spr-rounded-border-radius-full', label: 'full · 999px' },
]

const shadows = [
  { class: 'spr-shadow-drop-sm', label: 'drop-sm' },
  { class: 'spr-shadow-drop', label: 'drop' },
  { class: 'spr-shadow-drop-md', label: 'drop-md' },
]

const spacingScale = [
  { label: '6xs · 2px', widthClass: 'spr-w-[2px]', value: '2px' },
  { label: '5xs · 4px', widthClass: 'spr-w-1', value: '4px' },
  { label: '4xs · 6px', widthClass: 'spr-w-1.5', value: '6px' },
  { label: '3xs · 8px', widthClass: 'spr-w-2', value: '8px' },
  { label: '2xs · 12px', widthClass: 'spr-w-3', value: '12px' },
  { label: 'xs · 16px', widthClass: 'spr-w-4', value: '16px' },
  { label: 'sm · 24px', widthClass: 'spr-w-6', value: '24px' },
  { label: 'md · 32px', widthClass: 'spr-w-8', value: '32px' },
  { label: 'lg · 40px', widthClass: 'spr-w-10', value: '40px' },
  { label: 'xl · 48px', widthClass: 'spr-w-12', value: '48px' },
  { label: '2xl · 64px', widthClass: 'spr-w-16', value: '64px' },
  { label: '3xl · 80px', widthClass: 'spr-w-20', value: '80px' },
  { label: '4xl · 96px', widthClass: 'spr-w-24', value: '96px' },
  { label: '5xl · 128px', widthClass: 'spr-w-32', value: '128px' },
]
</script>
