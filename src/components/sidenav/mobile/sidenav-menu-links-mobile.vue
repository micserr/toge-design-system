<template>
  <div id="mobile_sidenav_links" class="spr-relative spr-h-full spr-w-full spr-max-w-none spr-overflow-x-hidden">
    <Transition :name="currentLevel === 1 ? 'right-enter-left-leave' : 'left-enter-right-leave'">
      <!-- #region - Parent Links -->
      <div v-if="currentLevel === 0" id="parent-links" class="spr-w-full spr-max-w-none">
        <div v-for="(navLink, navLinkIndex) in compiledNavLinks" :key="navLinkIndex" class="spr-grid">
          <template v-for="(parentLink, parentLinkIndex) in navLink.parentLinks" :key="parentLinkIndex">
            <!-- Parent Link Item -->
            <sidenav-nav-link-item
              :id="`mobile_${generateId(parentLink.title)}`"
              link-type="parent"
              :link-item="parentLink"
              :active-nav="props.activeNav"
              :converted-nav-attributes="getConvertedNavAttributes(parentLink.attributes)"
              @on-select-link="handleParentLinkClick(parentLink)"
            />
          </template>
          <div
            v-if="compiledNavLinks.length > 0 && navLinkIndex < compiledNavLinks.length - 1"
            class="spr-background-color-hover spr-my-size-spacing-3xs spr-h-[2px] spr-w-full"
          ></div>
        </div>
      </div>
      <!-- #endregion - Parent Links -->
      <!-- #region - Menu Links -->
      <div v-else class="spr-absolute spr-left-0 spr-top-0 spr-min-h-full spr-w-full spr-max-w-none">
        <!-- Back Button -->
        <div
          class="active:spr-background-color-pressed select-none -webkit-tap-highlight-color-transparent spr-flex spr-w-full spr-cursor-pointer spr-items-center spr-gap-size-spacing-3xs spr-py-size-spacing-3xs"
          style="-webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-user-select: none;"
          @click="goBack"
        >
          <Icon icon="ph:arrow-left" class="spr-h-5 spr-w-5" />
          <span class="spr-body-sm-regular-medium spr-text-color-strong">{{ backButtonLabel }}</span>
        </div>

        <Transition :name="currentLevel === 1 ? 'left-enter-right-leave' : 'right-enter-left-leave'">
          <!-- #region - Menu Items -->
          <div v-if="currentLevel === 1" id="menu-items" class="spr-absolute spr-w-full spr-max-w-none">
            <template v-for="(menuLink, menuLinkIndex) in currentParent?.menuLinks" :key="menuLinkIndex">
              <!-- Menu Heading -->
              <h5
                v-if="menuLink.menuHeading"
                :class="[
                  'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-w-full !spr-p-size-spacing-3xs spr-uppercase',
                  { 'spr-pt-4': menuLinkIndex !== 0 },
                ]"
              >
                {{ menuLink.menuHeading }}
              </h5>

              <!-- Menu Items -->
              <template v-for="(menuLinkItem, menuLinkItemIndex) in menuLink.items" :key="menuLinkItemIndex">
                <sidenav-nav-link-item
                  :id="`mobile_${generateId(currentParent?.title || '', menuLinkItem.title)}`"
                  link-type="menu"
                  :link-item="menuLinkItem"
                  :active-nav="props.activeNav"
                  :converted-nav-attributes="getConvertedNavAttributes(menuLinkItem.attributes)"
                  @on-select-link="handleMenuLinkClick(menuLinkItem, currentParent?.title || '')"
                />
              </template>
            </template>
          </div>
          <!-- #endregion - Menu Items -->

          <!-- #region - Submenu Items -->
          <div v-else id="submenu-items" class="spr-absolute spr-w-full spr-max-w-none">
            <template v-for="(subMenuLink, subMenuLinkIndex) in currentMenu?.submenuLinks" :key="subMenuLinkIndex">
              <!-- Submenu Heading -->
              <h5
                v-if="subMenuLink.subMenuHeading"
                :class="[
                  'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-w-full !spr-p-size-spacing-3xs spr-uppercase',
                  { 'spr-pt-4': subMenuLinkIndex !== 0 },
                ]"
              >
                {{ subMenuLink.subMenuHeading }}
              </h5>

              <!-- Submenu Items -->
              <template
                v-for="(subMenuLinkItem, subMenuLinkItemIndex) in subMenuLink.items"
                :key="subMenuLinkItemIndex"
              >
                <sidenav-nav-link-item
                  :id="`mobile_${generateId(currentParent?.title || '', currentMenu?.title || '', subMenuLinkItem.title)}`"
                  link-type="submenu"
                  :link-item="subMenuLinkItem"
                  :converted-nav-attributes="getConvertedNavAttributes(subMenuLinkItem.attributes)"
                  :active-nav="props.activeNav"
                  @on-select-link="
                    handleRedirect(
                      subMenuLinkItem,
                      currentParent?.title || '',
                      currentMenu?.title || '',
                      subMenuLinkItem.title || '',
                    )
                  "
                />
              </template>
            </template>
          </div>
          <!-- #endregion - Submenu Items -->
        </Transition>
      </div>
    </Transition>

    <!-- #endregion -Menu Links -->
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, type PropType } from 'vue';
import { Icon } from '@iconify/vue';

