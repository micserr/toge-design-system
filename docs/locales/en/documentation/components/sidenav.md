---
title: Side Navigation
descripttion: The side navigation provides a customizable navigation bar that includes a logo, navigation links, quick actions, and a search bar.
outline: deep
---

# Side Navigation

The side navigation provides a customizable navigation bar that includes a logo, navigation links, quick actions, and a search bar.

![Sidenav Sample](../../../../public/images/sidenav-sample.png)

## Basic Implementation

To implement the Sidenav component, use the following syntax:

```vue
<spr-sidenav>
  <template #logo-image>
    <img src="[logo_image_path]" alt="logo" />
  </template>
</spr-sidenav>
```

## Slots

### Custom Logo Image

The `logo-image` slot allows you to insert a custom logo in the side navigation. Use the following template to add a logo:

```vue
<template #logo-image>
  <img src="[image_path]" alt="logo" />
</template>
```

## Icon Component Integration

Design System provides a property `icon` that allows you to use the Icon component. You can use the Icon component to display icons in the side navigation.

Currently the Design System uses the Iconify library to display icons. You can use the Iconify icon names to display icons in the side navigation. For more information on Iconify, see the <a href="https://iconify.design/docs/usage/svg/iconify" target="_blank">Iconify documentation.</a>

### Custom Icon

To use a custom icon for your navigation links, provide a CDN link to the image using the `icon` property. For the active state, upload a CDN link version of the icon with `-fill` appended before the file extension. The component will automatically switch between the default and active icons based on the navigation state:

CDN Naming convention \
Default: https://eco-cdn-prod.azureedge.net/payroll.svg \
Active: https://eco-cdn-prod.azureedge.net/payroll-fill.svg

```vue
<script lang="ts" setup>
const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'https://eco-cdn-prod.azureedge.net/payroll.svg',
        },
      ],
    },
  ],
});
</script>
```

## Navigation Links

The navigation links are organized into grouped sections, each containing several categories. Each category includes links that may have nested menus and submenus.

defining the navigation links has 2 sections, `top` and `bottom`. Each section can contain multiple `parentLinks` that represent the top-level navigation items.

```vue
<template>
  <spr-sidenav :nav-links="navLinks">
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
</script>
```

### Nav Links Structure

The nav-links attribute expects an array of objects that define the navigation menu. Each object can contain:

<ul>
  <li>
    <code class="spr-mr-2">top:</code>
    <span> 
      You can define the top-level navigation links in the top section of the side navigation.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">bottom:</code>
    <span> 
      You can define the top-level navigation links in the bottom section of the side navigation.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">parentLinks:</code>
    <span> 
      List of top-level navigation links. Each link may contain additional properties such as a 
      <code>title</code>, 
      <code>icon</code>, <code>redirect</code> and <code>menuLinks</code>.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">title:</code>
    <span>
      The title of each nav link item. When <code>menulinks</code> is empty or not indicated. 
      Title will shows when parent link is hovered.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">icon:</code>
    <span>
      The icon associated only with <code>parentLinks</code>, usually an iconify strong (e.g., `ph:home`, `ph:users-three`).
      See more on <a href="https://iconify.design/docs/usage/svg/iconify/">Iconify</a>.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">redirect:</code>
    <span>
      The URL or path to which the user is redirected when they click on the navigation item. Redirection wont work if <code>menuLinks</code> or <code>submenuLinks</code> is present.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">openInNewTab:</code>
    <span>
      A boolean flag indicating whether the link is to open in a new tab.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">isAbsoluteURL:</code>
    <span>
      A boolean flag indicating whether the link will be open using href.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">link:</code>
    <span>
      The actual URL or destination for the navigation item, often used for internal routing or linking to different parts of the app.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">menuLinks:</code>
    <span>
      This appear under a <code>parentLinks</code> navigation item. These menu links define additional sections or categories under the parent link.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">submenuLinks:</code>
    <span>
      Links nested under the <code>menuLinks</code>, enabling multi-level navigation. These are further breakdowns or child items under each <code>menuLinks</code> section.
    </span>
  </li>
  <li>
    <code class="spr-mr-2">hidden:</code>
    <span>
      A boolean flag indicating whether the quick action item should be hidden.
    </span>
  </li>
</ul>

<p>Here's the structure for the nav-links attribute:</p>

```Javascript
{
  top: [
    {
      parentLinks: [
        {
          title: <String>,
          icon: <String>,
          hidden: <Boleean>,
          redirect: {
            openInNewTab: <Boleean>,
            isAbsoluteURL: <Boleean>,
            link: <String>,
          },
          menuLinks: [
            {
              menuHeading: <String>,
              items: [
                {
                  title: <String>,
                  hidden: <Boleean>,
                  redirect: {
                    openInNewTab: <Boleean>,
                    isAbsoluteURL: <Boleean>,
                    link: <String>,
                  },
                  submenuLinks: [
                    {
                      subMenuHeading: <String>,
                      items: [
                        {
                          title: <String>,
                          hidden: <Boleean>,
                          redirect: {
                            openInNewTab: <Boleean>,
                            isAbsoluteURL: <Boleean>,
                            link: <String>,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            }
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: <String>,
          icon: <String>,
          redirect: {
            openInNewTab: <Boleean>,
            isAbsoluteURL: <Boleean>,
            link: <String>,
          },
          menuLinks: [
            {
              menuHeading: <String>,
              items: [
                {
                  title: <String>,
                  redirect: {
                    openInNewTab: <Boleean>,
                    isAbsoluteURL: <Boleean>,
                    link: <String>,
                  },
                  submenuLinks: [
                    {
                      subMenuHeading: <String>,
                      items: [
                        {
                          title: <String>,
                          redirect: {
                            openInNewTab: <Boleean>,
                            isAbsoluteURL: <Boleean>,
                            link: <String>,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            }
          ],
        },
      ],
    },
  ]
}
```

