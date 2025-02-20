# Input

UI element that allows users to enter and edit text or other data.

## Basic Usage

<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your username" />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Active State

<spr-input v-model="inputValue.input2" label="Text Input" placeholder="Enter your username" :active="true" />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Error State

<spr-input v-model="inputValue.input3" label="Text Input" placeholder="Enter your username" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Disabled State

<spr-input v-model="inputValue.input4" label="Text Input" placeholder="Enter your username" :disabled="true" />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Prefix

<spr-input v-model="inputValue.input5" label="Text Input" placeholder="Enter your username"  >
  <template #prefix>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username">
    <template #prefix>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Trailing Label

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-input v-model="inputValue.input6" label="Offset xs" placeholder="00" offset-size="xs" type="number">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputValue.input7" label="offset sm" placeholder="0000000" offset-size="sm" type="number">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputValue.input8" label="offset md" placeholder="Enter your name" offset-size="md" >
    <template #trailing>
      Name of the user
    </template>
  </spr-input>
</div>

```vue
<template>
  <!-- xs -->
  <spr-input v-model="inputValueXS" label="Offset xs" placeholder="00" offset-size="xs" type="number">
    <template #trailing> minutes </template>
  </spr-input>

  <!-- sm -->
  <spr-input v-model="inputValueSM" label="offset sm" placeholder="00" offset-size="sm" type="number">
    <template #trailing> minutes </template>
  </spr-input>

  <!-- md -->
  <spr-input v-model="inputValueMD" label="offset md" placeholder="Enter your name" offset-size="md">
    <template #trailing> Name of the user </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueXS = ref('');

const inputValueSM = ref('');

const inputValueMD = ref('');
</script>
```
## Search Input
<div>
  <spr-input v-model="inputValue.input9" label="Search" placeholder="Enter search value" :active="true" type="search" />
</div>

```vue
<template>
  <spr-input v-model="inputValueSearch" label="Search" placeholder="Enter search value" :active="true" type="search" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueSearch = ref('');
</script>
``` 

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInput from "@/components/input/input.vue"

const inputValue = ref({
  input1: '',
  input2: '',
  input3: '',
  input4: '',
  input5: '',
  input6: '',
  input7: '',
  input8: '',
  input9: '',
});
</script>
