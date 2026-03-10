<template>
  <div class="spr-flex spr-min-h-screen">
    <Sidenav
      :nav-links="navLinks"
      :active-nav="activeNav"
      has-search
      :notification-count="2"
      :request-count="0"
      :user-menu="userMenu"
      @search="() => {}"
      @notifications="() => {}"
      @requests="() => {}"
    >
      <template #logo-image>
        <div class="spr-h-6 spr-w-6 spr-rounded-border-radius-md spr-bg-kangkong-500" />
      </template>
    </Sidenav>
    <main class="spr-flex-1 spr-min-h-screen spr-background-color [@media(min-width:1024px)]:spr-pl-[calc(68px+1.5rem)]">
      <!-- Tab bar -->
      <div class="spr-border-color-base spr-sticky spr-top-0 spr-z-10 spr-background-color spr-border-b spr-border-solid spr-px-6">
        <TogeTabs v-model="activeTabIndex" :list="tabs" underlined />
      </div>

      <!-- Content -->
      <div class="spr-p-6">
        <div v-if="activeTabIndex === 0" class="spr-max-w-4xl spr-mx-auto">
          <TokensShowcase />
        </div>
        <div v-else-if="activeTabIndex === 1">
          <TogePlayground />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidenav from '@/legacy/sidenav/sidenav.vue';
import TogeTabs from '@/toge/patterns/tabs/tabs.vue';
import TokensShowcase from '@/playground/TokensShowcase.vue';
import TogePlayground from '@/playground/TogePlayground.vue';
import type { NavLinks, ActiveNav, UserMenu } from '@/legacy/sidenav/sidenav';

const activeTabIndex = ref(0);
const tabs = [
  { label: 'Design Tokens' },
  { label: 'Playground' },
];

const activeNav = ref<ActiveNav>({ parentNav: 'Home', menu: 'Dashboard', submenu: '' });

const defaultRedirect = () => ({ openInNewTab: false, isAbsoluteURL: false, link: '#' });

const navLinks = ref<NavLinks>({
  top: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house',
          menuLinks: [
            { menuHeading: 'Main', items: [{ title: 'Dashboard', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }, { title: 'Overview', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }] },
            { menuHeading: 'Other', items: [{ title: 'Settings', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }, { title: 'Preferences', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }] },
          ],
        },
        {
          title: 'Projects',
          icon: 'ph:folder',
          menuLinks: [
            { menuHeading: '', items: [{ title: 'All projects', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }, { title: 'Archived', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }] },
          ],
        },
        {
          title: 'Team',
          icon: 'ph:users-three',
          menuLinks: [
            { menuHeading: 'People', items: [{ title: 'Members', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }, { title: 'Invites', hidden: false, redirect: defaultRedirect(), submenuLinks: [{ subMenuHeading: 'Pending', items: [{ title: 'By email', hidden: false, redirect: defaultRedirect() }, { title: 'By link', hidden: false, redirect: defaultRedirect() }] }] }] },
          ],
        },
        {
          title: 'Reports',
          icon: 'ph:chart-line',
          menuLinks: [
            { menuHeading: 'Analytics', items: [{ title: 'Overview', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }, { title: 'Exports', hidden: false, redirect: defaultRedirect(), submenuLinks: [{ subMenuHeading: 'Formats', items: [{ title: 'CSV', hidden: false, redirect: defaultRedirect() }, { title: 'PDF', hidden: false, redirect: defaultRedirect() }] }] }] },
          ],
        },
        {
          title: 'Billing',
          icon: 'ph:credit-card',
          menuLinks: [
            { menuHeading: '', items: [{ title: 'Plans', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }, { title: 'Invoices', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }, { title: 'Payment methods', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }] },
          ],
        },
        {
          title: 'Integrations',
          icon: 'ph:plug',
          menuLinks: [
            { menuHeading: 'Connected', items: [{ title: 'Slack', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }, { title: 'GitHub', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }] },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        { title: 'Help', icon: 'ph:question', link: '#', menuLinks: [] },
        { title: 'Docs', icon: 'ph:book', menuLinks: [{ menuHeading: '', items: [{ title: 'API', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }, { title: 'Guides', hidden: false, redirect: defaultRedirect(), submenuLinks: [] }] }] },
      ],
    },
  ],
});

const userMenu = ref<UserMenu>({
  name: 'Jane Doe',
  email: 'jane@example.com',
  profileImage: '',
  items: [
    { title: 'Profile', icon: 'ph:user', hidden: false, redirect: { openInNewTab: false, isAbsoluteURL: false, link: '#' } },
    { title: 'Sign out', icon: 'ph:sign-out', hidden: false, redirect: { openInNewTab: false, isAbsoluteURL: false, link: '#' } },
  ],
});
</script>

