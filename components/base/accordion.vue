<template>
  <div class="w-full">
    <div>
      <slot :open="open" :trigger="trigger" name="header"></slot>
    </div>
    <div style="transition-duration: 500ms" ref="container" class="overflow-hidden ease-in-out transition-all" :style="open ? `height: ${container.scrollHeight}px; transition-duration: ${duration}` : 'height: 0px'">
      <slot :open="open" :trigger="trigger"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const openIndex = useState('open_accordion_index', () => -1);
const container = ref();
const openRef = ref(false);
const {
  index,
  multipleOpen = false,
  duration = '500ms',
} = defineProps<{
  index: number;
  multipleOpen?: boolean;
  duration?: `${number}${'ms' | 's'}`;
}>();
const open = computed(() => (multipleOpen ? openRef.value : openIndex.value === index));
const trigger = () => (open.value ? ((openIndex.value = -1), (openRef.value = false)) : ((openIndex.value = index), (openRef.value = true)));
</script>
