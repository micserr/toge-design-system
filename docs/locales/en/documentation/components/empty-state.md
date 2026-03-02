---
title: Empty State
descripttion: The Empty State component is used to inform users when there is no content available or when a search yields no results. It provides a clear message, optional imagery, and actionable buttons to guide users on what to do next. This component helps improve user experience by providing context and options in situations where data is absent.
outline: deep
---

# Empty State

## Basic Usage

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state description="No results found" subDescription="Try a different search term" >
    <div>
      Image Slot Here
    </div>
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

```vue
<template>
  <spr-empty-state description="No results found" subDescription="Try a different search term">
    <div>Image Here</div>

    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</template>
```

## Images

You can also use the `image` prop to display an image in the defined empty state. The image prop accepts a string value that corresponds to the image's name.

List of images that can be used in the empty state component.

<div class="spr-flex spr-gap-6 spr-mb-6">
  <ul class="!spr-m-0">
    <li>bug</li>
    <li>clock</li>
    <li>dashboard</li>
    <li>employees</li>
    <li>government-id</li>
  </ul>
  <ul class="!spr-m-0">
    <li>integration</li>
    <li>list</li>
    <li>social-media-handles</li>
    <li>work-in-progress</li>
    <li>work-location</li>
  </ul>
</div>

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state
    :description="`Current image is ${currentImage}`"
    subDescription="Try a different image"
    :image="currentImage"
  >
    <template #button>
      <div class="spr-flex spr-flex-col spr-gap-4">
        <spr-button tone="success" @click="changeImage">Change Image</spr-button>
      </div>
    </template>
  </spr-empty-state>
</div>

```vue
<template>
  <spr-empty-state
    :description="`Current image is ${currentImage}`"
    subDescription="Try a different image"
    :image="currentImage"
  >
    <template #button>
      <div class="spr-flex spr-flex-col spr-gap-4">
        <spr-button tone="success">Retry</spr-button>
        <spr-button variant="secondary" @click="changeImage">Change Image</spr-button>
      </div>
    </template>
  </spr-empty-state>
</template>

<script setup>
import { ref } from 'vue';

const imageTypes = [
  'bug',
  'clock',
  'dashboard',
  'employees',
  'government-id',
  'integration',
  'list',
  'social-media-handles',
  'work-in-progress',
  'work-location',
];

const currentImage = ref('bug');

const changeImage = () => {
  // Get the current index of the image
  const currentIndex = imageTypes.indexOf(currentImage.value);
  // Move to the next image in the array, or back to the first if at the end
  const nextIndex = (currentIndex + 1) % imageTypes.length;
  currentImage.value = imageTypes[nextIndex];
};
</script>
```

## Image Size

Image size can be controlled by passing the `size` prop. The default size is `small`. (`small` and `large`)

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="bug"
    size="small"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="work-location"
    size="large"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</div>

```vue
<template>
  <spr-empty-state description="No results found" subDescription="Try a different search term" image="bug" size="small">
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>

  <spr-empty-state
    description="No results found"
    subDescription="Try a different search term"
    image="work-location"
    size="large"
  >
    <template #button>
      <spr-button tone="success">Retry</spr-button>
    </template>
  </spr-empty-state>
</template>
```

## Coming Soon

Display a coming soon message using only the description prop without any additional imagery or buttons:

<div class="spr-p-8 spr-bg-white-500">
  <spr-empty-state description="Coming Soon" />
</div>

```vue
<template>
  <spr-empty-state description="Coming Soon" />
</template>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Available Values</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>description</td>
      <td>The main description text for the empty state. This text is displayed prominently to inform users about the absence of content or search results.</td>
      <td><code>String</code></td>
      <td>Any text string</td>
      <td><code>'No results found'</code></td>
    </tr>
    <tr>
      <td>subDescription</td>
      <td>Additional text providing more context or guidance for the empty state. This secondary text appears below the main description with a lighter color to provide further explanation or suggestions.</td>
      <td><code>String</code></td>
      <td>Any text string</td>
      <td><code>'Try a different search term.'</code></td>
    </tr>
    <tr>
      <td>size</td>
      <td>Controls the overall size of the empty state component, affecting both the container dimensions and the image size:
        <ul>
          <li><code>small</code>: More compact representation (min-height: 240px, image: 120x120px)</li>
          <li><code>large</code>: More prominent representation (min-height: 360px, image: 200x200px)</li>
        </ul>
      </td>
      <td><code>String</code></td>
      <td><code>'small'</code>, <code>'large'</code></td>
      <td><code>'small'</code></td>
    </tr>
    <tr>
      <td>image</td>
      <td>Specifies the predefined image to display in the empty state. The component automatically loads the SVG image from the assets directory based on this prop value. This is used when no custom image is provided via the default slot.</td>
      <td><code>String</code></td>
      <td><code>'bug'</code>, <code>'clock'</code>, <code>'dashboard'</code>, <code>'employees'</code>, <code>'government-id'</code>, <code>'integration'</code>, <code>'list'</code>, <code>'social-media-handles'</code>, <code>'work-in-progress'</code>, <code>'work-location'</code></td>
      <td><code>'list'</code></td>
    </tr>
    <tr>
      <td>hasButton</td>
      <td>Indicates whether the empty state includes a button. When set to <code>true</code>, the component expects content to be provided in the button slot. This prop is primarily used for internal state management.</td>
      <td><code>Boolean</code></td>
      <td><code>true</code>, <code>false</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>emptyStateCustomClasses</td>
      <td>Additional CSS classes to apply to the empty state container. This allows for custom styling without modifying the component's internal styling.</td>
      <td><code>String</code></td>
      <td>Any valid CSS class string</td>
      <td><code>''</code></td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onClick</td>
      <td>Emitted when the empty state component is clicked. This event is defined in the component but not actively emitted in the current implementation.</td>
      <td>None</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>The default slot can be used to replace the predefined image with custom content. If provided, this slot content will be displayed instead of the image specified by the <code>image</code> prop. The content will receive the same size classes as the predefined image would have, based on the <code>size</code> prop.</td>
    </tr>
    <tr>
      <td>button</td>
      <td>Used to provide action buttons or other interactive elements that will be displayed below the description text. Typically contains a button that allows users to retry an action or navigate elsewhere.</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import SprEmptyState from "@/components/empty-state/empty-state.vue";
import SprButton from '@/components/button/button.vue';
import { ref } from 'vue';

const imageTypes = [
  'bug',
  'clock',
  'dashboard',
  'employees',
  'government-id',
  'integration',
  'list',
  'social-media-handles',
  'work-in-progress',
  'work-location'
];

const currentImage = ref('bug');

const changeImage = () => {
  // Get the current index of the image
  const currentIndex = imageTypes.indexOf(currentImage.value);
  // Move to the next image in the array, or back to the first if at the end
  const nextIndex = (currentIndex + 1) % imageTypes.length;
  currentImage.value = imageTypes[nextIndex];
};
</script>
