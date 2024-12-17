# Side Navigation

The side navigation provides a customizable navigation bar that includes a logo, navigation links, quick actions, and a search bar.

![Sidenav Sample](../../public/sidenav-sample.png)

## Basic Implementation

To implement the Sidenav component, use the following syntax:

```vue
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

```vue
<template #logo-image>
  <img src="[image_path]" alt="logo" />
</template>
```

### Custom Avaratar Image

The `avatar-image` slot allows you to insert a custom avatar image, typically used for the user's profile picture. Use the following template to add an avatar:

```vue
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

```vue
<template>
  <spr-sidenav :has-quick-actions="true" :has-search="true" :active-nav="activeNav" :nav-links="navLinks">
    <template #logo-image>
      <img src="https://t3-fullsync.hrtest.ph//Images/2023/Sprout-New-Logo-Black-v2.svg" alt="logo" />
    </template>

    <template #avatar-image>
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="avatar" />
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

<div class="no-darkmode tw-m-0 tw-bg-mushroom-100 tw-text-mushroom-950 tw-font-main tw-rounded-md tw-h-[40em] tw-w-full tw-relative tw-flex">
  <spr-sidenav class="tw-absolute tw-z-[1]" has-quick-actions has-search :active-nav="activeNav" :nav-links="navLinks">
    <template #logo-image>
      <img src="https://t3-fullsync.hrtest.ph//Images/2023/Sprout-New-Logo-Black-v2.svg" alt="logo" />
    </template>
    <template #avatar-image>
      <img
        src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
        alt="avatar"
      />
    </template>
  </spr-sidenav>
  <div class="tw-flex-1 tw-px-4 tw-py-4 tw-w-full tw-max-w-[calc(100%-60px)] tw-ml-[60px] tw-overflow-auto">
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
  <spr-sidenav :has-quick-actions="true" :has-search="true" :active-nav="activeNav" :nav-links="navLinks">
    <template #logo-image>
      <img src="https://t3-fullsync.hrtest.ph//Images/2023/Sprout-New-Logo-Black-v2.svg" alt="logo" />
    </template>

    <template #avatar-image>
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="avatar" />
    </template>
  </spr-sidenav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import SprSidenav from '@/components/sidenav/sidenav.vue';

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

<script setup lang="ts">
import { ref } from 'vue';

import SprSidenav from '@/components/sidenav/sidenav.vue';

import IconHouseSimple from '~icons/ph/house-simple';
import IconUsersThree from '~icons/ph/users-three';
import IconShapes from '~icons/ph/shapes';
import IconLeaf from '~icons/ph/leaf';
import IconCurrencyRub from '~icons/ph/currency-rub';
import IconWallet from '~icons/ph/wallet';
import IconChartBar from '~icons/ph/chart-bar';
import IconFlowArrow from '~icons/ph/flow-arrow';
import IconGear from '~icons/ph/gear';
import IconBookOpenText from '~icons/ph/book-open-text';

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
              },
              {
                title: 'Home 2',
              },
              {
                title: 'Home 3',
              },
              {
                title: 'Home 4',
              },
              {
                title: 'Home 5',
              },
              {
                title: 'Home 6',
              },
              {
                title: 'Home 7',
              },
              {
                title: 'Home 8',
              },
              {
                title: 'Home 9',
              },
              {
                title: 'Home 10',
              },
              {
                title: 'Home 11',
              },
              {
                title: 'Home 12',
              },
              {
                title: 'Home 13',
              },
              {
                title: 'Home 14',
              },
              {
                title: 'Home 15',
              },
              {
                title: 'Home 16',
              },
              {
                title: 'Home 17',
              },
              {
                title: 'Home 18',
              },
              {
                title: 'Home 19',
              },
              {
                title: 'Home 20',
              },
            ],
          },
          {
            title: 'Dashboard 2',
          },
          {
            title: 'Dashboard 3',
          },
        ],
      },
      {
        title: 'Employees',
        icon: IconUsersThree,
      },
      {
        title: 'Absctract',
        icon: IconShapes,
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
              },
              {
                title: 'SSS',
              },
              {
                title: 'PHILHEALTH',
              },
              {
                title: 'PAG-IBIG',
              },
              {
                title: 'BIR',
              },
              {
                title: 'ONEHUB DAT FILES',
              },
              {
                title: 'BPI',
              },
              {
                title: 'SECURITY BANK',
              },
              {
                title: 'Certificate of Contribution',
              },
              {
                title: 'certificate of Loan',
              },
              {
                title: 'Statutory Reports',
              },
              {
                title: 'Demographic',
              },
              {
                title: 'Salary History Report',
              },
            ],
          },
          {
            title: 'Setup',
          },
          {
            title: 'Employees',
          },
          {
            title: 'Users',
          },
          {
            title: 'Reports Logs',
          },
        ],
      },
      {
        title: 'Money',
        icon: IconCurrencyRub,
      },
      {
        title: 'Car',
        icon: IconWallet,
      },
      {
        title: 'Bar',
        icon: IconChartBar,
      },
      {
        title: 'Music',
        icon: IconFlowArrow,
      },
    ],
  },
  {
    parentLinks: [
      {
        title: 'Settings',
        icon: IconGear,
        menuLinks: [
          {
            title: 'User Profile',
          },
          {
            title: 'Account Settings',
          },
          {
            title: 'Company Settings',
            submenuLinks: [
              {
                title: 'Team Members',
              },
              {
                title: 'Team Scores',
              },
            ],
          },
        ],
      },
      {
        title: 'About Us',
        icon: IconBookOpenText,
      },
    ],
  },
]);
</script>
