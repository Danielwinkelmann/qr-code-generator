<template>
  <div class="flex-1 items-center justify-center flex">
    <div class="flex space-y-2 flex-col">
      <input class="appearance-none placeholder-black bg-transparent focus:outline-none border-none text-5xl font-bold focus:border-transparent" v-model="data" autocomplete="off" type="text" placeholder="Enter your website URL" />
      <p class="text-slate-300 ml-3 text-lg">Your QR code will be generated automatically</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDateInput } from '~~/store/states';



const data = useDateInput();
</script>
