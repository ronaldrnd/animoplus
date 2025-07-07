<template>
  <div class="flex justify-between items-center">
    <h2 class="text-[#2E2E30] text-[24px] font-bold font-league">{{ title }}</h2>
    <button 
      v-if="hasButton"
      @click="$emit('onClickBtn')"
      class="bg-[#A0522D] text-white p-4 rounded-[14px] shadow-md flex items-center gap-2">
      <img :src="icon" alt="icone patte" class="" />
      {{ btnTitle }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  hasButton: {
    type: Boolean,
    default: false, 
  },
  icon: {
    type: String,
    default: "",
  },
  btnTitle: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(['onClickBtn']);
</script>
