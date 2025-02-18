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
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>

    <template #avatar-image>
      <img src="@/assets/images/sample-profile-image.jpg" alt="avatar" />
    </template>
  </spr-sidenav>

  <br />

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
  
    <spr-snack
      class="mock-snack"
      text="Yehey"
      tone="danger"
      action-text="action"
      show-icon
      show-action
    />
  
    <spr-snack
      class="mock-snack"
      text="Two line with long action should look like this when implemented. This is more additional text for lines."
      tone="caution"
      action-text="action"
      show-icon
      show-action
    />
  
    <spr-snack
      class="mock-snack"
      text="Hello"
      tone="information"
      action-text="action"
      show-icon
      show-action
    />
  </div>

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
import SprButton from './components/button/button.vue';
import SprSnack from './components/snackbar/snack/snack.vue';
import SprSnackbar from './components/snackbar/snackbar.vue';

const snackbar = ref(null);
const successSnackbar = () => {
  snackbar.value.showSuccess({
    text: "Yehey!",
    showIcon: true,
    actionText: "close",
    showAction: true,
  });
}

const errorSnackbar = () => {
  snackbar.value.showCaution({
    text: "Error!",
    actionText: "action",
    showAction: true,
    showIcon: true,
    duration: 8000,
    action: () => console.log("Error action clicked"),
  });
}

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

<style lang="scss">
body {
  @apply m-0 bg-mushroom-100 font-main;
  margin-left: 64px;
  padding: 64px;
}
</style>