## Active Navigation

The `active-nav` property allows you to highlight the active state across different levels of navigation (parent, menu, and submenu). To integrate it with your Sidenav component, ensure that the values for active navigation correspond to the titles of the respective items in your active navigation structure, and pass the active navigation object along with your other props.

Here’s a example of how to implement the active navigation property:

```vue
<template>
  <spr-sidenav :active-nav="activeNav" :nav-links="navLinks">
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
</script>
```

### Manual URL Change Handling

When a user manually changes the URL, the `active-nav` property will not automatically update. This is because `active-nav` is typically assigned through clicks on navigation icons, and manually typing a URL does not trigger the same logic.

To handle this, you can use the `Router Meta Field`. Add an `activeNav` object inside the route's `meta` field and watch for route changes. Then, assign the `activeNav` object from the route meta to the `active-nav` property of your sidenav.

```vue
const routes = [ { path: 'workflows', name: 'workflows', meta:{ activeNav: { parentNav: 'Flow', menu: '', submenu: '', }
} }, ]
```

```vue
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

router.beforeEach((to) => {
  if (to.meta.activeNav) {
    activeNav.value = to.meta.activeNav;
  }
});
</script>
```

## Using API Data (isNavApi)

When `isNavApi` is set to `true`, the sidenav component expects navigation data in a different format that comes directly from an API. This format includes additional properties like `id`, `code`, `position`, `order`, and `attributes`.

```vue
<template>
  <spr-sidenav :nav-links="apiNavLinks" :is-nav-api="true" :active-nav="activeNav" @get-navlink-item="handleNavClick">
    <template #logo-image>
      <img src="/path/to/logo.png" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Example API data structure
const apiNavLinks = ref({
  top: [
    {
      id: '135c50eb-3dbb-4e4a-b45a-9f58b4c0921f',
      code: null,
      label: 'Dashboard',
      url: 'https://ecohub-qa.ecoapp-qa.sprout.ph/dashboard',
      icon: 'ph:house-simple',
      children: [],
      position: 'top',
      order: 1,
      attributes: null,
      groupId: '1',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
      code: null,
      label: 'App Management',
      url: null,
      icon: 'ph:shapes',
      children: [
        {
          id: '03b895a8-9de5-4f0e-b19b-4d965c99cd7d',
          code: null,
          label: 'Marketplace',
          url: 'https://market.sprout.ph/',
          icon: null,
          children: [],
          position: 'top',
          order: 2,
          attributes: null,
          groupId: null,
          groupName: null,
          parentMenuId: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
          isNewTab: true,
        },
      ],
      position: 'top',
      order: 2,
      attributes: null,
      groupId: '1',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
      code: null,
      label: 'Payroll',
      url: null,
      icon: 'https://eco-cdn-prod.azureedge.net/payroll.svg',
      children: [
        {
          id: null,
          code: null,
          label: 'Payroll Runs',
          url: 'https://ecohub-qa-payroll.sprout.ph/Client/Payrolls.aspx',
          icon: null,
          children: [],
          position: null,
          order: 1,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: null,
        },
        {
          id: null,
          code: null,
          label: 'Setup',
          url: '',
          icon: null,
          children: [
            {
              id: null,
              code: null,
              label: 'Company Profile',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/company-profile',
              icon: null,
              children: [],
              position: null,
              order: 1,
              attributes: [],
              groupId: null,
              groupName: 'COMPANY',
              parentMenuId: null,
              isNewTab: null,
            },
            {
              id: null,
              code: null,
              label: 'Department',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/department',
              icon: null,
              children: [],
              position: null,
              order: 2,
              attributes: [],
              groupId: null,
              groupName: 'COMPANY',
              parentMenuId: null,
              isNewTab: null,
            },
            // ... more nested items
          ],
          position: null,
          order: 2,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: null,
        },
      ],
      position: 'top',
      order: 6,
      attributes: null,
      groupId: '2',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
  ],
  bottom: [], // Bottom navigation items would follow the same structure
});

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

const handleNavClick = (navItem) => {
  console.log('Navigation clicked:', navItem);
  // Handle navigation logic here
};
</script>
```

### API Data Structure

When using `isNavApi: true`, the navigation data should follow this structure:

