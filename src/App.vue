<template>
  <spr-sidenav
    :quick-actions="quickActions"
    has-search
    :active-nav="activeNav"
    :nav-links="navLinks"
    @get-navlink-item="handleGetNavLinkItem"
  >
    <template #logo-image>
      <img src="https://t3-fullsync.hrtest.ph//Images/2023/Sprout-New-Logo-Black-v2.svg" alt="logo" />
    </template>

    <template #avatar-image>
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="avatar" />
    </template>
  </spr-sidenav>

  <h1 class="tw-heading-xl">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="tw-heading-lg">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="tw-heading-md">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="tw-heading-sm">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="tw-heading-xs">askhdjahskjdhasjkhdjkashkjdas</h1>

  <h1 v-for="i in 100" :key="i">Sample kingkong {{ i }}</h1>
</template>

<script setup>
import { ref } from 'vue';

import SprSidenav from './components/sidenav/sidenav.vue';

import IconHouseSimple from '~icons/ph/house-simple';
import IconUsersThree from '~icons/ph/users-three';
import IconLeaf from '~icons/ph/leaf';
import IconCurrencyRub from '~icons/ph/currency-rub';
import IconWallet from '~icons/ph/wallet';

const quickActions = ref([
  {
    title: 'Leave Request',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    icon: IconHouseSimple,
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
    icon: IconHouseSimple,
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
    icon: IconHouseSimple,
    iconBgColor: 'purple',
    redirect: {
      openInNewTab: false,
      isAbsoluteURL: false,
      link: '/',
    },
  },
  {
    title: 'ReadyWage',
    description: 'Request Form',
    icon: IconHouseSimple,
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
    icon: IconHouseSimple,
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
    icon: IconHouseSimple,
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
    icon: IconHouseSimple,
    iconBgColor: 'purple',
    redirect: {
      openInNewTab: false,
      isAbsoluteURL: false,
      link: '/',
    },
  },
]);

const navLinks = ref([
  {
    parentLinks: [
      {
        title: 'Home',
        icon: IconHouseSimple,
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
                        redirect: {},
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
      {
        title: 'Employees',
        icon: IconUsersThree,
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
        title: 'Payroll',
        icon: IconLeaf,
        menuLinks: [
          {
            menuHeading: 'Sub Heading 1',
            items: [
              {
                title: 'Payroll Runs',
                redirect: {
                  openInNewTab: false,
                  isAbsoluteURL: false,
                  link: '/',
                },
              },
              {
                title: 'Reports',
                submenuLinks: [
                  {
                    subMenuHeading: '',
                    items: [
                      {
                        title: 'Payroll',
                        redirect: {
                          openInNewTab: false,
                          isAbsoluteURL: false,
                          link: '/',
                        },
                      },
                      {
                        title: 'SSS',
                        redirect: {
                          openInNewTab: false,
                          isAbsoluteURL: false,
                          link: '/',
                        },
                      },
                      {
                        title: 'PHILHEALTH',
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
            menuHeading: 'Sub Heading 2',
            items: [
              {
                title: 'Setup',
                redirect: {
                  openInNewTab: false,
                  isAbsoluteURL: false,
                  link: '/',
                },
              },
              {
                title: 'Employees',
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
        title: 'Money',
        icon: IconCurrencyRub,
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Car',
        icon: IconWallet,
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
        menuLinks: [
          {
            menuHeading: '',
            items: [
              {
                title: 'Car 1',
                redirect: {
                  openInNewTab: false,
                  isAbsoluteURL: false,
                  link: '/',
                },
              },
              {
                title: 'Car 2',
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
]);

const activeNav = ref({
  parentNav: 'Home',
  menu: 'Dashboard 1',
  submenu: 'Home 2',
});

const handleGetNavLinkItem = (route) => {
  console.log(route);
};
</script>

<style>
body {
  @apply tw-m-0 tw-bg-mushroom-100 tw-font-main;
}
</style>
