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

export type NavLinks = {
  top: { parentLinks: ParentLinkItem[] }[];
  bottom: { parentLinks: ParentLinkItem[] }[];
};

export type NavAPILinks = {
  top: { parentLinks: NavItem[] }[];
  bottom: { parentLinks: NavItem[] }[];
};

export type ParentLinkItem = {
  title: string;
  icon: string;
  link?: string;
  redirect?: Redirect;
  menuLinks: MenuLink[];
  submenuLinks?: SubmenuLink[];
  hidden?: boolean;
};

type MenuLink = {
  menuHeading: string;
  items: MenuLinkItem[] | ParentLinkItem[];
};

type MenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
  submenuLinks: SubmenuLink[];
};

type SubmenuLink = {
  subMenuHeading: string;
  items: SubmenuLinkItem[] | ParentLinkItem[];
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
export interface NavItem {
  groupId: string;
  label: string;
  icon?: string | null;
  url?: string | null;
  isNewTab?: boolean;
  children?: NavItem[] | null;
  groupName?: string | null;
  hidden?: boolean;
}

export interface MappedNavItem {
  title: string;
  icon?: string;
  redirect?: {
      openInNewTab: boolean;
      isAbsoluteURL: boolean;
      link: string;
  };
  menuLinks?: {
      menuHeading: string;
      items: MappedNavItem[];
  }[];
  submenuLinks?: {
      subMenuHeading: string;
      items: MappedNavItem[];
  }[];
}

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
    type: [String, Number],
    validator: (value: string | number) => {
      return typeof value === 'number' || typeof value === 'string';
    },
    default: '',
  },
  requestCount: {
    type: [String, Number],
    validator: (value: string | number) => {
      return typeof value === 'number' || typeof value === 'string';
    },
    default: '',
  },
  userMenu: {
    type: Object as PropType<UserMenu>,
    validator: (value: unknown) => typeof value === 'object',
    default: false,
  },
  isNotifActive: {
    type: Boolean,
    validator: (value: unknown) => typeof value === 'boolean',
    default: false,
  },
  isRequestActive: {
    type: Boolean,
    validator: (value: unknown) => typeof value === 'boolean',
    default: false,
  },
  isNavApi: {
    type: Boolean,
    validator: (value: unknown) => typeof value === 'boolean',
    default: false,
  }
};

export const sidenavEmitTypes = {
  'get-navlink-item': String,
  search: Function,
  notifications: Function,
  requests: Function,
};

export type SidenavPropTypes = ExtractPropTypes<typeof sidenavPropTypes>;
export type SidenavEmitTypes = typeof sidenavEmitTypes;
