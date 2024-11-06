<template>
  <div
    :class="[
      'tw-background-color tw-hidden-scrolls tw-border-color-weak tw-fixed tw-bottom-0 tw-left-0 tw-top-0 tw-w-auto tw-overflow-y-auto tw-overflow-x-hidden tw-border-b-0 tw-border-l-0 tw-border-r tw-border-t-0 tw-border-solid tw-transition tw-duration-150 tw-ease-in-out',
    ]"
  >
    <div
      :class="[
        'tw tw-grid tw-justify-center tw-px-[12px] tw-pb-[8px] tw-pt-[16px]',
        '[&>img]:tw-mx-auto [&>img]:tw-h-[24px] [&>img]:tw-w-[24px]',
      ]"
    >
      <slot name="logo-image" />
    </div>
    <div
      :class="[
        'tw-grid tw-justify-center tw-gap-[6px] tw-px-[12px] tw-pb-[16px] tw-pt-[8px]',
      ]"
    >
      <div
        v-if="hasQuickActions"
        :class="[
          'tw-text-color-brand-base tw-mx-auto tw-h-[32px] tw-cursor-pointer tw-text-[28px] tw-transition tw-duration-150 tw-ease-in-out',
          'hover:tw-text-color-success-hover',
          'active:tw-text-color-success-pressed active:tw-scale-90',
        ]"
      >
        <IconPlusCircleFill />
      </div>
      <div
        v-if="hasQuickActions"
        :class="[
          'justify-center tw-flex tw-cursor-pointer tw-items-center tw-rounded-[8px] tw-px-[8px] tw-py-[6px] tw-transition tw-duration-150 tw-ease-in-out',
          'hover:tw-background-color-hover',
          'active:tw-background-color-single-active active:tw-scale-90',
        ]"
      >
        <IconMagnifyingGlass />
      </div>

      <template v-for="(navLink, navLinkIndex) in navLinks" :key="navLinkIndex">
        <template
          v-for="(parentLink, parentLinkIndex) in navLink.parentLinks"
          :key="parentLinkIndex"
        >
          <!-- #region - Parent link with menu links -->
          <template
            v-if="parentLink.menuLinks && parentLink.menuLinks.length > 0"
          >
            <VMenu theme="sidenav-olympus-menu">
              <div
                :class="[
                  'justify-center tw-flex tw-cursor-pointer tw-items-center tw-rounded-[8px] tw-px-[8px] tw-py-[6px] tw-transition tw-duration-150 tw-ease-in-out',
                  'hover:tw-background-color-hover',
                  'active:tw-background-color-single-active active:tw-scale-90',
                ]"
              >
                <component
                  :is="parentLink.icon"
                  v-if="parentLink.icon"
                  class="icon-class"
                />
                <IconGlobe v-else />
              </div>
              <template #popper>
                <div
                  :class="[
                    'tw-border-color-weak tw-border-x-0 tw-border-b tw-border-t-0 tw-border-solid tw-p-[8px]',
                  ]"
                >
                  <h3
                    :class="[
                      'tw-text-size-100 tw-font-size-300 tw-line-height-400 tw-m-0 tw-font-medium',
                    ]"
                  >
                    {{ parentLink.title }}
                  </h3>
                </div>

                <template
                  v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks"
                  :key="menuLinkIndex"
                >
                  <!-- #region - Menu link with submenu links -->
                  <template
                    v-if="
                      menuLink.subMenuLinks && menuLink.subMenuLinks.length > 0
                    "
                  >
                    <VMenu
                      theme="sidenav-olympus-submenu"
                      :shown="activeMenu === menuLink.title ? true : false"
                      @hide="activeMenu = ''"
                    >
                      <div
                        :class="[
                          'tw-text-size-100 tw-font-size-300 tw-line-height-400 tw-relative tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-300 tw-ease-in-out',
                          {
                            'tw-background-color-single-active':
                              activeMenu === menuLink.title,
                            'hover:tw-background-color-hover':
                              activeMenu !== menuLink.title,
                          },
                        ]"
                        @mouseenter="activeMenu = menuLink.title"
                      >
                        <Transition name="slide-fade">
                          <div
                            v-if="activeMenu === menuLink.title"
                            :class="[
                              'tw-background-color-brand-base tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-[2px]',
                            ]"
                          ></div>
                        </Transition>
                        <span>{{ menuLink.title }}</span>
                        <IconCaretRight
                          :class="[
                            'tw-transform tw-transition-transform tw-duration-300',
                            activeMenu === menuLink.title
                              ? '-tw-rotate-90'
                              : 'hover:-tw-rotate-90',
                          ]"
                        />
                      </div>

                      <template #popper>
                        <div @mouseleave="activeMenu = ''">
                          <template
                            v-for="(
                              subMenuLink, subMenuLinkIndex
                            ) in menuLink.subMenuLinks"
                            :key="subMenuLinkIndex"
                          >
                            <div
                              :class="[
                                'tw-text-size-100 tw-font-size-300 tw-line-height-400 tw-m-0 tw-flex tw-cursor-pointer tw-justify-between tw-px-[8px] tw-py-[6px] tw-align-middle tw-duration-300 tw-ease-in-out',
                                'hover:tw-background-color-hover',
                                'first:tw-rounded-t-[12px]',
                                'last:tw-rounded-b-[12px]',
                              ]"
                            >
                              <span>{{ subMenuLink.title }}</span>
                            </div>
                          </template>
                        </div>
                      </template>
                    </VMenu>
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
                      @mouseenter="activeMenu = menuLink.title"
                    >
                      <span>{{ menuLink.title }}</span>
                    </div>
                  </template>
                  <!-- #endregion - Menu link only -->
                </template>
              </template>
            </VMenu>
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
            >
              <component
                :is="parentLink.icon"
                v-if="parentLink.icon"
                class="icon-class"
              />
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NavLink } from './SidenavOlympusInterface';

import IconPlusCircleFill from '~icons/ph/plus-circle-fill';
import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
import IconGlobe from '~icons/ph/globe';
import IconCaretRight from '~icons/ph/caret-right';

defineProps<{
  hasQuickActions: boolean;
  hasSearch: boolean;
  navLinks: NavLink[];
}>();

const activeMenu = ref<string>('');
</script>

<style>
.v-popper__popper.v-popper--theme-sidenav-olympus-menu,
.v-popper__popper.v-popper--theme-sidenav-olympus-submenu {
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
</style>
