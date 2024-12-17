<div class="tw-flex">
  <spr-sidenav :has-quick-actions="true" :has-search="true" :active-nav="activeNav" :nav-links="navLinks">
    <template #logo-image>
      <img src="https://t3-fullsync.hrtest.ph//Images/2023/Sprout-New-Logo-Black-v2.svg" alt="logo" />
    </template>
    <template #avatar-image>
      <img src="https://lh3.googleusercontent.com/a/ACg8ocK50-sMjINMLwvJ93HYET2GSzk6E3JyGZspnDTtetgs9OxCcWg=s360-c-no" alt="avatar" />
    </template>
  </spr-sidenav>
  <div>
    <h1 class="tw-text-2xl tw-font-bold tw-text-gray-800">Lorem Ipsum</h1>
    <p class="tw-text-center">
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet nunc non purus efficitur, a blandit enim tristique. Nullam feugiat, odio quis condimentum euismod, neque velit maximus dui, pellentesque dignissim ex nibh ut tellus. Fusce aliquet, nunc eget fermentum ornare, magna felis tincidunt sem, ultrices pulvinar leo nisi non quam. Etiam vitae viverra est. Ut ornare porttitor ipsum. Cras tempus, mauris eu pulvinar pretium, lectus ligula convallis urna, eu vehicula mauris eros eget tellus. Aenean ut ex eget metus pulvinar suscipit in in lorem. Fusce ultricies, mi in tristique consectetur, nulla ante condimentum elit, in mollis tortor ipsum in augue. Vivamus a massa a felis dapibus efficitur. Praesent volutpat suscipit nisi, et aliquet risus aliquet ac. Vestibulum nec mauris molestie, interdum velit tincidunt, tempor tellus. Ut rutrum, sapien vitae ullamcorper pharetra, nulla quam euismod nisi, sit amet rutrum metus ex ac lectus. Mauris hendrerit justo ac lacus consequat tincidunt. Pellentesque massa dolor, dignissim at ullamcorper vel, dictum eu tortor. Pellentesque quis laoreet mi, vel blandit purus.
    </p>
    <p>
      Phasellus ullamcorper sodales ligula, eget maximus ipsum interdum sit amet. Donec et urna diam. Mauris scelerisque ultrices augue viverra vehicula. Suspendisse vel nisi eget neque elementum tincidunt. Suspendisse potenti. Ut eu ex mattis, convallis odio ut, tempor dui. Suspendisse dapibus, eros eget blandit cursus, diam orci auctor nibh, convallis condimentum purus dui vitae risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam non lacinia dolor, ac dignissim diam. Quisque erat enim, luctus gravida massa ac, ornare ullamcorper eros. Phasellus lorem velit, eleifend at elit malesuada, viverra sollicitudin nulla. Etiam eu eros nunc. Proin quis viverra ante, ut lacinia felis. Ut eros elit, fermentum tincidunt massa quis, posuere condimentum nisi. Pellentesque ac turpis vehicula, iaculis nibh non, suscipit arcu. Pellentesque id viverra erat.
    </p>
    <p>
      Morbi molestie, elit vel congue rhoncus, nibh nibh egestas quam, nec vehicula nisi tellus a risus. Proin ac mi lacinia, consectetur quam vel, efficitur erat. Nulla vel mi in lectus efficitur luctus non commodo mauris. Duis auctor, orci quis convallis congue, lectus elit faucibus neque, vitae consequat dui massa in erat. Suspendisse ullamcorper malesuada venenatis. Vivamus vulputate eleifend massa sit amet ornare. Mauris tincidunt a massa at dapibus. Donec vitae quam convallis, pharetra dui sit amet, mattis felis. Duis lobortis feugiat fermentum. Mauris neque nisi, rhoncus at elementum id, fringilla id sapien. Quisque hendrerit nisl vitae leo ullamcorper commodo. Praesent massa lorem, volutpat tincidunt lacus a, scelerisque ultrices nibh. Maecenas purus nunc, ultrices et consequat ut, finibus sed mauris. Integer sit amet turpis et ex gravida accumsan.
    </p>
    <p>
      Praesent vulputate tortor non purus consectetur, sit amet sodales metus tincidunt. Nullam varius odio et congue molestie. Donec a augue sed sem tincidunt porttitor consequat nec diam. Quisque dui ipsum, dapibus eu tempus id, fermentum vel nunc. Maecenas in urna erat. Nunc elementum sem tellus, quis scelerisque dolor convallis at. Duis tortor turpis, luctus in dictum eget, lacinia laoreet urna.
    </p>
    <p>
      Aenean ante ligula, sagittis a sagittis ut, faucibus ultricies erat. Aliquam vitae mollis dolor. In hac habitasse platea dictumst. Nunc ultricies dolor non pellentesque mattis. Vestibulum malesuada luctus dignissim. Aenean pretium diam quis tincidunt pellentesque. Praesent suscipit, lectus id tincidunt volutpat, mauris lacus gravida sem, a maximus est nisi sit amet felis. Donec ultrices risus id leo ultricies mattis. Etiam viverra pellentesque congue. Duis vehicula vitae nisi ac consequat. Nunc quis arcu ac tellus venenatis tristique. Morbi porta laoreet neque, non laoreet purus malesuada eu. Etiam ullamcorper dictum nunc in interdum. Suspendisse potenti.
    </p>
  </div>
</div>

<script setup>
import { ref } from 'vue';

import SprSidenav from "@/components/sidenav/sidenav.vue"

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

  .VPNav, 
  .VPSidebar,
  .VPDocFooter,
  .aside {
    display: none !important;
  }

  .VPContent {
    padding: 0 !important;
    margin: 0 !important;
  }
</style>
