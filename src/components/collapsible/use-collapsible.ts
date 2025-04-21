import { computed, toRefs, nextTick, type SetupContext } from 'vue';
import type { CollapsibleProps, CollapsibleEmitTypes } from './collapsible';

export const useCollapsible = (props: CollapsibleProps, emit: SetupContext<CollapsibleEmitTypes>['emit']) => {
  const { modelValue, transitionDuration } = toRefs(props);

  const collapsibleClasses = computed(() => ({
    container: 'spr-w-full',
  }));

  const contentStyle = computed(() => ({
    overflow: 'hidden',
    transition: `max-height ${transitionDuration.value}ms ease-in-out`,
  }));

  const toggleCollapsible = () => {
    emit('update:modelValue', !modelValue.value);
  };

  const onBeforeEnter = (el: Element) => {
    (el as HTMLElement).style.maxHeight = '0px';
  };

  const onEnter = async (el: Element, done: () => void) => {
    await nextTick();
    const element = el as HTMLElement;
    element.style.maxHeight = `${element.scrollHeight}px`;
    setTimeout(() => {
      element.style.maxHeight = ''; // clear inline style after transition
      done();
    }, transitionDuration.value);
  };

  const onBeforeLeave = (el: Element) => {
    const element = el as HTMLElement;
    element.style.maxHeight = `${element.scrollHeight}px`;
  };

  const onLeave = (el: Element, done: () => void) => {
    const element = el as HTMLElement;
    // Force reflow
    void element.offsetHeight;
    element.style.maxHeight = '0px';
    setTimeout(done, transitionDuration.value);
  };

  return {
    collapsibleClasses,
    contentStyle,
    toggleCollapsible,
    onBeforeEnter,
    onEnter,
    onBeforeLeave,
    onLeave,
  };
};
