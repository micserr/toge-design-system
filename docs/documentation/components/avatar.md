---
outline: 'deep'
title: Avatar
description: The avatar component is a versatile and commonly used element in user interfaces, designed to represent users or entities visually. It can display images, initials, or icons, and can be customized in various ways, including size, tone, and variant, to suit different design needs. The avatar can also include notification indicators and badges for enhanced visual communication and can be disabled to prevent user interaction when necessary.
---

# AVATAR

The Avatar component is a versatile and commonly used element in user interfaces, designed to represent users or entities visually. It can display images, initials, or icons, and can be customized in various ways, including size, tone, and variant, to suit different design needs. The avatar can also include notification indicators and badges for enhanced visual communication and can be disabled to prevent user interaction when necessary.

## Basic Usage

<spr-avatar  />

```vue
<template>
  <spr-avatar />
</template>
```

## Notification

<spr-avatar  :notification="true" />

```vue
<template>
  <spr-avatar :notification="true" />
</template>
```

## Badge

<spr-avatar  :badge="true" />

```vue
<template>
  <spr-avatar :badge="true" />
</template>
```

## Image

<spr-avatar variant="image" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" :notification="true" :badge="true" size="2xl" />

```vue
<template>
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="2xl"
  />
</template>
```

## Sizes

avatar component has 7 different sizes. You can use the `size` prop to set the size of the avatar. The default size is `2xl`. The available sizes are `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `2xs`.

<div class="spr-space-x-3 spr-flex">
  <spr-avatar variant="image" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="2xl" />

  <spr-avatar variant="image" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="xl" />

  <spr-avatar variant="image" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="lg"/>

  <spr-avatar variant="image" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="md"/>

  <spr-avatar variant="image" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"  :notification="true" :badge="true" size="sm" />

  <spr-avatar variant="image" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" :notification="true" :badge="true" size="xs"/>

<spr-avatar variant="image" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" :notification="true" :badge="true"size="2xs" />

</div>

```vue
<template>
  <div>
    <spr-avatar
      variant="image"
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="2xl"
    />

    <spr-avatar
      variant="image"
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="xl"
    />

    <spr-avatar
      variant="image"
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="lg"
    />

    <spr-avatar
      variant="image"
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="md"
    />

    <spr-avatar
      variant="image"
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="sm"
    />

    <spr-avatar
      variant="image"
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="xs"
    />

    <spr-avatar
      variant="image"
      src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      :notification="true"
      :badge="true"
      size="2xs"
    />
  </div>
</template>
```

## Variant

<div class="spr-grid spr-gap-4">
  <div class="spr-space-x-3 spr-flex">
    <spr-avatar  initial="Juan Dela Cruz" size="2xl" />
    <spr-avatar  initial="John Jay Joe" size="xl" />
    <spr-avatar  initial="Anthony" size="lg" />
    <spr-avatar  initial="Juan Dela Cruz" size="md" />
    <spr-avatar  initial="Juan Dela Cruz" size="sm" />
    <spr-avatar  initial="Juan Dela Cruz" size="xs" />
    <spr-avatar  initial="Juan Dela Cruz" size="2xs" />
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar variant="count" count="10" color="secondary" size="2xl" />
    <spr-avatar variant="count" count="2"  color="secondary" size="xl" />
    <spr-avatar variant="count" count="3"  color="secondary" size="lg" />
    <spr-avatar variant="count" count="4"  color="secondary" size="md" />
    <spr-avatar variant="count" count="5"  color="secondary" size="sm" />
    <spr-avatar variant="count" count="6"  color="secondary" size="xs" />
    <spr-avatar variant="count" count="7"  color="secondary" size="2xs" />
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar variant="user-group" size="2xl" />
    <spr-avatar variant="user-group" size="xl" />
    <spr-avatar variant="user-group" size="lg" />
    <spr-avatar variant="user-group" size="md" />
    <spr-avatar variant="user-group" size="sm" />
    <spr-avatar variant="user-group" size="xs" />
    <spr-avatar variant="user-group" size="2xs" />
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar variant="user"  size="2xl" />
    <spr-avatar variant="user"  size="xl" />
    <spr-avatar variant="user"  size="lg" />
    <spr-avatar variant="user"  size="md" />
    <spr-avatar variant="user"  size="sm" />
    <spr-avatar variant="user"  size="xs" />
    <spr-avatar variant="user"  size="2xs" />
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar variant="client" size="2xl" />
    <spr-avatar variant="client" size="xl" />
    <spr-avatar variant="client" size="lg" />
    <spr-avatar variant="client" size="md" />
    <spr-avatar variant="client" size="sm" />
    <spr-avatar variant="client" size="xs" />
    <spr-avatar variant="client" size="2xs" />
  </div>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <div class="spr-space-x-3">
      <spr-avatar initial="Juan Dela Cruz" size="2xl" />
      <spr-avatar initial="John Jay Joe" size="xl" />
      <spr-avatar initial="Anthony" size="lg" />
      <spr-avatar initial="Juan Dela Cruz" size="md" />
      <spr-avatar initial="Juan Dela Cruz" size="sm" />
      <spr-avatar initial="Juan Dela Cruz" size="xs" />
      <spr-avatar initial="Juan Dela Cruz" size="2xs" />
    </div>

    <div class="spr-space-x-3">
      <spr-avatar variant="count" count="10" color="secondary" size="2xl" />
      <spr-avatar variant="count" count="2" color="secondary" size="xl" />
      <spr-avatar variant="count" count="3" color="secondary" size="lg" />
      <spr-avatar variant="count" count="4" color="secondary" size="md" />
      <spr-avatar variant="count" count="5" color="secondary" size="sm" />
      <spr-avatar variant="count" count="6" color="secondary" size="xs" />
      <spr-avatar variant="count" count="7" color="secondary" size="2xs" />
    </div>

    <div class="spr-space-x-3">
      <spr-avatar variant="user-group" size="2xl" />
      <spr-avatar variant="user-group" size="xl" />
      <spr-avatar variant="user-group" size="lg" />
      <spr-avatar variant="user-group" size="md" />
      <spr-avatar variant="user-group" size="sm" />
      <spr-avatar variant="user-group" size="xs" />
      <spr-avatar variant="user-group" size="2xs" />
    </div>

    <div class="spr-space-x-3">
      <spr-avatar variant="user" size="2xl" />
      <spr-avatar variant="user" size="xl" />
      <spr-avatar variant="user" size="lg" />
      <spr-avatar variant="user" size="md" />
      <spr-avatar variant="user" size="sm" />
      <spr-avatar variant="user" size="xs" />
      <spr-avatar variant="user" size="2xs" />
    </div>

    <div class="spr-space-x-3">
      <spr-avatar variant="client" size="2xl" />
      <spr-avatar variant="client" size="xl" />
      <spr-avatar variant="client" size="lg" />
      <spr-avatar variant="client" size="md" />
      <spr-avatar variant="client" size="sm" />
      <spr-avatar variant="client" size="xs" />
      <spr-avatar variant="client" size="2xs" />
    </div>
  </div>
</template>
```

