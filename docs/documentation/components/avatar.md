# AVATAR

## Basic Usage

<spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" :notification="true" :badge="true" size="2xl" />

```vue
<template>
  <spr-avatar
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    alt="User Avatar"
    :notification="true"
    :badge="true"
    size="2xl"
  />
</template>
```

## Notification

<spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" :notification="true" />

```vue
<template>
  <spr-avatar
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    alt="User Avatar"
    :notification="true"
  />
</template>
```

## Badge

<spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" :badge="true" />

```vue
<template>
  <spr-avatar
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    alt="User Avatar"
    :badge="true"
  />
</template>
```

## Sizes

avatar component has 7 different sizes. You can use the `size` prop to set the size of the avatar. The default size is `2xl`. The available sizes are `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `2xs`.

<div class="spr-space-x-3">
  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="2xl" />

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="xl" />

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="lg"/>

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="md"/>

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="sm" />

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" :notification="true" :badge="true" size="xs"/>

<spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" :notification="true" :badge="true"size="2xs" />

</div>

```vue
<template>
  <div>
    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="2xl"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="xl"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="lg"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="md"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="sm"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="xs"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="2xs"
    />
  </div>
</template>
```

## Initial

<div class="spr-grid spr-gap-4">
  <div class="spr-space-x-3">
    <spr-avatar initial="John" :notification="true" :badge="true" size="2xl" />
    <spr-avatar initial="Mark" :notification="true" :badge="true" size="xl" />
    <spr-avatar initial="Solomon" :notification="true" :badge="true" size="lg" />
    <spr-avatar initial="Malachi" :notification="true" :badge="true" size="md" />
    <spr-avatar initial="Abraham" :notification="true" :badge="true" size="sm" />
    <spr-avatar initial="Zacarias" :notification="true" :badge="true" size="xs" />
    <spr-avatar initial="Elijah" :notification="true" :badge="true" size="2xs" />
  </div>

  <div class="spr-space-x-3">
    <spr-avatar color='secondary' initial="10" count  size="2xl" />
    <spr-avatar color='secondary' initial="2" count  size="xl" />
    <spr-avatar color='secondary' initial="3" count  size="lg" />
    <spr-avatar color='secondary' initial="4" count  size="md" />
    <spr-avatar color='secondary' initial="5" count  size="sm" />
    <spr-avatar color='secondary' initial="6" count  size="xs" />
    <spr-avatar color='secondary' initial="7" count  size="2xs" />
  </div>
</div>

```vue
<template>
  <div>
    <spr-avatar initial="A" :notification="true" :badge="true" size="2xl" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="xl" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="lg" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="md" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="sm" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="xs" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="2xs" />
  </div>

  <div>
    <spr-avatar color="secondary" initial="10" count size="2xl" />
    <spr-avatar color="secondary" initial="2" count size="xl" />
    <spr-avatar color="secondary" initial="3" count size="lg" />
    <spr-avatar color="secondary" initial="4" count size="md" />
    <spr-avatar color="secondary" initial="5" count size="sm" />
    <spr-avatar color="secondary" initial="6" count size="xs" />
    <spr-avatar color="secondary" initial="7" count size="2xs" />
  </div>
</template>
```

## Slot

Slot can be used to add custom content to the avatar. note: adjust your custom content to fit the avatar size.

<div class="spr-grid spr-gap-4">
  <div class="spr-space-x-3">
    <spr-avatar  :notification="true" :badge="true" size="2xl" color="primary">
    <Icon icon="ph:trash" />
    </spr-avatar>
      <spr-avatar  :notification="true" :badge="true" size="xl" color="primary">
    <Icon icon="ph:trash" />
    </spr-avatar>
      <spr-avatar  :notification="true" :badge="true" size="lg" color="primary">
    <Icon icon="ph:trash" />
    </spr-avatar>
      <spr-avatar  :notification="true" :badge="true" size="md" color="primary">
    <Icon icon="ph:trash" />
    </spr-avatar>
      <spr-avatar  :notification="true" :badge="true" size="sm" color="primary">
    <Icon icon="ph:trash" />
    </spr-avatar>
        <spr-avatar  :notification="true" :badge="true" size="xs" color="primary">
    <Icon icon="ph:trash" />
    </spr-avatar>
        <spr-avatar  :notification="true" :badge="true" size="2xs" color="primary">
    <Icon icon="ph:trash" />
    </spr-avatar>
  </div>

  <div class="spr-space-x-3">
    <spr-avatar :notification="true" :badge="true" size="2xl">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
      <spr-avatar :notification="true" :badge="true" size="xl">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
      <spr-avatar :notification="true" :badge="true" size="lg">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
      <spr-avatar :notification="true" :badge="true" size="md">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
      <spr-avatar :notification="true" :badge="true" size="sm">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
      <spr-avatar :notification="true" :badge="true" size="xs">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
      <spr-avatar :notification="true" :badge="true" size="2xs">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
  </div>
</div>

```vue
<template>
  <div>
    <spr-avatar :notification="true" :badge="true" size="2xl" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xl" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="lg" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="md" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="sm" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xs" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="2xs" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
  </div>

  <div>
    <spr-avatar :notification="true" :badge="true" size="2xl">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xl">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="lg">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="md">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="sm">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xs">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="2xs">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
```

## Status

<div class="spr-space-x-3">
  <spr-avatar status="danger" initial="Matthew"  :badge="true" size="2xl" />
  <spr-avatar status="disabled" initial="Mark"  :badge="true" size="2xl" />
  <spr-avatar status="information" initial="John"  :badge="true" size="2xl" />
  <spr-avatar status="brand" initial="Mary"  :badge="true" size="2xl" />
</div>

```vue
<template>
  <spr-avatar status="danger" initial="A" :badge="true" size="2xl" />
  <spr-avatar status="disabled" initial="A" :badge="true" size="2xl" />
  <spr-avatar status="information" initial="A" :badge="true" size="2xl" />
  <spr-avatar status="brand" initial="A" :badge="true" size="2xl" />
</template>
```

## API Reference

#### Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>src</td>
      <td>URL of the avatar image</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>alt</td>
      <td>Alternative text for the image</td>
      <td>string</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>notification</td>
      <td>Show notification indicator</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>badge</td>
      <td>Show status badge</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Size of the avatar</td>
      <td>'2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs'</td>
      <td>2xl</td>
    </tr>
    <tr>
      <td>NotificationText</td>
      <td>Text for the notification</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>initial</td>
      <td>Initials to display</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>color</td>
      <td>Background color of the avatar</td>
      <td>'primary' | 'secondary'</td>
      <td>'primary'</td>
    </tr>
    <tr>
      <td>status</td>
      <td>Status indicator for the badge</td>
      <td>'danger', 'disabled', 'information', 'brand'</td>
      <td>'brand'</td>
    </tr>
    <tr>
      <td>count</td>
      <td>Enable count display</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

<script setup lang="ts">
import SprAvatar from "@/components/avatar/avatar.vue";

import { Icon } from '@iconify/vue';
</script>
