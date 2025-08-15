import type { PropType, ExtractPropTypes } from 'vue';

export type QuickAction = {
  menuHeading: string;
  items: QuickActionItem[];
};

export type QuickActionItem = {
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
  attributes?: Attributes[];
};

export type MenuLink = {
  menuHeading: string;
  items: MenuLinkItem[] | ParentLinkItem[];
};

export type MenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
  attributes?: Attributes[];
  submenuLinks: SubmenuLink[];
};

export type SubmenuLink = {
  subMenuHeading: string;
  items: SubmenuLinkItem[] | ParentLinkItem[];
};

export type SubmenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
  attributes?: Attributes[];
};

export type Redirect = {
  openInNewTab: boolean;
  isAbsoluteURL: boolean;
  link: string;
};

export type UserMenu = {
  name: string;
  email: string;
  profileImage: string;
  items: UserMenuItem[];
};

export type UserMenuItem = {
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
  attributes?: Attributes[] | null;
}

export type Attributes = {
  name: string;
  value: unknown | string | number | boolean | AttrLozenge;
};
type AttrLozenge = {
  label: string;
  tone?: string;
}

export interface MappedNavItem {
  title: string;
  icon?: string;
  redirect?: {
    openInNewTab: boolean;
    isAbsoluteURL: boolean;
    link: string;
  };
  attributes?: AttrLozenge | unknown [];
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
  },
};

export const sidenavEmitTypes = {
  'get-navlink-item': String,
  search: Function,
  notifications: Function,
  requests: Function,
};

export type SidenavPropTypes = ExtractPropTypes<typeof sidenavPropTypes>;
export type SidenavEmitTypes = typeof sidenavEmitTypes;
