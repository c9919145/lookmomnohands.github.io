<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { superDeals } from '../data/deals'
import { getProduct } from '../data/products'

const dealItems = superDeals.map((d) => ({ ...d, product: getProduct(d.productId) }))

const endTime = ref(Date.now() + (12 * 3600 + 45 * 60 + 30) * 1000)
let timer = null

const remaining = ref('12 : 45 : 30')

function tick() {
  const diff = Math.max(0, endTime.value - Date.now())
  const h = String(Math.floor(diff / 3600000)).padStart(2, '0')
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0')
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0')
  remaining.value = `${h} : ${m} : ${s}`
}

onMounted(() => {
  tick()
  timer = setInterval(tick, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section class="container-x py-6">
    <div class="bg-white rounded-xl overflow-hidden shadow-sm">
      <!-- Header -->
      <div class="bg-[#ff6b00] text-white p-4 flex items-center justify-between flex-wrap gap-3">
        <div class="flex items-center gap-4">
          <h2 class="text-2xl font-black flex items-center gap-2">
            <span class="inline-block w-3 h-3 bg-white rounded-full"></span>
            SuperDeals
            <span class="inline-block w-3 h-3 bg-white rounded-full"></span>
          </h2>
          <span class="text-sm opacity-90 hidden sm:inline">Ends in:</span>
          <span class="flex items-center gap-1 font-mono font-bold text-lg">
            <span class="bg-black/30 px-2 py-1 rounded">{{ remaining.split(' : ')[0] }}</span>
            <span>:</span>
            <span class="bg-black/30 px-2 py-1 rounded">{{ remaining.split(' : ')[1] }}</span>
            <span>:</span>
            <span class="bg-black/30 px-2 py-1 rounded">{{ remaining.split(' : ')[2] }}</span>
          </span>
        </div>
        <router-link to="/category/consumer-electronics" class="text-sm font-medium hover:underline">View More ›</router-link>
      </div>

      <!-- Deal grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-4 gap-4">
        <router-link
          v-for="deal in dealItems"
          :key="deal.id"
          :to="{ name: 'product', params: { id: deal.product.id } }"
          class="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="relative">
            <img :src="deal.product.image" :alt="deal.product.name" class="w-full aspect-square object-cover group-hover:scale-105 transition-transform" loading="lazy" />
            <span class="absolute left-0 top-0 bg-brand text-white text-sm font-black px-2 py-1">-{{ deal.discount }}%</span>
          </div>
          <div class="p-3">
            <div class="flex items-baseline gap-1.5">
              <span class="text-lg font-bold text-brand">${{ deal.product.price.toFixed(2) }}</span>
              <span class="text-xs text-gray-400 line-through">${{ deal.product.originalPrice.toFixed(2) }}</span>
            </div>
            <p class="text-xs text-gray-500 mt-1">{{ deal.sold.toLocaleString() }}+ sold</p>
            <p class="text-xs text-gray-700 line-clamp-2 mt-1">{{ deal.product.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
