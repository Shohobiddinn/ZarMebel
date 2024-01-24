
<template>
  <div>
    <div class="py-[80px] bg-pWhite">
      <div class="container">
        <h1
          class="text-[38px] font-[600] text-pBlack mb-[40px]"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-duration-aos="1000"
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
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                :data-aos-duration="`${item + 7}00`"
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
        <div class="flex gap-[50px] justify-between">
          <div
            class="max-w-[410px]"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="800"
          >
            <h3
              class="text-[32px] font-semibold text-pBlack mb-5"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="800"
            >
              Savolingiz qoldimi?
            </h3>
            <p
              class="text-[20px] font-normal text-pBlack mb-8"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="900"
            >
              Savolingiz bo’lsa bizga murojat qiling! Biz har qanday savolga
              javob topamiz!
            </p>
            <form @submit.prevent="" class="flex flex-col">
              <label
                class="inline-block mb-[20px]"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="800"
              >
                <span class="block text-[18px] font-[400] text-bColor"
                  >Ism</span
                >
                <input
                  type="text"
                  placeholder="Ism"
                  required
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-[12px] text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-[18px] font-[400] text-bColor"
                />
              </label>

              <label
                class="inline-block mb-[20px]"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
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
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1200"
                type="submit"
                class="btn px-[35px] py-[15px] bg-pBlue inline rounded-[12px] text-pWhite text-[18px] font-[600] cursor-pointer select-none active:scale-[.97] max-w-[145px]"
              >
                Yuborish
              </button>
            </form>
          </div>
          <div
            class="relative translate-x-[-40px]"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="800"
          >
            <div class="rounded-[12px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.9378874119952!2d71.78130132280663!3d40.38293557361136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a4e74c1d51%3A0x74f191ca540db19!2siTeach%20Academy!5e0!3m2!1sru!2s!4v1706015304979!5m2!1sru!2s"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div></div>
            </div>
            <div
              class="absolute w-full h-full border-[2px] rounded-[12px] border-[#87ABAB] z-[-1] top-[40px] left-[40px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-bProduct pt-[20px] pb-[30px]">
      <div class="container flex justify-between px-[20px] items-center">
        <div
          class="logo_img"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="800"
        >
          <router-link to="/">
            <img
              src="../../assets/images/Logo.png"
              class="object-cover w-[210px]"
              alt="Logo"
            />
          </router-link>
          <h6 class="text-[18px] font-semibold text-pBlack mt-5">
            Loyihalashtirildi
            <span class="text-[#04B0B1]">I-Teach Programming</span>
          </h6>
        </div>
        <div
          class="location flex items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <g clip-path="url(#clip0_81_1342)">
              <path
                d="M22 35.3144L30.25 27.113C31.8815 25.4909 32.9925 23.4244 33.4426 21.1746C33.8926 18.9249 33.6615 16.593 32.7785 14.4738C31.8954 12.3546 30.4001 10.5433 28.4815 9.26895C26.563 7.9946 24.3074 7.31442 22 7.31442C19.6926 7.31442 17.437 7.9946 15.5185 9.26895C13.5999 10.5433 12.1046 12.3546 11.2215 14.4738C10.3385 16.593 10.1074 18.9249 10.5574 21.1746C11.0075 23.4244 12.1185 25.4909 13.75 27.113L22 35.3144ZM22 40L11.3933 29.4558C9.29557 27.3703 7.86698 24.7133 7.28821 21.8207C6.70945 18.9282 7.00651 15.9299 8.14183 13.2052C9.27715 10.4804 11.1997 8.15157 13.6665 6.51306C16.1332 4.87455 19.0333 4 22 4C24.9667 4 27.8668 4.87455 30.3335 6.51306C32.8003 8.15157 34.7228 10.4804 35.8582 13.2052C36.9935 15.9299 37.2906 18.9282 36.7118 21.8207C36.133 24.7133 34.7044 27.3703 32.6067 29.4558L22 40ZM22 22.2253C22.8841 22.2253 23.7319 21.8761 24.357 21.2547C24.9821 20.6333 25.3333 19.7904 25.3333 18.9116C25.3333 18.0327 24.9821 17.1899 24.357 16.5684C23.7319 15.947 22.8841 15.5979 22 15.5979C21.1159 15.5979 20.2681 15.947 19.643 16.5684C19.0179 17.1899 18.6667 18.0327 18.6667 18.9116C18.6667 19.7904 19.0179 20.6333 19.643 21.2547C20.2681 21.8761 21.1159 22.2253 22 22.2253ZM22 25.539C20.2319 25.539 18.5362 24.8407 17.286 23.5979C16.0357 22.355 15.3333 20.6693 15.3333 18.9116C15.3333 17.1539 16.0357 15.4681 17.286 14.2253C18.5362 12.9824 20.2319 12.2841 22 12.2841C23.7681 12.2841 25.4638 12.9824 26.714 14.2253C27.9643 15.4681 28.6667 17.1539 28.6667 18.9116C28.6667 20.6693 27.9643 22.355 26.714 23.5979C25.4638 24.8407 23.7681 25.539 22 25.539Z"
                fill="#07CDCF"
              />
            </g>
            <defs>
              <clipPath id="clip0_81_1342">
                <rect width="44" height="44" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div class="title w-[143px] ms-[10px]">
            Andijon shaxar, boychechak 4
          </div>
        </div>
        <div
          class="time"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
        >
          <h1 class="font-bold text-[28px]">09:00 - 20:00</h1>
          <div class="flex items-center gap-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_81_1333)">
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 12H17V14H11V7H13V12Z"
                  fill="black"
                />
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 12H17V14H11V7H13V12Z"
                  fill="#04B0B1"
                />
              </g>
              <defs>
                <clipPath id="clip0_81_1333">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Ish vaqtimiz</p>
          </div>
        </div>
        <div
          class="contact"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
        >
          <h1 class="font-bold text-[28px]">+99897 628 28 82</h1>
          <div class="flex items-center gap-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_81_1327)">
                <path
                  d="M9.366 10.682C10.3043 12.3305 11.6695 13.6957 13.318 14.634L14.202 13.396C14.3442 13.1969 14.5543 13.0569 14.7928 13.0023C15.0313 12.9478 15.2814 12.9825 15.496 13.1C16.9103 13.8729 18.4722 14.3378 20.079 14.464C20.3298 14.4839 20.5638 14.5975 20.7345 14.7823C20.9052 14.9671 21 15.2094 21 15.461V19.923C21.0001 20.1706 20.9083 20.4094 20.7424 20.5932C20.5765 20.777 20.3483 20.8927 20.102 20.918C19.572 20.973 19.038 21 18.5 21C9.94 21 3 14.06 3 5.5C3 4.962 3.027 4.428 3.082 3.898C3.10725 3.6517 3.22298 3.42352 3.40679 3.25763C3.5906 3.09175 3.82941 2.99995 4.077 3H8.539C8.79056 2.99997 9.0329 3.09475 9.21768 3.26545C9.40247 3.43615 9.51613 3.67022 9.536 3.921C9.66222 5.52779 10.1271 7.08968 10.9 8.504C11.0175 8.71856 11.0522 8.96874 10.9977 9.2072C10.9431 9.44565 10.8031 9.65584 10.604 9.798L9.366 10.682ZM6.844 10.025L8.744 8.668C8.20478 7.50409 7.83535 6.26884 7.647 5H5.01C5.004 5.166 5.001 5.333 5.001 5.5C5 12.956 11.044 19 18.5 19C18.667 19 18.834 18.997 19 18.99V16.353C17.7312 16.1646 16.4959 15.7952 15.332 15.256L13.975 17.156C13.4287 16.9437 12.898 16.6931 12.387 16.406L12.329 16.373C10.3676 15.2567 8.74328 13.6324 7.627 11.671L7.594 11.613C7.30691 11.102 7.05628 10.5713 6.844 10.025Z"
                  fill="#04B0B1"
                />
              </g>
              <defs>
                <clipPath id="clip0_81_1327">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Qo’ng’iroq qiling</p>
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
