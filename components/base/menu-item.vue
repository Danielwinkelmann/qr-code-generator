<template>
  <button :class="active ? 'text-blue-600' : 'text-slate-700'" class="flex hover:text-blue-700 px-2 duration-150 transition-colors rounded-lg py-2 hover:bg-slate-50 justify-start items-center gap-6">
    <slot></slot>
    <p class="font-base">{{ title }}</p>
  </button>
</template>

<script setup lang="ts">
const { active = false, title } = defineProps<{ active?: boolean; title: string }>();
</script>
