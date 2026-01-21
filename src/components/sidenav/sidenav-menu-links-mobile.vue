<template>
  <div class="spr-relative spr-overflow-hidden spr-w-screen spr-max-w-none">
    <!-- Main Navigation Level -->
    <div 
      :class="[
        'spr-w-screen spr-max-w-none spr-transition-all spr-duration-500 spr-ease-in-out',
        { '-spr-translate-x-full spr-opacity-0': currentLevel > 0 }
      ]"
    >
      <div v-for="(navLink, navLinkIndex) in navLinks" :key="navLinkIndex" class="spr-grid">
        <template v-for="(parentLink, parentLinkIndex) in navLink.parentLinks" :key="parentLinkIndex">
          <!-- Parent Link Item -->
          <div
            v-if="!parentLink.hidden"
            :id="`mobile_${generateId(parentLink.title)}`"
            :class="[
              'spr-flex spr-cursor-pointer spr-items-center spr-gap-3 spr-px-4 spr-py-3 spr-w-full spr-transition spr-duration-150 spr-ease-in-out',
              'hover:spr-background-color-hover',
              'active:spr-background-color-pressed',
              'focus:spr-outline-none',
              'select-none',
              '-webkit-tap-highlight-color-transparent'
            ]"
            style="-webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-user-select: none;"
            @click="handleParentLinkClick(parentLink)"
          >
            <!-- Icon -->
            <div class="spr-flex spr-items-center spr-justify-center spr-w-6 spr-h-6">
              <template v-if="parentLink.icon && parentLink.icon.includes('https://')">
                <img
                  :src="parentLink.icon"
                  :alt="`${parentLink.title} icon`"
                  class="spr-h-6 spr-w-6 spr-object-cover"
                />
              </template>
              <template v-else>
                <Icon
                  v-if="parentLink.icon"
                  :icon="parentLink.icon"
                  class="spr-h-6 spr-w-6"
                />
                <Icon v-else icon="ph:globe" class="spr-h-6 spr-w-6" />
              </template>
            </div>

            <!-- Title and Badge -->
            <div class="spr-flex spr-flex-1 spr-items-center spr-justify-between">
              <span class="spr-body-sm-regular spr-text-color-strong">
                {{ parentLink.title }}
              </span>
              
              <!-- Badge if attributes exist -->
              <div class="spr-flex spr-items-center spr-gap-2">
                <template v-if="parentLink.attributes">
                  <spr-lozenge
                    v-for="(attribute, attributeIndex) in convertAttributesToArray(parentLink.attributes)"
                    :key="attributeIndex"
                    :text="getLozengeLabel(attribute)"
                    :tone="getLozengeTone(attribute)"
                    size="small"
                  />
                </template>
                
                <!-- Arrow if has children -->
                <Icon 
                  v-if="parentLink.menuLinks && parentLink.menuLinks.length > 0"
                  icon="ph:caret-right" 
                  class="spr-h-4 spr-w-4 spr-text-color-supporting" 
                />
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Child Navigation Level -->
    <div 
      :class="[
        'spr-absolute spr-top-0 spr-left-0 spr-w-screen spr-max-w-none spr-min-h-full spr-transition-all spr-duration-500 spr-ease-in-out spr-background-color',
        currentLevel > 0 ? 'spr-translate-x-0 spr-opacity-100 spr-visible' : 'spr-translate-x-full spr-opacity-0 spr-invisible'
      ]"
    >
      <!-- Back Button -->
      <div 
        class="spr-flex spr-cursor-pointer spr-items-center spr-gap-3 spr-px-4 spr-py-3 spr-w-full spr-border-b spr-border-color-weak spr-transition spr-duration-150 spr-ease-in-out hover:spr-background-color-hover active:spr-background-color-pressed focus:spr-outline-none select-none -webkit-tap-highlight-color-transparent"
        style="-webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-user-select: none;"
        @click="goBack"
      >
        <Icon icon="ph:caret-left" class="spr-h-5 spr-w-5" />
        <span class="spr-body-sm-regular-medium spr-text-color-strong">{{ currentParent?.title || '' }}</span>
      </div>

      <!-- Menu Items -->
      <div v-if="currentParent" class="spr-grid">
        <template v-for="(menuLink, menuLinkIndex) in currentParent.menuLinks" :key="menuLinkIndex">
          <!-- Menu Heading -->
          <h5
            v-if="menuLink.menuHeading"
            :class="[
              'spr-label-xs-medium spr-text-color-supporting spr-m-0 spr-px-4 spr-py-3 spr-w-full',
              { 'spr-pt-4': menuLinkIndex !== 0 }
            ]"
          >
            {{ menuLink.menuHeading }}
          </h5>

          <!-- Menu Items -->
          <template v-for="(menuLinkItem, menuLinkItemIndex) in menuLink.items" :key="menuLinkItemIndex">
            <div
              v-if="!menuLinkItem.hidden"
              :id="`mobile_${generateId(currentParent?.title || '', menuLinkItem.title)}`"
              :class="[
                'spr-flex spr-cursor-pointer spr-items-center spr-gap-3 spr-px-4 spr-py-3 spr-w-full spr-transition spr-duration-150 spr-ease-in-out',
                'hover:spr-background-color-hover',
                'active:spr-background-color-pressed',
                'focus:spr-outline-none',
                'select-none',
                '-webkit-tap-highlight-color-transparent'
              ]"
              style="-webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-user-select: none;"
              @click="handleMenuLinkClick(menuLinkItem, currentParent?.title || '')"
            >
              <!-- Title and Badge -->
              <div class="spr-flex spr-flex-1 spr-items-center spr-justify-between">
                <span class="spr-body-sm-regular spr-text-color-strong">
                  {{ menuLinkItem.title }}
                </span>
                
                <!-- Badge if attributes exist -->
                <div class="spr-flex spr-items-center spr-gap-2">
                  <template v-if="menuLinkItem.attributes">
                    <spr-lozenge
                      v-for="(attribute, attributeIndex) in convertAttributesToArray(menuLinkItem.attributes)"
                      :key="attributeIndex"
                      :text="getLozengeLabel(attribute)"
                      :tone="getLozengeTone(attribute)"
                      size="small"
                    />
                  </template>
                  
                  <!-- Arrow if has submenu -->
                  <Icon 
                    v-if="menuLinkItem.submenuLinks && menuLinkItem.submenuLinks.length > 0"
                    icon="ph:caret-right" 
                    class="spr-h-4 spr-w-4 spr-text-color-supporting" 
                  />
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

