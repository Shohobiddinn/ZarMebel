<template>
  <div>
    <HeaderVue />
    <banner />
    <about />
    <product />
    <contact />
    <customer />
    <thought />
    <faq />
    <footerVue />
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
import faq from "../Faq/faq.vue";
import footerVue from '../../components/Footer/footer.vue';
export default {
  setup() {
    return {};
  },
  components: {
    HeaderVue,
    banner,
    about,
    // product,
    contact,
    customer,
    thought,
    faq,
    footerVue,
  },
};
</script>
  
  <style lang="scss" scoped>
</style>