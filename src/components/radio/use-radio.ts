import { computed, ref, ComputedRef } from "vue";
import { useElementHover } from "@vueuse/core";
import classNames from "classnames";
import type { RadioPropTypes } from "./radio";

export const useRadioButton = (props: RadioPropTypes) => {
  const radioRef = ref<HTMLInputElement | null>(null);
  const isHovered = useElementHover(radioRef);

  const radioClasses: ComputedRef<string> = computed(() => {
    const baseClasses = "tw-sr-only tw-peer tw-inline-block";
  
    if (props.disabled) {
      return classNames(baseClasses, "tw-cursor-not-allowed");
    }
  
    return baseClasses;
  });

  const indicatorClasses: ComputedRef<string> = computed(() => {
    const baseClasses =
      "tw-inline-block tw-w-4 tw-h-4 tw-rounded-full tw-border-2 tw-border-solid tw-mr-2 tw-shrink-0";

    if (props.disabled) {
      return classNames(
        baseClasses,
        props.modelValue === props.value
          ? "tw-border-color-disabled tw-background-color-disabled tw-shadow-[inset_0px_0px_0px_2.5px_#fff] tw-cursor-not-allowed"
          : "tw-border-color-disabled tw-background-color tw-cursor-not-allowed"
      );
    }

    if (isHovered.value) {
      return classNames(
        baseClasses,
        props.modelValue === props.value
          ? "tw-background-color-brand-hover tw-border-2 tw-border-color-brand-hover tw-shadow-[inset_0px_0px_0px_2.5px_#fff]"
          : "tw-background-color-base tw-border-2 tw-border-color-supporting tw-shadow-[inset_0px_0px_0px_2.5px_#fff]"
      );
    }

    if (props.modelValue === props.value) {
      return classNames(
        baseClasses,
        "tw-border-color-brand-base tw-background-color-brand-base tw-shadow-[inset_0px_0px_0px_2.5px_#fff]"
      );
    }

    return classNames(baseClasses, "tw-border-color-supporting tw-shadow-[inset_0px_0px_0px_2.5px_#fff]");
  });

  const radioLabelClasses: ComputedRef<string> = computed(() => {
    if (props.disabled) {
      return "tw-text-color-disabled tw-cursor-not-allowed";
    }
  
    return "tw-text-color-strong tw-cursor-pointer tw-inline-flex tw-items-center tw-p-0";
  });

  return {
    radioRef,
    radioClasses,
    indicatorClasses,
    radioLabelClasses,
  };
};