| Property       | Type            | Description                                          |
| -------------- | --------------- | ---------------------------------------------------- |
| `id`           | string          | Unique identifier for the navigation item            |
| `code`         | string \| null  | Optional code identifier                             |
| `label`        | string          | Display text for the navigation item                 |
| `url`          | string \| null  | Navigation URL (null for parent items with children) |
| `icon`         | string \| null  | Icon identifier (Iconify name or CDN URL)            |
| `children`     | array           | Child navigation items with the same structure       |
| `position`     | string          | Position indicator ("top" or "bottom")               |
| `order`        | number          | Sort order for the item                              |
| `attributes`   | array \| null   | Additional attributes for the item                   |
| `groupId`      | string \| null  | Group identifier for organizing items                |
| `groupName`    | string \| null  | Group name for subheadings                           |
| `parentMenuId` | string \| null  | Parent menu identifier                               |
| `isNewTab`     | boolean \| null | Whether to open link in new tab                      |

::: info Note
When `isNavApi` is true, the component automatically transforms the API data structure into the internal navigation format used by the sidenav component.
:::

## Quick Actions

This feature allows you to add quick action buttons to the side navigation. Each quick action button can have a title, description, icon, and redirection link.

::: info Important to note:
The `iconBgColor` property currently can only handle 2 values `green` or `purple`.
:::

```vue
<template>
  <spr-sidenav :quick-actions="quickActions" :active-nav="activeNav" :nav-links="navLinks">
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const quickActions = ref([
  {
    menuHeading: 'Sub Heading 1',
    items: [
      {
        title: 'Leave Request',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Onboarding Request',
        description: 'Seamlessly onboard new employees into your Sprout ecosystem',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Certificate of Employee',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
  {
    menuHeading: 'Sub Heading 2',
    items: [
      {
        title: 'ReadyWage',
        description: 'Request Form',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Workflow',
        description: 'Access your hard-earned salary in advance',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Something 1',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Something 2',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
]);

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
</script>
```

## Search

Side navigation also includes a search functionality. Add `has-search` property to enable the search.

Using the `@search` event, you can handle the search functionality.

```vue
<template>
  <spr-sidenav has-search @search="handleSearch">
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
const handleSearch = (search) => {
  console.log(search);
};
</script>
```

## Notifications & Requests

Side navigation also includes a notification and request counter badge. Add `notification-count` or `request-count` attribute to the component to enable the notification or request counter.

Using the `@notifications` or `@requests` event, you can handle the notification functionality.

```vue
<template>
  <spr-sidenav
    :notification-count="5"
    :request-count="10"
    @notifications="handleNotifications"
    @requests="handleRequest"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
const handleNotifications = (notifications) => {
  console.log(notifications);
};

const handleRequest = (request) => {
  console.log(request);
};
</script>
```

## User Menu

The user menu allows you to add a user avatar at the bottom of the side navigation along with a menu. The user menu can contain items such as profile, settings, and logout.

```vue
<template>
  <spr-sidenav :user-menu="userMenu">
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const userMenu = ref({
  name: 'John Doe',
  email: 'johnDoe@sprout.ph',
  profileImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  items: [
    {
      title: 'My Profile',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'Privacy Policy',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'Terms of Service',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'Logout',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
  ],
});
</script>
```

## Full Example

Here’s a full example of how to implement the Sidenav component:
Switch to loading to see the loading state.

<div class="spr-p-4 spr-w-full spr-justify-end spr-flex">
  <spr-switch v-model="loading" >Switch to loading</spr-switch>
</div>

