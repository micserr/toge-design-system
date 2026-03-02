import type { PropType, ExtractPropTypes } from 'vue';

const SIDEPANEL_SIZE = ['sm', 'md', 'lg', 'xl'] as const;
const SIDEPANEL_POSITION = ['right'] as const;

export const sidepanelPropTypes = {
  /**
   * @description Controls whether the side panel is open.
   * Set to `true` to display the side panel or `false` to hide it.
   */
  isOpen: {
    type: Boolean,
    default: false,
  },
  /**
   * @description The title displayed in the side panel's header.
   * If not provided, defaults to 'Sidepanel Header'.
   */
  headerTitle: {
    type: String,
    default: 'Sidepanel Header',
  },
  headerSubtitle: {
    type: String    
  },
  /**
   * @description Specifies the size of the side panel.
   * Acceptable values are: `'sm'`, `'md'`, `'lg'`, `'xl'`.
   * Defaults to `'sm'`.
   */
  size: {
    type: String as PropType<(typeof SIDEPANEL_SIZE)[number]>,
    validator: (value: (typeof SIDEPANEL_SIZE)[number]) => SIDEPANEL_SIZE.includes(value),
    default: 'sm',
  },
  /**
   * @description Sets the height of the side panel.
   * Accepts a string (e.g., `'500px'`, `'70vh'`) or a number (interpreted as pixels).
   * Defaults to `'calc(100vh - 32px)'`.
   */
  height: {
    type: [String, Number],
    default: 'calc(100vh - 32px)',
  },
  /**
   * @description Controls the visibility of the side panel header.
   * Set to `true` to hide the header, or `false` to display it.
   * Defaults to `false`.
   */
  hideHeader: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Specifies the position of the side panel.
   * Currently, only `'right'` is supported.
   * Defaults to `'right'`.
   */
  position: {
    type: String as PropType<(typeof SIDEPANEL_POSITION)[number]>,
    validator: (value: (typeof SIDEPANEL_POSITION)[number]) => SIDEPANEL_POSITION.includes(value),
    default: 'right',
  },
  /**
   * @description Determines whether a backdrop is displayed behind the side panel.
   * Set to `true` to enable the backdrop, or `false` to disable it.
   * Defaults to `true`.
   */
  hasBackdrop: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Controls whether clicking outside the side panel should close it.
   * Set to `true` to enable closing on outside click, or `false` to disable it.
   * Defaults to `false`.
   */
  closeOutside: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Controls whether clicking ESC button should close it.
   * Set to `true` to enable closing on ESC button click, or `false` to disable it.
   * Defaults to `true`.
   */
  escapeClose: {
    type: Boolean,
    default: true,
  },
  isStacking: {
    type: Boolean,
    default: false,
  },
  footerNoPadding: {
    type: Boolean,
    default: false,
  },
  isExpandable: {
    type: Boolean,
    default: false
  },
  isExpanded: {
    type: Boolean,
    default: false
  },
  isActivePanel: {
    type: Boolean,
    default: false
  },
  footerNoTopBorder: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  }
};

export const sidepanelEmitTypes = {
  close: Function,
  onClose: Function,
  shrink: Function,
  expand: Function,
};

export type SidepanelPropTypes = ExtractPropTypes<typeof sidepanelPropTypes>;
export type SidepanelEmitTypes = typeof sidepanelEmitTypes;
