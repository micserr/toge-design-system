import { computed } from 'vue';
import type { LogoPropTypes } from './logo';
import { Cloudinary } from '@cloudinary/url-gen';

const CLOUD_NAME = 'dfeykvudc';

const NAME_MAP: Record<string, string> = {
  'hr': 'Sprout HR',
  'hr-mobile': 'Sprout HR Mobile',
  'performance-plus': 'Sprout Performance+',
  'recruit-plus': 'Sprout Recruit+',
  'sail': 'Sprout SAIL',
  'readycash': 'Sprout ReadyCash',
  'readywage': 'Sprout ReadyWage',
};

export function useLogo(props: LogoPropTypes) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  const logoSrc = computed(() => cld.image(`sprout-${props.name}-${props.theme}`).toURL());

  const logoTitle = computed(() => {
    if (props.name in NAME_MAP) {
      return NAME_MAP[props.name];
    }

    const firstChar = props.name.charAt(0).toUpperCase();
    const remainingChars = props.name.slice(1);
    const formattedName = `${firstChar}${remainingChars}`;
    return `Sprout ${formattedName}`;
  });

  return {
    logoSrc,
    logoTitle,
  };
}
