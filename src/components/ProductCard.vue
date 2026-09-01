<script setup>
const props = defineProps({
  product: { type: Object, required: true },
})

function ratingClass(base) {
  const b = Math.floor(base)
  return `★`.repeat(b) + (base % 1 >= 0.5 ? '½' : '') + `☆`.repeat(5 - b - (base % 1 >= 0.5 ? 1 : 0))
}
</script>

<template>
  <router-link :to="{ name: 'product', params: { id: product.id } }" class="block group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
    <div class="relative">
      <img :src="product.image" :alt="product.name" class="w-full aspect-square object-cover group-hover:scale-105 transition-transform" loading="lazy" />
      <span
        v-if="product.discount"
        class="absolute left-0 top-0 bg-brand text-white text-xs font-bold px-1.5 py-0.5"
      >
        -{{ product.discount }}%
      </span>
      <span
        v-if="product.badge === 'Choice'"
        class="absolute left-0 bottom-0 bg-[#ffb800] text-black text-[10px] font-bold px-1.5 py-0.5"
      >
        Choice
      </span>
    </div>

    <div class="p-3 flex flex-col gap-1.5 flex-1">
      <div class="flex items-center justify-between">
        <span class="text-yellow-500 text-sm tracking-tight">{{ ratingClass(product.rating) }}</span>
        <span class="text-xs text-gray-400">{{ product.reviews.toLocaleString() }}+ sold</span>
      </div>

      <h3 class="text-sm text-gray-800 line-clamp-2 min-h-[2.5rem]">{{ product.name }}</h3>

      <div class="flex items-baseline gap-2 mt-auto">
        <span class="text-lg font-bold text-brand">US ${{ product.price.toFixed(2) }}</span>
        <span v-if="product.originalPrice" class="text-xs text-gray-400 line-through">
          US ${{ product.originalPrice.toFixed(2) }}
        </span>
      </div>

      <span v-if="product.shipping" class="text-[11px] text-green-600">{{ product.shipping }}</span>
      <span v-else class="text-[11px] text-gray-400">Standard Shipping</span>
    </div>
  </router-link>
</template>