<div class="no-darkmode spr-m-0 spr-bg-mushroom-100 spr-text-mushroom-950 spr-font-main spr-rounded-md spr-h-[100vh] spr-w-full spr-relative spr-flex">
  <spr-sidenav 
    class="spr-absolute spr-z-[1]" 
    :quick-actions="quickActions"
    has-search
    :active-nav="activeNav"
    :nav-links="navLinks"
    :notification-count="5"
    :request-count="`99+`"
    :user-menu="userMenu"
    :loading="loading"
    :teleport-to-body="false"
    @get-navlink-item="handleGetNavLinkItem"
    @search="handleSearch"
    @notifications="handleNotifications"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
  <div class="spr-flex-1 spr-px-4 spr-py-4 spr-w-full [@media(min-width:1024px)]:spr-max-w-[calc(100%-68px)] [@media(min-width:1024px)]:spr-ml-[68px] spr-ml-0 [@media(min-width:1024px)]:spr-mt-0 spr-mt-[54px] spr-overflow-auto">
    <h1>Lorem Ipsum</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis est in quam efficitur tempor. Integer blandit egestas risus, non consequat massa rhoncus eget. Donec commodo luctus diam, egestas scelerisque justo fermentum vel. Morbi vestibulum quis arcu sit amet sollicitudin. Vestibulum fringilla et risus at porttitor. Sed at augue non nunc tempus sagittis quis a magna. Mauris lacinia neque massa, sed fermentum libero dignissim et. Vivamus faucibus aliquet arcu, a viverra leo vehicula at. Aliquam ut turpis vitae mi scelerisque blandit in non diam. Nulla molestie, ipsum id interdum auctor, sem odio bibendum turpis, sed accumsan nisl nunc id lacus. Vestibulum ante eros, accumsan sit amet mollis et, fermentum at est. In hac habitasse platea dictumst.
    </p>
    <p>
      Morbi posuere orci arcu, efficitur maximus ante eleifend ut. Aliquam suscipit finibus dui a pellentesque. Praesent vel nulla turpis. Nullam gravida diam vitae lectus consectetur euismod. Pellentesque ut leo lorem. Integer nec feugiat lorem. Nam sodales nibh ut varius rutrum. Donec vel gravida purus. Aliquam dictum, elit a maximus scelerisque, lorem odio facilisis odio, volutpat interdum diam mauris vitae massa. Nunc ornare ligula eu diam bibendum finibus. Nullam maximus convallis ornare. Curabitur dolor magna, euismod at dui pretium, feugiat aliquet mi. Nullam tincidunt sapien ante, ac efficitur eros lobortis a.
    </p>
    <p>
      Nulla lacinia fermentum fermentum. Sed lorem leo, pulvinar laoreet augue vel, rhoncus sollicitudin enim. Donec vel viverra neque. Ut at ante a massa commodo consequat quis tristique diam. Duis erat ipsum, pellentesque nec urna vitae, sodales pretium dui. Quisque ullamcorper consequat lorem. Duis bibendum dapibus velit, sed pulvinar risus ornare nec. Morbi sagittis sit amet libero quis rutrum. Curabitur finibus ullamcorper nisl nec blandit. Vestibulum placerat ex leo, vel efficitur risus vehicula et. Nam non nibh dui. Sed eu pellentesque ligula, id semper massa. Sed eu nunc fringilla, posuere diam a, porttitor eros.
    </p>
    <p>
      Nulla faucibus eros eget convallis ullamcorper. Nam nec vehicula ipsum, ut pulvinar diam. Suspendisse sit amet metus rhoncus, pulvinar arcu quis, tincidunt lectus. Proin a mi quam. Aenean vitae massa dignissim lacus ultrices faucibus. Etiam ut bibendum quam. Vestibulum ut placerat neque. Aliquam laoreet congue lacus a semper. Suspendisse sed elementum diam. Nullam faucibus urna iaculis, suscipit arcu sit amet, elementum ligula. Duis at velit sed arcu condimentum porta ut id sem. Donec et odio ut purus viverra semper.
    </p>
    <p>
      Integer quam magna, semper sed vehicula eu, maximus ut mauris. Quisque non dolor ornare, pulvinar ex id, imperdiet velit. Suspendisse potenti. In dignissim nibh ut tortor interdum accumsan a sit amet ante. Morbi vehicula odio nulla, ac fermentum augue congue at. Nulla volutpat interdum ex et aliquet. Duis pharetra tellus sit amet nisl congue molestie.
    </p>
  </div>
</div>

```vue
<template>
  <spr-sidenav
    :quick-actions="quickActions"
    has-search
    :active-nav="activeNav"
    :nav-links="navLinks"
    :notification-count="5"
    :request-count="10"
    :user-menu="userMenu"
    @get-navlink-item="handleGetNavLinkItem"
    @search="handleSearch"
    @notifications="handleNotifications"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSidenav from '@/components/sidenav/sidenav.vue';

const quickActions = ref([
  {
    menuHeading: 'Sub Heading 1',
    items: [
      {
        title: 'Leave Request',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Onboarding Request',
        description: 'Seamlessly onboard new employees into your Sprout ecosystem',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Certificate of Employee',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
  {
    menuHeading: 'Sub Heading 2',
    items: [
      {
        title: 'ReadyWage',
        description: 'Request Form',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Workflow',
        description: 'Access your hard-earned salary in advance',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Something 1',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Something 2',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
]);

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'HR Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'HR Management',
              items: [
                {
                  title: 'HR Dashboard',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Employee Overview',
                      items: [
                        {
                          title: 'Employee List',
                          redirect: {},
                        },
                        {
                          title: 'Attendance',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Benefits',
                      items: [
                        {
                          title: 'Leave Management',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Compensation',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                          attributes: [{ name: 'lozenge', value: { label: 'New', tone: 'success' } }],
                        },
                      ],
                    },
                  ],
                  attributes: [{ name: 'lozenge', value: { label: 'New', tone: 'success' } }],
                },
                {
                  title: 'HR Analytics',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'HR Employees',
          icon: 'ph:users-three',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
      ],
    },
    {
      parentLinks: [
        {
          title: 'HR Payroll',
          icon: 'ph:leaf',
          menuLinks: [
            {
              menuHeading: 'Payroll Management',
              items: [
                {
                  title: 'Payroll Processing',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Payroll Reports',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Government Reports',
                      items: [
                        {
                          title: 'SSS Report',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                        {
                          title: 'PhilHealth Report',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                        {
                          title: 'Pag-IBIG Report',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              menuHeading: 'HR Setup',
              items: [
                {
                  title: 'HR Settings',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'HR Employee Records',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'HR Finance',
          icon: 'ph:currency-rub',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
          menuLinks: [
            {
              menuHeading: 'Finance Operations',
              items: [
                {
                  title: 'Payroll Budget',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Expense Tracking',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Financial Reports',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'HR Vehicles',
          icon: 'ph:wallet',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
          menuLinks: [
            {
              menuHeading: 'HR Fleet',
              items: [
                {
                  title: 'Company Cars',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Fleet Management',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'HR Gallery',
          icon: 'ph:address-book',
          menuLinks: [
            {
              menuHeading: 'HR Resources',
              items: [
                {
                  title: 'HR Dashboard',
                  submenuLinks: [
                    {
                      subMenuHeading: 'HR Team',
                      items: [
                        {
                          title: 'HR Directory',
                          redirect: {},
                        },
                        {
                          title: 'HR Attendance',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'HR Benefits',
                      items: [
                        {
                          title: 'HR Leaves',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'HR Compensation',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'HR Analytics',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      parentLinks: [
        {
          title: 'HR Resources',
          icon: 'ph:alien',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
        {
          title: 'HR News',
          icon: 'ph:align-left',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
      ],
    },
  ],
});

const handleGetNavLinkItem = (route) => {
  console.log(route);
};

const handleSearch = (search) => {
  console.log(search);
};

const handleNotifications = (notifications) => {
  console.log(notifications);
};

const handleRequest = (request) => {
  console.log(request);
};

const userMenu = ref({
  name: 'John Doe',
  email: 'johnDoe@sprout.ph',
  profileImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  items: [
    {
      title: 'My Profile',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'Privacy Policy',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'Terms of Service',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'Logout',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
  ],
});
</script>
```

