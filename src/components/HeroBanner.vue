<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { heroSlides } from '../data/deals'

const current = ref(0)
let timer = null

function next() {
  current.value = (current.value + 1) % heroSlides.length
}
function prev() {
  current.value = (current.value - 1 + heroSlides.length) % heroSlides.length
}

onMounted(() => {
  timer = setInterval(next, 5000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="container-x py-4 flex gap-4 items-stretch">
    <!-- Main carousel -->
    <div class="relative flex-1 rounded-xl overflow-hidden" style="min-height: 340px;">
      <transition name="slide">
        <div
          :key="current"
          class="absolute inset-0 text-white flex items-center justify-center p-10"
          :style="{ background: heroSlides[current].bg }"
        >
          <div class="text-center max-w-lg">
            <span class="inline-block bg-white/20 backdrop-blur text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {{ heroSlides[current].accent }}
            </span>
            <h1 class="text-4xl md:text-5xl font-black mb-3">{{ heroSlides[current].title }}</h1>
            <p class="text-xl md:text-2xl font-medium opacity-90 mb-1">{{ heroSlides[current].subtitle }}</p>
            <p class="opacity-75 mb-6">{{ heroSlides[current].text }}</p>
            <button class="bg-white text-brand-dark font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              {{ heroSlides[current].cta }}
            </button>
          </div>
        </div>
      </transition>

      <!-- Arrows -->
      <button @click="prev" class="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/30 hover:bg-black/50 rounded-full text-white flex items-center justify-center">‹</button>
      <button @click="next" class="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/30 hover:bg-black/50 rounded-full text-white flex items-center justify-center">›</button>

      <!-- Dots -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          v-for="(s, i) in heroSlides"
          :key="s.id"
          @click="current = i"
          class="w-2.5 h-2.5 rounded-full transition-colors"
          :class="i === current ? 'bg-white' : 'bg-white/40'"
        ></button>
      </div>
    </div>

    <!-- Side mini banners -->
    <div class="hidden lg:flex flex-col gap-4 w-80 shrink-0">
      <div class="flex-1 rounded-xl overflow-hidden relative flex items-center justify-center text-white p-6" style="background: linear-gradient(135deg,#0ea5e9,#0369a1);">
        <div>
          <span class="text-xs font-bold uppercase opacity-80">New Arrivals</span>
          <p class="text-lg font-bold mt-1">Fresh finds every day</p>
        </div>
      </div>
      <div class="flex-1 rounded-xl overflow-hidden relative flex items-center justify-center text-white p-6" style="background: linear-gradient(135deg,#f59e0b,#d97706);">
        <div>
          <span class="text-xs font-bold uppercase opacity-80">Coupons</span>
          <p class="text-lg font-bold mt-1">Save extra on top picks</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: opacity .5s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; }
</style>
