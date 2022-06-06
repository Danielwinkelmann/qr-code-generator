<template>
  <div class="border-r border-2 flex justify-between flex-col p-8">
    <div class="flex uppercase font-mono justify-start items-center space-x-4 text-lg">
      <IconQrCode class="w-8 h-8"></IconQrCode>
      <p>My QR Code</p>
    </div>
    <div class="flex gap-5 flex-col">
      <BaseMenuItem :active="true" title="Website"><IconWebsite class="w-6 h-6"></IconWebsite></BaseMenuItem>
      <BaseMenuItem title="Upload a file"><IconUpload class="w-6 h-6"></IconUpload></BaseMenuItem>
      <BaseMenuItem title="Text Message"><IconTextMessage class="w-6 h-6"></IconTextMessage></BaseMenuItem>
      <BaseMenuItem title="Image"><IconImage class="w-6 h-6"></IconImage></BaseMenuItem>
      <BaseMenuItem title="Google Doc"><IconGoogleDoc class="w-6 h-6"></IconGoogleDoc></BaseMenuItem>
      <BaseMenuItem title="Instagram"><IconInstagram class="w-6 h-6"></IconInstagram></BaseMenuItem>
      <BaseMenuItem title="Facebook"><IconFacebook class="w-6 h-6"></IconFacebook></BaseMenuItem>
      <BaseMenuItem title="Youtube"><IconYoutube class="w-6 h-6"></IconYoutube></BaseMenuItem>
      <BaseMenuItem title="Wifi"><IconWifi class="w-6 h-6"></IconWifi></BaseMenuItem>
      <BaseMenuItem title="Email"><IconEmail class="w-6 h-6"></IconEmail></BaseMenuItem>
    </div>
    <button @click="data = ''" class="bg-blue-200 text-blue-900 hover:bg-blue-300 flex items-center justify-center space-x-2 duration-200 transition-colors py-4 rounded-lg px-10">  <IconQrCode class="w-4 h-4"></IconQrCode><p>Einstellungen</p></button>
  </div>
</template>

<script setup lang="ts">
import { useDateInput } from '~~/store/states';

const data = useDateInput();
</script>
