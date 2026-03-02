import type { PropType, ExtractPropTypes } from 'vue';

const ACCORDION_TRIGGER = ['header', 'button'] as const;

export interface AccordionItem {
  title: string;
  subtitle?: string;
  collapseId: string;
}

/**
 * Defines the prop types for the Accordion component.
 *
 * @property accordionItems - An array of accordion items. This property is required and defaults to an empty array.
 * @property alwaysOpen - A boolean indicating whether multiple accordion items can be open at the same time. Defaults to `false`.
 * @property isDefaultOpen - A boolean indicating whether the accordion is open by default. Defaults to `false`. Won't work if alwaysOpen is false.
 */
export const accordionPropTypes = {
  accordionItems: {
    type: Array as PropType<AccordionItem[]>,
    required: true,
    default: () => [],
  },
  alwaysOpen: {
    type: Boolean,
    default: false,
  },
  isDefaultOpen: {
    type: Boolean,
    default: false
  },
  accordionTrigger: {
    type: String,
    validator: (value: (typeof ACCORDION_TRIGGER)[number]) => ACCORDION_TRIGGER.includes(value),
    default: 'button'
  },
  bordered: {
    type: Boolean,
    default: true
  }
}

export type AccordionPropTypes = ExtractPropTypes<typeof accordionPropTypes>;
