<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { getCategory, categories } from '../data/categories'
import { getByCategory, getProduct } from '../data/products'
import { useRouter } from 'vue-router'

const props = defineProps({ slug: { type: String, required: true } })
const router = useRouter()

const sort = ref('popular')

const category = computed(() => getCategory(props.slug))
const all = computed(() => {
  if (!category.value) return []
  const base = getByCategory(category.value.slug)
  return [...base].sort((a, b) => {
    if (sort.value === 'price-asc') return a.price - b.price
    if (sort.value === 'price-desc') return b.price - a.price
    if (sort.value === 'price') return b.discount - a.discount
    return b.sold - a.sold
  })
})

const sortOptions = [
  { value: 'popular', label: 'Best Match' },
  { value: 'price', label: 'Biggest Discount' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]
</script>

<template>
  <div v-if="category" class="container-x py-6">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-4">
      <router-link to="/" class="hover:text-brand">Home</router-link>
      <span class="mx-2">›</span>
      <span class="text-gray-800 font-medium">{{ category.name }}</span>
    </nav>

    <div class="grid md:grid-cols-[240px_1fr] gap-6">
      <!-- Sidebar -->
      <aside class="hidden md:block bg-white rounded-xl shadow-sm p-5 h-fit">
        <h3 class="font-bold text-gray-900 mb-4">{{ category.name }}</h3>
        <button
          v-for="sub in category.subcategories"
          :key="sub"
          class="block w-full text-left text-sm text-gray-600 hover:text-brand py-1.5"
        >
          {{ sub }}
        </button>
        <h3 class="font-bold text-gray-900 mt-6 mb-3">Other Categories</h3>
        <button
          v-for="c in categories.filter((x) => x.slug !== category.slug).slice(0, 6)"
          :key="c.slug"
          @click="router.push({ name: 'category', params: { slug: c.slug } })"
          class="block w-full text-left text-sm text-gray-600 hover:text-brand py-1.5"
        >
          {{ c.name }}
        </button>
      </aside>

      <!-- Main -->
      <div class="bg-white rounded-xl shadow-sm p-5">
        <div class="flex items-center justify-between flex-wrap gap-3 mb-5">
          <h1 class="text-xl font-black text-gray-900">{{ category.name }}</h1>
          <select v-model="sort" class="border rounded px-3 py-2 text-sm bg-white">
            <option v-for="o in sortOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
          </select>
        </div>

        <div v-if="all.length" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard v-for="p in all" :key="p.id" :product="p" />
        </div>
        <div v-else class="text-center py-16 text-gray-500">
          No products in this category yet.
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container-x py-16 text-center text-gray-500">Category not found.</div>
</template>
