<script setup>
  import { onMounted } from 'vue';

  const setLocaleRedirect = () => {
    if (typeof window === 'undefined') return;
    
    let currentLocale = localStorage.getItem('locale');
    
    switch (currentLocale) {
      case 'th':
        window.location.href = '/th/';
        return;
      case 'en':
        window.location.href = '/en/';
        return;
      default:
        window.location.href = '/en/';
        break;
    }
  };

  onMounted(() => {
    setLocaleRedirect();
  });
</script>
