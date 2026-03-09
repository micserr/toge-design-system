import type { AuditTrailPropTypes } from './audit-trail';
import { toRefs, reactive, nextTick, onMounted, onUnmounted, ref } from 'vue';
export const useAuditTrail = (props: AuditTrailPropTypes) => {
  const { auditTrailLogs, alwaysOpen } = toRefs(props);

  const collapsedState = reactive(auditTrailLogs.value.map((_, index) => index === 0));

  const toggleCollapse = (index: number) => {
    if (index < 0 || index >= collapsedState.length) return;

    collapsedState[index] = !collapsedState[index];
    if (!alwaysOpen.value) {
      collapsedState.forEach((_, i) => {
        if (i !== index) {
          collapsedState[i] = false;
        }
      });
    }
  };
  const auditTrailWrapperRef = ref<HTMLElement | null>(null);
  const titleRefs = reactive<{ [key: number]: HTMLElement | null }>({});
  const isMultiLine = reactive<{ [key: number]: boolean }>({});
  const resizeObserver = ref<ResizeObserver | null>(null);

  const setTitleRef = (el: unknown, index: number) => {
    const element = el as HTMLElement;
    titleRefs[index] = element;
    if (element) {
      checkIfMultiLine(element, index);
    }
  };

  const checkIfMultiLine = (element: HTMLElement, index: number) => {
    nextTick(() => {
      const computedStyle = getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const elementHeight = element.offsetHeight;

      // If lineHeight is 'normal', calculate it based on font size
      const actualLineHeight = isNaN(lineHeight) ? parseFloat(computedStyle.fontSize) * 1.2 : lineHeight;

      isMultiLine[index] = elementHeight > actualLineHeight * 1.1;
    });
  };

  const checkAllMultiLine = (): void => {
    Object.entries(titleRefs).forEach(([indexStr, el]) => {
      if (el) {
        const index = parseInt(indexStr, 10);
        checkIfMultiLine(el, index);
      }
    });
  };

  onMounted(() => {
    nextTick(() => {
      if (!auditTrailWrapperRef.value) return;
      resizeObserver.value = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target.id === auditTrailWrapperRef.value?.id) {
            checkAllMultiLine();
          }
        }
      });

      resizeObserver.value.observe(auditTrailWrapperRef.value);
    });
  });

  onUnmounted(() => {
    resizeObserver.value?.disconnect();
  });

  return {
    auditTrailLogs,
    collapsedState,
    toggleCollapse,
    setTitleRef,
    isMultiLine,
    auditTrailWrapperRef,
  };
};
