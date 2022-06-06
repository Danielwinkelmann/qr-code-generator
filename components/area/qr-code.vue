<template>
  <div :style="{ backgroundColor: color.background }" class="border-l flex flex-col items-center p-8 justify-center border-2 w-96">
    <div class="p-4" id="canvas"></div>
    <div class="w-full space-y-2">
      <Accordion :index="6">
        <template #header="{ open, trigger }">
          <button :class="open ? 'rounded-b-none' : 'rounded-b-md'" @click="trigger" class="p-4 text-left uppercase w-full rounded-t-md bg-blue-300">
            <p>Background Color</p>
          </button>
        </template>
        <div class="p-4 bg-blue-200 rounded-b-md"><input v-model="color.background" type="color" /></div>
      </Accordion>
      <Accordion :index="1">
        <template #header="{ open, trigger }">
          <button :class="open ? 'rounded-b-none' : 'rounded-b-md'" @click="trigger" class="p-4 text-left uppercase w-full rounded-t-md bg-blue-300">
            <p>Dot Color</p>
          </button>
        </template>
        <div class="p-4 bg-blue-200 rounded-b-md"><input v-model="color.dots" type="color" /></div>
      </Accordion>
      <Accordion :index="0">
        <template #header="{ open, trigger }">
          <button :class="open ? 'rounded-b-none' : 'rounded-b-md'" @click="trigger" class="p-4 text-left uppercase w-full rounded-t-md bg-blue-300">
            <p>Dot Pattern</p>
          </button>
        </template>
        <div class="p-4 bg-blue-200 rounded-b-md">
          <select v-model="shape.dot" id="dotTypes">
            <option v-for="item of dotTypes" :value="item">{{ item }}</option>
          </select>
        </div>
      </Accordion>
      <Accordion :index="2">
        <template #header="{ open, trigger }">
          <button :class="open ? 'rounded-b-none' : 'rounded-b-md'" @click="trigger" class="p-4 text-left uppercase w-full rounded-t-md bg-blue-300">
            <p>Square Pattern</p>
          </button>
        </template>
        <div class="p-4 bg-blue-200 rounded-b-md">
          <select v-model="shape.corner" id="cornerSquareType">
            <option v-for="item of cornerSquareType" :value="item">{{ item }}</option>
          </select>
        </div>
      </Accordion>
      <Accordion :index="4">
        <template #header="{ open, trigger }">
          <button :class="open ? 'rounded-b-none' : 'rounded-b-md'" @click="trigger" class="p-4 text-left uppercase w-full rounded-t-md bg-blue-300">
            <p>Square Point Pattern</p>
          </button>
        </template>
        <div class="p-4 bg-blue-200 rounded-b-md">
          <select v-model="shape.corderDot" id="cornerDotType">
            <option v-for="item of cornerDotType" :value="item">{{ item }}</option>
          </select>
        </div>
      </Accordion>
      <Accordion :index="5">
        <template #header="{ open, trigger }">
          <button :class="open ? 'rounded-b-none' : 'rounded-b-md'" @click="trigger" class="p-4 text-left uppercase w-full rounded-t-md bg-blue-300">
            <p>Logo</p>
          </button>
        </template>
        <div class="p-4 bg-blue-200 rounded-b-md">
        <input @change="upload" type="file">
        <button v-if="image.image" @click="resetImage">resetImage</button>
        <input v-model="image.margin" min="0" max="30" type="range">
         <input step="0.05" v-model="image.imageSize" min="0.1" max="1" type="range">
        </div>
      </Accordion>
      <div class="space-x-2 flex">
        <button @click="download('svg', 'test')" class="bg-blue-300 hover:bg-blue-400 rounded-md w-full py-4">SVG</button>
        <button @click="download('jpeg', 'test')" class="bg-blue-300 hover:bg-blue-400 rounded-md w-full py-4">JPEG</button>
        <button @click="download('png', 'test')" class="bg-blue-300 hover:bg-blue-400 rounded-md w-full py-4">PNG</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'nuxt/dist/app/compat/capi';
import { useDateInput } from '~~/store/states';
import Accordion from '../base/accordion.vue';
const canvas: Ref<HTMLElement> = ref();
const data = useDateInput();
const resetImage = () => image.image = ''
const upload = (evt: any) =>{
  const [file] = evt.target.files
    if (file) {
    image.image = URL.createObjectURL(file)
  }
}


const { color, shape, cornerDotType, cornerSquareType, dotTypes, image, download } = useQrCode();
</script>

<style></style>
