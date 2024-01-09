<template>
    <div>
      <HeaderVue ></HeaderVue>
      <banner></banner>
    </div>
  </template>
  
  <script>
  import HeaderVue from '../../components/Header/Header.vue';
  import banner from '../Banner/banner.vue';
  export default {
    setup() {
      return {};
    },
    components: { HeaderVue, banner},
  };
  </script>
  
  <style lang="scss" scoped>
  </style>