<script setup>
  import { onMounted } from 'vue';
  import { useData } from 'vitepress';

  const { site } = useData();

  const setLocaleRedirect = () => {
    if (typeof window === 'undefined') return;

    const base = site.value.base || '/';
    let currentLocale = localStorage.getItem('locale');

    switch (currentLocale) {
      case 'th':
        window.location.href = base + 'th/';
        return;
      case 'en':
        window.location.href = base + 'en/';
        return;
      default:
        window.location.href = base + 'en/';
        break;
    }
  };

  onMounted(() => {
    setLocaleRedirect();
  });
</script>
