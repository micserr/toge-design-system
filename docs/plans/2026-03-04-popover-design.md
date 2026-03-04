# Popover Component Design

**Date:** 2026-03-04
**Status:** Approved

## Summary

Rename `primitives/dropdown/` → `primitives/popover/`. The `dropdown` name implied input/select behavior; `popover` correctly describes a generic floating card container. No behavioral changes — visual upgrade only.

## Tier

**Primitive** — single floating container, no internal composition, products inject content via slots.

## API

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `placement` | `PlacementType` | `'bottom'` | Floating placement relative to trigger |
| `distance` | `number` | `6` | Gap between trigger and popover |
| `triggers` | `TriggerEvent[]` | `['click']` | Events that open the popover |
| `popperTriggers` | `TriggerEvent[]` | `[]` | Events on the popover itself |
| `popperStrategy` | `'fixed' \| 'absolute'` | `'absolute'` | Popper positioning strategy |
| `popperWidth` | `string` | — | Width of the inner popover panel |
| `popperInnerWidth` | `string` | — | Min-width of the inner popover panel |
| `popperContainer` | `string` | — | CSS selector for teleport container |
| `autoHide` | `boolean` | `true` | Hide when clicking outside |
| `disabled` | `boolean` | `false` | Disable the trigger |
| `width` | `string` | — | Width of the trigger wrapper |

### Emits

| Event | Payload | Description |
|---|---|---|
| `popper-state` | `[state: boolean]` | Fired when popover opens or closes |

### Slots

| Slot | Description |
|---|---|
| `#reference` | The trigger element |
| `#default` | Popover body content (any content, including `<TogeList>`) |

## Visual Changes from `dropdown`

- Border-radius: `spr-rounded-border-radius-lg` (was `md`)
- Inner padding: `spr-p-2` added to the content container
- Shadow + border: unchanged

## File Changes

```
src/toge/primitives/dropdown/    →    src/toge/primitives/popover/
  dropdown.vue                   →      popover.vue
  dropdown.types.ts              →      popover.types.ts
  dropdown.styles.ts             →      popover.styles.ts
  index.ts                       →      index.ts (updated)
```

### Symbol renames

| Old | New |
|---|---|
| `DropdownProps` | `PopoverProps` |
| `DropdownEmits` | `PopoverEmits` |
| `DropdownSlots` | `PopoverSlots` |
| `DropdownStyleProps` | `PopoverStyleProps` |
| `getDropdownClasses` | `getPopoverClasses` |
| `PlacementType` | `PlacementType` (unchanged) |
| `TriggerEvent` | `TriggerEvent` (unchanged) |
| `PopperStrategy` | `PopperStrategy` (unchanged) |
| `TogeDropdown` | `TogePopover` |

## Consuming Components to Update

All components that currently import from `primitives/dropdown/` must be updated:

- `patterns/select/`
- `patterns/select-multiple/`
- `patterns/select-ladderized/`
- `patterns/filter/`
- `patterns/attribute-filter/`
- Any playground references in `src/playground/`
- `lib/toge.ts` export wiring

## Usage Example

```vue
<TogePopover placement="bottom-start">
  <template #reference>
    <TogeButton>Open</TogeButton>
  </template>

  <!-- Plain content -->
  <p>Any content here</p>

  <!-- Or a list -->
  <TogeList :items="items" />
</TogePopover>
```
