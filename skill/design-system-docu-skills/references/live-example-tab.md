# Live Example Tab Standards

## Purpose

The Live Example tab provides an interactive playground where users can manipulate component props in real-time and see the generated code.

## Required Sections

### 1. Interactive Playground

Use the `<PropsPlayground>` component with:
- `:component` — The actual imported Vue component reference
- `component-tag` — The kebab-case tag for code generation
- `:prop-defs` — Prop controls derived from the component's `.ts` file

**Prop control types:**
- `select` — For string union props (tone, size, variant). Include `options` array.
- `boolean` — For boolean props (disabled, hasIcon). Renders as a switch toggle.
- `text` — For string props. Renders as a text input.

**Omit internal props** from the playground (e.g., `state` which is mostly used internally).

### 2. Product Uses

Show which Sprout products use this component:

```markdown
## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <!-- Add relevant product logos -->
</div>
```

## Simple Component (no v-model)

For components like Button that only need prop knobs and slot text:

```markdown
<script setup>
import SprButton from '@/components/button/button.vue';
import SprLogo from '@/components/logo/logo.vue';
</script>

<PropsPlayground
  :component="SprButton"
  component-tag="spr-button"
  :prop-defs="[
    { name: 'tone', type: 'select', options: ['neutral', 'success', 'danger'], default: 'neutral' },
    { name: 'size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'tertiary'], default: 'primary' },
    { name: 'disabled', type: 'boolean', default: false },
    { name: 'hasIcon', type: 'boolean', default: false },
    { name: 'fullwidth', type: 'boolean', default: false },
  ]"
  default-slot="Button"
/>
```

## Complex Component (v-model, required bindings)

For components that need `v-model`, `menu-list`, or other non-knob bindings, use the three extra props:

- **`:extra-props`** — A `computed` ref that passes reactive bindings to the live component
- **`extra-code-attrs`** — Attribute strings shown in the generated code (newline-separated)
- **`code-setup`** — Script setup block shown in the generated code
- **`icon-name`** — Custom icon for `hasIcon` knob preview and code gen (default: `'ph:trash'`)

```markdown
<script setup>
import SprButtonDropdown from '@/components/button/button-dropdown/button-dropdown.vue';
import SprLogo from '@/components/logo/logo.vue';
import { ref, computed } from 'vue';

const menuList = ref([
  { text: 'Add', value: 'add', icon: 'ph:check', iconColor: 'spr-text-color-supporting', onClickFn: () => { alert('Add was clicked.') } },
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base', onClickFn: () => { alert('Delete was clicked.') } },
]);
const selected = ref([]);

const dropdownExtraProps = computed(() => ({
  'dropdownId': 'playground-1',
  'modelValue': selected.value,
  'onUpdate:modelValue': (v) => { selected.value = v; },
  'menuList': menuList.value,
  'width': '200px',
  'popperWidth': '200px',
}));

const codeSetupStr = `import { ref } from 'vue';

const selected = ref([]);
const menuList = ref([
  { text: 'Add', value: 'add', icon: 'ph:check' },
  { text: 'Delete', value: 'delete', icon: 'ph:trash', textColor: 'spr-text-color-danger-base' },
]);`;
</script>

<PropsPlayground
  :component="SprButtonDropdown"
  component-tag="spr-button-dropdown"
  :extra-props="dropdownExtraProps"
  :extra-code-attrs="'dropdown-id=&quot;my-dropdown&quot;\nv-model=&quot;selected&quot;\n:menu-list=&quot;menuList&quot;'"
  :code-setup="codeSetupStr"
  :prop-defs="[
    { name: 'tone', type: 'select', options: ['neutral', 'success'], default: 'neutral' },
    { name: 'size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary'], default: 'primary' },
    { name: 'disabled', type: 'boolean', default: false },
  ]"
  default-slot="Button Dropdown"
/>
```

### Key patterns for `extraProps`:

1. **Unwrap refs** — Use `.value` inside `computed` so Vue reactivity works
2. **v-model** — Pass `modelValue` (value) and `onUpdate:modelValue` (handler) as separate props
3. **Use `computed`** — Ensures the live component re-renders when reactive state changes

### Key patterns for `extraCodeAttrs`:

- Use `\n` to separate multiple attributes
- Use `&quot;` for quotes inside HTML attribute strings
- These appear as static attrs in the generated code (they don't change with knobs)

### Key patterns for `codeSetup`:

- Include all necessary imports and reactive declarations
- This appears inside `<script setup>` in the generated code snippet
- Simplify the `menuList` for the code sample (omit `onClickFn`, `iconColor`, etc.)
