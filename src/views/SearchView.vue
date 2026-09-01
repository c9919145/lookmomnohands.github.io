<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'

const route = useRoute()
const query = ref(route.query.q || '')

watch(() => route.query.q, (val) => { query.value = val || '' })

const results = computed(() => {
  const q = query.value.toLowerCase().trim()
  if (!q) return products
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.includes(q.replace(/\s+/g, '-'))
  )
})
</script>

<template>
  <div class="container-x py-6">
    <h1 class="text-xl md:text-2xl font-black text-gray-900 mb-1">
      Search results{{ query ? ` for "${query}"` : '' }}
    </h1>
    <p class="text-sm text-gray-500 mb-6">{{ results.length }} items found</p>

    <div class="bg-white rounded-xl shadow-sm p-5">
      <div v-if="results.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <ProductCard v-for="p in results" :key="p.id" :product="p" />
      </div>
      <div v-else class="text-center py-20 text-gray-500">
        <p class="text-4xl mb-3">🔍</p>
        <p class="font-medium">No products match "{{ query }}".</p>
        <p class="text-sm mt-1">Try browsing categories or a different search term.</p>
      </div>
    </div>
  </div>
</template>
