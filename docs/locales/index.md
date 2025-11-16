<script setup>
  import { onMounted } from 'vue';

  window.location.href = '/en/';

  const setLocaleRedirect = () => {
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
