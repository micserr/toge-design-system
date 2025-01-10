import type { PropType, ExtractPropTypes } from 'vue';

export const sidenavPropTypes = {
  /**
   * @description Quick actions
   */
  quickActions: {
    type: Array as PropType<
      Array<{
        title: string;
        description: string;
        icon: string;
        iconBgColor: string;
        redirect: {
          openInNewTab: boolean;
          isAbsoluteURL: boolean;
          link: string;
        };
      }>
    >,
    validator: (value: unknown) => Array.isArray(value),
    default: () => [],
  },
  /**
   * @description Search
   */
  hasSearch: {
    type: Boolean,
    validator: (value: unknown) => typeof value === 'boolean',
    default: false,
  },
  /**
   * @description Active Navlink
   */
  activeNav: {
    type: Object as PropType<{ parentNav: string; menu: string; submenu: string }>,
    validator: (value: unknown) => typeof value === 'object',
    default: () => ({ parentNav: '', menu: '', submenu: '' }),
  },
  /**
   * @description Navlinks
   */
  navLinks: {
    type: Array as PropType<
      Array<{
        parentLinks: Array<{
          title: string;
          icon: string;
          link: string;
          redirect: {
            openInNewTab: boolean;
            isAbsoluteURL: boolean;
            link: string;
          };
          menuLinks: Array<{
            menuHeading: string;
            items: Array<{
              title: string;
              redirect: {
                openInNewTab: boolean;
                isAbsoluteURL: boolean;
                link: string;
              };
              submenuLinks: Array<{
                subMenuHeading: string;
                items: Array<{
                  title: string;
                  redirect: {
                    openInNewTab: boolean;
                    isAbsoluteURL: boolean;
                    link: string;
                  };
                }>;
              }>;
            }>;
          }>;
        }>;
      }>
    >,
    validator: (value: unknown) => Array.isArray(value),
    default: () => [],
  },
};

export const sidenavEmitTypes = {
  'get-navlink-item': String,
};

export type SidenavPropTypes = ExtractPropTypes<typeof sidenavPropTypes>;
export type SidenavEmitTypes = typeof sidenavEmitTypes;
