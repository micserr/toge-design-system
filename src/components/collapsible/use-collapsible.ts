import { computed, toRefs, nextTick, SetupContext } from 'vue';
import type { CollapsibleProps, CollapsibleEmitTypes } from './collapsible';

export const useCollapsible = (props: CollapsibleProps, emit: SetupContext<CollapsibleEmitTypes>['emit']) => {
  const { modelValue, transitionDuration } = toRefs(props);

  const collapsibleClasses = computed(() => ({
    container: 'spr-w-full',
  }));

  const contentStyle = computed(() => ({
    transition: `max-height ${transitionDuration.value}ms ease-in-out, opacity ${transitionDuration.value}ms ease-in-out`,
  }));

  const toggleCollapsible = () => {
    emit('update:modelValue', !modelValue.value);
  };

  const onBeforeEnter = (el: Element) => {
    const element = el as HTMLElement;
    element.style.maxHeight = '0px';
    element.style.opacity = '0';
  };

  const onEnter = async (el: Element, done: () => void) => {
    await nextTick();
    const element = el as HTMLElement;
    element.style.transition = `max-height ${transitionDuration.value}ms ease-in-out, opacity ${transitionDuration.value}ms ease-in-out`;
    element.style.maxHeight = `${element.scrollHeight}px`;
    element.style.opacity = '1';
    setTimeout(done, transitionDuration.value);
  };

  const onLeave = (el: Element, done: () => void) => {
    const element = el as HTMLElement;
    element.style.transition = `max-height ${transitionDuration.value}ms ease-in-out, opacity ${transitionDuration.value}ms ease-in-out`;
    element.style.maxHeight = '0px';
    element.style.opacity = '0';
    setTimeout(done, transitionDuration.value);
  };

  return {
    collapsibleClasses,
    contentStyle,
    toggleCollapsible,
    onBeforeEnter,
    onEnter,
    onLeave,
  };
};