import {
  sidenavPropTypes,
  sidenavEmitTypes,
  type ParentLink,
  type NavLinks,
  type Attributes,
  type ConvertedNavAttribute,
  type MenuLinkItem,
  type ParentLinkItem,
} from '@/components/sidenav/sidenav';
import { useSidenav } from '@/components/sidenav/use-sidenav';

import SidenavNavLinkItem from './sidenav-nav-link-item.vue';

const props = defineProps({
  ...sidenavPropTypes,
  compiledNavLinks: {
    type: Array as PropType<ParentLink[]>,
    default: () => [],
  },
});
const emit = defineEmits(sidenavEmitTypes);

const { handleRedirect, generateId, getLozengeLabel, getLozengeTone, convertAttributesToArray } = useSidenav(
  props,
  emit,
);

// Reactive state for navigation levels
const currentLevel = ref(0);
const currentParent = ref<ParentLinkItem | null>(null);
const currentMenu = ref<Partial<MenuLinkItem> | null>(null);

const getConvertedNavAttributes = (navItemAttributes: string | Attributes[] | undefined) => {
  if (!navItemAttributes) {
    return [];
  }

  const convertedAttributes: ConvertedNavAttribute[] = convertAttributesToArray(navItemAttributes);

  convertedAttributes.forEach((element) => {
    element.lozengeLabel = getLozengeLabel(element);
    element.lozengeTone = getLozengeTone(element);
  });

  return convertedAttributes;
};

const compiledNavLinks = computed(() => {
  if (!props.navLinks) {
    return [];
  }

  const navLinks = props.navLinks as NavLinks;
  const topItems = navLinks.top || [];
  const bottomItems = navLinks.bottom || [];
  return topItems.concat(bottomItems);
});

// Handle parent link clicks
const handleParentLinkClick = (parentLink: ParentLinkItem) => {
  if (parentLink.menuLinks && parentLink.menuLinks.length > 0) {
    // Has children, slide to menu link view
    currentParent.value = parentLink;
    currentLevel.value = 1;
  } else {
    // No children, handle as direct navigation
    handleRedirect(parentLink, parentLink.title, '', '');
  }
};

// Handle menu link clicks
const handleMenuLinkClick = (menuItem: Partial<MenuLinkItem>, parentTitle: string) => {
  if (menuItem.submenuLinks?.length === 0 || !menuItem.submenuLinks) {
    // If no submenuLinks, Handle as navigation
    handleRedirect(menuItem, parentTitle, menuItem.title as string, '');
    return;
  }

  currentLevel.value = 2;
  currentMenu.value = menuItem;
};

// Go back to parent level
const goBack = () => {
  if (currentLevel.value === 0) return;
  currentLevel.value -= 1;
};

const backButtonLabel = computed(() => {
  if (currentLevel.value === 1) {
    return currentParent.value?.title ?? '';
  } else {
    return currentMenu.value?.title ?? '';
  }
});
</script>

<style scoped>
/* Remove any default browser margins/padding */
* {
  box-sizing: border-box;
}

.right-enter-left-leave-enter-active,
.right-enter-left-leave-leave-active,
.left-enter-right-leave-enter-active,
.left-enter-right-leave-leave-active {
  transition: all 0.25s linear;
}

.right-enter-left-leave-enter-from,
.left-enter-right-leave-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.right-enter-left-leave-enter-to,
.right-enter-left-leave-leave-from,
.left-enter-right-leave-enter-to,
.left-enter-right-leave-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.right-enter-left-leave-leave-to,
.left-enter-right-leave-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
