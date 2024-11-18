<template>
  <div
    :class="[
      'tw-hidden-scrolls tw-fixed tw-bottom-0 tw-left-0 tw-top-0',
      'tw-background-color tw-w-auto tw-overflow-y-auto tw-overflow-x-hidden',
      'tw-border-color-weak tw-border-b-0 tw-border-l-0 tw-border-r tw-border-t-0 tw-border-solid',
      'tw-transition tw-duration-150 tw-ease-in-out',
    ]"
  >
    <div :class="['tw-grid tw-h-[calc(100%-32px)] tw-grid-rows-[auto_auto_1fr_auto] tw-px-[12px] tw-py-[16px]']">
      <!-- #region - Logo -->
      <div
        :class="[
          'tw tw-grid tw-justify-center',
          '[&>img]:tw-mx-auto [&>img]:tw-h-[24px] [&>img]:tw-w-[24px]',
          {
            'tw-pb-[16px]': !props.hasQuickActions && !props.hasSearch && !props.navLinks,
          },
        ]"
      >
        <slot name="logo-image" />
      </div>
      <!-- #endregion - Logo -->

      <div :class="['tw-grid tw-justify-center tw-gap-[6px] tw-pb-[16px] tw-pt-[16px]']">
        <!-- #region - Quick Actions -->
        <div
          v-if="props.hasQuickActions"
          :class="[
            'tw-text-color-brand-base tw-mx-auto tw-h-[32px] tw-cursor-pointer tw-text-[28px] tw-transition tw-duration-150 tw-ease-in-out',
            'hover:tw-text-color-success-hover',
            'active:tw-text-color-success-pressed active:tw-scale-90',
          ]"
        >
          <IconPlusCircleFill />
        </div>
        <!-- #endregion - Quick Actions -->

        <!-- #region - Search -->
        <div
          v-if="props.hasSearch"
          :class="[
            'justify-center tw-flex tw-cursor-pointer tw-items-center tw-rounded-[8px] tw-px-[8px] tw-py-[6px] tw-transition tw-duration-150 tw-ease-in-out',
            'hover:tw-background-color-hover',
            'active:tw-background-color-single-active active:tw-scale-90',
          ]"
        >
          <IconMagnifyingGlass />
        </div>
        <!-- #endregion - Search -->

        <!-- #region - Grouped Nav Links -->
        <template v-for="(navLink, navLinkIndex) in props.navLinks" :key="navLinkIndex">
          <template v-for="(parentLink, parentLinkIndex) in navLink.parentLinks" :key="parentLinkIndex">
            <!-- #region - Parent link with menu links -->
            <template v-if="parentLink.menuLinks && parentLink.menuLinks.length > 0">
              <Menu aria-id="sidenav-menu-wrapper" distance="30" placement="right" instant-move>
                <div
                  :class="[
                    'justify-center tw-flex tw-cursor-pointer tw-items-center tw-rounded-[8px] tw-px-[8px] tw-py-[6px] tw-transition tw-duration-150 tw-ease-in-out',
                    'active:tw-background-color-single-active active:tw-scale-90',
                    {
                      'tw-background-color-single-active active:tw-scale-90':
                        props.activeNav.parentNav === parentLink.title,
                      'hover:tw-background-color-hover': props.activeNav.parentNav != parentLink.title,
                    },
                  ]"
                >
                  <component :is="parentLink.icon" v-if="parentLink.icon" class="icon-class" />
                  <IconGlobe v-else />
                </div>

                <template #popper>
                  <div
                    :class="['tw-border-color-weak tw-border-x-0 tw-border-b tw-border-t-0 tw-border-solid tw-p-[8px]']"
                  >
                    <h3 :class="['tw-text-size-100 tw-font-size-300 tw-line-height-400 tw-m-0 tw-font-medium']">
                      {{ parentLink.title }}
                    </h3>
                  </div>

                  <template v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks" :key="menuLinkIndex">
                    <!-- #region - Menu link with submenu links -->
                    <template v-if="menuLink.submenuLinks && menuLink.submenuLinks.length > 0">
                      <Menu aria-id="sidenav-submenu-wrapper" distance="15" placement="right-start" instant-move>
                        <div
                          :class="[
                            'tw-text-size-100 tw-font-size-300 tw-line-height-400 tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-150 tw-ease-in-out',
                            {
                              'tw-background-color-single-active': props.activeNav.menu === menuLink.title,
                              'hover:tw-background-color-hover': props.activeNav.menu !== menuLink.title,
                            },
                          ]"
                        >
                          <div
                            v-if="props.activeNav.menu === menuLink.title"
                            :class="[
                              'tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]',
                            ]"
                          ></div>
                          <span>{{ menuLink.title }}</span>
                          <IconCaretRight
                            :class="[
                              'tw-transform tw-transition-transform tw-duration-300',
                              props.activeNav.menu === menuLink.title ? '-tw-rotate-90' : 'hover:-tw-rotate-90',
                            ]"
                          />
                        </div>

                        <template #popper>
                          <template
                            v-for="(submenuLink, submenuLinkIndex) in menuLink.submenuLinks"
                            :key="submenuLinkIndex"
                          >
                            <Menu aria-id="sidenav-sub-submenu-wrapper" instant-move>
                              <div
                                :class="[
                                  'tw-text-size-100 tw-font-size-300 tw-line-height-400 tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-150 tw-ease-in-out',
                                  {
                                    'tw-background-color-single-active': props.activeNav.submenu === submenuLink.title,
                                    'hover:tw-background-color-hover': props.activeNav.submenu !== submenuLink.title,
                                  },
                                ]"
                                @click="handleRedirect($event, parentLink.redirect)"
                              >
                                <div
                                  v-show="props.activeNav.submenu === submenuLink.title"
                                  :class="[
                                    'tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]',
                                  ]"
                                ></div>
                                <span>{{ submenuLink.title }}</span>
                              </div>
                            </Menu>
                          </template>
                        </template>
                      </Menu>
                    </template>
                    <!-- #endregion - Menu link with submenu links -->

                    <!-- #region - Menu link only -->
                    <template v-else>
                      <div
                        :class="[
                          'tw-text-size-100 tw-font-size-300 tw-line-height-400 tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-300 tw-ease-in-out',
                          'hover:tw-background-color-hover',
                          'last:tw-rounded-b-[12px]',
                        ]"
                        @click="handleRedirect($event, parentLink.redirect)"
                      >
                        <span>{{ menuLink.title }}</span>
                      </div>
                    </template>
                    <!-- #endregion - Menu link only -->
                  </template>
                </template>
              </Menu>
            </template>
            <!-- #endregion - Parent link with menu links -->

            <!-- #region - Parent link only  -->
            <template v-else>
              <div
                :class="[
                  'justify-center tw-flex tw-cursor-pointer tw-items-center tw-rounded-[8px] tw-px-[8px] tw-py-[6px] tw-transition tw-duration-150 tw-ease-in-out',
                  'hover:tw-background-color-hover',
                  'active:tw-background-color-single-active active:tw-scale-90',
                ]"
                @click="handleRedirect($event, parentLink.redirect)"
              >
                <component :is="parentLink.icon" v-if="parentLink.icon" class="icon-class" />
                <IconGlobe v-else />
              </div>
            </template>
            <!-- #endregion - Parent link only -->
          </template>
          <div
            v-if="navLinks.length > 0 && navLinkIndex < navLinks.length - 1"
            :class="['tw-background-color-hover tw-h-[2px] tw-w-full']"
          ></div>
        </template>
        <!-- #endregion - Grouped Nav Links -->
      </div>

      <!-- #region - Avatar -->
      <div
        :class="[
          'tw tw-grid tw-items-end tw-justify-center tw-pb-[16px]',
          '[&>img]:tw-mx-auto [&>img]:tw-h-[24px] [&>img]:tw-w-[24px] [&>img]:tw-rounded-full',
        ]"
      >
        <slot name="avatar-image" />
      </div>
      <!-- #endregion - Avatar -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { sidenavPropTypes } from './sidenav';
