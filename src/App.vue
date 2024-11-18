<template>
  <spr-sidenav has-quick-actions has-search :active-nav="activeNav" :nav-links="navLinks">
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

<style>
body {
  @apply tw-m-0 tw-bg-mushroom-100 tw-font-main;
}
</style>
