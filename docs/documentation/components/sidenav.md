# Side Navigation

The side navigation provides a customizable navigation bar that includes a logo, navigation links, quick actions, and a search bar.

## Basic Implementation

To implement the Sidenav component, use the following syntax:

```html
<spr-sidenav :has-quick-actions="true" :has-search="true" :nav-links="navLinks">
  <template #logo-image>
    <img src="[logo_image_path]" alt="logo" />
  </template>

  <template #logo-image>
    <img src="[image_path]" alt="logo" />
  </template>
</spr-sidenav>
```

<ul>
  <li>
    <code>has-quick-actions</code>
    <span> : </span>
    <span>Shows the quick action button.</span>
  </li>
  <li>
    <code class="tw-font-bold">has-search</code>
    <span> : </span>
    <span>Shows the search bar.</span>
  </li>
  <li>
    <code class="tw-font-bold">nav-links</code>
    <span> : </span>
    <span>Accepts an array of objects that define the navigation structure.</span>
  </li>
  <li>
    <code class="tw-font-bold">active-nav</code>
    <span> : </span>
    <span>Set the active state for navigation, including the parent navigation, menu, and submenu.</span>
  </li>
</ul>

## Slots

### Custom Logo Image

The `logo-image` slot allows you to insert a custom logo in the side navigation. Use the following template to add a logo:

```html
<template #logo-image>
  <img src="[image_path]" alt="logo" />
</template>
```

### Custom Avaratar Image

The `avatar-image` slot allows you to insert a custom avatar image, typically used for the user's profile picture. Use the following template to add an avatar:

```html
<template #avatar-image>
  <img src="[image_path]" alt="logo" />
</template>
```

::: info Important to note:
Replace `[image_path]` with the actual path to your image. This slot renders the image inside the navigation bar.
:::

## Icon Component Integration

If you're using icons in the navigation, ensure that you import the icon components properly into your Vue file.

