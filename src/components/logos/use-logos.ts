import { computed, ref } from 'vue';
import type { LogosPropTypes } from './logos';
import { Cloudinary } from '@cloudinary/url-gen';

const CLOUD_NAME = 'dfeykvudc';
export function useLogos(props: LogosPropTypes) {
  const logoRef = ref<HTMLImageElement | null>(null); // Ref for the img element

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  const logoSrc = computed(() => cld.image(`sprout-${props.name}-${props.theme}`));

  const logoAlt = computed(() => props.name + '-' + props.theme);

  return {
    logoRef,
    logoSrc,
    logoAlt,
  };
}
