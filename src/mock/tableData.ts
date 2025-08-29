import { ref } from "vue";

const data = ref([
  ...Array.from({ length: 100 }, (_, i) => ({
    name: {
      title: `Shift ${i + 1}`,
      subtext: `Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam. Item ${i + 1}`,
      image: `https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg`,
    },
    lastUpdate: {
      title: `Nov ${((i % 30) + 1)}, 2025`,
      subtext: `Lorem ipsum dolor item ${i + 1}`,
      image: `https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg`,
    },
    status: {
      title: ['Success', 'Pending', 'Failed'][i % 3],
      subtext: `Lorem ipsum dolor sit amet, consectetur, sed etiam. Status ${i + 1}`,
      image: `https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg`,
    },
  }))
]);

export default data;
