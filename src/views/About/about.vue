<template>
  <div class="bg-pWhite py-[80px]">
    <div class="container flex gap-[63px] max-[700px]:flex-col">
      <div
        class="w-6/12 max-[700px]:w-full"
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="800"
      >
        <VideoPlayer
          class="h-full rounded-[12px]"
          :src="video"
          :controls="true"
          :fullscreen="true"
          :responsive="true"
          style="width: 100%"
        />
        <div
          class="flex mt-[12px] gap-[20px]"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="800"
        >
          <p class="text-[14px] text-[#88A1A1] font-[600]">
            Videoda kompaniya haqida gapirilgan.
          </p>
          <p class="text-[14px] text-[#88A1A1] font-[600]">
            Davomiyligi: 3:00 min
          </p>
        </div>
      </div>
      <div
        class="w-6/12 max-[700px]:w-full"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="800"
      >
        <h1
          class="text-[38px] font-[600] text-textBlack mb-[20px]"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
        >
          Biz haqimizda
        </h1>
        <p
          class="text-[18px] font-[400] text-textSblack mb-[68px]"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took
        </p>
        <h5
          class="text-[20px] text-textBlack font-[600] mb-[20px]"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
        >
          Bepul konsultatsiya oling!
        </h5>
        <form
          class=""
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
        >
          <label
            for="tel"
            class="text-[18ox] text-[#88A1A1] font-[400] mb-[12px]"
            >Telefon raqami</label
          >
          <div
            class="border-[1px] border-pBlue rounded-[12px] max-w-[409px] py-[12px] px-[20px] flex gap-[5px]"
          >
            <span
              class="inline-block text-[18px] font-[600] text-pBlack translate-y-[-1px]"
              >+998</span
            >
            <input
              type="tel"
              maxlength="9"
              required
              id="tel"
              class="w-[88%] h-full border-none outline-none text-[18px] font-[600] text-pBlack flex items-center justify-center"
            />
          </div>
          <button
            class="bg-pBlue text-pWhite py-[15px] px-[35px] mt-[30px] rounded-[12px] select-none active:scale-[.97]"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import video from "../../assets/images/videos.mp4";
import image from "../../assets/images/banner_image.png";
export default {
  data() {
    return {};
  },
  components: {
    VideoPlayer,
    video,
    image,
  },
};
</script>