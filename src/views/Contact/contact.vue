<template>
  <div>
    <div class="pb-[80px]">
      <div class="container">
        <div class="flex justify-between">
          <div
            class="max-w-[541px]"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="800"
          >
            <h1
              class="text-[38px] font-[600] text-pBlack mb-[24px]"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="900"
            >
              Aynan qandaydur o’lcham bo’yicha istalgan mebelingizni
              yasattirmoqchimsiz?
            </h1>
            <p
              class="text-[18px] font-[400] text-pBlack mb-[41px]"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
            >
              Bizning mutaxassislar sizga
              <a
                href="#"
                class="text-[18px] font-[700] text-[#04B0B1] uppercase border-pBlue px-[5px] rounded-lg border-dotted border-[2px]"
                >bepul
              </a>
              siz xoxlagan olchamda va materialda mebel narxini chiqarib
              berishadi
            </p>
            <h5
              class="text-[20px] font-[600] text-pBlack mb-[20px]"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1100"
            >
              Mutaxassis orqali sizga kerakli mebel narxini
              <a
                href="#"
                class="text-[18px] font-[700] text-[#04B0B1] uppercase"
                >bepul
              </a>
              xisoblash uchun telefon raqamingizni qoldiring
            </h5>
            <form
              @submit.prevent=""
              class="flex flex-col"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1200"
            >
              <label class="inline-block mb-[20px]">
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
            </form>
          </div>
          <div
            class="relative translate-x-[-40px]"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="800"
          >
            <img
              src="../../assets/images/contact.png"
              class="object-cover relative z-[1]"
              alt="photo"
            />
            <div
              class="absolute z-[-1] border-[3px] translate-x-[40px] translate-y-[20px] left-0 top-0 bottom-0 right-0 rounded-[12px] border-bColor"
            ></div>
          </div>
        </div>
        <div
          class="flex items-center gap-[30px] mt-[30px]"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <button
            type="submit"
            class="btn px-[35px] py-[15px] bg-pBlue inline rounded-[12px] text-pWhite text-[18px] font-[600] cursor-pointer select-none active:scale-[.97]"
          >
            Yuborish
          </button>
          <h5 class="text-[16px] font-[600] text-bColor">
            <span class="text-[20px] text-[#F50000]">*</span> Konsultatsiya
            olish mutlaqo bepul bo’lib, sizdan hech qanday to’lovni amalga
            oshirish talab qilinmaydi!
          </h5>
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
</style>