## Full Example with API Data (isNavApi)

Here's a complete implementation example using the sidenav component with `isNavApi: true` and real API data structure:

<div class="no-darkmode spr-m-0 spr-bg-mushroom-100 spr-text-mushroom-950 spr-font-main spr-rounded-md spr-h-[100vh] spr-w-full spr-relative spr-flex">
  <spr-sidenav 
    class="spr-absolute spr-z-[1]" 
    :nav-links="apiNavData"
    :is-nav-api="true"
    :active-nav="activeNav"
    :notification-count="12"
    :request-count="3"
    :user-menu="userMenu"
    :loading="loading"
    :teleport-to-body="false"
    has-search
    @get-navlink-item="handleNavClick"
    @search="handleSearch"
    @notifications="handleNotifications"
    @requests="handleRequests"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
  <div class="spr-flex-1 spr-px-4 spr-py-4 spr-w-full [@media(min-width:1024px)]:spr-max-w-[calc(100%-68px)] [@media(min-width:1024px)]:spr-ml-[68px] spr-ml-0 [@media(min-width:1024px)]:spr-mt-0 spr-mt-[54px] spr-overflow-auto">
    <h1>API-Driven Navigation Example</h1>
    <p>
      This example demonstrates how the sidenav component works with real API data structure. The navigation is dynamically generated from the API response, supporting complex nested hierarchies with multiple levels of menus and submenus.
    </p>
    <p>
      The API data includes properties like <code>groupId</code>, <code>groupName</code>, <code>parentMenuId</code>, and <code>isNewTab</code> which provide additional functionality for organizing and managing navigation items. This structure is commonly used in enterprise applications where navigation needs to be flexible and configurable.
    </p>
    <p>
      Notice how the Payroll section demonstrates deep nesting with Setup → Company Profile and Department items, while the App Management section shows external links that open in new tabs. This flexibility allows for comprehensive navigation systems that can accommodate various application architectures.
    </p>
  </div>
</div>

