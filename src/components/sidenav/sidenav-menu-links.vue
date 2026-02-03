<template>
  <div v-for="(navLink, navLinkIndex) in positionedNavLinks" :key="navLinkIndex" class="spr-grid spr-gap-2">
    <!-- Desktop -->
    <template v-for="(parentLink, parentLinkIndex) in navLink.parentLinks" :key="parentLinkIndex">
      <!-- #region - Parent Links with Menus -->
      <template v-if="parentLink.menuLinks && parentLink.menuLinks.length > 0">
        <Menu
          aria-id="sidenav-menu-wrapper"
          distance="18"
          placement="right"
          :triggers="['click', 'hover']"
          instant-move
          :delay="0"
        >
          <!-- #region - Parent Links -->
          <div
            :id="`${generateId(parentLink.title)}`"
            :class="{
              'spr-m-auto spr-box-border spr-flex spr-max-h-9 spr-max-w-9 spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md spr-p-2 spr-transition spr-duration-150 spr-ease-in-out': true,
              'spr-background-color-single-active spr-border-color-brand-base spr-border-[1.5px] spr-border-solid active:spr-scale-90':
                props.activeNav.parentNav === parentLink.title,
              'hover:spr-background-color-hover': props.activeNav.parentNav != parentLink.title,
              'active:spr-background-color-single-active active:spr-scale-90': true,
            }"
          >
            <template v-if="parentLink.icon && parentLink.icon.includes('https://')">
              <img
                v-if="parentLink.icon && props.activeNav.parentNav !== parentLink.title"
                :src="parentLink.icon"
                :alt="`${parentLink.title} icon`"
                class="spr-h-[1.25em] spr-w-[1.25em] spr-max-w-[1.25em]"
              />
              <img
                v-else-if="props.activeNav.parentNav === parentLink.title"
                :src="parentLink.icon.replace(/\.(svg|png|jpg)$/, '-fill.$1')"
                :alt="`${parentLink.title} icon`"
                class="spr-h-[1.25em] spr-w-[1.25em] spr-max-w-[1.25em]"
              />
            </template>
            <template v-else>
              <Icon
                v-if="parentLink.icon && props.activeNav.parentNav !== parentLink.title"
                :icon="parentLink.icon"
                class="spr-h-[1.25em] spr-w-[1.25em]"
              />
              <Icon
                v-else-if="props.activeNav.parentNav === parentLink.title"
                :icon="`${parentLink.icon}-fill`"
                class="spr-h-[1.25em] spr-w-[1.25em] spr-text-kangkong-700"
              />
              <Icon v-else icon="ph:globe" />
            </template>
          </div>
          <!-- #endregion - Parent Links -->

          <!-- #region - Menu Links Popper -->
          <template #popper>
            <div class="spr-border-color-weak spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-p-2">
              <h3 class="spr-body-sm-regular-medium spr-m-0">
                {{ parentLink.title }}
              </h3>
            </div>

            <template v-for="(menuLink, menuLinkIndex) in parentLink.menuLinks" :key="menuLinkIndex">
              <h5
                v-if="menuLink.menuHeading"
                :class="{
                  'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-p-2': true,
                  'spr-pt-2': menuLinkIndex !== 0,
                }"
              >
                {{ menuLink.menuHeading }}
              </h5>

              <template v-for="(menuLinkItem, menuLinkItemIndex) in menuLink.items" :key="menuLinkItemIndex">
                <!-- #region - Menu link with Submenu links -->
                <template v-if="menuLinkItem.submenuLinks && menuLinkItem.submenuLinks.length > 0">
                  <Menu
                    aria-id="sidenav-submenu-l1-wrapper"
                    distance="4"
                    placement="right-start"
                    :triggers="['click', 'hover']"
                    instant-move
                    :delay="0"
                  >
                    <!-- #region - Menu links -->
                    <div
                      :id="`${generateId(parentLink.title, menuLinkItem.title)}`"
                      :class="{
                        'spr-body-sm-regular spr-relative spr-m-0 spr-flex spr-cursor-pointer spr-px-2 spr-py-1.5 spr-align-middle spr-duration-150 spr-ease-in-out': true,
                        'spr-background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                        'hover:spr-background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                        'active:spr-background-color-pressed': true,
                      }"
                    >
                      <div
                        v-if="props.activeNav.menu === menuLinkItem.title"
                        class="spr-background-color-brand-base spr-absolute spr-left-0 spr-top-0 spr-h-full spr-w-[2px]"
                      ></div>

                      <div class="spr-flex spr-w-full spr-items-center spr-justify-between spr-gap-1">
                        <span>{{ menuLinkItem.title }}</span>

                        <div class="spr-flex spr-items-center spr-gap-2">
                          <template
                            v-for="(attribute, i) in convertAttributesToArray(menuLinkItem?.attributes)"
                            :key="i"
                          >
                            <spr-lozenge
                              v-if="attribute?.name === 'lozenge' && attribute?.value"
                              :label="getLozengeLabel(attribute)"
                              :tone="getLozengeTone(attribute)"
                              fill
                            />
                          </template>
                          <Icon
                            icon="ph:caret-right"
                            class="spr-h-[16px] spr-w-[16px] spr-transform spr-font-normal spr-transition-transform spr-duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- #endregion - Menu links -->

                    <!-- #region - Submenu Links Popper -->
                    <!-- 
                        Note: if you want the popper to stay open while hovering over submenuLink.subMenuHeading & submenuLinkItem.title, 
                              you need to keep it inside a <Menu> or ensure the content is part of the popper's interactive area.
                                
                              "sidenav-submenu-l2-wrapper" - Popper is currently hidden since sidenav only has 1 level of submenu links.
                      -->
                    <template #popper>
                      <Menu aria-id="sidenav-submenu-l2-wrapper" :triggers="['click', 'hover']" instant-move :delay="0">
                        <template
                          v-for="(submenuLink, submenuLinkIndex) in menuLinkItem.submenuLinks"
                          :key="submenuLinkIndex"
                        >
                          <h5
                            v-if="submenuLink.subMenuHeading"
                            :class="{
                              'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-p-2': true,
                              'spr-pt-2': submenuLinkIndex !== 0,
                            }"
                          >
                            {{ submenuLink.subMenuHeading }}
                          </h5>

                          <template
                            v-for="(submenuLinkItem, submenuLinkItemIndex) in submenuLink.items"
                            :key="submenuLinkItemIndex"
                          >
                            <!-- #region - Submenu Links -->
                            <div
                              v-if="!submenuLinkItem.hidden"
                              :id="`${generateId(parentLink.title, menuLinkItem.title, submenuLinkItem.title)}`"
                              :class="{
                                'spr-body-sm-regular spr-relative spr-m-0 spr-flex spr-cursor-pointer spr-px-2 spr-py-1.5 spr-align-middle spr-duration-150 spr-ease-in-out': true,
                                'spr-background-color-single-active': props.activeNav.submenu === submenuLinkItem.title,
                                'hover:spr-background-color-hover': props.activeNav.submenu !== submenuLinkItem.title,
                                'active:spr-background-color-pressed': true,
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
                                class="spr-background-color-brand-base spr-absolute spr-left-0 spr-top-0 spr-h-full spr-w-[2px]"
                              ></div>

                              <div class="spr-flex spr-w-full spr-items-center spr-justify-between spr-gap-1">
                                <span>{{ submenuLinkItem.title }}</span>

                                <div class="spr-flex spr-items-center spr-gap-2">
                                  <template
                                    v-for="(attribute, i) in convertAttributesToArray(submenuLinkItem?.attributes)"
                                    :key="i"
                                  >
                                    <spr-lozenge
                                      v-if="attribute?.name === 'lozenge' && attribute?.value"
                                      :label="getLozengeLabel(attribute)"
                                      :tone="getLozengeTone(attribute)"
                                      fill
                                    />
                                  </template>
                                </div>
                              </div>
                            </div>
                            <!-- #endregion - Submenu Links -->
                          </template>
                        </template>
                      </Menu>
                    </template>
                    <!-- #endregion - Submenu Links Popper -->
                  </Menu>
                </template>
                <!-- #endregion - Menu link with Submenu links -->

                <!-- #region - Menu link only -->
                <template v-else>
                  <div
                    v-if="!menuLinkItem.hidden"
                    :id="`${generateId(parentLink.title, menuLinkItem.title)}`"
                    :class="{
                      'spr-body-sm-regular spr-relative spr-m-0 spr-flex spr-cursor-pointer spr-px-2 spr-py-1.5 spr-align-middle spr-duration-150 spr-ease-in-out': true,
                      'spr-background-color-single-active': props.activeNav.menu === menuLinkItem.title,
                      'hover:spr-background-color-hover': props.activeNav.menu !== menuLinkItem.title,
                      'active:spr-background-color-pressed': true,
                    }"
                    @click="handleRedirect(menuLinkItem, parentLink.title, menuLinkItem.title, '')"
                  >
                    <div
                      v-if="props.activeNav.menu === menuLinkItem.title"
                      class="spr-background-color-brand-base spr-absolute spr-left-0 spr-top-0 spr-h-full spr-w-[2px]"
                    ></div>

                    <div class="spr-flex spr-w-full spr-items-center spr-justify-between spr-gap-1">
                      <span>{{ menuLinkItem.title }}</span>

                      <div class="spr-flex spr-items-center spr-gap-2">
                        <template v-for="(attribute, i) in convertAttributesToArray(menuLinkItem?.attributes)" :key="i">
                          <spr-lozenge
                            v-if="attribute?.name === 'lozenge' && attribute?.value"
                            :label="getLozengeLabel(attribute)"
                            :tone="getLozengeTone(attribute)"
                            fill
                          />
                        </template>
                      </div>
                    </div>
                  </div>
                </template>
                <!-- #endregion - Menu link only -->
              </template>
            </template>
          </template>
          <!-- #endregion - Menu Links -->
        </Menu>
      </template>
      <!-- #endregion - Parent Links with Menus -->

      <!-- #region - Parent link only -->
      <template v-else>
        <spr-tooltip
          v-if="!parentLink.hidden"
          :text="parentLink.title"
          placement="right"
          :distance="18"
          :fit-content="false"
        >
          <div
            :id="`${generateId(parentLink.title)}`"
            :class="{
              'spr-m-auto spr-box-border spr-flex spr-max-h-9 spr-max-w-9 spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-border-radius-md spr-p-2 spr-transition spr-duration-150 spr-ease-in-out': true,
              'spr-background-color-single-active spr-border-color-brand-base spr-border-[1.5px] spr-border-solid active:spr-scale-90':
                props.activeNav.parentNav === parentLink.title,
              'hover:spr-background-color-hover': props.activeNav.parentNav != parentLink.title,
              'active:spr-background-color-single-active active:spr-scale-90': true,
            }"
            @click="handleRedirect(parentLink, parentLink.title, '', '')"
          >
            <template v-if="parentLink.icon && parentLink.icon.includes('https://')">
              <img
                v-if="parentLink.icon && props.activeNav.parentNav !== parentLink.title"
                :src="parentLink.icon"
                :alt="`${parentLink.title} icon`"
                class="spr-h-[1.25em] spr-w-[1.25em] spr-max-w-[1.25em]"
              />
              <img
                v-else-if="props.activeNav.parentNav === parentLink.title"
                :src="parentLink.icon.replace(/\.(svg|png|jpg)$/, '-fill.$1')"
                :alt="`${parentLink.title} icon`"
                class="spr-h-[1.25em] spr-w-[1.25em] spr-max-w-[1.25em]"
              />
            </template>
            <template v-else>
              <Icon
                v-if="parentLink.icon && props.activeNav.parentNav !== parentLink.title"
                :icon="parentLink.icon"
                class="spr-h-[1.25em] spr-w-[1.25em]"
              />
              <Icon
                v-else-if="props.activeNav.parentNav === parentLink.title"
                :icon="`${parentLink.icon}-fill`"
                class="spr-h-[1.25em] spr-w-[1.25em] spr-text-kangkong-700"
              />
              <Icon v-else icon="ph:globe" />
            </template>
          </div>
        </spr-tooltip>
      </template>
      <!-- #endregion - Parent link only  -->
    </template>

    <!-- Divider -->
    <div
      v-if="positionedNavLinks.length > 0 && navLinkIndex < positionedNavLinks.length - 1"
      class="spr-background-color-hover spr-h-[2px] spr-w-full"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import { sidenavPropTypes, sidenavEmitTypes, type NavLinks } from './sidenav';
import { useSidenav } from './use-sidenav';

import SprLozenge from '../lozenge/lozenge.vue';
import SprTooltip from '../tooltip/tooltip.vue';
import { computed, type PropType } from 'vue';

const props = defineProps({
  ...sidenavPropTypes,
  navLinkPosition: {
    type: String as PropType<'top' | 'bottom'>,
    required: true,
  },
});

const positionedNavLinks = computed(() => {
  if (props.navLinkPosition === 'top') {
    return (props.navLinks as NavLinks).top;
  } else {
    return (props.navLinks as NavLinks).bottom;
  }
});

const emit = defineEmits(sidenavEmitTypes);

const { handleRedirect, generateId, getLozengeLabel, getLozengeTone, convertAttributesToArray } = useSidenav(
  props,
  emit,
);
</script>
