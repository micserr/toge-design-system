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

## Min Max Length

You can either add min or max length by passing props `min-length` or `max-length` and add the corresponding number value.

<spr-input v-model="inputValue.input5" label="Text Input" placeholder="Enter your username" :min-length="0" :max-length="50" />

```vue
<template>
  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your username"
    :min-length="0"
    :max-length="50"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Prefix

<spr-input v-model="inputValue.input6" label="Text Input" placeholder="Enter your username"  >
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

## Helper Message

A helper message is a text label below the input field that provides additional information about instructions, formatting hints, validation feedback, etc.

To display the helper message, set the `display-helper` prop to `true` and add the `helper-text` prop with the helper message text. You can also insert an icon with the `helper-icon` prop. This uses the [Iconify](https://icon-sets.iconify.design/) icon library.

<spr-input v-model="inputValue.input9" label="Text Input" placeholder="Enter your text" helper-text="This is a helper message" display-helper/>
<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your text" helper-text="This is an error message" helper-icon="ph:warning-circle-fill" display-helper error/>

```vue
<template>
  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your text"
    helper-text="This is a helper message"
    display-helper
  />
  <spr-input
    v-model="inputValue.input1"
    label="Text Input"
    placeholder="Enter your text"
    helper-text="This is an error message"
    display-helper
    error
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

Alternatively, you can use the `helperMessage` slot to display a custom helper message.

<spr-input v-model="inputValue.input10" label="Text Input" placeholder="Enter your text" display-helper>
  <template #helperMessage>
    This is a helper message
  </template>
</spr-input>
<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your text" display-helper error >
  <template #helperMessage>
    <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
    This is a helper message
  </template>
</spr-input>

```vue
<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your text" display-helper>
  <template #helperMessage>
    This is a helper message
  </template>
</spr-input>
<spr-input v-model="inputValue.input1" label="Text Input" placeholder="Enter your text" display-helper error>
  <template #helperMessage>
    <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
    This is a helper message
  </template>
</spr-input>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## Search Input

<div>
   <spr-input-search v-model="inputValue.input11" label="Search" placeholder="Search ..."/>
</div>

```vue
<template>
  <spr-input-search v-model="inputValueSearch" label="Search" placeholder="Search ..." />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueSearch = ref('');
</script>
```

## Username Input

<div>
  <spr-input-username v-model="inputValue.input12" label="Username" placeholder="Enter username" :active="true"/>
</div>

```vue
<template>
  <spr-input-username v-model="inputValueUsername" label="Username" placeholder="Enter username" :active="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueUsername = ref('');
</script>
```

## Email Input

<div>
  <spr-input-email v-model="inputValue.input13" label="Username" placeholder="Enter email" :active="true"/>
</div>

```vue
<template>
  <spr-input-email v-model="inputValueEmail" label="Username" placeholder="Enter email" :active="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueEmail = ref('');
</script>
```

## Password Input

<div>
  <spr-input-password v-model="inputValue.input14" label="Password" placeholder="Enter password" :active="true"/>
</div>

```vue
<template>
  <spr-input-password v-model="inputValuePassword" label="Password" placeholder="Enter password" :active="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValuePassword = ref('');
</script>
```

## URL Input

<div>
  <spr-input-url v-model="inputValue.input15" label="URL" placeholder="Enter url" :active="true" />
</div>

```vue
<template>
  <spr-input-url v-model="inputValueURL" label="URL" placeholder="Enter url" :active="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueURL = ref('');
</script>
```

<script lang="ts" setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';

import SprInput from "@/components/input/input.vue"
import SprInputSearch from "@/components/input/input-search/input-search.vue"
import SprInputUsername from "@/components/input/input-username/input-username.vue"
import SprInputEmail from "@/components/input/input-email/input-email.vue"
import SprInputPassword from "@/components/input/input-password/input-password.vue"
import SprInputUrl from "@/components/input/input-url/input-url.vue"

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
  input10: '',
  input11: '',
  input12: '',
  input13: '',
  input14: '',
  input15: '',
});
</script>
