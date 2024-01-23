
<template>
  <div>
    <div class="container">
      <h1
        class="text-[38px] font-[600] text-pBlack mb-[40px]"
        data-aos="fade-down"
      >
        Bizning mijozlarimiz ichida
      </h1>
      <div class="relative mb-[80px]">
        <swiper
          :navigation="navigation"
          :modules="modules"
          :slidesPerView="4"
          :spaceBetween="30"
          :loop="true"
          :speed="500"
          @mouseenter="stopAutoPlay"
          @mouseleave="startAutoPlay"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
          }"
          class="swiper h-[184px]"
        >
          <swiper-slide v-for="item in 10" :key="item"
            ><img
              class="rounded-[12px] object-cover w-full h-full hover:scale-[1.01] duration-[0.3s]"
              :src="`https://swiperjs.com/demos/images/nature-${item}.jpg`"
          /></swiper-slide>
        </swiper>
        <div
          class="navigation absolute flex justify-between top-[50%] translate-y-[-50%] z-10 w-[104%] left-[-2%]"
        >
          <div
            class="swiper-prev p-[10px] bg-pBlue rounded-[50%] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_81_1635)">
                <path
                  d="M10.2723 12L16 17.4447L14.3638 19L7 12L14.3638 5L16 6.55531L10.2723 12Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_81_1635">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            class="swiper-next p-[10px] bg-pBlue rounded-[50%] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_81_1640)">
                <path
                  d="M13.7277 12L8 17.4447L9.63615 19L17 12L9.63615 5L8 6.55531L13.7277 12Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_81_1640">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 1 24 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div class="flex">
        <div>
          <h3>Savolingiz qoldimi?</h3>
          <p>
            Savolingiz bo’lsa bizga murojat qiling! Biz har qanday savolga javob
            topamiz!
          </p>
          <form @submit.prevent="" class="flex flex-col">
            <label class="inline-block mb-[20px]">
              <span class="block text-[18px] font-[400] text-bColor">Ism</span>
              <input
                type="text"
                placeholder="Ism"
                required
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-[12px] text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-[18px] font-[400] text-bColor"
              />
            </label>

            <label class="inline-block mb-[20px]">
              <span class="block text-[18px] font-[400] text-bColor"
                >Telefon raqam</span
              >
              <input
                type="text"
                placeholder="Telefon raqam"
                required
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-[12px] text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-[18px] font-[400] text-bColor"
              />
            </label>
            <button
              type="submit"
              class="btn px-[35px] py-[15px] bg-pBlue inline rounded-[12px] text-pWhite text-[18px] font-[600] cursor-pointer select-none active:scale-[.97]"
            >
              Yuborish
            </button>
          </form>
        </div>
        <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.9378874119952!2d71.78130132280663!3d40.38293557361136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a4e74c1d51%3A0x74f191ca540db19!2siTeach%20Academy!5e0!3m2!1sru!2s!4v1706015304979!5m2!1sru!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";
SwiperCore.use([Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
      navigation: {
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
      },
    };
  },
  methods: {
    stopAutoPlay() {
      this.$refs.swiper.swiper.autoplay.stop();
    },
    startAutoPlay() {
      this.$refs.swiper.swiper.autoplay.start();
    },
  },
};
</script>
