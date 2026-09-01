<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

const shipping = computed(() => (cart.subtotal >= 10 ? 0 : 2.99))
const total = computed(() => cart.subtotal + shipping.value)
</script>

<template>
  <div class="container-x py-6">
    <nav class="text-sm text-gray-500 mb-4">
      <router-link to="/" class="hover:text-brand">Home</router-link>
      <span class="mx-2">›</span>
      <span class="text-gray-800 font-medium">Shopping Cart</span>
    </nav>

    <h1 class="text-2xl font-black text-gray-900 mb-6">Shopping Cart ({{ cart.count }} items)</h1>

    <div v-if="cart.items.length" class="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
      <!-- Items -->
      <div class="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
        <div v-for="item in cart.items" :key="item.id" class="flex gap-4 p-5">
          <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-lg" />
          <div class="flex-1">
            <router-link :to="{ name: 'product', params: { id: item.id } }" class="text-sm text-gray-800 hover:text-brand line-clamp-1">
              {{ item.name }}
            </router-link>
            <p class="text-brand font-bold mt-1">US ${{ (item.price * item.qty).toFixed(2) }}</p>
            <div class="flex items-center gap-4 mt-3">
              <div class="flex items-center border rounded">
                <button @click="cart.updateQty(item.id, item.qty - 1)" class="w-8 h-8 flex items-center justify-center hover:bg-lightgray">−</button>
                <span class="w-10 text-center text-sm">{{ item.qty }}</span>
                <button @click="cart.updateQty(item.id, item.qty + 1)" class="w-8 h-8 flex items-center justify-center hover:bg-lightgray">+</button>
              </div>
              <button @click="cart.remove(item.id)" class="text-sm text-gray-400 hover:text-brand">Remove</button>
            </div>
          </div>
          <span class="text-sm text-gray-400 line-through" v-if="false"></span>
        </div>
      </div>

      <!-- Summary -->
      <div class="bg-white rounded-xl shadow-sm p-6 lg:sticky lg:top-16">
        <h2 class="font-bold text-gray-900 mb-4">Order Summary</h2>
        <div class="space-y-2 text-sm text-gray-600">
          <div class="flex justify-between">
            <span>Subtotal ({{ cart.count }} items)</span>
            <span>US ${{ cart.subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping</span>
            <span>{{ shipping === 0 ? 'Free' : 'US $' + shipping.toFixed(2) }}</span>
          </div>
          <div class="border-t pt-3 mt-3 flex justify-between font-bold text-gray-900 text-base">
            <span>Total</span>
            <span>US ${{ total.toFixed(2) }}</span>
          </div>
        </div>
        <button class="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-full mt-5 transition-colors">
          Proceed to Checkout
        </button>
        <button @click="router.push('/')" class="w-full border border-gray-300 text-gray-700 font-medium py-2.5 rounded-full mt-3 hover:bg-lightgray">
          Continue Shopping
        </button>
        <p class="text-xs text-gray-400 text-center mt-4">🔒 Secure payment · Buyer Protection</p>
      </div>
    </div>

    <!-- Empty -->
    <div v-else class="bg-white rounded-xl shadow-sm text-center py-20">
      <p class="text-5xl mb-4">🛒</p>
      <p class="text-lg font-medium text-gray-800 mb-2">Your cart is empty</p>
      <p class="text-sm text-gray-500 mb-6">Discover great deals across all categories.</p>
      <button @click="router.push('/')" class="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3 rounded-full">
        Start Shopping
      </button>
    </div>
  </div>
</template>
