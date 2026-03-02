<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, shallowRef, watch } from 'vue';

interface HeaderItem {
  title: string;
  link: string;
  level: number;
  children?: HeaderItem[];
}

const headers = shallowRef<HeaderItem[]>([]);
const activeId = ref('');
const marker = ref<HTMLElement>();

function scanHeaders() {
  const docEl = document.querySelector('.vp-doc');
  if (!docEl) return;

  const headings = [...docEl.querySelectorAll('h2[id], h3[id]')]
    .filter((el) => el.textContent?.trim())
    .map((el) => ({
      title: el.textContent!.trim(),
      link: '#' + el.id,
      level: Number(el.tagName[1]),
    }));

  // Nest h3s under their preceding h2
  const result: HeaderItem[] = [];
  let currentH2: HeaderItem | null = null;

  for (const h of headings) {
    if (h.level === 2) {
      currentH2 = { ...h, children: [] };
      result.push(currentH2);
    } else if (h.level === 3 && currentH2) {
      currentH2.children!.push(h);
    } else {
      result.push(h);
    }
  }

  headers.value = result;
}

function updateActiveHeading() {
  const docEl = document.querySelector('.vp-doc');
  if (!docEl) return;

  const headingEls = [...docEl.querySelectorAll('h2[id], h3[id]')] as HTMLElement[];
  if (!headingEls.length) return;

  const scrollY = window.scrollY;
  let current = '';

  for (const el of headingEls) {
    if (scrollY >= el.offsetTop - 100) {
      current = el.id;
    }
  }

  // If at bottom of page, activate the last heading
  if (window.innerHeight + scrollY >= document.body.scrollHeight - 10) {
    current = headingEls[headingEls.length - 1]?.id || current;
  }

  if (current) activeId.value = current;
}

// Update marker position when active heading changes
watch(activeId, () => {
  nextTick(() => {
    if (!marker.value) return;
    const id = activeId.value;
    const link = marker.value.parentElement?.querySelector(`a[href="#${CSS.escape(id)}"]`);
    if (link) {
      const container = marker.value.parentElement!;
      marker.value.style.top = `${(link as HTMLElement).offsetTop}px`;
      marker.value.style.height = `${(link as HTMLElement).offsetHeight}px`;
      marker.value.style.opacity = '1';
    } else {
      marker.value.style.opacity = '0';
    }
  });
});

let mutationObserver: MutationObserver | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

function debouncedScan() {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    scanHeaders();
    updateActiveHeading();
  }, 100);
}

onMounted(() => {
  nextTick(() => {
    scanHeaders();
    updateActiveHeading();
  });

  // Re-scan when DOM changes (tab switching, dynamic content)
  const docEl = document.querySelector('.vp-doc');
  if (docEl) {
    mutationObserver = new MutationObserver(debouncedScan);
    mutationObserver.observe(docEl, { childList: true, subtree: true });
  }

  window.addEventListener('scroll', updateActiveHeading, { passive: true });
});

onUnmounted(() => {
  if (mutationObserver) mutationObserver.disconnect();
  if (debounceTimer) clearTimeout(debounceTimer);
  window.removeEventListener('scroll', updateActiveHeading);
});

function handleClick(e: MouseEvent, link: string) {
  e.preventDefault();
  const el = document.querySelector(link);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', link);
  }
}
</script>

<template>
  <div class="VPDocAsideOutline" :class="{ 'has-outline': headers.length > 0 }">
    <div class="content">
      <div class="outline-marker" ref="marker" />
      <div class="outline-title" role="heading" aria-level="2">
        On this page
      </div>
      <nav aria-label="Table of Contents">
        <ul class="root">
          <li v-for="header in headers" :key="header.link">
            <a
              class="outline-link"
              :class="{ active: activeId === header.link.slice(1) }"
              :href="header.link"
              :title="header.title"
              @click="handleClick($event, header.link)"
            >
              {{ header.title }}
            </a>
            <ul v-if="header.children?.length" class="nested">
              <li v-for="child in header.children" :key="child.link">
                <a
                  class="outline-link"
                  :class="{ active: activeId === child.link.slice(1) }"
                  :href="child.link"
                  :title="child.title"
                  @click="handleClick($event, child.link)"
                >
                  {{ child.title }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.VPDocAsideOutline {
  display: none;
}

.VPDocAsideOutline.has-outline {
  display: block;
}

.content {
  position: relative;
  border-left: 1px solid var(--vp-c-divider);
  padding-left: 16px;
  font-size: 13px;
  font-weight: 500;
}

.outline-marker {
  position: absolute;
  top: 32px;
  left: -1px;
  z-index: 0;
  opacity: 0;
  width: 2px;
  border-radius: 2px;
  height: 18px;
  background-color: var(--vp-c-brand-1);
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), height 0.25s cubic-bezier(0, 1, 0.5, 1), opacity 0.25s;
}

.outline-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.4px;
  line-height: 28px;
}

nav {
  margin-top: 4px;
}

.root {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nested {
  list-style: none;
  padding: 0 0 0 13px;
  margin: 0;
}

.outline-link {
  display: block;
  line-height: 28px;
  font-size: 13px;
  font-weight: 400;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  transition: color 0.25s;
}

.outline-link:hover,
.outline-link.active {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.outline-link.active {
  font-weight: 500;
}
</style>
