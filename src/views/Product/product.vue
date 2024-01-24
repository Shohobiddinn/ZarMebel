<template>
  <div>
    <div class="mb-[80px]">
      <div class="container">
        <div class="flex justify-between items-center gap-[34px]">
          <h2 class="text-[38px] font-[600]">Assortiment</h2>
          <div class="flex justify-between w-full">
            <button
              class="text-[18px] font-[500] bg-bProduct text-[#046A6B] px-[30px] py-[18px] rounded-[15px] rounded-b-none border-[2px] border-[#0C8F8F] border-b-0"
              @click="openTab($event, 'tab1')"
            >
              Barchasi
            </button>
            <button
              class="text-[18px] font-[500] text-[#5B7777] px-[30px] py-[18px] rounded-[15px] rounded-b-none"
              @click="openTab($event, 'tab2')"
            >
              Mebel
            </button>
            <button
              class="text-[18px] font-[500] text-[#5B7777] px-[30px] py-[18px] rounded-[15px] rounded-b-none"
              @click="openTab($event, 'tab3')"
            >
              Ofis uchun
            </button>
            <button
              class="text-[18px] font-[500] text-[#5B7777] px-[30px] py-[18px] rounded-[15px] rounded-b-none"
              @click="openTab($event, 'tab4')"
            >
              Oshxona uchun
            </button>
            <button
              class="text-[18px] font-[500] text-[#5B7777] px-[30px] py-[18px] rounded-[15px] rounded-b-none"
              @click="openTab($event, 'tab5')"
            >
              Yotoqxona uchun
            </button>
            <button
              class="text-[18px] font-[500] text-[#5B7777] px-[30px] py-[18px] rounded-[15px] rounded-b-none"
              @click="openTab($event, 'tab6')"
            >
              Yosh bollar xonasi uchun
            </button>
          </div>
        </div>
        <div
          class="w-full bg-bProduct rounded-[12px] border-[2px] border-[#0C8F8F] p-[50px]"
        >
          <div id="tab1" class="tabcontent p-4">
            <div class="flex flex-wrap gap-[20px]">
              <div
                class="item odd:w-[64%] even:w-[34%]"
                v-for="item in 8"
                :key="item"
              >
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="800"
                  :src="`https://picsum.photos/id/1${item}/1920/1080`"
                  class="rounded-[12px] h-full hover:scale-[1.01] duration-[0.3s]"
                  alt="photo"
                />
              </div>
            </div>
          </div>
          <div id="tab2" class="tabcontent p-4 hidden">
            <div class="flex flex-wrap gap-[20px]">
              <div
                class="item odd:w-[64%] even:w-[34%]"
                v-for="item in 8"
                :key="item"
              >
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="800"
                  :src="`https://picsum.photos/id/2${item}/1920/1080`"
                  class="rounded-[12px] h-full hover:scale-[1.01] duration-[0.3s]"
                  alt="photo"
                />
              </div>
            </div>
          </div>
          <div id="tab3" class="tabcontent p-4 hidden">
            <div class="flex flex-wrap gap-[20px]">
              <div
                class="item odd:w-[64%] even:w-[34%]"
                v-for="item in 8"
                :key="item"
              >
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="800"
                  :src="`https://picsum.photos/id/3${item}/1920/1080`"
                  class="rounded-[12px] h-full hover:scale-[1.01] duration-[0.3s]"
                  alt="photo"
                />
              </div>
            </div>
          </div>
          <div id="tab4" class="tabcontent p-4 hidden">
            <div class="flex flex-wrap gap-[20px]">
              <div
                class="item odd:w-[64%] even:w-[34%]"
                v-for="item in 8"
                :key="item"
              >
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="800"
                  :src="`https://picsum.photos/id/4${item}/1920/1080`"
                  class="rounded-[12px] h-full hover:scale-[1.01] duration-[0.3s]"
                  alt="photo"
                />
              </div>
            </div>
          </div>
          <div id="tab5" class="tabcontent p-4 hidden">
            <div class="flex flex-wrap gap-[20px]">
              <div
                class="item odd:w-[64%] even:w-[34%]"
                v-for="item in 8"
                :key="item"
              >
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="800"
                  :src="`https://picsum.photos/id/5${item}/1920/1080`"
                  class="rounded-[12px] h-full hover:scale-[1.01] duration-[0.3s]"
                  alt="photo"
                />
              </div>
            </div>
          </div>
          <div id="tab6" class="tabcontent p-4 hidden">
            <div class="flex flex-wrap gap-[20px]">
              <div
                class="item odd:w-[64%] even:w-[34%]"
                v-for="item in 8"
                :key="item"
              >
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="800"
                  :src="`https://picsum.photos/id/6${item}/1920/1080`"
                  class="rounded-[12px] h-full hover:scale-[1.01] duration-[0.3s]"
                  alt="photo"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex justify-end items-center mt-[30px] gap-[30px]"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="800"
        >
          <h5 class="text-[20px] font-[600] text-bColor">
            <span class="text-[#F50000]">*</span> Butun assortiment ro’yxatini
            yuklab oling!
          </h5>
          <button
            class="bg-pBlue text-pWhite py-[15px] px-[35px] rounded-[12px] select-none active:scale-[.97]"
          >
            Yuklab olish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  methods: {
    openTab(evt, tabName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.add("hidden");
      }
      tablinks = document.getElementsByTagName("button");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove(
          "bg-bProduct",
          "text-[#046A6B]",
          "border-[2px]",
          "border-[#0C8F8F]"
        );
        tablinks[i].classList.add("text-[#5B7777]");
      }
      document.getElementById(tabName).classList.remove("hidden");
      evt.currentTarget.classList.add(
        "bg-bProduct",
        "text-[#046A6B]",
        "border-[2px]",
        "border-[#0C8F8F]",
        "border-b-0"
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.item {
  width: 300px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.item:nth-child(1) {
  flex: calc(65% - 10px);
}
.item:nth-child(2) {
  flex: calc(35% - 10px);
}
.item:nth-child(3) {
  flex: calc(35% - 10px);
}
.item:nth-child(4) {
  flex: calc(65% - 10px);
}
.item:nth-child(5) {
  flex: calc(65% - 10px);
}
.item:nth-child(6) {
  flex: calc(35% - 10px);
}
.item:nth-child(7) {
  flex: calc(35% - 10px);
}
.item:nth-child(8) {
  flex: calc(65% - 10px);
}
</style>