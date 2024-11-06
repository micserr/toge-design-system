export interface NavLink {
  parentLinks: ParentLink[];
}

export interface ParentLink {
  title: string;
  navTooltip: string;
  icon: object;
  menuLinks: MenuLink[];
}

export interface MenuLink {
  title: string;
  subMenuLinks: SubmenuLinks[];
}

export interface SubmenuLinks {
  title: string;
}
