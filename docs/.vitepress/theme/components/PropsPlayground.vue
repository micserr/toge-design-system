<template>
  <div class="props-playground">
    <div class="props-playground__preview">
      <component :is="component" v-bind="allProps">
        <Icon v-if="hasIconProp && propValues.hasIcon" :icon="iconName || 'ph:trash'" />
        <span v-if="slotText">{{ slotText }}</span>
      </component>
    </div>

    <div class="props-playground__controls">
      <div v-for="prop in propDefs" :key="prop.name" class="props-playground__control">
        <label :for="'ctrl-' + prop.name">{{ prop.name }}</label>

        <select
          v-if="prop.type === 'select'"
          :id="'ctrl-' + prop.name"
          :value="propValues[prop.name]"
          @change="updateProp(prop.name, ($event.target as HTMLSelectElement).value)"
        >
          <option v-for="opt in prop.options" :key="opt" :value="opt">{{ opt }}</option>
        </select>

        <spr-switch
          v-else-if="prop.type === 'boolean'"
          :model-value="propValues[prop.name] as boolean"
          @update:model-value="updateProp(prop.name, $event)"
        />

        <input
          v-else
          :id="'ctrl-' + prop.name"
          type="text"
          :value="propValues[prop.name]"
          @input="updateProp(prop.name, ($event.target as HTMLInputElement).value)"
        />
      </div>

      <div class="props-playground__control">
        <label for="ctrl-slot">Slot Content</label>
        <input id="ctrl-slot" type="text" v-model="slotText" />
      </div>
    </div>

    <div class="props-playground__code">
      <button class="props-playground__copy-btn" @click="copyCode" type="button">
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
      <pre><code>{{ generatedCode }}</code></pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, type Component } from 'vue';
import { Icon } from '@iconify/vue';
import SprSwitch from '@/components/switch/switch.vue';

interface PropDef {
  name: string;
  type: 'boolean' | 'select' | 'text';
  options?: string[];
  default: unknown;
}

const props = defineProps<{
  component: Component;
  componentTag: string;
  propDefs: PropDef[];
  defaultSlot?: string;
  extraProps?: Record<string, unknown>;
  extraCodeAttrs?: string;
  codeSetup?: string;
  iconName?: string;
}>();

const slotText = ref(props.defaultSlot || 'Button');
const copied = ref(false);

const propValues = reactive<Record<string, unknown>>(
  Object.fromEntries(props.propDefs.map((p) => [p.name, p.default]))
);

const hasIconProp = computed(() => props.propDefs.some((p) => p.name === 'hasIcon'));

const updateProp = (name: string, value: unknown) => {
  propValues[name] = value;
};

const allProps = computed(() => {
  const result: Record<string, unknown> = {};
  if (props.extraProps) {
    Object.assign(result, props.extraProps);
  }
  for (const prop of props.propDefs) {
    result[prop.name] = propValues[prop.name];
  }
  return result;
});

const generatedCode = computed(() => {
  const tag = props.componentTag;
  const knobAttrs = props.propDefs
    .filter((p) => propValues[p.name] !== p.default && p.name !== 'hasIcon')
    .map((p) => {
      const val = propValues[p.name];
      if (typeof val === 'boolean') return val ? p.name : '';
      return `${p.name}="${val}"`;
    })
    .filter(Boolean);

  const extraLines = props.extraCodeAttrs
    ? props.extraCodeAttrs.split('\n').map((s) => s.trim()).filter(Boolean)
    : [];
  const allAttrLines = [...extraLines, ...knobAttrs];

  const slot = slotText.value || '';
  const hasIconOn = hasIconProp.value && propValues.hasIcon;

  if (hasIconOn) {
    const attrStr = allAttrLines.length > 0 ? '\n    ' + allAttrLines.join('\n    ') + '\n  ' : '';
    const scriptLines = ["import { Icon } from '@iconify/vue';"];
    if (props.codeSetup) scriptLines.push(props.codeSetup);
    const icon = props.iconName || 'ph:trash';
    return `<template>\n  <${tag}${attrStr}>\n    <Icon icon="${icon}" />\n    <span>${slot}</span>\n  </${tag}>\n</template>\n\n<script setup>\n${scriptLines.join('\n')}\n<\/script>`;
  }

  if (props.codeSetup || allAttrLines.length > 2) {
    const attrStr = allAttrLines.length > 0 ? '\n    ' + allAttrLines.join('\n    ') + '\n  ' : '';
    const setupBlock = props.codeSetup ? `\n\n<script setup>\n${props.codeSetup}\n<\/script>` : '';
    return `<template>\n  <${tag}${attrStr}>\n    ${slot}\n  </${tag}>\n</template>${setupBlock}`;
  }

  const attrStr = allAttrLines.length > 0 ? ' ' + allAttrLines.join(' ') : '';
  return `<${tag}${attrStr}>${slot}</${tag}>`;
});

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(generatedCode.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    // Fallback for non-secure contexts
  }
};
</script>

<style scoped>
.props-playground {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}

.props-playground__preview {
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  background: var(--vp-c-bg-soft);
}

.props-playground__controls {
  padding: 16px;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.props-playground__control label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.props-playground__control select,
.props-playground__control input[type='text'] {
  width: 100%;
  padding: 6px 8px;
  font-size: 13px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.15s ease;
}

.props-playground__control select:focus,
.props-playground__control input[type='text']:focus {
  border-color: #158039;
}

.props-playground__code {
  padding: 16px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-code-block-bg);
  position: relative;
}

.props-playground__code pre {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

.props-playground__code code {
  color: var(--vp-c-text-1);
}

.props-playground__copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 12px;
  color: var(--vp-c-text-2);
  transition: all 0.15s ease;
}

.props-playground__copy-btn:hover {
  border-color: #158039;
  color: #158039;
}
</style>
