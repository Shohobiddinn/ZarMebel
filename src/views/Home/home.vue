<template>
  <div>
    <HeaderVue />
    <banner />
    <about />
    <product />
    <contact />
    <customer />
    <thought />
  </div>
</template>
  
  <script>
import HeaderVue from "../../components/Header/Header.vue";
import banner from "../Banner/banner.vue";
import about from "../About/about.vue";
import contact from "../Contact/contact.vue";
import customer from "../Customer/customer.vue";
import product from "../Product/product.vue";
import thought from "../Thought/thought.vue";
export default {
  setup() {
    return {};
  },
  components: { HeaderVue, banner, about, product, contact, customer, thought },
};
</script>
  
  <style lang="scss" scoped>
</style>