import type { SetupContext } from 'vue';

import type { SidenavPropTypes, SidenavEmitTypes } from './sidenav';

interface MouseEventWithCtrl extends MouseEvent {
  ctrlKey: boolean;
}

interface Redirect {
  openInNewTab: boolean;
  isAbsoluteURL: boolean;
  link: string;
}

export const useSidenav = (props: SidenavPropTypes, emit: SetupContext<SidenavEmitTypes>['emit']) => {
  const handleRedirect = (e: MouseEventWithCtrl, redirect: Redirect) => {
    if (redirect) {
      if (redirect.openInNewTab) {
        window.open(redirect.link, '_blank');
      } else if (redirect.isAbsoluteURL) {
        location.href = redirect.link;
      } else {
        emit('route-push', redirect.link);
      }
    }
  };

  return {
    handleRedirect,
  };
};
