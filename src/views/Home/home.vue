<template>
  <div>
    <HeaderVue></HeaderVue>
    <banner></banner>
    <about></about>
  </div>
</template>
  
  <script>
import HeaderVue from "../../components/Header/Header.vue";
import banner from "../Banner/banner.vue";
import about from "../About/about.vue";
export default {
  setup() {
    return {};
  },
  components: { HeaderVue, banner, about },
};
</script>
  
  <style lang="scss" scoped>
</style>