You can view more on how to implement Unplugin Icons in the [Unplugin Icons documentation](https://iconify.design/docs/usage/svg/unplugin/).

```Javascript
import IconHouseSimple from '~icons/ph/house-simple';
import IconUsersThree from '~icons/ph/users-three';
import IconShapes from '~icons/ph/shapes';
```

::: info Important to note:
The icon property in each link (e.g., DashboardIcon, SettingsIcon) must be a Vue component. This allows the navigation to render the appropriate icons
:::

## Active Navigation

The `active-nav` property allows you to highlight the active state across different levels of navigation (parent, menu, and submenu). To integrate it with your Sidenav component, ensure that the values for active navigation correspond to the titles of the respective items in your active navigation structure, and pass the active navigation object along with your other props.

Here’s a example of how to implement the active navigation property:

```Html
<template>
  <spr-sidenav
    :has-quick-actions="true"
    :has-search="true"
    :active-nav="activeNav"
    :nav-links="navLinks"
  >
    <template #logo-image>
      <img src="https://t3-fullsync.hrtest.ph//Images/2023/Sprout-New-Logo-Black-v2.svg" alt="logo" />
    </template>

    <template #avatar-image>
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocK50-sMjINMLwvJ93HYET2GSzk6E3JyGZspnDTtetgs9OxCcWg=s360-c-no"
        alt="avatar"
      />
    </template>
  </spr-sidenav>
</template>

<script setup>
import { ref } from 'vue';

import IconHouseSimple from '~icons/ph/house-simple';

const activeNav = ref({
  parentNav: 'Home',
  menu: 'Dashboard',
  submenu: 'Home 4',
});

const navLinks = ref([
  {
    parentLinks: [
      {
        title: 'Home',
        icon: IconHouseSimple,
        menuLinks: [
          {
            title: 'Dashboard',
            submenuLinks: [
              {
                title: 'Home 1',
                redirect: {
                  isThirdPartyLink: false,
                  link: '/',
                },
              },
              {
                title: 'Home 2',
                redirect: {
                  isThirdPartyLink: false,
                  link: '/',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);
</script>
```

## Sidenav API

The following table outlines the available attributes for the Sidenav component:

<table>
  <thead>
    <tr>
      <td class="tw-min-w-[180px]">Attribute</td>
      <td>Description</td>
      <td>Type</td>
      <td>Accepted Values</td>
      <td>Default Value</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>has-quick-actions</code>
      </td>
      <td>Shows quick action button.</td>
      <td>boolean</td>
      <td>true | false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>
        <code>has-search</code>
      </td>
      <td>Shows search button.</td>
      <td>boolean</td>
      <td>true | false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>
        <code>active-nav</code>
      </td>
      <td>Set the active state for navigation, including the parent navigation, menu, and submenu.</td>
      <td>Object</td>
      <td>
        {
          parentNav: [parent link title],
          menu: [menu link title],
          submenu: [submenu link title],
        }
      </td>
      <td>
        {
          parentNav: '',
          menu: '',
          submenu: '',
        }
      </td>
    </tr>
    <tr>
      <td>
        <code>nav-links</code>
      </td>
      <td>Will generate navigation links including submenu links.</td>
      <td>Array</td>
      <td>See below for structure</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Nav Links Structure

The nav-links attribute expects an array of objects that define the navigation menu. Each object can contain:

<ul>
  <li>
    <code class="tw-mr-2">parentLinks:</code>
    <span> 
      List of top-level navigation links. Each link may contain additional properties such as a 
      <code>title</code>, 
      <code>icon</code>, <code>redirect</code> and <code>menuLinks</code>.
    </span>
  </li>
  <li>
    <code class="tw-mr-2">title:</code>
    <span>
      The title of each nav link item. When <code>menulinks</code> is empty or not indicated. 
      Title will shows when parent link is hovered.
    </span>
  </li>
  <li>
    <code class="tw-mr-2">icon:</code>
    <span>
      The icon associated only with <code>parentLinks</code>, usually an icon component (e.g., `IconHouseSimple`, `IconUsersThree`).
      See more on <a href="https://iconify.design/docs/usage/svg/unplugin/">Unplugin Icons</a>.
    </span>
  </li>
  <li>
    <code class="tw-mr-2">redirect:</code>
    <span>
      The URL or path to which the user is redirected when they click on the navigation item. 
      This is object is composed of <code>isThirdPartyLink</code> and <code>link</code>. Redirection wont work if <code>menuLinks</code> or <code>submenuLinks</code> is present.
    </span>
  </li>
  <li>
    <code class="tw-mr-2">isThirdPartyLink:</code>
    <span>
      A boolean flag indicating whether the link is to a third-party external site.
    </span>
  </li>
  <li>
    <code class="tw-mr-2">link:</code>
    <span>
      The actual URL or destination for the navigation item, often used for internal routing or linking to different parts of the app.
    </span>
  </li>
  <li>
    <code class="tw-mr-2">menuLinks:</code>
    <span>
      This appear under a <code>parentLinks</code> navigation item. These menu links define additional sections or categories under the parent link.
    </span>
  </li>
  <li>
    <code class="tw-mr-2">submenuLinks:</code>
    <span>
      Links nested under the <code>menuLinks</code>, enabling multi-level navigation. These are further breakdowns or child items under each <code>menuLinks</code> section.
    </span>
  </li>
</ul>

```Javascript
[
  {
    parentLinks: [
      {
        title: <String>,
        icon: <Compoent>,   // Example icon component using Unplugin Icons
        redirect: {
          isThirdPartyLink: <Boleean>,
          link: <String>,
        },
        menuLinks: [{
          title: <String>,
          redirect: {
            isThirdPartyLink: <Boleean>,
            link: <String>,
          },
          submenuLinks: [{
            title: <String>,
            redirect: {
              isThirdPartyLink: <Boleean>,
              link: <String>,
            },
          }],
        }],
      },
    ],
  },
]
```

## Full Example

Here’s a full example of how to implement the Sidenav component with the above attributes:

```Html
<template>
  <spr-sidenav
    :has-quick-actions="true"
    :has-search="true"
    :active-nav="activeNav"
    :nav-links="navLinks"
  >
    <template #logo-image>
      <img src="https://t3-fullsync.hrtest.ph//Images/2023/Sprout-New-Logo-Black-v2.svg" alt="logo" />
    </template>

    <template #avatar-image>
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocK50-sMjINMLwvJ93HYET2GSzk6E3JyGZspnDTtetgs9OxCcWg=s360-c-no"
        alt="avatar"
      />
    </template>
  </spr-sidenav>
</template>

<script setup>
import { ref } from 'vue';

import IconHouseSimple from '~icons/ph/house-simple';
import IconUsersThree from '~icons/ph/users-three';
import IconLeaf from '~icons/ph/leaf';
import IconCurrencyRub from '~icons/ph/currency-rub';
import IconWallet from '~icons/ph/wallet';

const activeNav = ref({
  parentNav: 'Home',
  menu: 'Dashboard',
  submenu: 'Home 4',
});

const navLinks = ref([
  {
    parentLinks: [
      {
        title: 'Home',
        icon: IconHouseSimple,
        menuLinks: [
          {
            title: 'Dashboard',
            submenuLinks: [
              {
                title: 'Home 1',
                redirect: {
                  isThirdPartyLink: false,
                  link: '/',
                },
              },
              {
                title: 'Home 2',
                redirect: {
                  isThirdPartyLink: false,
                  link: '/',
                },
              },
            ],
          },
          {
            title: 'Dashboard 2',
            redirect: {
              isThirdPartyLink: false,
              link: '/',
            },
          },
        ],
      },
      {
        title: 'Employees',
        icon: IconUsersThree,
        redirect: {
          isThirdPartyLink: false,
          link: '/',
        },
      },
    ],
  },
  {
    parentLinks: [
      {
        title: 'Payroll',
        icon: IconLeaf,
        menuLinks: [
          {
            title: 'Payroll Runs',
          },
          {
            title: 'Reports',
            submenuLinks: [
              {
                title: 'Payroll',
                redirect: {
                  isThirdPartyLink: false,
                  link: '/',
                },
              },
              {
                title: 'SSS',
                redirect: {
                  isThirdPartyLink: false,
                  link: '/',
                },
              },
              {
                title: 'PHILHEALTH',
                redirect: {
                  isThirdPartyLink: false,
                  link: '/',
                },
              },
            ],
          },
          {
            title: 'Setup',
            redirect: {
              isThirdPartyLink: false,
              link: '/',
            },
          },
          {
            title: 'Employees',
            redirect: {
              isThirdPartyLink: false,
              link: '/',
            },
          },
        ],
      },
      {
        title: 'Money',
        icon: IconCurrencyRub,
        redirect: {
          isThirdPartyLink: false,
          link: '/',
        },
      },
      {
        title: 'Car',
        icon: IconWallet,
        redirect: {
          isThirdPartyLink: false,
          link: '/',
        },
      },
    ],
  },
]);
</script>
```
