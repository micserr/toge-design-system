<template>
  <spr-sidenav
    :quick-actions="quickActions"
    has-search
    :active-nav="activeNav"
    :nav-links="navLinks"
    :user-menu="userMenu"
    :notification-count="0"
    :request-count="0"
    @get-navlink-item="handleGetNavLinkItem"
    @search="handleSearch"
    @notifications="handleNotifications"
    @requests="handleRequest"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>

  <br />

  <spr-input v-model="inputValue" label="Sample Input" display-helper error @input="onInput">
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" />
      This is a helper text
    </template>
  </spr-input>

  <spr-snackbar ref="snackbar" />

  <spr-button @click="successSnackbar"> Show success</spr-button>
  <spr-button @click="errorSnackbar"> Show error</spr-button>

  <div class="mock-snackbar">
    <spr-snack
      class="mock-snack"
      text="Two line with long action should look like this when implemented. This is more additional text for lines."
      tone="success"
      action-text="action"
      show-icon
    />

    <spr-snack class="mock-snack" text="Yehey" tone="danger" action-text="action" show-icon show-action />

    <spr-snack
      class="mock-snack"
      text="Two line with long action should look like this when implemented. This is more additional text for lines."
      tone="caution"
      action-text="action"
      show-icon
      show-action
    />

    <spr-snack class="mock-snack" text="Hello" tone="information" action-text="action" show-icon show-action />
  </div>

  <h1 class="spr-heading-xl">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="spr-heading-lg">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="spr-heading-md">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="spr-heading-sm">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="spr-heading-xs">askhdjahskjdhasjkhdjkashkjdas</h1>

  <h1 v-for="i in 100" :key="i">Sample kingkong {{ i }}</h1>

  <div class="spr-space-y-4 spr-bg-white-50 spr-p-size-spacing-sm">
    <spr-table action :headers="headers" :data-table="data">
      <div>
        <div class="spr-text-color-strong spr-font-size-400 spr-font-weight-medium">Table Name</div>
        <div>table description</div>
      </div>
      <template #action="{ row }">
        <spr-lozenge :label="row.status.title" tone="success" />
      </template>
      <template #action-name> Status </template>
    </spr-table>

    <spr-table :headers="headers" :data-table="data" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import SprSidenav from './components/sidenav/sidenav.vue';
import SprButton from './components/button/button.vue';
import SprSnack from './components/snackbar/snack/snack.vue';
import SprSnackbar from './components/snackbar/snackbar.vue';
import SprTable from '@/components/table/table.vue';
import SprLozenge from '@/components/lozenge/lozenge.vue';
import SprInput from '@/components/input/input.vue';
import { Icon } from '@iconify/vue';

const inputValue = ref('');

const snackbar = ref(null);
const successSnackbar = () => {
  snackbar.value.showSuccess({
    text: 'Yehey!',
    showIcon: true,
    actionText: 'close',
    showAction: true,
  });
};

const errorSnackbar = () => {
  snackbar.value.showCaution({
    text: 'Error!',
    actionText: 'action',
    showAction: true,
    showIcon: true,
    duration: 8000,
    action: () => console.log('Error action clicked'),
  });
};

const activeNav = ref({
  parentNav: 'Home',
  menu: 'Dashboard 1',
  submenu: 'Home 2',
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
                  // submenuLinks: [
                  //   {
                  //     subMenuHeading: 'Sub Heading 1',
                  //     items: [
                  //       {
                  //         title: 'Home 1',
                  //         redirect: {},
                  //       },
                  //       {
                  //         title: 'Home 2',
                  //         redirect: {
                  //           openInNewTab: false,
                  //           isAbsoluteURL: false,
                  //           link: '/',
                  //         },
                  //       },
                  //     ],
                  //   },
                  //   {
                  //     subMenuHeading: 'Sub Heading 2',
                  //     items: [
                  //       {
                  //         title: 'Home 3',
                  //         redirect: {
                  //           openInNewTab: false,
                  //           isAbsoluteURL: true,
                  //           link: 'https://www.google.com/',
                  //         },
                  //       },
                  //       {
                  //         title: 'Home 4',
                  //         redirect: {
                  //           openInNewTab: false,
                  //           isAbsoluteURL: false,
                  //           link: '/',
                  //         },
                  //       },
                  //     ],
                  //   },
                  // ],
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
          title: 'Payroll',
          icon: 'ph:leaf',
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
          icon: 'ph:currency-rub',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
        {
          title: 'Car',
          icon: 'ph:wallet',
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
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'Gallery',
          icon: 'ph:address-book',
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
      ],
    },
    {
      parentLinks: [
        {
          title: 'Resources',
          icon: 'ph:alien',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
        {
          title: 'News',
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
  name: 'John Rafael M. Arias',
  email: 'jarias@sprout.ph',
  profileImage: 'https://lh3.googleusercontent.com/ogw/AF2bZyiCP8eaKX7KiduREcMAogl0Ml2TwYJAPTgcKeNap81ztg=s32-c-mo',
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

const headers = ref([
  { field: 'name', name: 'Role Name', sort: true, size: 'md', hasAvatar: true, hasSubtext: true },
  { field: 'lastUpdate', name: 'Last Update', sort: true, size: 'xl', hasAvatar: false, hasSubtext: false },
]);

const data = ref([
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status1: {
      title: 'sdsj',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status1: {
      title: 'sdsj',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status1: {
      title: 'sdsj',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status1: {
      title: 'sdsj',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status1: {
      title: 'sdsj',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
  {
    name: {
      title: 'Shift',
      subtext: 'Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    lastUpdate: {
      title: 'Nov 30, 2025',
      subtext: 'Lorem ipsum dolor ',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    status: {
      title: 'Success',
      subtext: 'Lorem ipsum dolor sit amet, consectetur, sed etiam.',
      image: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
]);
</script>

<style lang="scss">
body {
  @apply spr-m-0 spr-bg-mushroom-100 spr-font-main;
  margin-left: 64px;
  padding: 64px;
}
</style>