```vue
<template>
  <spr-sidenav
    :nav-links="apiNavData"
    :is-nav-api="true"
    :active-nav="activeNav"
    :notification-count="12"
    :request-count="3"
    :user-menu="userMenu"
    has-search
    @get-navlink-item="handleNavClick"
    @search="handleSearch"
    @notifications="handleNotifications"
    @requests="handleRequests"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSidenav from '@/components/sidenav/sidenav.vue';

// Real API data structure example
const apiNavData = ref({
  top: [
    {
      id: '135c50eb-3dbb-4e4a-b45a-9f58b4c0921f',
      code: null,
      label: 'Dashboard',
      url: 'https://ecohub-qa.ecoapp-qa.sprout.ph/dashboard',
      icon: 'ph:house-simple',
      children: [],
      position: 'top',
      order: 1,
      attributes: null,
      groupId: '1',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
      code: null,
      label: 'App Management',
      url: null,
      icon: 'ph:shapes',
      children: [
        {
          id: '03b895a8-9de5-4f0e-b19b-4d965c99cd7d',
          code: null,
          label: 'Marketplace',
          url: 'https://market.sprout.ph/',
          icon: null,
          children: [],
          position: 'top',
          order: 2,
          attributes: null,
          groupId: null,
          groupName: null,
          parentMenuId: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
          isNewTab: true,
        },
        {
          id: '04b895a8-9de5-4f0e-b19b-4d965c99cd8e',
          code: null,
          label: 'Extensions',
          url: 'https://extensions.sprout.ph/',
          icon: null,
          children: [],
          position: 'top',
          order: 3,
          attributes: null,
          groupId: null,
          groupName: null,
          parentMenuId: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
          isNewTab: true,
        },
      ],
      position: 'top',
      order: 2,
      attributes: null,
      groupId: '1',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
      code: null,
      label: 'Payroll',
      url: null,
      icon: 'https://eco-cdn-prod.azureedge.net/payroll.svg',
      children: [
        {
          id: 'payroll-runs-001',
          code: null,
          label: 'Payroll Runs',
          url: 'https://ecohub-qa-payroll.sprout.ph/Client/Payrolls.aspx',
          icon: null,
          children: [],
          position: null,
          order: 1,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: false,
        },
        {
          id: 'payroll-setup-001',
          code: null,
          label: 'Setup',
          url: '',
          icon: null,
          children: [
            {
              id: 'company-profile-001',
              code: null,
              label: 'Company Profile',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/company-profile',
              icon: null,
              children: [],
              position: null,
              order: 1,
              attributes: [],
              groupId: null,
              groupName: 'COMPANY',
              parentMenuId: 'payroll-setup-001',
              isNewTab: false,
            },
            {
              id: 'department-001',
              code: null,
              label: 'Department',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/department',
              icon: null,
              children: [],
              position: null,
              order: 2,
              attributes: [],
              groupId: null,
              groupName: 'COMPANY',
              parentMenuId: 'payroll-setup-001',
              isNewTab: false,
            },
            {
              id: 'employees-001',
              code: null,
              label: 'Employees',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/employees',
              icon: null,
              children: [],
              position: null,
              order: 3,
              attributes: [],
              groupId: null,
              groupName: 'WORKFORCE',
              parentMenuId: 'payroll-setup-001',
              isNewTab: false,
            },
          ],
          position: null,
          order: 2,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: false,
        },
        {
          id: 'payroll-reports-001',
          code: null,
          label: 'Reports',
          url: null,
          icon: null,
          children: [
            {
              id: 'sss-report-001',
              code: null,
              label: 'SSS Reports',
              url: 'https://ecohub-qa-payroll.sprout.ph/Reports/SSS',
              icon: null,
              children: [],
              position: null,
              order: 1,
              attributes: [],
              groupId: null,
              groupName: 'GOVERNMENT',
              parentMenuId: 'payroll-reports-001',
              isNewTab: false,
            },
            {
              id: 'philhealth-report-001',
              code: null,
              label: 'PhilHealth Reports',
              url: 'https://ecohub-qa-payroll.sprout.ph/Reports/PhilHealth',
              icon: null,
              children: [],
              position: null,
              order: 2,
              attributes: [],
              groupId: null,
              groupName: 'GOVERNMENT',
              parentMenuId: 'payroll-reports-001',
              isNewTab: false,
            },
          ],
          position: null,
          order: 3,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: false,
        },
      ],
      position: 'top',
      order: 6,
      attributes: null,
      groupId: '2',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
  ],
  bottom: [
    {
      id: 'settings-001',
      code: null,
      label: 'Settings',
      url: '/settings',
      icon: 'ph:gear',
      children: [],
      position: 'bottom',
      order: 1,
      attributes: null,
      groupId: '99',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: 'help-001',
      code: null,
      label: 'Help & Support',
      url: 'https://help.sprout.ph',
      icon: 'ph:question',
      children: [],
      position: 'bottom',
      order: 2,
      attributes: null,
      groupId: '99',
      groupName: null,
      parentMenuId: null,
      isNewTab: true,
    },
  ],
});

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

const userMenu = ref({
  name: 'John Doe',
  email: 'johnDoe@sprout.ph',
  profileImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  items: [
    {
      title: 'My Profile',
      icon: 'ph:user',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/profile',
      },
    },
    {
      title: 'Account Settings',
      icon: 'ph:gear',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/settings',
      },
    },
    {
      title: 'Privacy Policy',
      icon: 'ph:shield-check',
      redirect: {
        openInNewTab: true,
        isAbsoluteURL: true,
        link: 'https://sprout.ph/privacy',
      },
    },
    {
      title: 'Logout',
      icon: 'ph:sign-out',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/logout',
      },
    },
  ],
});

// Event handlers
const handleNavClick = (navItem) => {
  console.log('Navigation clicked:', navItem);

  // Update active navigation based on API structure
  if (navItem.parentMenuId === null) {
    // Top-level navigation
    activeNav.value = {
      parentNav: navItem.label,
      menu: '',
      submenu: '',
    };
  } else {
    // Handle nested navigation logic here
    console.log('Nested navigation:', navItem);
  }

  // Handle URL navigation
  if (navItem.url) {
    if (navItem.isNewTab) {
      window.open(navItem.url, '_blank');
    } else {
      // Use your router to navigate
      // router.push(navItem.url);
      console.log('Navigate to:', navItem.url);
    }
  }
};

const handleSearch = (searchTerm) => {
  console.log('Search:', searchTerm);
  // Implement search functionality
};

const handleNotifications = () => {
  console.log('Notifications clicked');
  // Handle notifications
};

const handleRequests = () => {
  console.log('Requests clicked');
  // Handle requests
};
</script>
```

## API Reference

### Props

The following props are available for the Sidenav component:

