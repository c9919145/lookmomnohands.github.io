<script setup>
import { ref, computed } from 'vue'
import { getProduct, products } from '../data/products'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'

const props = defineProps({ id: { type: String, required: true } })
const cart = useCartStore()
const router = useRouter()

const product = computed(() => getProduct(props.id))
const qty = ref(1)
const activeImage = ref(0)

const related = computed(() => products.filter((p) => p.id !== props.id).slice(0, 6))

function addToCart() {
  if (!product.value) return
  cart.add(product.value, qty.value)
  router.push('/cart')
}
</script>

<template>
<div v-if="product">
  <div class="container-x py-6">
    <nav class="text-sm text-gray-500 mb-4">
      <router-link to="/" class="hover:text-brand">Home</router-link>
      <span class="mx-2">›</span>
      <router-link :to="{ name: 'category', params: { slug: product.category } }" class="hover:text-brand capitalize">
        {{ product.category.replace(/-/g, ' ') }}
      </router-link>
      <span class="mx-2">›</span>
      <span class="text-gray-800">{{ product.name }}</span>
    </nav>

    <!-- Main product block -->
    <div class="bg-white rounded-xl shadow-sm p-6 grid lg:grid-cols-2 gap-8">
      <!-- Gallery -->
      <div class="flex flex-col-reverse md:flex-row gap-4">
        <div class="flex md:flex-col gap-2">
          <button
            v-for="(s, i) in 3"
            :key="i"
            @click="activeImage = i"
            class="w-16 h-16 rounded border-2 overflow-hidden shrink-0"
            :class="activeImage === i ? 'border-brand' : 'border-transparent'"
          >
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
          </button>
        </div>
        <div class="relative flex-1">
          <img :src="product.image" :alt="product.name" class="w-full aspect-square object-cover rounded-lg" />
          <span v-if="product.discount" class="absolute left-0 top-0 bg-brand text-white text-lg font-black px-3 py-1">
            -{{ product.discount }}%
          </span>
          <span v-if="product.badge === 'Choice'" class="absolute left-0 bottom-0 bg-[#ffb800] text-black font-bold px-2 py-1 text-sm">
            Choice
          </span>
        </div>
      </div>

      <!-- Info -->
      <div>
        <h1 class="text-xl md:text-2xl font-medium text-gray-900">{{ product.name }}</h1>

        <div class="flex items-center gap-3 mt-3 text-sm text-gray-500">
          <span class="text-yellow-500 text-lg">{{ '★'.repeat(Math.floor(product.rating)) }}{{ '☆'.repeat(5 - Math.floor(product.rating)) }}</span>
          <span>{{ product.reviews.toLocaleString() }} reviews</span>
          <span class="text-gray-300">|</span>
          <span>{{ product.sold.toLocaleString() }}+ sold</span>
        </div>

        <div class="mt-4">
          <span class="text-gray-500 text-xs">US $</span>
          <span class="text-4xl font-black text-brand">{{ product.price.toFixed(2) }}</span>
          <span v-if="product.originalPrice" class="ml-2 text-lg text-gray-400 line-through">US ${{ product.originalPrice.toFixed(2) }}</span>
          <span v-if="product.discount" class="ml-2 bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded">-{{ product.discount }}%</span>
        </div>

        <div class="flex flex-wrap gap-3 mt-4">
          <span class="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-medium">
            ✔ Free shipping
          </span>
          <span class="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium">
            ✔ Buyer Protection
          </span>
          <span class="flex items-center gap-1 text-xs bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full font-medium">
            ✔ 90-day returns
          </span>
        </div>

        <!-- Qty + CTA -->
        <div class="mt-6 flex items-center gap-1">
          <span class="mr-3 text-sm text-gray-600">Quantity</span>
          <button @click="qty = Math.max(1, qty - 1)" class="w-9 h-10 border rounded-l flex items-center justify-center hover:bg-lightgray">−</button>
          <span class="w-12 h-10 border-y flex items-center justify-center font-medium">{{ qty }}</span>
          <button @click="qty++" class="w-9 h-10 border rounded-r flex items-center justify-center hover:bg-lightgray">+</button>
        </div>

        <div class="flex gap-3 mt-6">
          <button @click="addToCart" class="flex-1 bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-full transition-colors">
            Add to Cart
          </button>
          <button @click="cart.add(product, qty)" class="flex-1 bg-[#ffb800] hover:bg-yellow-400 text-black font-bold py-3 rounded-full transition-colors">
            Buy Now
          </button>
        </div>

        <div class="mt-6 pt-6 border-t text-sm text-gray-600 space-y-1">
          <p><strong>Delivery:</strong> 5-7 days (US warehouse) · Standard 7-15 days</p>
          <p><strong>Returns:</strong> Free returns within 90 days</p>
          <p><strong>Item ID:</strong> {{ product.id.toUpperCase() }}</p>
        </div>
      </div>
    </div>

    <!-- Related -->
    <div class="mt-6 bg-white rounded-xl shadow-sm p-5">
      <h2 class="text-xl font-black text-gray-900 mb-5">You may also like</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <ProductCard v-for="p in related" :key="p.id" :product="p" />
      </div>
    </div>
  </div>
</div>
<div v-else class="container-x py-16 text-center text-gray-500">Product not found.</div>
</template>
