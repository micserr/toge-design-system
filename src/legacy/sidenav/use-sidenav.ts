import { ref, onMounted, watch } from 'vue';

import { LOZENGE_TONE } from '../lozenge/lozenge';

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
  attributes?: Attributes[] | string;
}

export const useSidenav = (props: SidenavPropTypes, emit: SetupContext<SidenavEmitTypes>['emit']) => {
  // Create a separate reactive reference for the navigation data
  const navLinks = ref<NavLinks>({ top: [], bottom: [] });

  const isQuckActionMenuVisible = ref(false);
  const isUserMenuVisible = ref(false);
  const isMobileUserMenuVisible = ref(false);
  const isMobileMenuExpanded = ref(false);

  const handleRedirect = (objectItem: ObjectItem, parentNav: string, menu: string, submenu: string) => {
    if (objectItem && objectItem.redirect) {
      if (objectItem.redirect.openInNewTab) {
        if (typeof window !== 'undefined') {
          window.open(objectItem.redirect.link, '_blank');
        }
      } else if (objectItem.redirect.isAbsoluteURL) {
        if (typeof window !== 'undefined' && typeof location !== 'undefined') {
          location.href = objectItem.redirect.link;
        }
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
    // Guard against SSR where location is undefined
    if (typeof window === 'undefined') return false;

    const domain = window.location.hostname;
    const urlHostname = new URL(url).hostname;
    const isOwnDomain = domain === urlHostname || domain === 'localhost';

    return isOwnDomain;
  };

  const getPathFromUrl = (url: string): string => {
    const parsedUrl = new URL(url);

    if (!parsedUrl) return '';

    const { pathname, search, hash } = parsedUrl;

    return `${pathname}${search}${hash}`;
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
            isAbsoluteURL: true,
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

  const getLozengeTone = (attributes: Attributes | string) => {
    // Handle case where attr is a string (needs conversion)
    if (!attributes) return;

    let parsedAttributes;

    if (typeof attributes === 'string') {
      parsedAttributes = JSON.parse(attributes);
    } else {
      parsedAttributes = attributes;
    }

    if (parsedAttributes.value.tone && LOZENGE_TONE.includes(parsedAttributes.value.tone)) {
      return parsedAttributes.value.tone;
    }

    return 'neutral';
  };

  const getLozengeLabel = (attributes: Attributes | string) => {
    // Handle case where attr is a string (needs conversion)
    if (!attributes) return;

    let parsedAttributes;

    if (typeof attributes === 'string') {
      parsedAttributes = JSON.parse(attributes);
    } else {
      parsedAttributes = attributes;
    }

    if (parsedAttributes.value.label) {
      return String(parsedAttributes.value.label);
    }

    return '';
  };

  // Utility function to convert string attributes to array
  const convertAttributesToArray = (attributes: string | Attributes[] | undefined): Attributes[] => {
    if (!attributes) return [];

    const parseAttributeValue = (raw: unknown): unknown => {
      if (raw === null || raw === undefined) return raw;
      if (typeof raw !== 'string') return raw;

      const trimmed = raw.trim();

      if (!trimmed.startsWith('{') || !trimmed.endsWith('}')) return raw;

      try {
        let jsonLike = trimmed
          // Remove leading/trailing braces will keep them for JSON parse
          .replace(/([{,]\s*)([A-Za-z0-9_]+)\s*:/g, '$1"$2":') // quote keys
          .replace(/'([^']*)'/g, '"$1"'); // single to double quotes inside values

        // If the string still contains escaped quotes from being embedded in JSON previously, unescape them
        jsonLike = jsonLike.replace(/\\"/g, '"');

        return JSON.parse(jsonLike);
      } catch {
        return raw;
      }
    };

    let array: Attributes[] = [];

    if (typeof attributes === 'string') {
      try {
        const parsed = JSON.parse(attributes);
        array = Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        return [];
      }
    } else if (Array.isArray(attributes)) {
      array = attributes;
    }

    // Parse each attribute's value if necessary
    return array.map((attr: Attributes) => {
      if (!attr) return attr;
      const parsedValue = typeof attr.value === 'string' ? parseAttributeValue(attr.value) : attr.value;
      return { ...attr, value: parsedValue } as Attributes;
    });
  };

  const setNavLinkItems = async () => {
    if (props.isNavApi) {
      navLinks.value = await transformedNavItems(props.navLinks);
    } else {
      navLinks.value = props.navLinks;
    }
  };

  watch(
    () => props.navLinks,
    async () => {
      await setNavLinkItems();
    },
    { immediate: true },
  );

  onMounted(async () => {
    await setNavLinkItems();
  });

  return {
    navLinks,
    isQuckActionMenuVisible,
    isUserMenuVisible,
    isMobileUserMenuVisible,
    isMobileMenuExpanded,
    handleRedirect,
    generateId,
    transformedNavItems,
    getLozengeTone,
    getLozengeLabel,
    convertAttributesToArray,
  };
};