<table>
  <thead>
    <tr>
      <td class="spr-min-w-[180px]">Name</td>
      <td>Description</td>
      <td>Type</td>
      <td>Default</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>quick-actions</code>
      </td>
      <td>Shows quick action menu with grouped items. Each quick action can have a title, description, icon, and redirection information.</td>
      <td>QuickAction[]</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>
        <code>has-search</code>
      </td>
      <td>Controls the visibility of the search button in the side navigation.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>active-nav</code>
      </td>
      <td>Sets the active state for navigation, including the parent navigation, menu, and submenu. Used to highlight active navigation items.</td>
      <td>{ parentNav: string; menu: string; submenu: string }</td>
      <td><code>{ parentNav: '', menu: '', submenu: '' }</code></td>
    </tr>
    <tr>
      <td>
        <code>nav-links</code>
      </td>
      <td>Defines the navigation structure with top and bottom sections, each containing parent links, menu links, and submenu links for hierarchical navigation.</td>
      <td>NavLinks</td>
      <td><code>{ top: [], bottom: [] }</code></td>
    </tr>
    <tr>
      <td>
        <code>notification-count</code>
      </td>
      <td>Shows a notification counter badge on the notification icon. Use <code>0</code> to show icon without badge or empty string to hide completely.</td>
      <td>string | number</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>
        <code>request-count</code>
      </td>
      <td>Shows a request counter badge on the request icon. Use <code>0</code> to show icon without badge or empty string to hide completely.</td>
      <td>string | number</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>
        <code>user-menu</code>
      </td>
      <td>Shows user avatar at the bottom of the sidenav along with a menu containing user information and menu items. Set to false to hide user menu.</td>
      <td>UserMenu | false</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>is-notif-active</code>
      </td>
      <td>Controls whether the notification icon appears in an active state with filled icon styling.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>is-request-active</code>
      </td>
      <td>Controls whether the request icon appears in an active state with filled icon styling.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>is-nav-api</code>
      </td>
      <td>When set to true, the component expects navigation data in API format and will transform it to the internal format. Useful when integrating with backend APIs.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>loading</code>
      </td>
      <td>When set to true, the component will render skeleton loaders.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>teleport-to-body</code>
      </td>
      <td>When set to true, the component will be teleported under the body element.</td>
      <td>boolean</td>
      <td><code>true</code></td>
    </tr>
  </tbody>
</table>

### Events

The following events are emitted by the Sidenav component:

<table>
  <thead>
    <tr>
      <td class="spr-min-w-[180px]">Name</td>
      <td>Description</td>
      <td>Parameters</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>get-navlink-item</code>
      </td>
      <td>Emitted when a navigation link is clicked. Returns the clicked item object including redirect information and active navigation state. This event provides a connection point to handle your router navigation.</td>
      <td>
        <code>objectItem: object</code> - The clicked navigation item with redirect and active navigation information
      </td>
    </tr>
    <tr>
      <td>
        <code>search</code>
      </td>
      <td>Emitted when the search button is clicked. Can be used to trigger search functionality in the parent application.</td>
      <td>
        <code>event: string</code> - Contains 'search-triggered' string value
      </td>
    </tr>
    <tr>
      <td>
        <code>notifications</code>
      </td>
      <td>Emitted when the notifications button is clicked. Can be used to trigger notifications panel or functionality in the parent application.</td>
      <td>
        <code>event: string</code> - Contains 'notifications-triggered' string value
      </td>
    </tr>
    <tr>
      <td>
        <code>requests</code>
      </td>
      <td>Emitted when the requests button is clicked. Can be used to trigger requests panel or functionality in the parent application.</td>
      <td>
        <code>event: string</code> - Contains 'requests-triggered' string value
      </td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <td class="spr-min-w-[180px]">Name</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>logo-image</code>
      </td>
      <td>
        Slot for inserting a custom logo image at the top of the sidenav. Typically used with an <code>&lt;img&gt;</code> tag. The logo area has predefined styling for optimal display of small logos (24px × 24px).
      </td>
    </tr>
  </tbody>
</table>

### Types

The Sidenav component uses the following complex data types:

#### QuickAction

```typescript
type QuickAction = {
  menuHeading: string;
  items: QuickActionItem[];
};

type QuickActionItem = {
  title: string;
  description: string;
  icon: string;
  iconBgColor: string; // Values: 'green' or 'purple'
  redirect: Redirect;
  hidden: boolean;
};
```

#### NavLinks

```typescript
type NavLinks = {
  top: { parentLinks: ParentLinkItem[] }[];
  bottom: { parentLinks: ParentLinkItem[] }[];
};

type ParentLinkItem = {
  title: string;
  icon: string;
  link?: string;
  redirect?: Redirect;
  menuLinks: MenuLink[];
  submenuLinks?: SubmenuLink[];
  hidden?: boolean;
  attributes?: Attributes[]; // For additional metadata like lozenges
};

type MenuLink = {
  menuHeading: string;
  items: MenuLinkItem[] | ParentLinkItem[];
};

type MenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
  submenuLinks: SubmenuLink[];
  attributes?: Attributes[]; // For additional metadata like lozenges
};

type SubmenuLink = {
  subMenuHeading: string;
  items: SubmenuLinkItem[] | ParentLinkItem[];
};

type SubmenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
  attributes?: Attributes[]; // For additional metadata like lozenges
};

type Redirect = {
  openInNewTab: boolean;
  isAbsoluteURL: boolean;
  link: string;
};
```

#### API Data Types

When using `isNavApi: true`, the following types are used for API-sourced navigation:

