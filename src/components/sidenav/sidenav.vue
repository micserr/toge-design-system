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
        <!-- Logo -->
        <div
          :class="[
            {
              'tw tw-grid tw-justify-center': true,
              '[&>img]:tw-mx-auto [&>img]:tw-h-[24px] [&>img]:tw-w-[24px]': true,
              'tw-pb-[16px]': !props.quickActions && !props.hasSearch && !props.navLinks,
            },
          ]"
        >
          <slot name="logo-image" />
        </div>

        <div class="tw-grid tw-justify-center tw-gap-[8px] tw-pb-[16px] tw-pt-[16px]">
          <!-- Quick Actions -->
          <Menu
            v-model="isQuckActionMenuVisible"
            aria-id="quick-action-menu-wrapper"
            distance="18"
            placement="right-start"
            :triggers="[]"
            :popper-hide-triggers="[]"
            :shown="isQuckActionMenuVisible"
            instant-move
          >
            <div
              v-if="props.quickActions && props.quickActions.length > 0"
              :class="[
                'tw-text-color-brand-base tw-mx-auto tw-h-[32px] tw-cursor-pointer tw-text-[28px] tw-transition tw-duration-150 tw-ease-in-out',
                'hover:tw-text-color-success-hover',
                'active:tw-text-color-success-pressed active:tw-scale-90',
              ]"
              @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
            >
              <IconPlusCircleFill />
            </div>

            <template #popper>
              <div
                class="tw-border-color-weak tw-flex tw-justify-between tw-border-x-0 tw-border-b tw-border-t-0 tw-border-solid tw-p-[8px]"
              >
                <h3 class="tw-body-sm-regular-medium tw-m-0">Quick Actions</h3>
                <IconX
                  class="tw-body-sm-regular-medium tw-cursor-pointer tw-transition tw-duration-150 tw-ease-in-out active:tw-scale-90"
                  @click="isQuckActionMenuVisible = !isQuckActionMenuVisible"
                />
              </div>

              <div class="tw-max-h-[268px] tw-overflow-auto">
                <template v-for="(quickAction, quickActionIndex) in props.quickActions" :key="quickActionIndex">
                  <div
                    :class="[
                      'tw-flex tw-cursor-pointer tw-gap-[8px] tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-150 tw-ease-in-out',
                      'hover:tw-background-color-hover',
                      'active:tw-background-color-pressed',
                    ]"
                    @click="handleRedirect($event, quickAction)"
                  >
                    <div
                      :class="[
                        {
                          'tw-rounded-border-radius-md tw-p-[8px]': true,
                          'tw-border tw-border-solid tw-border-kangkong-400 tw-bg-kangkong-50 tw-text-kangkong-400':
                            quickAction.iconBgColor === 'green',
                          'tw-border tw-border-solid tw-border-ubas-400 tw-bg-ubas-50 tw-text-ubas-400':
                            quickAction.iconBgColor === 'purple',
                        },
                      ]"
                    >
                      <component :is="quickAction.icon" v-if="quickAction.icon" class="tw-h-[1.25em] tw-w-[1.25em]" />
                    </div>
                    <div class="tw-flex tw-w-[calc(100%-48px)] tw-flex-col tw-justify-between">
                      <h5 class="tw-body-sm-regular-medium tw-m-0 tw-truncate">{{ quickAction.title }}</h5>
                      <p class="tw-body-xs-regular tw-text-color-base tw-m-0 tw-truncate">
                        {{ quickAction.description }}
                      </p>
                    </div>
                  </div>
                </template>
              </div>
            </template>
          </Menu>

          <!-- Search -->
          <div
            v-if="props.hasSearch"
            :class="[
              'justify-center tw-flex tw-cursor-pointer tw-items-center tw-rounded-border-radius-md tw-p-[8px] tw-transition tw-duration-150 tw-ease-in-out',
              'hover:tw-background-color-hover',
              'active:tw-background-color-single-active active:tw-scale-90',
            ]"
          >
            <IconMagnifyingGlass />
          </div>

          <!-- Grouped Nav Links -->
          <template v-for="(navLink, navLinkIndex) in props.navLinks" :key="navLinkIndex">
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
                    :class="[
                      {
                        'tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-border-radius-md tw-p-[8px] tw-transition tw-duration-150 tw-ease-in-out': true,
                        'tw-background-color-single-active tw-border-color-brand-base tw-border-[1.5px] tw-border-solid active:tw-scale-90':
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
                      <h5
                        v-if="menuLink.menuHeading"
                        class="tw-label-xs-medium tw-text-color-supporting tw-m-0 tw-p-[8px]"
                      >
                        {{ menuLink.menuHeading }}
                      </h5>

                      <template v-for="(menuLinkItems, menuLinkItemsIndex) in menuLink.items" :key="menuLinkItemsIndex">
                        <!-- Menu link with submenu links -->
                        <template v-if="menuLinkItems.submenuLinks && menuLinkItems.submenuLinks.length > 0">
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
                                  'tw-background-color-single-active': props.activeNav.menu === menuLinkItems.title,
                                  'hover:tw-background-color-hover': props.activeNav.menu !== menuLinkItems.title,
                                  'active:tw-background-color-pressed': true,
                                },
                              ]"
                            >
                              <div
                                v-if="props.activeNav.menu === menuLinkItems.title"
                                class="tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]"
                              ></div>
                              <span>{{ menuLinkItems.title }}</span>
                              <IconCaretRight
                                :class="[
                                  'tw-h-[16px] tw-w-[16px] tw-transform tw-font-normal tw-transition-transform tw-duration-300',
                                  props.activeNav.menu === menuLinkItems.title
                                    ? '-tw-rotate-90'
                                    : 'hover:-tw-rotate-90',
                                ]"
                              />
                            </div>

                            <template #popper>
                              <template
                                v-for="(submenuLink, submenuLinkIndex) in menuLinkItems.submenuLinks"
                                :key="submenuLinkIndex"
                              >
                                <h5
                                  v-if="submenuLink.subMenuHeading"
                                  class="tw-label-xs-medium tw-text-color-supporting tw-m-0 tw-p-[8px]"
                                >
                                  {{ submenuLink.subMenuHeading }}
                                </h5>
                                <template
                                  v-for="(submenuLinkItems, submenuLinkItemsIndex) in submenuLink.items"
                                  :key="submenuLinkItemsIndex"
                                >
                                  <Menu
                                    aria-id="sidenav-sub-submenu-wrapper"
                                    :triggers="['click', 'hover']"
                                    instant-move
                                  >
                                    <div
                                      :class="[
                                        {
                                          'tw-body-sm-regular tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-150 tw-ease-in-out': true,
                                          'tw-background-color-single-active':
                                            props.activeNav.submenu === submenuLinkItems.title,
                                          'hover:tw-background-color-hover':
                                            props.activeNav.submenu !== submenuLinkItems.title,
                                          'active:tw-background-color-pressed': true,
                                        },
                                      ]"
                                      @click="handleRedirect($event, submenuLinkItems)"
                                    >
                                      <div
                                        v-show="props.activeNav.submenu === submenuLinkItems.title"
                                        class="tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]"
                                      ></div>
                                      <span>{{ submenuLinkItems.title }}</span>
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
                            :class="[
                              'tw-body-sm-regular tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-300 tw-ease-in-out',
                              'hover:tw-background-color-hover',
                              'active:tw-background-color-pressed',
                              'last:tw-rounded-b-[12px]',
                            ]"
                            @click="handleRedirect($event, menuLinkItems)"
                          >
                            <span>{{ menuLinkItems.title }}</span>
                          </div>
                        </template>
                      </template>
                    </template>
                  </template>
                </Menu>
              </template>

              <!-- Parent link only  -->
              <template v-else>
                <Tooltip aria-id="default-tooltip" placement="right" distance="18" :triggers="['hover']">
                  <template #popper>
                    <span class="tw-label-xs-medium">{{ parentLink.title }}</span>
                  </template>
                  <div
                    :class="[
                      'justify-center tw-flex tw-cursor-pointer tw-items-center tw-rounded-border-radius-md tw-p-[8px] tw-transition tw-duration-150 tw-ease-in-out',
                      'hover:tw-background-color-hover',
                      'active:tw-background-color-single-active active:tw-scale-90',
                    ]"
                    @click="handleRedirect($event, parentLink)"
                  >
                    <component :is="parentLink.icon" v-if="parentLink.icon" class="tw-h-[1.25em] tw-w-[1.25em]" />
                    <IconGlobe v-else />
                  </div>
                </Tooltip>
              </template>
            </template>
            <div
              v-if="navLinks.length > 0 && navLinkIndex < navLinks.length - 1"
              class="tw-background-color-hover tw-h-[2px] tw-w-full"
            ></div>
          </template>
        </div>
      </div>

      <!-- Avatar -->
      <div
        :class="[
          'tw tw-grid tw-items-end tw-justify-center tw-pb-[16px]',
          '[&>img]:tw-mx-auto [&>img]:tw-h-[24px] [&>img]:tw-w-[24px] [&>img]:tw-rounded-full',
        ]"
      >
        <slot name="avatar-image" />
      </div>
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
import IconX from '~icons/ph/x';

import 'floating-vue/dist/style.css';

const props = defineProps(sidenavPropTypes);
const emit = defineEmits(sidenavEmitTypes);

const { isQuckActionMenuVisible, handleRedirect } = useSidenav(props, emit);
</script>