import { sidenavPropTypes, sidenavEmitTypes } from './sidenav';
import { useSidenav } from './use-sidenav';

import SprLozenge from '../lozenge/lozenge.vue';

import type { ParentLinkItem } from './sidenav';

const props = defineProps(sidenavPropTypes);
const emit = defineEmits(sidenavEmitTypes);

const { handleRedirect, generateId, getLozengeLabel, getLozengeTone, convertAttributesToArray } = useSidenav(
  props,
  emit,
);

// Reactive state for navigation levels
const currentLevel = ref(0);
const currentParent = ref<ParentLinkItem | null>(null);

// Handle parent link clicks
const handleParentLinkClick = (parentLink: ParentLinkItem) => {
  if (parentLink.menuLinks && parentLink.menuLinks.length > 0) {
    // Has children, slide to child view
    currentParent.value = parentLink;
    currentLevel.value = 1;
  } else {
    // No children, handle as direct navigation
    handleRedirect(parentLink, parentLink.title, '', '');
    emit('get-navlink-item', {
      parentNav: parentLink.title,
      menu: '',
      submenu: '',
    });
  }
};

// Handle menu link clicks
const handleMenuLinkClick = (menuItem: Record<string, unknown>, parentTitle: string) => {
  // Handle as navigation
  handleRedirect(menuItem, parentTitle, menuItem.title as string, '');
  emit('get-navlink-item', {
    parentNav: parentTitle,
    menu: menuItem.title as string,
    submenu: '',
  });
};

// Go back to parent level
const goBack = () => {
  currentLevel.value = 0;
  currentParent.value = null;
};
</script>

<style scoped>
/* Ensure perfect edge-to-edge alignment for mobile navigation */
.spr-relative {
  margin-left: 0;
  margin-right: 0;
}

/* Prevent any margin collapse or spacing issues */
.spr-grid > * {
  margin: 0;
  padding-left: 0;
  padding-right: 0;
}

/* Ensure navigation items span full width */
.spr-flex.spr-cursor-pointer {
  box-sizing: border-box;
  min-width: 100%;
}

/* Remove any default browser margins/padding */
* {
  box-sizing: border-box;
}
</style>
