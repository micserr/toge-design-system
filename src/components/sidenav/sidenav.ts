import type { PropType, ExtractPropTypes } from 'vue';

export const sidenavPropTypes = {
  /**
   * @description Sidenav has quick actions
   */
  hasQuickActions: {
    type: Boolean,
    validator: (value: unknown) => typeof value === 'boolean',
    default: false,
  },
  /**
   * @description Sidenav has search
   */
  hasSearch: {
    type: Boolean,
    validator: (value: unknown) => typeof value === 'boolean',
    default: false,
  },
  /**
   * @description Sidenav active navigation
   */
  activeNav: {
    type: Object as PropType<{ parentNav: string; menu: string; submenu: string }>,
    validator: (value: unknown) => typeof value === 'object',
    default: () => ({ parentNav: '', menu: '', submenu: '' }),
  },
  /**
   * @description Sidenav navlinks
   */
  navLinks: {
    type: Array as PropType<Array<{ parentLinks: Array }>>,
    validator: (value: unknown) => Array.isArray(value),
    default: () => [],
  },
};

export type SidenavPropTypes = ExtractPropTypes<typeof sidenavPropTypes>;
