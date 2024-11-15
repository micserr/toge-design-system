import { ref } from 'vue';

interface MouseEventWithCtrl extends MouseEvent {
  ctrlKey: boolean;
}

interface Redirect {
  isThirdPartyLink: boolean;
  link: string;
}

export const useSidenav = () => {
  const activeMenu = ref<string>('');

  const handleRedirect = (e: MouseEventWithCtrl, redirect: Redirect) => {
    if (redirect && e.ctrlKey && e.button === 0) {
      if (redirect.isThirdPartyLink) {
        window.open(redirect.link, '_blank');
      } else {
        location.href = redirect.link;
      }
    }
  };

  return {
    activeMenu,
    handleRedirect,
  };
};