import { useSidenav } from './use-sidenav';

import { Menu } from 'floating-vue';

import IconPlusCircleFill from '~icons/ph/plus-circle-fill';
import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
import IconGlobe from '~icons/ph/globe';
import IconCaretRight from '~icons/ph/caret-right';

import 'floating-vue/dist/style.css';

const props = defineProps(sidenavPropTypes);

const { handleRedirect } = useSidenav();
</script>

<style>
#sidenav-menu-wrapper,
#sidenav-submenu-wrapper {
  @apply tw-background-color tw-max-h-[500px] tw-w-[215px] tw-overflow-y-auto tw-overflow-x-hidden tw-rounded-[12px] tw-drop-shadow-md;

  .v-popper__wrapper {
    .v-popper__inner {
      @apply tw-overflow-hidden tw-rounded-none tw-border-none tw-bg-transparent tw-shadow-none;

      .slide-fade-enter-active {
        @apply tw-duration-300 tw-ease-out;
      }

      .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
      }

      .slide-fade-enter-from,
      .slide-fade-leave-to {
        @apply tw-translate-x-[-20px] tw-opacity-0;
      }
    }

    .v-popper__arrow-container {
      @apply tw-hidden;
    }
  }
}

#sidenav-sub-submenu-wrapper {
  @apply tw-hidden;
}
</style>
