import { ref, onMounted } from 'vue';

import type { SetupContext } from 'vue';
import type {
  SidenavPropTypes,
  SidenavEmitTypes,
  ParentLinkItem,
  NavLinks,
  NavItem,
  MenuLinkItem,
  Attributes,
} from './sidenav';

interface ObjectItem {
  redirect?: {
    openInNewTab: boolean;
    isAbsoluteURL: boolean;
    link: string;
  };
  activeNav?: {
    parentNav: string;
    menu: string;
    submenu: string;
  };
}

export const useSidenav = (props: SidenavPropTypes, emit: SetupContext<SidenavEmitTypes>['emit']) => {
  // Create a separate reactive reference for the navigation data
  const navLinks = ref<NavLinks>({ top: [], bottom: [] });

  const isQuckActionMenuVisible = ref(false);
  const isUserMenuVisible = ref(false);

  const handleRedirect = (objectItem: ObjectItem, parentNav: string, menu: string, submenu: string) => {
    if (objectItem && objectItem.redirect) {
      if (objectItem.redirect.openInNewTab) {
        window.open(objectItem.redirect.link, '_blank');
      } else if (objectItem.redirect.isAbsoluteURL) {
        location.href = objectItem.redirect.link;
      } else {
        const modifiedObjectItem = { ...objectItem };

        if (parentNav || menu || submenu) {
          modifiedObjectItem.activeNav = {
            parentNav: parentNav,
            menu: menu,
            submenu: submenu,
          };
        }

        emit('get-navlink-item', modifiedObjectItem);
      }
    }
  };

  const transformToCamelCaseId = (str: string) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
  };

  const generateId = (...titles: string[]): string => {
    return titles.map(transformToCamelCaseId).join('_');
  };

  const confirmIfOwnDomain = (url: string) => {
    const domain = window.location.hostname;
    const urlHostname = new URL(url).hostname;
    const isOwnDomain = domain === urlHostname || window.location.hostname === 'localhost';

    return isOwnDomain;
  };

  const getPathFromUrl = (url: string): string => {
    const parsedUrl = new URL(url);

    return parsedUrl ? parsedUrl.pathname : '';
  };

  const navLinkCondition = (link: NavItem) => {
    if (confirmIfOwnDomain(link.url as string)) {
      return getPathFromUrl(link.url as string);
    } else {
      return link.url;
    }
  };

  const groupByGroupId = (items: NavItem[]): { parentLinks: ParentLinkItem[] }[] => {
    const groups: Record<string, NavItem[]> = {};

    items.forEach((item) => {
      if (!groups[item.groupId]) {
        groups[item.groupId] = [];
      }
      groups[item.groupId].push(item);
    });

    return Object.values(groups).map((group) => ({
      parentLinks: group.map((item) => mapItemToNav(item) as ParentLinkItem),
    }));
  };

  const mapItemToNav = (item: NavItem): ParentLinkItem | MenuLinkItem => {
    const groupChildrenByProperty = (
      children: NavItem[] | undefined,
      property: keyof NavItem,
    ): { [key: string]: NavItem[] } => {
      if (!children || children.length === 0) return {};
      return children.reduce((acc: Record<string, NavItem[]>, child) => {
        const key = String(child[property] || '');
        acc[key] = acc[key] || [];
        acc[key].push(child);
        return acc;
      }, {});
    };

    const mapGroupedChildren = (
      groupedChildren: { [key: string]: NavItem[] },
      headingKey: 'menuHeading' | 'subMenuHeading',
    ) => {
      return Object.entries(groupedChildren).map(([groupName, groupItems]) => ({
        [headingKey]: groupName,
        items: groupItems.map(mapItemToNav),
      }));
    };

    const groupedChildren = groupChildrenByProperty(item.children ?? undefined, 'groupName');

    return {
      title: item.label,
      icon: item.icon ?? '',
      redirect: item.url
        ? {
            openInNewTab: item.isNewTab || false,
            isAbsoluteURL: !confirmIfOwnDomain(item.url as string),
            link: navLinkCondition(item) ?? '',
          }
        : undefined,
      menuLinks: mapGroupedChildren(groupedChildren, 'menuHeading') as {
        menuHeading: string;
        items: ParentLinkItem[];
      }[],
      submenuLinks: mapGroupedChildren(groupedChildren, 'subMenuHeading') as {
        subMenuHeading: string;
        items: ParentLinkItem[];
      }[],
      attributes: item.attributes || [],
    };
  };

  // Helper function to extract valid NavItems from an array of objects
  const extractValidNavItems = <T extends Record<string, unknown>>(items: T[]): NavItem[] => {
    return items.filter(
      (item): item is NavItem & T =>
        item !== null &&
        'groupId' in item &&
        'label' in item &&
        typeof item.groupId === 'string' &&
        typeof item.label === 'string',
    ) as NavItem[];
  };

  const transformedNavItems = async (apiData: NavLinks) => {
    // Output type matches navLinks ref type
    const transformedData: NavLinks = { top: [], bottom: [] };

    if (apiData.top && Array.isArray(apiData.top)) {
      const validTopItems = extractValidNavItems(apiData.top);
      transformedData.top = groupByGroupId(validTopItems);
    }

    if (apiData.bottom && Array.isArray(apiData.bottom)) {
      const validBottomItems = extractValidNavItems(apiData.bottom);
      transformedData.bottom = groupByGroupId(validBottomItems);
    }

    return transformedData;
  };

  const getLozengeTone = (attr: Attributes) => {
    if (
      typeof attr === 'object' &&
      attr !== null &&
      'tone' in attr &&
      typeof attr.tone === 'string' &&
      ['danger', 'information', 'plain', 'pending', 'success', 'neutral', 'caution'].includes(attr.tone)
    ) {
      return attr.tone as 'danger' | 'information' | 'plain' | 'pending' | 'success' | 'neutral' | 'caution';
    }
    return 'success'; // Default tone
  };

  const getLozengeLabel = (attr: Attributes) => {
    return attr.value && typeof attr?.value === 'object' && 'label' in attr.value ? String(attr.value.label) : '';
  };

  onMounted(async () => {
    if (props.isNavApi) {
      navLinks.value = await transformedNavItems(props.navLinks);
    } else {
      // Use the original navLinks from props
      navLinks.value = props.navLinks;
    }
  });

  return {
    navLinks,
    isQuckActionMenuVisible,
    isUserMenuVisible,
    handleRedirect,
    generateId,
    transformedNavItems,
    getLozengeTone,
    getLozengeLabel,
  };
};