```typescript
type NavAPILinks = {
  top: { parentLinks: NavItem[] }[];
  bottom: { parentLinks: NavItem[] }[];
};

interface NavItem {
  id: string;
  groupId: string;
  label: string;
  icon?: string | null;
  url?: string | null;
  isNewTab?: boolean;
  children?: NavItem[] | null;
  groupName?: string | null;
  hidden?: boolean;
  attributes?: Attributes[] | null;
  position?: string;
  order?: number;
  parentMenuId?: string | null;
}

type Attributes = {
  name: string;
  value: unknown | string | number | boolean | AttrLozenge;
};

type AttrLozenge = {
  label: string;
  tone?: string; // Valid values: 'danger', 'information', 'plain', 'pending', 'success', 'neutral', 'caution'
};
```

#### UserMenu

```typescript
type UserMenu = {
  name: string;
  email: string;
  profileImage: string;
  items: UserMenuItem[];
};

type UserMenuItem = {
  title: string;
  icon: string;
  hidden: boolean;
  redirect: Redirect;
};
```

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SideNavDataApi from '../../../../json-data/side-nav-api.json';

import SprSidenav from '@/components/sidenav/sidenav.vue';
import SprLogo from "@/components/logo/logo.vue";
import SprSwitch from '@/components/switch/switch.vue';

const loading= ref(false);
const quickActions = ref([
  {
    menuHeading: 'Sub Heading 1',
    items: [
      {
        title: 'Leave Request',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Onboarding Request',
        description: 'Seamlessly onboard new employees into your Sprout ecosystem',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Certificate of Employee',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
  {
    menuHeading: 'Sub Heading 2',
    items: [
      {
        title: 'ReadyWage',
        description: 'Request Form',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Workflow',
        description: 'Access your hard-earned salary in advance',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Something 1',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Something 2',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
]);

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});
const apiNavData = ref(SideNavDataApi);
const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'HR Home',
          icon: 'ph:house-simple',
          attributes: [{ name: 'lozenge', value: { label: 'New', tone: 'success' } }],
          menuLinks: [
            {
              menuHeading: 'HR Management',
              items: [
                {
                  title: 'HR Dashboard',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Employee Overview',
                      items: [
                        {
                          title: 'Employee List',
                          redirect: {},
                        },
                        {
                          title: 'Attendance',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Benefits',
                      items: [
                        {
                          title: 'Leave Management',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Compensation',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                          attributes: [{ name: 'lozenge', value: { label: 'New', tone: 'success' } }],
                        },
                      ],
                    },
                  ],
                  attributes: [{ name: 'lozenge', value: { label: 'New', tone: 'success' } }],
                },
                {
                  title: 'HR Analytics',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'HR Employees',
          icon: 'ph:users-three',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
      ],
    },
    {
      parentLinks: [
        {
          title: 'HR Payroll',
          icon: 'ph:leaf',
          menuLinks: [
            {
              menuHeading: 'Payroll Management',
              items: [
                {
                  title: 'Payroll Processing',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Payroll Reports',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Government Reports',
                      items: [
                        {
                          title: 'SSS Report',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                        {
                          title: 'PhilHealth Report',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                        {
                          title: 'Pag-IBIG Report',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              menuHeading: 'HR Setup',
              items: [
                {
                  title: 'HR Settings',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'HR Employee Records',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'HR Finance',
          icon: 'ph:currency-rub',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
          menuLinks: [
            {
              menuHeading: 'Finance Operations',
              items: [
                {
                  title: 'Payroll Budget',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Expense Tracking',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Financial Reports',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'HR Vehicles',
          icon: 'ph:wallet',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
          menuLinks: [
            {
              menuHeading: 'HR Fleet',
              items: [
                {
                  title: 'Company Cars',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Fleet Management',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'HR Gallery',
          icon: 'ph:address-book',
          menuLinks: [
            {
              menuHeading: 'HR Resources',
              items: [
                {
                  title: 'HR Dashboard',
                  submenuLinks: [
                    {
                      subMenuHeading: 'HR Team',
                      items: [
                        {
                          title: 'HR Directory',
                          redirect: {},
                        },
                        {
                          title: 'HR Attendance',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'HR Benefits',
                      items: [
                        {
                          title: 'HR Leaves',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'HR Compensation',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'HR Analytics',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      parentLinks: [
        {
          title: 'HR Resources',
          icon: 'ph:alien',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
        {
          title: 'HR News',
          icon: 'ph:align-left',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
      ],
    },
  ],
});

const handleGetNavLinkItem = (route) => {
  console.log(route);
};

const handleSearch = (search) => {
  console.log(search);
};

const handleNotifications = (notifications) => {
  console.log(notifications);
};

const handleRequest = (request) => {
  console.log(request);
};

const userMenu = ref({
  name: 'John Doe',
  email: 'johnDoe@sprout.ph',
  profileImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  items: [
    {
      title: 'My Profile',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'Privacy Policy',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'Terms of Service',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'Logout',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
  ],
});

const handleNavClick = (navItem) => {
  console.log('Navigation clicked:', navItem);
  // Handle navigation logic here
};  

const handleRequests = () => {
  console.log('Requests clicked');
  // Handle requests
};
</script>
