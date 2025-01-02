<template>
  <div
    :class="[
      'tw-hidden-scrolls tw-fixed tw-bottom-0 tw-left-0 tw-top-0',
      'tw-background-color tw-w-auto tw-overflow-y-auto tw-overflow-x-hidden',
      'tw-border-color-weak tw-border-b-0 tw-border-l-0 tw-border-r tw-border-t-0 tw-border-solid',
      'tw-transition tw-duration-150 tw-ease-in-out',
    ]"
  >
    <div class="tw-grid tw-h-full tw-grid-rows-[auto_1fr] tw-px-[12px]">
      <div class="tw-hidden-scrolls tw-mt-[16px] tw-overflow-auto">
        <!-- #region - Logo -->
        <div
          :class="[
            {
              'tw tw-grid tw-justify-center': true,
              '[&>img]:tw-mx-auto [&>img]:tw-h-[24px] [&>img]:tw-w-[24px]': true,
              'tw-pb-[16px]': !props.hasQuickActions && !props.hasSearch && !props.navLinks,
            },
          ]"
        >
          <slot name="logo-image" />
        </div>
        <!-- #endregion - Logo -->

        <div class="tw-grid tw-justify-center tw-gap-[8px] tw-pb-[16px] tw-pt-[16px]">
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
                <Menu
                  aria-id="sidenav-menu-wrapper"
                  distance="18"
                  placement="right"
                  :triggers="['click', 'hover']"
                  instant-move
                >
                  <div
                    :class="[
                      {
                        'justify-center tw-flex tw-cursor-pointer tw-items-center tw-rounded-[8px] tw-px-[8px] tw-py-[6px] tw-transition tw-duration-150 tw-ease-in-out': true,
                        'tw-background-color-single-active active:tw-scale-90':
                          props.activeNav.parentNav === parentLink.title,
                        'hover:tw-background-color-hover': props.activeNav.parentNav != parentLink.title,
                        'active:tw-background-color-single-active active:tw-scale-90': true,
                      },
                    ]"
                  >
                    <component :is="parentLink.icon" v-if="parentLink.icon" class="tw-h-[1.25em] tw-w-[1.25em]" />
                    <IconGlobe v-else />
                  </div>

                  <template #popper>
                    <div
                      class="tw-border-color-weak tw-border-x-0 tw-border-b tw-border-t-0 tw-border-solid tw-p-[8px]"
                    >
                      <h3 class="tw-body-sm-regular-medium tw-m-0">
                        {{ parentLink.title }}
                      </h3>
                    </div>

                    <template v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks" :key="menuLinkIndex">
                      <!-- #region - Menu link with submenu links -->
                      <template v-if="menuLink.submenuLinks && menuLink.submenuLinks.length > 0">
                        <Menu
                          aria-id="sidenav-submenu-wrapper"
                          distance="4"
                          placement="right-start"
                          :triggers="['click', 'hover']"
                          instant-move
                        >
                          <div
                            :class="[
                              {
                                'tw-body-sm-regular tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-150 tw-ease-in-out': true,
                                'tw-background-color-single-active': props.activeNav.menu === menuLink.title,
                                'hover:tw-background-color-hover': props.activeNav.menu !== menuLink.title,
                                'active:tw-background-color-pressed': true,
                              },
                            ]"
                          >
                            <div
                              v-if="props.activeNav.menu === menuLink.title"
                              class="tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]"
                            ></div>
                            <span>{{ menuLink.title }}</span>
                            <IconCaretRight
                              :class="[
                                'tw-h-[16px] tw-w-[16px] tw-transform tw-font-normal tw-transition-transform tw-duration-300',
                                props.activeNav.menu === menuLink.title ? '-tw-rotate-90' : 'hover:-tw-rotate-90',
                              ]"
                            />
                          </div>

                          <template #popper>
                            <template
                              v-for="(submenuLink, submenuLinkIndex) in menuLink.submenuLinks"
                              :key="submenuLinkIndex"
                            >
                              <Menu aria-id="sidenav-sub-submenu-wrapper" :triggers="['click', 'hover']" instant-move>
                                <div
                                  :class="[
                                    {
                                      'tw-body-sm-regular tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-150 tw-ease-in-out': true,
                                      'tw-background-color-single-active':
                                        props.activeNav.submenu === submenuLink.title,
                                      'hover:tw-background-color-hover': props.activeNav.submenu !== submenuLink.title,
                                      'active:tw-background-color-pressed': true,
                                    },
                                  ]"
                                  @click="handleRedirect($event, submenuLink.redirect)"
                                >
                                  <div
                                    v-show="props.activeNav.submenu === submenuLink.title"
                                    class="tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]"
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
                            'tw-body-sm-regular tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-300 tw-ease-in-out',
                            'hover:tw-background-color-hover',
                            'active:tw-background-color-pressed',
                            'last:tw-rounded-b-[12px]',
                          ]"
                          @click="handleRedirect($event, menuLink.redirect)"
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
                <Tooltip aria-id="default-tooltip" placement="right" distance="18">
                  <template #popper>
                    <span>{{ parentLink.title }}</span>
                  </template>
                  <div
                    :class="[
                      'justify-center tw-flex tw-cursor-pointer tw-items-center tw-rounded-[8px] tw-px-[8px] tw-py-[6px] tw-transition tw-duration-150 tw-ease-in-out',
                      'hover:tw-background-color-hover',
                      'active:tw-background-color-single-active active:tw-scale-90',
                    ]"
                    @click="handleRedirect($event, parentLink.redirect)"
                  >
                    <component :is="parentLink.icon" v-if="parentLink.icon" class="tw-h-[1.25em] tw-w-[1.25em]" />
                    <IconGlobe v-else />
                  </div>
                </Tooltip>
              </template>
              <!-- #endregion - Parent link only -->
            </template>
            <div
              v-if="navLinks.length > 0 && navLinkIndex < navLinks.length - 1"
              class="tw-background-color-hover tw-h-[2px] tw-w-full"
            ></div>
          </template>
          <!-- #endregion - Grouped Nav Links -->
        </div>
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
import { sidenavPropTypes, sidenavEmitTypes } from './sidenav';
import { useSidenav } from './use-sidenav';

import { Menu, Tooltip } from 'floating-vue';

import IconPlusCircleFill from '~icons/ph/plus-circle-fill';
import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
import IconGlobe from '~icons/ph/globe';
import IconCaretRight from '~icons/ph/caret-right';

import 'floating-vue/dist/style.css';

const props = defineProps(sidenavPropTypes);
const emit = defineEmits(sidenavEmitTypes);

const { handleRedirect } = useSidenav(props, emit);
</script>
