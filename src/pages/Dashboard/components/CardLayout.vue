<template>
  <div
    class="p-4 w-full bg-white rounded-xl inline-flex flex-col gap-4 justify-between items-start overflow-hidden border border-neutral-200"
  >
    <div class="self-stretch inline-flex justify-between items-center">
      <div
        class="text-center justify-start text-zinc-800 text-base font-bold font-['League_Spartan']"
      >
        {{ title }}
      </div>
      <div>
        <RouterLink
          to="/#"
          class="cursor-pointer text-center justify-start text-green-600 text-base font-bold font-['League_Spartan']"
        >
          Voir plus</RouterLink
        >
      </div>
    </div>

    <hr />

    <slot></slot>
  </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: "Titre",
    },
});
</script>

<style scoped>

</style>
