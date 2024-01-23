<template>
  <div>
    <div class="pt-[30px] pb-[40px] bg-[#E9F4F4]">
      <div class="container">
        <div class="flex justify-between items-center">
          <h6>Mebel borasida bepul maslahat olish:</h6>
          <form @submit.prevent="" class="flex justify-between w-3/4">
            <label class="inline-block mb-[20px] w-1/3">
              <span class="block text-[18px] font-[400] text-bColor">Ism</span>
              <input
                type="text"
                placeholder="Ism"
                required
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-[12px] text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-[18px] font-[400] text-bColor"
              />
            </label>

            <label class="inline-block mb-[20px] w-1/3">
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
              class="btn self-center flex items-center justify-center px-[35px] py-[15px] bg-pBlue inline-block rounded-[12px] text-pWhite text-[18px] font-[600] cursor-pointer select-none active:scale-[.97] h-[51px]"
            >
              Yuborish
            </button>
          </form>
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