## Slot

Slot can be used to add custom content to the avatar. note: adjust your custom content to fit the avatar size.

<div class="spr-grid spr-gap-4">
  <div class="spr-space-x-3 spr-flex">
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

  <div class="spr-space-x-3 spr-flex">
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

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## Status

<div class="spr-space-x-3 spr-flex">
  <spr-avatar variant="initial" status="danger" initial="Matthew"  :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="disabled" initial="Mark"  :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="information" initial="John"  :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="brand" initial="Mary"  :badge="true" size="2xl" />
</div>

```vue
<template>
  <spr-avatar variant="initial" status="danger" initial="Matthew" :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="disabled" initial="Mark" :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="information" initial="John" :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="brand" initial="Mary" :badge="true" size="2xl" />
</template>
```

## API Reference

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
      <td>URL pointing to the image used as the avatar. This can be a link to an online image resource.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>alt</td>
      <td>Alternative text to display when the avatar image cannot be loaded. It serves as a description of the image for accessibility purposes.</td>
      <td>string</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>notification</td>
      <td>Flag that determines if a notification indicator should be shown on the avatar. A true value will display the notification icon.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>badge</td>
      <td>Indicates whether a status badge should be displayed on the avatar. Typically used to signify a user's online/offline status or activity.</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Defines the size of the avatar. Options range from extra small to extra large, offering flexibility for different UI layouts.</td>
      <td>'2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs'</td>
      <td>2xl</td>
    </tr>
    <tr>
      <td>NotificationText</td>
      <td>The text that appears within the notification indicator. This can display a message or a count depending on the use case.</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>initial</td>
      <td>Initials that will be displayed when using the 'initial' variant of the avatar. This is a fallback option when no image is provided.</td>
      <td>string</td>
      <td>'Avatar'</td>
    </tr>
    <tr>
      <td>color</td>
      <td>Determines the background color of the avatar. It can either be set to a primary color or a secondary color to match the design theme.</td>
      <td>'primary' | 'secondary'</td>
      <td>'primary'</td>
    </tr>
    <tr>
      <td>status</td>
      <td>Defines the type of status shown in the avatar's badge. It can indicate a variety of states such as 'danger', 'disabled', 'information', or 'brand'.</td>
      <td>'danger', 'disabled', 'information', 'brand'</td>
      <td>'brand'</td>
    </tr>
    <tr>
      <td>count</td>
      <td>The numeric text displayed in certain avatar variants to indicate a quantity, such as unread messages or notifications.</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Variant</td>
      <td>Defines the type of avatar to be used. Options include 'image' for a traditional avatar with a picture, 'initial' for displaying text initials, 'client' and 'user' for more personalized avatars, 'user-group' for group representations, and 'count' for showing numbers.</td>
      <td>'image', 'initial', 'client', 'user', 'user-group', 'count'</td>
      <td>initial</td>
    </tr>
  </tbody>
</table>

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import SprAvatar from "@/components/avatar/avatar.vue";
import SprLogo from "@/components/logo/logo.vue";

import { Icon } from '@iconify/vue';
</script>
