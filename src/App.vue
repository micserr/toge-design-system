<template>
  <SidenavOlympus has-quick-actions has-search :nav-links="navLinks">
    <template #logo-image>
      <img
        src="https://t3-fullsync.hrtest.ph//Images/2023/Sprout-New-Logo-Black-v2.svg"
        alt="logo"
      />
    </template>
  </SidenavOlympus>

  <h1 v-for="i in 100" :key="i">Sample kingkong {{ i }}</h1>
</template>

<script setup>
import SidenavOlympus from './components/Sidenav/SidenavOlympus.vue';

const navLinks = [
  {
    menu: [
      {
        title: 'Home',
        navTooltip: 'Tooltip Label',
      },
      {
        title: 'Employees',
        navTooltip: 'Tooltip Label',
      },
      {
        title: 'Absctract',
        navTooltip: 'Tooltip Label',
      },
    ],
  },
  {
    menu: [
      {
        title: 'Payroll',
        navTooltip: 'Tooltip Label',
        submenu: [
          {
            title: 'Payroll Runs',
          },
          {
            title: 'Reports',
            submenu: [
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
        navTooltip: 'Tooltip Label',
      },
      {
        title: 'Car',
        navTooltip: 'Tooltip Label',
      },
      {
        title: 'Bar',
        navTooltip: 'Tooltip Label',
      },
      {
        title: 'Music',
        navTooltip: 'Tooltip Label',
      },
    ],
  },
  {
    menu: [{}],
  },
];
</script>

<style>
body {
  margin: 0;
  background: red;
}
</style>
