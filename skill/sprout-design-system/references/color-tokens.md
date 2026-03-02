# Design Color Tokens

Design color tokens are defined in **`src/assets/styles/tailwind.css`**. Use these `spr-` prefixed classes when styling UI so colors stay consistent with the design system.

## When to use which

- **Semantic tokens** (`spr-text-color-*`, `spr-background-color-*`, `spr-border-color-*`, `spr-divide-color-*`) — Use for UI states (default, hover, disabled, success, danger, etc.). They map to the correct palette/shade and support theming.
- **Raw palette** (`spr-text-{palette}-{shade}`, `spr-bg-{palette}-{shade}`, etc.) — Use when you need a specific shade. Palettes: `white`, `mushroom`, `tomato`, `carrot`, `mango`, `kangkong`, `wintermelon`, `blueberry`, `ubas`. Shades: `50`–`950`.

## Text color (semantic)

| Class | Use |
|-------|-----|
| `spr-text-color-strong` | Primary text |
| `spr-text-color-supporting` | Secondary text |
| `spr-text-color-base` | Default body text |
| `spr-text-color-weak` | Muted/tertiary text |
| `spr-text-color-disabled` | Disabled text |
| `spr-text-color-on-fill-disabled` | Text on disabled filled controls |
| `spr-text-color-inverted-strong` | Text on dark bg |
| `spr-text-color-inverted-base` | Text on dark bg (softer) |
| `spr-text-color-inverted-weak` | Muted text on dark bg |
| `spr-text-color-inverted-disabled` | Disabled text on dark bg |
| `spr-text-color-brand-base` / `-hover` / `-pressed` | Brand (kangkong) |
| `spr-text-color-success-base` / `-hover` / `-pressed` | Success |
| `spr-text-color-information-base` / `-hover` / `-pressed` | Information (blueberry) |
| `spr-text-color-danger-base` / `-hover` / `-pressed` | Danger (tomato) |
| `spr-text-color-pending-base` / `-hover` / `-pressed` | Pending (mango) |
| `spr-text-color-caution-base` / `-hover` / `-pressed` | Caution (carrot) |
| `spr-text-color-accent-base` / `-hover` / `-pressed` | Accent (wintermelon) |

## Background color (semantic)

| Class | Use |
|-------|-----|
| `spr-background-color` | Default surface (white-50) |
| `spr-background-color-default` | Default fill |
| `spr-background-color-surface` | Surface bg |
| `spr-background-color-surface-adaptive` | Adaptive surface |
| `spr-background-color-base` / `-hover` / `-pressed` | Neutral interactive |
| `spr-background-color-disabled` | Disabled fill |
| `spr-background-color-inverted` / `-hover` / `-pressed` | Dark surface |
| `spr-background-color-single-active` | Single selection (e.g. list row) |
| `spr-background-color-multiple-active` | Multiple selection |
| `spr-background-color-brand-base` / `-hover` / `-pressed` | Brand solid |
| `spr-background-color-brand-weak` / `-weak-hover` / `-weak-pressed` | Brand subtle |
| `spr-background-color-success-base` / `-hover` / `-pressed` | Success solid |
| `spr-background-color-success-weak` / `-weak-hover` / `-weak-pressed` | Success subtle |
| `spr-background-color-information-base` / `-hover` / `-pressed` | Info solid |
| `spr-background-color-information-weak` / `-weak-hover` / `-weak-pressed` | Info subtle |
| `spr-background-color-pending-base` / `-hover` / `-pressed` | Pending solid |
| `spr-background-color-pending-weak` / `-weak-hover` / `-weak-pressed` | Pending subtle |
| `spr-background-color-caution-base` / `-hover` / `-pressed` | Caution solid |
| `spr-background-color-caution-weak` / `-weak-hover` / `-weak-pressed` | Caution subtle |
| `spr-background-color-accent-base` / `-hover` / `-pressed` | Accent solid |
| `spr-background-color-accent-weak` / `-weak-hover` / `-weak-pressed` | Accent subtle |
| `spr-background-color-danger-base` / `-hover` / `-pressed` | Danger solid |
| `spr-background-color-danger-weak` / `-weak-hover` / `-weak-pressed` | Danger subtle |

## Border and divide (semantic)

Full lists: see [utilities.md](utilities.md#border-colors) (Border Color Classes, Divider Color Classes).

Examples: `spr-border-color-base`, `spr-border-color-weak`, `spr-border-color-brand-base`, `spr-border-color-danger-base`, `spr-divide-color-weak`, `spr-divide-color-base`.

## Raw palette usage

Pattern: `spr-{property}-{palette}-{shade}`.

- **property**: `text`, `bg`, `border`, `divide`
- **palette**: `white`, `mushroom`, `tomato`, `carrot`, `mango`, `kangkong`, `wintermelon`, `blueberry`, `ubas`
- **shade**: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

Example: `spr-text-kangkong-700`, `spr-bg-tomato-100`, `spr-border-mushroom-200`.

Hex values and full palette details: [utilities.md](utilities.md#colors).
