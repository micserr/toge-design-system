import type { PropType, ExtractPropTypes } from 'vue';

type QuickAction = {
  menuHeading: string;
  items: QuickActionItem[];
};

type QuickActionItem = {
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
  redirect: Redirect;
  hidden: boolean;
};

type NavLinks = {
  top: { parentLinks: ParentLinkItem[] }[];
  bottom: { parentLinks: ParentLinkItem[] }[];
};

type ParentLinkItem = {
  title: string;
  icon: string;
  link: string;
  redirect: Redirect;
  menuLinks: MenuLink[];
  hidden: boolean;
};

type MenuLink = {
  menuHeading: string;
  items: MenuLinkItem[];
};

type MenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
  submenuLinks: SubmenuLink[];
};

type SubmenuLink = {
  subMenuHeading: string;
  items: SubmenuLinkItem[];
};

type SubmenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
};

type Redirect = {
  openInNewTab: boolean;
  isAbsoluteURL: boolean;
  link: string;
};

type UserMenu = {
  name: string;
  email: string;
  profileImage: string;
  items: UserMenuItem[];
};

type UserMenuItem = {
  title: string;
  icon: string;
  hidden: boolean;
  redirect: Redirect;
};

export const sidenavPropTypes = {
  quickActions: {
    type: Array as PropType<QuickAction[]>,
    validator: (value: unknown) => Array.isArray(value),
    default: () => [],
  },
  hasSearch: {
    type: Boolean,
    validator: (value: unknown) => typeof value === 'boolean',
    default: false,
  },
  activeNav: {
    type: Object as PropType<{ parentNav: string; menu: string; submenu: string }>,
    validator: (value: unknown) => typeof value === 'object',
    default: () => ({ parentNav: '', menu: '', submenu: '' }),
  },
  navLinks: {
    type: Object as PropType<NavLinks>,
    default: () => [],
  },
  notificationCount: {
    type: Number,
    validator: (value: number) => typeof value === 'number',
    default: 0,
  },
  userMenu: {
    type: Object as PropType<UserMenu>,
    validator: (value: unknown) => typeof value === 'object',
    default: false,
  },
};

export const sidenavEmitTypes = {
  'get-navlink-item': String,
  search: Function,
  notifications: Function,
};

export type SidenavPropTypes = ExtractPropTypes<typeof sidenavPropTypes>;
export type SidenavEmitTypes = typeof sidenavEmitTypes;
