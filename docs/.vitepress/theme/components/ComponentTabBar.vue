<template>
  <nav class="component-tab-bar" aria-label="Component documentation sections">
    <a
      v-for="tab in tabs"
      :key="tab.slug"
      :href="tabHref(tab)"
      :class="['component-tab-bar__tab', { 'component-tab-bar__tab--active': isActive(tab) }]"
      :aria-current="isActive(tab) ? 'page' : undefined"
    >
      {{ tab.label }}
    </a>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vitepress';

interface TabDefinition {
  label: string;
  slug: string;
}

const props = defineProps<{
  componentName: string;
  tabs: TabDefinition[];
  parent?: string;
}>();

const route = useRoute();

const locale = computed(() => {
  const parts = route.path.split('/');
  return parts[1];
});

const basePath = computed(() => {
  if (props.parent) {
    return `/${locale.value}/documentation/components/${props.parent}/`;
  }
  return `/${locale.value}/documentation/components/${props.componentName}/`;
});

const tabHref = (tab: TabDefinition) => {
  if (tab.slug === '') {
    return `${basePath.value}${props.componentName}`;
  }
  return `${basePath.value}${props.componentName}/${tab.slug}`;
};

const isActive = (tab: TabDefinition) => {
  const currentPath = route.path.replace(/\.html$/, '').replace(/\/$/, '');
  const expectedPath = tabHref(tab).replace(/\/$/, '');
  return currentPath === expectedPath;
};
</script>

<style scoped>
.component-tab-bar {
  display: flex;
  gap: 0;
  border-bottom: 2px solid var(--vp-c-divider);
  margin-bottom: 24px;
  margin-top: -8px;
  position: sticky;
  top: var(--vp-nav-height);
  z-index: 10;
  background-color: var(--vp-c-bg);
  padding-top: 8px;
}

.component-tab-bar__tab {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
}

.component-tab-bar__tab:hover {
  color: var(--vp-c-text-1);
}

.component-tab-bar__tab--active {
  color: #158039;
  border-bottom-color: #158039;
}
</style>
