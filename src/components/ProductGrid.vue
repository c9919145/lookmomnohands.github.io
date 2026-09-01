<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  title: { type: String, required: true },
  products: { type: Array, required: true },
  viewAll: { type: String, default: '' },
})
</script>

<template>
  <section class="container-x py-6">
    <div class="bg-white rounded-xl shadow-sm p-5">
      <div class="flex items-center justify-between mb-5">
        <h2 class="text-xl md:text-2xl font-black text-gray-900 flex items-center gap-2">
          <span class="w-1.5 h-6 bg-brand rounded-full inline-block"></span>
          {{ title }}
        </h2>
        <router-link v-if="viewAll" :to="viewAll" class="text-brand text-sm font-medium hover:underline">
          View all ›
        </router-link>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProductCard v-for="p in products" :key="p.id" :product="p" />
      </div>
    </div>
  </section>
</template>
