# Stacking Sidepanel

The `StackingSidepanel` component allows you to display multiple side panels that can stack next to each other. This is useful for workflows that require nested or sequential panels.

> [!IMPORTANT]
> The `StackingSidepanel` component is designed to work with right-positioned side panels only. Ensure that all side panels within the stacking side panel are positioned to the right.
> Also, set the `is-stacking` prop to `true` on each side panel to enable stacking behavior.

## Basic Usage
<spr-button @click="stackingSidepanel?.showPanel('sidepanel-1')">Show Panel 1</spr-button>
<span class="spr-body-md">Active Panels: {{ activePanelText }}</span>
  
<spr-stacking-sidepanel ref="stacking-sidepanel" v-model:stack="activePanel" @update:stack="activePanelsHandler">
  <template #sidepanel-1>
    <spr-sidepanel
      size="sm"
      :position="'right'"
      :is-stacking="true"
      header-title="Sidepanel 1"
      @close="stackingSidepanel?.hidePanel('sidepanel-1')"
    >
      <div class="spr-p-size-spacing-2xs">
        <spr-button @click="stackingSidepanel?.showPanel('sidepanel-2')">Show Panel 2</spr-button>
      </div>
    </spr-sidepanel>
  </template>
  <template #sidepanel-2>
    <spr-sidepanel
      size="md"
      :position="'right'"
      :is-stacking="true"
      header-title="Sidepanel 2"
      @close="stackingSidepanel?.hidePanel('sidepanel-2')"
    >
      <div class="spr-p-size-spacing-2xs">
        <spr-button @click="stackingSidepanel?.showPanel('sidepanel-3')">Show Panel 3</spr-button>
      </div>
    </spr-sidepanel>
  </template>
  <template #sidepanel-3>
    <spr-sidepanel
      size="lg"
      :position="'right'"
      :is-stacking="true"
      header-title="Sidepanel 2"
      @close="stackingSidepanel?.hidePanel('sidepanel-3')"
    >
      <div class="spr-p-size-spacing-2xs">
        <spr-button @click="stackingSidepanel?.hidePanel('sidepanel-3')">Close Panel 3</spr-button>
      </div>
    </spr-sidepanel>
  </template>
</spr-stacking-sidepanel>

```vue{6,7,52}
<template>
  <spr-button @click="stackingSidepanel?.showPanel('sidepanel-1')">Show Panel 1</spr-button>
  <span class="spr-body-md">Active Panels: {{ activePanelText }}</span>
    
  <spr-stacking-sidepanel ref="stacking-sidepanel" v-model:stack="activePanel" @update:stack="activePanelsHandler">
    <template #sidepanel-1> <!-- Stacking sidepanel utilizes custom named slots. Make sure the slot names are unique. -->
      <!-- Stacking sidepanel is only supported for right positioned sidepanel. Also, set `is-stacking` to true. -->
      <spr-sidepanel
        size="sm"
        position="right"
        :is-stacking="true" 
        header-title="Sidepanel 1"
        @close="stackingSidepanel?.hidePanel('sidepanel-1')"
      >
        <div class="spr-p-size-spacing-2xs">
          <spr-button @click="stackingSidepanel?.showPanel('sidepanel-2')">Show Panel 2</spr-button>
        </div>
      </spr-sidepanel>
    </template>
    <template #sidepanel-2>
      <spr-sidepanel
        size="md"
        position="right"
        :is-stacking="true"
        header-title="Sidepanel 2"
        @close="stackingSidepanel?.hidePanel('sidepanel-2')"
      >
        <div class="spr-p-size-spacing-2xs">
          <spr-button @click="stackingSidepanel?.showPanel('sidepanel-3')">Show Panel 3</spr-button>
        </div>
      </spr-sidepanel>
    </template>
    <template #sidepanel-3>
      <spr-sidepanel
        size="lg"
        position="right"
        :is-stacking="true"
        header-title="Sidepanel 2"
        @close="stackingSidepanel?.hidePanel('sidepanel-3')"
      >
        <div class="spr-p-size-spacing-2xs">
          <spr-button @click="stackingSidepanel?.hidePanel('sidepanel-3')">Close Panel 3</spr-button>
        </div>
      </spr-sidepanel>
    </template>
  </spr-stacking-sidepanel>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';

const activePanel = ref<string[]>([]);
const stackingSidepanel = useTemplateRef("stacking-sidepanel"); // Use component reference to access exposed methods

const activePanelText = ref("none");
const activePanelsHandler = (panel: string[]) => { 
  activePanelText.value = panel.length > 0 ? panel.join(', ') : 'none';
}
</script>
```

## API Reference

### Props

| Prop   | Type        | Default | Description                                  |
|--------|-------------|---------|----------------------------------------------|
| stack  | `string[]`  | `[]`    | Array of active panel names (v-model:stack). |

### Emits

| Event           | Payload      | Description                                 |
|-----------------|-------------|---------------------------------------------|
| update:stack    | `string[]`  | Emitted when the stack of panels changes.    |

### Methods
The following methods are available via the `ref` of the `StackingSidepanel` component:

| Method      | Arguments      | Description                        |
|-------------|---------------|------------------------------------|
| showPanel   | `name: string`| Show a panel by its slot name.     |
| hidePanel   | `name: string`| Hide a panel by its slot name.     |

### Slots

Each panel is rendered in a named slot. Use the `<template #panelName>` syntax to define content for each panel. Make sure that slot names are unique to avoid conflicts.

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import SprButton from "@/components/button/button.vue"
import SprSidepanel from "@/components/sidepanel/sidepanel.vue";
import SprStackingSidepanel from "@/components/sidepanel/stacking-sidepanel/stacking-sidepanel.vue"

const activePanel = ref<string[]>([]);
const stackingSidepanel = useTemplateRef("stacking-sidepanel");
const activePanelText = ref("none");
const activePanelsHandler = (panel: string[]) => { 
  activePanelText.value = panel.length > 0 ? panel.join(', ') : 'none';
}
</script>
