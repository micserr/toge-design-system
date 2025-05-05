import { ref } from 'vue';
import type { SetupContext } from 'vue';

import type { SidenavPropTypes, SidenavEmitTypes } from './sidenav';

interface ObjectItem {
  redirect: {
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
  const isQuckActionMenuVisible = ref(false);

  const isUserMenuVisible = ref(false);

  const userProfileError = ref(false);

  const getUserInitials = (name: string) => {
    const nameArray = name.split(' ');

    const initials = nameArray[0].charAt(0) + (nameArray[1] ? nameArray[1].charAt(0) : '');

    return initials.toUpperCase();
  };

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
  }

  const generateId = (...titles: string[]): string => {
    return titles.map(transformToCamelCaseId).join('_');
  }

  return {
    isQuckActionMenuVisible,
    isUserMenuVisible,
    userProfileError,
    getUserInitials,
    handleRedirect,
    generateId
  };
};
