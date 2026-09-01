<script setup>
import { categories } from '../data/categories'
import { useRouter } from 'vue-router'

const router = useRouter()
function go(slug) {
  router.push({ name: 'category', params: { slug } })
}
</script>

<template>
  <section class="container-x py-6">
    <div class="bg-white rounded-xl shadow-sm p-5">
      <div class="flex items-center justify-between mb-5">
        <h2 class="text-xl md:text-2xl font-black text-gray-900 flex items-center gap-2">
          <span class="w-1.5 h-6 bg-brand rounded-full inline-block"></span>
          Shop by category
        </h2>
        <button @click="go('consumer-electronics')" class="text-brand text-sm font-medium hover:underline">All categories ›</button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <button
          v-for="c in categories"
          :key="c.slug"
          @click="go(c.slug)"
          class="group flex flex-col items-center gap-3 rounded-xl p-4 hover:bg-lightgray transition-colors"
        >
          <div
            class="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform"
            :style="{ background: c.color + '22', boxShadow: `0 0 0 4px ${c.color}22` }"
          >
            {{ c.icon }}
          </div>
          <span class="text-sm font-medium text-gray-800 text-center">{{ c.name }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
