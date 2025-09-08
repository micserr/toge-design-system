<template>
  <div
    :class="[
      'spr-hidden-scrolls spr-fixed spr-bottom-0 spr-left-0 spr-top-0',
      'spr-background-color spr-w-auto spr-overflow-y-auto spr-overflow-x-hidden',
      'spr-border-color-weak spr-border-b-0 spr-border-l-0 spr-border-r spr-border-t-0 spr-border-solid',
      'spr-z-10 spr-transition spr-duration-150 spr-ease-in-out',
    ]"
  >
    <div
      :class="{
        'spr-hidden-scrolls spr-flex spr-h-full spr-flex-col spr-justify-between spr-overflow-auto': true,
        'spr-max-h-[calc(100vh-60px)]': props.notificationCount === null && props.requestCount === null,
        'spr-max-h-[calc(100vh-194px)]':
          (props.notificationCount && props.requestCount) || props.notificationCount === 0 || props.requestCount === 0,
        '!spr-max-h-[calc(100vh-150px)]': props.requestCount === '' || props.notificationCount === '',
      }"
    >
      <!-- #region - Top Section -->
      <div class="spr-grid spr-justify-center spr-gap-2 spr-px-3 spr-pb-4 spr-pt-4">
        <!-- #region - Logo -->
        <div
          :class="[
            'spr-grid spr-justify-center spr-p-2',
            '[&>img]:spr-mx-auto [&>img]:spr-h-[24px] [&>img]:spr-w-[24px] [&>img]:spr-object-cover',
          ]"
        >
          <slot name="logo-image" />
        </div>
        <!-- #endregion - Logo -->

        <!-- #region - Quick Actions -->
        <Menu
          v-if="props.quickActions && props.quickActions.length > 0"
          v-model:shown="isQuckActionMenuVisible"
          aria-id="quick-action-menu-wrapper"
          distance="18"
          placement="right-start"
          :triggers="[]"
          :popper-hide-triggers="[]"
          instant-move
          :delay="0"
        >
          <div
            :class="{
              'spr-flex spr-w-full spr-cursor-pointer spr-items-center spr-text-center spr-text-[28px] spr-transition spr-duration-150 spr-ease-in-out': true,
              'hover:spr-brightness-75': true,
              'active:spr-text-color-success-pressed active:spr-scale-90': true,
              'spr-text-color-inverted-disabled spr-rotate-180': isQuckActionMenuVisible,
              'spr-text-color-brand-base': !isQuckActionMenuVisible,
            }"
            @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
          >
            <Icon icon="ph:plus-circle-fill" class="spr-w-full" />
          </div>

          <template #popper>
            <div
              :class="[
                'spr-px-4 spr-py-3',
                'spr-border-color-weak spr-flex spr-justify-between spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid',
              ]"
            >
              <h3 class="spr-body-sm-regular-medium spr-m-0">Quick Actions</h3>
              <Icon
                icon="ph:x"
                :class="[
                  'spr-text-color-weak spr-h-[20px] spr-w-[20px] spr-cursor-pointer',
                  'spr-transition spr-duration-150 spr-ease-in-out',
                  'active:spr-scale-90',
                ]"
                @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
              />
            </div>

            <div class="spr-max-h-[268px] spr-overflow-auto">
              <template v-for="(quickAction, quickActionIndex) in props.quickActions" :key="quickActionIndex">
                <h5
                  v-if="quickAction.menuHeading"
                  :class="[
                    {
                      'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-p-2': true,
                      'spr-mt-3': quickActionIndex !== 0,
                    },
                  ]"
                >
                  {{ quickAction.menuHeading }}
                </h5>
                <template v-for="(menuLinkItem, menuLinkItemIndex) in quickAction.items" :key="menuLinkItemIndex">
                  <div
                    v-if="!menuLinkItem.hidden"
                    :class="[
                      'spr-flex spr-cursor-pointer spr-gap-2 spr-px-4 spr-py-3 spr-align-middle spr-duration-150 spr-ease-in-out',
                      'hover:spr-background-color-hover',
                      'active:spr-background-color-pressed',
                    ]"
                    @click="handleRedirect(menuLinkItem, '', '', '')"
                  >
                    <div
                      :class="{
                        'spr-flex spr-items-center spr-rounded-border-radius-md spr-p-2': true,
                        'spr-border spr-border-solid spr-border-kangkong-400 spr-bg-kangkong-50 spr-text-kangkong-800':
                          menuLinkItem.iconBgColor === 'green',
                        'spr-border spr-border-solid spr-border-ubas-400 spr-bg-ubas-50 spr-text-ubas-800':
                          menuLinkItem.iconBgColor === 'purple',
                      }"
                    >
                      <Icon
                        v-if="menuLinkItem.icon"
                        :icon="menuLinkItem.icon"
                        class="spr-h-[1em] spr-w-[1em] spr-text-[20px]"
                      />
                    </div>
                    <div class="spr-grid spr-justify-between">
                      <h5 class="spr-body-sm-regular-medium spr-text-color-strong spr-m-0 spr-truncate">
                        {{ menuLinkItem.title }}
                      </h5>
                      <p class="spr-body-xs-regular spr-text-color-base spr-m-0 spr-truncate">
                        {{ menuLinkItem.description }}
                      </p>
                    </div>
                  </div>
                </template>
              </template>
            </div>
          </template>
        </Menu>
        <!-- #endregion - Quick Actions -->

        <!-- #region - Search -->
        <div
          v-if="props.hasSearch"
          id="sidenav_search"
          :class="[
            'spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md spr-p-2 spr-transition spr-duration-150 spr-ease-in-out',
            'hover:spr-background-color-hover',
            'active:spr-background-color-single-active active:spr-scale-90',
            'spr-m-auto spr-box-border spr-max-h-9 spr-max-w-9',
          ]"
          @click="emit('search', 'search-triggered')"
        >
          <Icon icon="ph:magnifying-glass" class="spr-h-[1.25em] spr-w-[1.25em]" />
        </div>
        <!-- #endregion - Search -->

        <!-- #region - Grouped Nav Links -->
        <sidenav-menu-links
          :nav-links="navLinks.top"
          :active-nav="props.activeNav"
          @get-navlink-item="emit('get-navlink-item', $event)"
        />
        <!-- #endregion - Grouped Nav Links -->
      </div>
      <!-- #endregion - Top Section -->

      <!-- #region - Bottom Section -->
      <div
        v-if="navLinks.bottom && navLinks.bottom.length > 0"
        class="spr-grid spr-justify-center spr-gap-2 spr-px-3 spr-pb-4 spr-pt-0"
      >
        <!-- #region - Grouped Nav Links -->
        <sidenav-menu-links
          :nav-links="navLinks.bottom"
          :active-nav="props.activeNav"
          @get-navlink-item="emit('get-navlink-item', $event)"
        />
        <!-- #endregion - Grouped Nav Links -->
      </div>
      <!-- #endregion - Bottom Section -->
    </div>

    <div
      v-if="props.notificationCount || props.requestCount || props.notificationCount === 0 || props.requestCount === 0"
      class="spr-grid spr-gap-2 spr-py-6"
    >
      <!-- #region - Notification -->
      <spr-tooltip text="NOTIFICATIONS" placement="right" :distance="4" :fit-content="false">
        <div
          v-if="props.notificationCount || props.notificationCount === 0"
          id="sidenav_notification"
          :class="[
            'spr-2 spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md',
            'spr-m-auto spr-h-9 spr-w-9 spr-transition spr-duration-150 spr-ease-in-out',
            'active:spr-background-color-single-active active:spr-scale-90',
            {
              'spr-background-color-single-active spr-border-color-brand-base spr-border-[1.5px] spr-border-solid active:spr-scale-90':
                props.isNotifActive,
            },
            { 'hover:spr-background-color-hover': !props.isNotifActive },
          ]"
          @click="emit('notifications', 'notifications-triggered')"
        >
          <Icon v-if="!props.isNotifActive" icon="ph:bell" class="spr-h-[1.25em] spr-w-[1.25em]" />
          <Icon v-else icon="ph:bell-fill" class="spr-h-[1.25em] spr-w-[1.25em] spr-text-kangkong-700" />
          <spr-badge
            v-if="props.notificationCount !== 0"
            class="spr-absolute -spr-top-0.5 spr-right-0.5"
            :text="String(props.notificationCount)"
            variant="danger"
            size="small"
          />
        </div>
      </spr-tooltip>
      <!-- #endregion - Notification -->

      <!-- #region - Requests -->
      <spr-tooltip text="REQUESTS" placement="right" :distance="4" :fit-content="false">
        <div
          v-if="props.requestCount || props.requestCount === 0"
          id="sidenav_request"
          :class="[
            'spr-2 spr-relative spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md',
            'spr-m-auto spr-h-9 spr-w-9 spr-transition spr-duration-150 spr-ease-in-out',
            'active:spr-background-color-single-active active:spr-scale-90',
            {
              'spr-background-color-single-active spr-border-color-brand-base spr-border-[1.5px] spr-border-solid active:spr-scale-90':
                props.isRequestActive,
            },
            { 'hover:spr-background-color-hover': !props.isRequestActive },
          ]"
          @click="emit('requests', 'requests-triggered')"
        >
          <Icon v-if="!props.isRequestActive" icon="ph:file-text" class="spr-h-[1.25em] spr-w-[1.25em]" />
          <Icon v-else icon="ph:file-text-fill" class="spr-h-[1.25em] spr-w-[1.25em] spr-text-kangkong-700" />
          <spr-badge
            v-if="props.requestCount !== 0"
            class="spr-absolute -spr-top-0.5 spr-right-0.5"
            :text="String(props.requestCount)"
            variant="danger"
            size="small"
          />
        </div>
      </spr-tooltip>
      <!-- #endregion - Requests -->
    </div>

    <!-- #region - Avatar -->
    <div
      v-if="props.userMenu"
      :class="[
        'spr-border-color-weak spr-absolute spr-bottom-0 spr-p-3.5',
        'spr-border-b-0 spr-border-l-0 spr-border-r-0 spr-border-t spr-border-solid',
        'spr-flex spr-justify-center',
      ]"
    >
      <Menu
        v-model:shown="isUserMenuVisible"
        aria-id="user-menu-wrapper"
        distance="16"
        placement="right"
        :triggers="['click', 'hover']"
        instant-move
        :delay="0"
      >
        <template v-if="props.userMenu.profileImage">
          <spr-avatar
            class="spr-cursor-pointer"
            variant="image"
            :src="props.userMenu.profileImage"
            :initial="props.userMenu.name"
            size="md"
          />
        </template>
        <template v-else>
          <spr-avatar class="spr-cursor-pointer" :initial="props.userMenu.name" size="md" />
        </template>

        <template #popper>
          <div
            :class="[
              'spr-px-2 spr-py-2',
              'spr-border-color-weak spr-flex spr-justify-between spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid',
            ]"
          >
            <div class="spr-flex spr-items-center spr-gap-2">
              <template v-if="props.userMenu.profileImage">
                <spr-avatar
                  variant="image"
                  :src="props.userMenu.profileImage"
                  :initial="props.userMenu.name"
                  size="md"
                />
              </template>
              <template v-else>
                <spr-avatar :initial="props.userMenu.name" size="md" />
              </template>
              <div class="spr-grid spr-justify-between spr-gap-1">
                <h3 class="spr-body-sm-regular spr-m-0 spr-truncate">
                  {{ props.userMenu.name }}
                </h3>
                <p class="spr-body-xs-regular spr-text-color-supporting spr-m-0 spr-truncate">
                  {{ props.userMenu.email }}
                </p>
              </div>
            </div>
          </div>

          <div class="spr-max-h-[268px] spr-overflow-auto">
            <template v-for="(userMenuItem, userMenuItemIndex) in props.userMenu.items" :key="userMenuItemIndex">
              <div
                v-if="!userMenuItem.hidden"
                :id="`usermenu_${generateId(userMenuItem.title)}`"
                :class="[
                  'spr-flex spr-cursor-pointer spr-gap-2 spr-p-2 spr-align-middle spr-duration-150 spr-ease-in-out',
                  'hover:spr-background-color-hover',
                  'active:spr-background-color-pressed spr-bg-red',
                  'last-of-type:spr-border-color-weak last-of-type:spr-border-0 last-of-type:spr-border-t last-of-type:spr-border-solid',
                ]"
                @click="handleRedirect(userMenuItem, '', '', '')"
              >
                <Icon
                  v-if="userMenuItem.icon"
                  :icon="userMenuItem.icon"
                  class="spr-h-[1em] spr-w-[1em] spr-text-[20px]"
                />
                <h5 class="spr-body-sm-regular spr-text-color-strong spr-m-0 spr-truncate">
                  {{ userMenuItem.title }}
                </h5>
              </div>
            </template>
          </div>
        </template>
      </Menu>
    </div>
    <!-- #endregion - Avatar -->
  </div>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import { sidenavPropTypes, sidenavEmitTypes } from './sidenav';
import { useSidenav } from './use-sidenav';

import SidenavMenuLinks from './sidenav-menu-links.vue';

import SprAvatar from '../avatar/avatar.vue';
import SprBadge from '../badge/badge.vue';
import SprTooltip from '../tooltip/tooltip.vue';

const props = defineProps(sidenavPropTypes);
const emit = defineEmits(sidenavEmitTypes);

const { navLinks, isQuckActionMenuVisible, isUserMenuVisible, handleRedirect, generateId } = useSidenav(props, emit);
</script>
