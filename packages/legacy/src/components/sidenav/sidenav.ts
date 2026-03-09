import type { PropType, ExtractPropTypes } from 'vue';

import { LozengePropTypes, type LOZENGE_TONE } from '../lozenge/lozenge';

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
  top: ParentLink[];
  bottom: ParentLink[];
};

export type ParentLink = {
  parentLinks: ParentLinkItem[];
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
  attributes?: Attributes[] | string;
};

export type MenuLink = {
  menuHeading: string;
  items: MenuLinkItem[] | ParentLinkItem[];
};

export type MenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
  attributes?: Attributes[] | string;
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
  attributes?: Attributes[] | string;
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
  attributes?: Attributes[] | string | null;
}

export type Attributes = {
  name: string;
  value: unknown | string | number | boolean | AttrLozenge;
};

export type ActiveNav = {
  parentNav: string;
  menu: string;
  submenu: string;
};

export type AttrLozenge = LozengePropTypes;

export interface MappedNavItem {
  title: string;
  icon?: string;
  redirect?: {
    openInNewTab: boolean;
    isAbsoluteURL: boolean;
    link: string;
  };
  attributes?: Attributes[] | string | unknown[];
  menuLinks?: {
    menuHeading: string;
    items: MappedNavItem[];
  }[];
  submenuLinks?: {
    subMenuHeading: string;
    items: MappedNavItem[];
  }[];
}

export interface ConvertedNavAttribute extends Attributes {
  lozengeLabel?: string;
  lozengeTone?: (typeof LOZENGE_TONE)[number];
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
    type: Object as PropType<ActiveNav>,
    validator: (value: unknown) => typeof value === 'object',
    default: () => ({ parentNav: '', menu: '', submenu: '' }),
  },
  navLinks: {
    type: Object as PropType<NavLinks>,
    default: () => ({ top: [], bottom: [] }),
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
    validator: (value: unknown) => value === null || typeof value === 'object',
    default: null,
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
  loading: {
    type: Boolean,
    validator: (value: unknown) => typeof value === 'boolean',
    default: false,
  },
  teleportToBody: {
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
