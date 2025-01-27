<template>
  <spr-sidenav
    :quick-actions="quickActions"
    has-search
    :active-nav="activeNav"
    :nav-links="navLinks"
    :user-menu="userMenu"
    :notification-count="5"
    :request-count="10"
    @get-navlink-item="handleGetNavLinkItem"
    @search="handleSearch"
    @notifications="handleNotifications"
    @requests="handleRequest"
  >
    <template #logo-image>
      <img
        src="https://play-lh.googleusercontent.com/IxaRjot8VjKDGBXNlrrTmgxJMsGc9Ky3JIaI4tk9ZyGgkjjBRl1wwKAd9UY1VqxhxlQ"
        alt="logo"
      />
    </template>

    <template #avatar-image>
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="avatar" />
    </template>
  </spr-sidenav>

  <h1 class="heading-xl">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="heading-lg">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="heading-md">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="heading-sm">askhdjahskjdhasjkhdjkashkjdas</h1>
  <h1 class="heading-xs">askhdjahskjdhasjkhdjkashkjdas</h1>

  <h1 v-for="i in 100" :key="i">Sample kingkong {{ i }}</h1>
</template>

<script setup>
import { ref } from 'vue';

import SprSidenav from './components/sidenav/sidenav.vue';

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
</script>

<style>
body {
  @apply m-0 bg-mushroom-100 font-main;
}
</style>
