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

<div class="  space-x-3">
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
  <div class="space-x-3">
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

<div class="  space-x-3">
<spr-avatar initial="A" :notification="true" :badge="true" size="2xl" />
<spr-avatar initial="A" :notification="true" :badge="true" size="xl" />
<spr-avatar initial="A" :notification="true" :badge="true" size="lg" />
<spr-avatar initial="A" :notification="true" :badge="true" size="md" />
<spr-avatar initial="A" :notification="true" :badge="true" size="sm" />
<spr-avatar initial="A" :notification="true" :badge="true" size="xs" />
<spr-avatar initial="A" :notification="true" :badge="true" size="2xs" />
</div>

<div class="  space-x-3">
<spr-avatar color='secondary' initial="+2" :notification="true" :badge="true" size="2xl" />
<spr-avatar color='secondary' initial="+2" :notification="true" :badge="true" size="xl" />
<spr-avatar color='secondary' initial="+2" :notification="true" :badge="true" size="lg" />
<spr-avatar color='secondary' initial="+2" :notification="true" :badge="true" size="md" />
<spr-avatar color='secondary' initial="+2" :notification="true" :badge="true" size="sm" />
<spr-avatar color='secondary' initial="+2" :notification="true" :badge="true" size="xs" />
<spr-avatar color='secondary' initial="+2" :notification="true" :badge="true" size="2xs" />
</div>

```vue
<template>
  <div class="space-x-3">
    <spr-avatar initial="A" :notification="true" :badge="true" size="2xl" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="xl" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="lg" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="md" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="sm" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="xs" />
    <spr-avatar initial="A" :notification="true" :badge="true" size="2xs" />
  </div>

  <div class="space-x-3">
    <spr-avatar color="secondary" initial="+2" :notification="true" :badge="true" size="2xl" />
    <spr-avatar color="secondary" initial="+2" :notification="true" :badge="true" size="xl" />
    <spr-avatar color="secondary" initial="+2" :notification="true" :badge="true" size="lg" />
    <spr-avatar color="secondary" initial="+2" :notification="true" :badge="true" size="md" />
    <spr-avatar color="secondary" initial="+2" :notification="true" :badge="true" size="sm" />
    <spr-avatar color="secondary" initial="+2" :notification="true" :badge="true" size="xs" />
    <spr-avatar color="secondary" initial="+2" :notification="true" :badge="true" size="2xs" />
  </div>
</template>
```

## Slot

Slot can be used to add custom content to the avatar. note: adjust your custom content to fit the avatar size.

<div class="space-x-3">
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

<div class="space-x-3">
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

```vue
<template>
  <div class="space-x-3">
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

  <div class="space-x-3">
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

  <div class="space-x-3">
    <spr-avatar status="danger" initial="A"  :badge="true" size="2xl" />
    <spr-avatar status="disabled" initial="A"  :badge="true" size="2xl" />
    <spr-avatar status="information" initial="A"  :badge="true" size="2xl" />
    <spr-avatar status="brand" initial="A"  :badge="true" size="2xl" />
  </div>

```vue
<template>
  <div class="space-x-3">
    <spr-avatar status="danger" initial="A" :badge="true" size="2xl" />
    <spr-avatar status="disabled" initial="A" :badge="true" size="2xl" />
    <spr-avatar status="information" initial="A" :badge="true" size="2xl" />
    <spr-avatar status="brand" initial="A" :badge="true" size="2xl" />
  </div>
</template>
```

<script setup lang="ts">
import SprAvatar from "@/components/avatar/avatar.vue";
import { Icon } from '@iconify/vue';
</script>
