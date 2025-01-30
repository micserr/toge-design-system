# AVATAR

## Basic Usage

<spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" :badge="true" :online="true" size="2xl" />

```vue
<template>
  <spr-avatar
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    alt="User Avatar"
    :badge="true"
    :online="true"
    size="2xl"
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

## Online

<spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" :online="true" />

```vue
<template>
  <spr-avatar
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    alt="User Avatar"
    :online="true"
  />
</template>
```

## Sizes

avatar component has 7 different sizes. You can use the `size` prop to set the size of the avatar. The default size is `2xl`. The available sizes are `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `2xs`.

<div class="  space-x-3">
  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :badge="true" :online="true" size="2xl" />

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :badge="true" :online="true" size="xl" />

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :badge="true" :online="true" size="lg"/>

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :badge="true" :online="true" size="md"/>

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :badge="true" :online="true" size="sm" />

  <spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" :badge="true" :online="true" size="xs"/>

<spr-avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" :badge="true" :online="true"size="2xs" />

</div>

```vue
<template>
  <div class="space-x-3">
    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :badge="true"
      :online="true"
      size="2xl"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :badge="true"
      :online="true"
      size="xl"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :badge="true"
      :online="true"
      size="lg"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :badge="true"
      :online="true"
      size="md"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :badge="true"
      :online="true"
      size="sm"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :badge="true"
      :online="true"
      size="xs"
    />

    <spr-avatar
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :badge="true"
      :online="true"
      size="2xs"
    />
  </div>
</template>
```

## Initial

<div class="  space-x-3">
<spr-avatar initial="A" :badge="true" :online="true" size="2xl" />
<spr-avatar initial="A" :badge="true" :online="true" size="xl" />
<spr-avatar initial="A" :badge="true" :online="true" size="lg" />
<spr-avatar initial="A" :badge="true" :online="true" size="md" />
<spr-avatar initial="A" :badge="true" :online="true" size="sm" />
<spr-avatar initial="A" :badge="true" :online="true" size="xs" />
<spr-avatar initial="A" :badge="true" :online="true" size="2xs" />
</div>

```vue
<template>
  <div class="space-x-3">
    <spr-avatar initial="A" :badge="true" :online="true" size="2xl" />
    <spr-avatar initial="A" :badge="true" :online="true" size="xl" />
    <spr-avatar initial="A" :badge="true" :online="true" size="lg" />
    <spr-avatar initial="A" :badge="true" :online="true" size="md" />
    <spr-avatar initial="A" :badge="true" :online="true" size="sm" />
    <spr-avatar initial="A" :badge="true" :online="true" size="xs" />
    <spr-avatar initial="A" :badge="true" :online="true" size="2xs" />
  </div>
</template>
```

## Slot

Slot can be used to add custom content to the avatar. note: adjust your custom content to fit the avatar size.

<div class="space-x-3">
  <spr-avatar  :badge="true" :online="true" size="2xl">
    <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" class="  rounded-full   object-cover   h-20   w-20"/>
  </spr-avatar>
</div>

```vue
<template>
  <spr-avatar :badge="true" :online="true" size="2xl">
    <img
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      alt="User Avatar"
      class="h-20 w-20 rounded-full object-cover"
    />
  </spr-avatar>
</template>
```

<script setup lang="ts">
import SprAvatar from "@/components/avatar/avatar.vue";
</script>
