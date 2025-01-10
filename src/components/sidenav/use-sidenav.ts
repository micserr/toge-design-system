import { ref } from 'vue';
import type { SetupContext } from 'vue';

import type { SidenavPropTypes, SidenavEmitTypes } from './sidenav';

interface MouseEventWithCtrl extends MouseEvent {
  ctrlKey: boolean;
}

interface ObjectItem {
  redirect: {
    openInNewTab: boolean;
    isAbsoluteURL: boolean;
    link: string;
  };
}

export const useSidenav = (props: SidenavPropTypes, emit: SetupContext<SidenavEmitTypes>['emit']) => {
  const isQuckActionMenuVisible = ref(false);

  const handleRedirect = (e: MouseEventWithCtrl, objectItem: ObjectItem) => {
    if (objectItem && objectItem.redirect) {
      if (objectItem.redirect.openInNewTab) {
        window.open(objectItem.redirect.link, '_blank');
      } else if (objectItem.redirect.isAbsoluteURL) {
        location.href = objectItem.redirect.link;
      } else {
        emit('get-navlink-item', objectItem);
      }
    }
  };

  return {
    isQuckActionMenuVisible,
    handleRedirect,
  };
};
