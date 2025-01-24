<template>
  <div
    :class="[
      'hidden-scrolls fixed bottom-0 left-0 top-0',
      'background-color w-auto overflow-y-auto overflow-x-hidden',
      'border-color-weak border-b-0 border-l-0 border-r border-t-0 border-solid',
      'transition duration-150 ease-in-out',
    ]"
  >
    <div
      :class="{
        'hidden-scrolls flex h-full flex-col justify-between overflow-auto': true,
        'max-h-[calc(100vh-194px)]': props.notificationCount && props.requestCount,
        'max-h-[calc(100vh-60px)]': !props.notificationCount && !props.requestCount,
        'max-h-[calc(100vh-150px)]':
          (props.notificationCount || props.requestCount) && !(props.notificationCount && props.requestCount),
      }"
    >
      <!-- Top Section -->
      <div class="grid justify-center gap-2 px-3 pb-4 pt-4">
        <!-- Logo -->
        <div
          :class="['grid justify-center p-2', '[&>img]:mx-auto [&>img]:h-[24px] [&>img]:w-[24px] [&>img]:object-cover']"
        >
          <slot name="logo-image" />
        </div>

        <!-- Quick Actions -->
        <Menu
          v-if="props.quickActions && props.quickActions.length > 0"
          v-model:shown="isQuckActionMenuVisible"
          aria-id="quick-action-menu-wrapper"
          distance="18"
          placement="right-start"
          :triggers="[]"
          :popper-hide-triggers="[]"
          instant-move
        >
          <div
            :class="{
              'flex w-full cursor-pointer items-center text-center text-[28px] transition duration-150 ease-in-out': true,
              'hover:brightness-75': true,
              'active:text-color-success-pressed active:scale-90': true,
              'text-color-inverted-disabled rotate-180': isQuckActionMenuVisible,
              'text-color-brand-base': !isQuckActionMenuVisible,
            }"
            @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
          >
            <IconPlusCircleFill class="w-full" />
          </div>

          <template #popper>
            <div
              :class="[
                'px-4 py-3',
                'border-color-weak flex justify-between border-x-0 border-b border-t-0 border-solid',
              ]"
            >
              <h3 class="body-sm-regular-medium m-0">Quick Actions</h3>
              <IconX
                :class="[
                  'text-color-weak h-[20px] w-[20px] cursor-pointer',
                  'transition duration-150 ease-in-out',
                  'active:scale-90',
                ]"
                @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
              />
            </div>

            <div class="max-h-[268px] overflow-auto">
              <template v-for="(quickAction, quickActionIndex) in props.quickActions" :key="quickActionIndex">
                <h5
                  v-if="quickAction.menuHeading"
                  :class="[
                    {
                      'label-xs-medium text-color-supporting m-0 p-2': true,
                      'mt-3': quickActionIndex !== 0,
                    },
                  ]"
                >
                  {{ quickAction.menuHeading }}
                </h5>
                <template v-for="(menuLinkItem, menuLinkItemIndex) in quickAction.items" :key="menuLinkItemIndex">
                  <div
                    v-if="!menuLinkItem.hidden"
                    :class="[
                      'flex cursor-pointer gap-2 px-4 py-3 align-middle duration-150 ease-in-out',
                      'hover:background-color-hover',
                      'active:background-color-pressed',
                    ]"
                    @click="handleRedirect(menuLinkItem, '', '', '')"
                  >
                    <div
                      :class="{
                        'flex items-center rounded-border-radius-md p-2': true,
                        'border border-solid border-kangkong-400 bg-kangkong-50 text-kangkong-800':
                          menuLinkItem.iconBgColor === 'green',
                        'border border-solid border-ubas-400 bg-ubas-50 text-ubas-800':
                          menuLinkItem.iconBgColor === 'purple',
                      }"
                    >
                      <component :is="menuLinkItem.icon" v-if="menuLinkItem.icon" class="h-[1em] w-[1em] text-[20px]" />
                    </div>
                    <div class="grid justify-between">
                      <h5 class="body-sm-regular-medium text-color-strong m-0 truncate">
                        {{ menuLinkItem.title }}
                      </h5>
                      <p class="body-xs-regular text-color-base m-0 truncate">
                        {{ menuLinkItem.description }}
                      </p>
                    </div>
                  </div>
                </template>
              </template>
            </div>
          </template>
        </Menu>

        <!-- Search -->
        <div
          v-if="props.hasSearch"
          :class="[
            'flex cursor-pointer items-center justify-center rounded-border-radius-md p-2 transition duration-150 ease-in-out',
            'hover:background-color-hover',
            'active:background-color-single-active active:scale-90',
          ]"
          @click="emit('search', 'search-triggered')"
        >
          <IconMagnifyingGlass />
        </div>

        <!-- Grouped Nav Links -->
        <template v-for="(navLink, navLinkIndex) in props.navLinks.top" :key="navLinkIndex">
          <template v-for="(parentLink, parentLinkIndex) in navLink.parentLinks" :key="parentLinkIndex">
            <!-- Parent link with menu links -->
            <template v-if="parentLink.menuLinks && parentLink.menuLinks.length > 0">
              <Menu
                aria-id="sidenav-menu-wrapper"
                distance="18"
                placement="right"
                :triggers="['click', 'hover']"
                instant-move
              >
                <div
                  :class="{
                    'flex cursor-pointer items-center justify-center rounded-border-radius-md p-2 transition duration-150 ease-in-out': true,
                    'background-color-single-active border-color-brand-base border-[1.5px] border-solid active:scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:background-color-single-active active:scale-90': true,
                  }"
                >
                  <component :is="parentLink.icon" v-if="parentLink.icon" class="h-[1.25em] w-[1.25em]" />
                  <IconGlobe v-else />
                </div>

                <template #popper>
                  <div class="border-color-weak border-x-0 border-b border-t-0 border-solid p-2">
                    <h3 class="body-sm-regular-medium m-0">
                      {{ parentLink.title }}
                    </h3>
                  </div>

                  <template v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks" :key="menuLinkIndex">
                    <h5
                      v-if="menuLink.menuHeading"
                      :class="{
                        'label-xs-medium text-color-supporting m-0 p-2': true,
                        'mt-3': menuLinkIndex !== 0,
                      }"
                    >
                      {{ menuLink.menuHeading }}
                    </h5>

                    <template v-for="(menuLinkItem, menuLinkItemIndex) in menuLink.items" :key="menuLinkItemIndex">
                      <!-- Menu link with submenu links -->
                      <template v-if="menuLinkItem.submenuLinks && menuLinkItem.submenuLinks.length > 0">
                        <Menu
                          aria-id="sidenav-submenu-wrapper"
                          distance="4"
                          placement="right-start"
                          :triggers="['click', 'hover']"
                          instant-move
                        >
                          <div
                            :class="{
                              'body-sm-regular relative m-0 flex cursor-pointer justify-between px-2 py-1.5 align-middle duration-150 ease-in-out': true,
                              'background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                              'hover:background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                              'active:background-color-pressed': true,
                            }"
                          >
                            <div
                              v-if="props.activeNav.menu === menuLinkItem.title"
                              class="background-color-brand-base absolute left-0 top-0 h-full w-[2px]"
                            ></div>
                            <span>{{ menuLinkItem.title }}</span>
                            <IconCaretRight
                              class="h-[16px] w-[16px] transform font-normal transition-transform duration-300"
                            />
                          </div>

                          <template #popper>
                            <template
                              v-for="(submenuLink, submenuLinkIndex) in menuLinkItem.submenuLinks"
                              :key="submenuLinkIndex"
                            >
                              <h5
                                v-if="submenuLink.subMenuHeading"
                                :class="{
                                  'label-xs-medium text-color-supporting m-0 p-2': true,
                                  'mt-3': submenuLinkIndex !== 0,
                                }"
                              >
                                {{ submenuLink.subMenuHeading }}
                              </h5>
                              <template
                                v-for="(submenuLinkItem, submenuLinkItemIndex) in submenuLink.items"
                                :key="submenuLinkItemIndex"
                              >
                                <Menu aria-id="sidenav-sub-submenu-wrapper" :triggers="['click', 'hover']" instant-move>
                                  <div
                                    v-if="!submenuLinkItem.hidden"
                                    :class="{
                                      'body-sm-regular relative m-0 flex cursor-pointer justify-between px-2 py-1.5 align-middle duration-150 ease-in-out': true,
                                      'background-color-single-active':
                                        props.activeNav.submenu === submenuLinkItem.title,
                                      'hover:background-color-hover': props.activeNav.submenu !== submenuLinkItem.title,
                                      'active:background-color-pressed': true,
                                    }"
                                    @click="
                                      handleRedirect(
                                        submenuLinkItem,
                                        parentLink.title,
                                        menuLinkItem.title,
                                        submenuLinkItem.title,
                                      )
                                    "
                                  >
                                    <div
                                      v-show="props.activeNav.submenu === submenuLinkItem.title"
                                      class="background-color-brand-base absolute left-0 top-0 h-full w-[2px]"
                                    ></div>
                                    <span>{{ submenuLinkItem.title }}</span>
                                  </div>
                                </Menu>
                              </template>
                            </template>
                          </template>
                        </Menu>
                      </template>

                      <!-- Menu link only -->
                      <template v-else>
                        <div
                          v-if="!menuLinkItem.hidden"
                          :class="{
                            'body-sm-regular relative m-0 flex cursor-pointer justify-between px-2 py-1.5 align-middle duration-150 ease-in-out': true,
                            'background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                            'hover:background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                            'active:background-color-pressed': true,
                          }"
                          @click="handleRedirect(menuLinkItem, parentLink.title, menuLinkItem.title, '')"
                        >
                          <span>{{ menuLinkItem.title }}</span>
                        </div>
                      </template>
                    </template>
                  </template>
                </template>
              </Menu>
            </template>

            <!-- Parent link only  -->
            <template v-else>
              <Tooltip
                v-if="!parentLink.hidden"
                aria-id="default-tooltip"
                placement="right"
                distance="18"
                :triggers="['hover']"
              >
                <template #popper>
                  <span class="label-xs-medium uppercase">{{ parentLink.title }}</span>
                </template>
                <div
                  :class="{
                    'flex cursor-pointer items-center justify-center rounded-border-radius-md p-2 transition duration-150 ease-in-out': true,
                    'background-color-single-active border-color-brand-base border-[1.5px] border-solid active:scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:background-color-single-active active:scale-90': true,
                  }"
                  @click="handleRedirect(parentLink, parentLink.title, '', '')"
                >
                  <component :is="parentLink.icon" v-if="parentLink.icon" class="h-[1.25em] w-[1.25em]" />
                  <IconGlobe v-else />
                </div>
              </Tooltip>
            </template>
          </template>
          <div
            v-if="props.navLinks.top.length > 0 && navLinkIndex < props.navLinks.top.length - 1"
            class="background-color-hover h-[2px] w-full"
          ></div>
        </template>
      </div>

      <!-- Bottom Section -->
      <div
        v-if="props.navLinks.bottom && props.navLinks.bottom.length > 0"
        class="grid justify-center gap-2 px-3 pb-4 pt-0"
      >
        <!-- Grouped Nav Links -->
        <template v-for="(navLink, navLinkIndex) in props.navLinks.bottom" :key="navLinkIndex">
          <template v-for="(parentLink, parentLinkIndex) in navLink.parentLinks" :key="parentLinkIndex">
            <!-- Parent link with menu links -->
            <template v-if="parentLink.menuLinks && parentLink.menuLinks.length > 0">
              <Menu
                aria-id="sidenav-menu-wrapper"
                distance="18"
                placement="right"
                :triggers="['click', 'hover']"
                instant-move
              >
                <div
                  :class="{
                    'flex cursor-pointer items-center justify-center rounded-border-radius-md p-2 transition duration-150 ease-in-out': true,
                    'background-color-single-active border-color-brand-base border-[1.5px] border-solid active:scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:background-color-single-active active:scale-90': true,
                  }"
                >
                  <component :is="parentLink.icon" v-if="parentLink.icon" class="h-[1.25em] w-[1.25em]" />
                  <IconGlobe v-else />
                </div>

                <template #popper>
                  <div class="border-color-weak border-x-0 border-b border-t-0 border-solid p-2">
                    <h3 class="body-sm-regular-medium m-0">
                      {{ parentLink.title }}
                    </h3>
                  </div>

                  <template v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks" :key="menuLinkIndex">
                    <h5
                      v-if="menuLink.menuHeading"
                      :class="{
                        'label-xs-medium text-color-supporting m-0 p-2': true,
                        'mt-3': menuLinkIndex !== 0,
                      }"
                    >
                      {{ menuLink.menuHeading }}
                    </h5>

                    <template v-for="(menuLinkItem, menuLinkItemIndex) in menuLink.items" :key="menuLinkItemIndex">
                      <!-- Menu link with submenu links -->
                      <template v-if="menuLinkItem.submenuLinks && menuLinkItem.submenuLinks.length > 0">
                        <Menu
                          aria-id="sidenav-submenu-wrapper"
                          distance="4"
                          placement="right-start"
                          :triggers="['click', 'hover']"
                          instant-move
                        >
                          <div
                            :class="{
                              'body-sm-regular relative m-0 flex cursor-pointer justify-between px-2 py-1.5 align-middle duration-150 ease-in-out': true,
                              'background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                              'hover:background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                              'active:background-color-pressed': true,
                            }"
                          >
                            <div
                              v-if="props.activeNav.menu === menuLinkItem.title"
                              class="background-color-brand-base absolute left-0 top-0 h-full w-[2px]"
                            ></div>
                            <span>{{ menuLinkItem.title }}</span>
                            <IconCaretRight
                              class="h-[16px] w-[16px] transform font-normal transition-transform duration-300"
                            />
                          </div>

                          <template #popper>
                            <template
                              v-for="(submenuLink, submenuLinkIndex) in menuLinkItem.submenuLinks"
                              :key="submenuLinkIndex"
                            >
                              <h5
                                v-if="submenuLink.subMenuHeading"
                                :class="{
                                  'label-xs-medium text-color-supporting m-0 p-2': true,
                                  'mt-3': submenuLinkIndex !== 0,
                                }"
                              >
                                {{ submenuLink.subMenuHeading }}
                              </h5>
                              <template
                                v-for="(submenuLinkItem, submenuLinkItemIndex) in submenuLink.items"
                                :key="submenuLinkItemIndex"
                              >
                                <Menu aria-id="sidenav-sub-submenu-wrapper" :triggers="['click', 'hover']" instant-move>
                                  <div
                                    v-if="!submenuLinkItem.hidden"
                                    :class="{
                                      'body-sm-regular relative m-0 flex cursor-pointer justify-between px-2 py-1.5 align-middle duration-150 ease-in-out': true,
                                      'background-color-single-active':
                                        props.activeNav.submenu === submenuLinkItem.title,
                                      'hover:background-color-hover': props.activeNav.submenu !== submenuLinkItem.title,
                                      'active:background-color-pressed': true,
                                    }"
                                    @click="
                                      handleRedirect(
                                        submenuLinkItem,
                                        parentLink.title,
                                        menuLinkItem.title,
                                        submenuLinkItem.title,
                                      )
                                    "
                                  >
                                    <div
                                      v-show="props.activeNav.submenu === submenuLinkItem.title"
                                      class="background-color-brand-base absolute left-0 top-0 h-full w-[2px]"
                                    ></div>
                                    <span>{{ submenuLinkItem.title }}</span>
                                  </div>
                                </Menu>
                              </template>
                            </template>
                          </template>
                        </Menu>
                      </template>

                      <!-- Menu link only -->
                      <template v-else>
                        <div
                          v-if="!menuLinkItem.hidden"
                          :class="[
                            'body-sm-regular m-0 flex cursor-pointer justify-between px-2 py-1.5 align-middle duration-300 ease-in-out',
                            'hover:background-color-hover',
                            'active:background-color-pressed',
                            'last:rounded-b-xl',
                          ]"
                          @click="handleRedirect(menuLinkItem, parentLink.title, menuLinkItem.title, '')"
                        >
                          <span>{{ menuLinkItem.title }}</span>
                        </div>
                      </template>
                    </template>
                  </template>
                </template>
              </Menu>
            </template>

            <!-- Parent link only  -->
            <template v-else>
              <Tooltip
                v-if="!parentLink.hidden"
                aria-id="default-tooltip"
                placement="right"
                distance="18"
                :triggers="['hover']"
              >
                <template #popper>
                  <span class="label-xs-medium uppercase">{{ parentLink.title }}</span>
                </template>
                <div
                  :class="{
                    'flex cursor-pointer items-center justify-center rounded-border-radius-md p-2 transition duration-150 ease-in-out': true,
                    'background-color-single-active border-color-brand-base border-[1.5px] border-solid active:scale-90':
                      props.activeNav.parentNav === parentLink.title,
                    'hover:background-color-hover': props.activeNav.parentNav != parentLink.title,
                    'active:background-color-single-active active:scale-90': true,
                  }"
                  @click="handleRedirect(parentLink, parentLink.title, '', '')"
                >
                  <component :is="parentLink.icon" v-if="parentLink.icon" class="h-[1.25em] w-[1.25em]" />
                  <IconGlobe v-else />
                </div>
              </Tooltip>
            </template>
          </template>
          <div
            v-if="props.navLinks.bottom.length > 0 && navLinkIndex < props.navLinks.bottom.length - 1"
            class="background-color-hover h-[2px] w-full"
          ></div>
        </template>
      </div>
    </div>

    <div v-if="props.notificationCount || props.requestCount" class="grid gap-2 py-6">
      <!-- Notification -->
      <div
        v-if="props.notificationCount"
        :class="[
          'relative flex cursor-pointer items-center justify-center p-2',
          'transition duration-150 ease-in-out',
          'active:scale-90',
        ]"
        @click="emit('notifications', 'notifications-triggered')"
      >
        <IconBell class="h-[1.25em] w-[1.25em]" />
        <badge
          class="absolute -top-0.5 right-2.5"
          :text="String(props.notificationCount)"
          variant="danger"
          size="small"
        />
      </div>

      <!-- Requests -->
      <div
        v-if="props.requestCount"
        :class="[
          'relative flex cursor-pointer items-center justify-center p-2',
          'transition duration-150 ease-in-out',
          'active:scale-90',
        ]"
        @click="emit('requests', 'requests-triggered')"
      >
        <IconCheckSquare class="h-[1.25em] w-[1.25em]" />
        <badge class="absolute -top-0.5 right-2.5" :text="String(props.requestCount)" variant="danger" size="small" />
      </div>
    </div>

    <!-- Avatar -->
    <div
      v-if="props.userMenu"
      :class="[
        'border-color-weak absolute bottom-0 w-full p-3.5',
        'border-b-0 border-l-0 border-r-0 border-t border-solid',
      ]"
    >
      <Menu
        v-model:shown="isUserMenuVisible"
        aria-id="user-menu-wrapper"
        distance="1"
        placement="right"
        :triggers="['click', 'hover']"
        instant-move
      >
        <div
          :class="[
            'background-color flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full',
            'border-color-weak border border-solid',
            'transition duration-150 ease-in-out',
            'hover:background-color-hover',
            'active:background-color-pressed active:scale-90',
            '[&>img]:h-[36px] [&>img]:w-[36px] [&>img]:rounded-full [&>img]:object-cover',
          ]"
          @click="isUserMenuVisible = !isUserMenuVisible"
        >
          <template v-if="props.userMenu.profileImage && !userProfileError">
            <img :src="props.userMenu.profileImage" alt="profile-image" @error="userProfileError = true" />
          </template>
          <template v-else>
            <span>{{ getUserInitials(props.userMenu.name) }}</span>
          </template>
        </div>

        <template #popper>
          <div
            :class="['px-4 py-3', 'border-color-weak flex justify-between border-x-0 border-b border-t-0 border-solid']"
          >
            <div class="flex items-center gap-2">
              <div
                :class="[
                  'background-color flex h-[36px] w-[36px] items-center justify-center rounded-full',
                  'border-color-weak border border-solid',
                  '[&>img]:h-[36px] [&>img]:w-[36px] [&>img]:rounded-full [&>img]:object-cover',
                ]"
              >
                <template v-if="props.userMenu.profileImage && !userProfileError">
                  <img :src="props.userMenu.profileImage" alt="profile-image" @error="userProfileError = true" />
                </template>
                <template v-else>
                  <span>{{ getUserInitials(props.userMenu.name) }}</span>
                </template>
              </div>
              <div class="grid justify-between gap-1">
                <h3 class="body-sm-regular-medium m-0 truncate">
                  {{ props.userMenu.name }}
                </h3>
                <p class="body-xs-regular m-0 truncate">
                  {{ props.userMenu.email }}
                </p>
              </div>
            </div>
          </div>

          <div class="max-h-[268px] overflow-auto">
            <template v-for="(userMenuItem, userMenuItemIndex) in props.userMenu.items" :key="userMenuItemIndex">
              <div
                v-if="!userMenuItem.hidden"
                :class="[
                  'flex cursor-pointer gap-2 p-2 align-middle duration-150 ease-in-out',
                  'hover:background-color-hover',
                  'active:background-color-pressed',
                ]"
                @click="handleRedirect(userMenuItem, '', '', '')"
              >
                <component :is="userMenuItem.icon" v-if="userMenuItem.icon" class="h-[1em] w-[1em] text-[20px]" />
                <h5 class="body-sm-regular text-color-strong m-0 truncate">
                  {{ userMenuItem.title }}
                </h5>
              </div>
            </template>
          </div>
        </template>
      </Menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { sidenavPropTypes, sidenavEmitTypes } from './sidenav';
import { useSidenav } from './use-sidenav';

import { Menu, Tooltip } from 'floating-vue';

import badge from '../badge/badge.vue';

import IconPlusCircleFill from '~icons/ph/plus-circle-fill';
import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
import IconGlobe from '~icons/ph/globe';
import IconCaretRight from '~icons/ph/caret-right';
import IconX from '~icons/ph/x';
import IconBell from '~icons/ph/bell';
import IconCheckSquare from '~icons/ph/check-square';

import 'floating-vue/dist/style.css';

const props = defineProps(sidenavPropTypes);
const emit = defineEmits(sidenavEmitTypes);

const { isQuckActionMenuVisible, isUserMenuVisible, userProfileError, getUserInitials, handleRedirect } = useSidenav(
  props,
  emit,
);
</script>
