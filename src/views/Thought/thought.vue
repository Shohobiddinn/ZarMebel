<template>
  <div>
    <div class="py-[40px] bg-bProduct">
      <div class="container">
        <h1
          class="text-[38px] font-[600] text-textBlack mb-[40px]"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="800"
        >
          Mijozlarimiz fikri
        </h1>
        <div class="flex flex-wrap gap-[20px]">
          <div
            class="item w-1/2 p-[24px] bg-pWhite rounded-1"
            v-for="item in 8"
            :key="item"
          >
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="800"
            >
              <div class="flex items-center gap-[10px] mb-[20px]">
                <img
                  src="../../assets/images/item_image.png"
                  class="object-cover rounded-[50%] w-[79px] h-[79px]"
                  alt=""
                />
                <div class="self-start">
                  <h5 class="text-[23px] font-[600] text-pBlack">
                    Ajoyib mebel do’koni
                  </h5>
                  <p class="text-[18px] font-[500] text-[#88A1A1]">
                    Eshonov Fakhriyor
                  </p>
                </div>
                <div class="self-end ml-auto">
                  <p class="text-[16px] font-normal text-[#88A1A1]">Mebel</p>
                </div>
              </div>
              <p class="text-[18px] font-[500] text-[#223838] leading-[150%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.item {
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