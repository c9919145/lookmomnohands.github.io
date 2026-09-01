<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const cart = useCartStore()
const query = ref('')

function submit() {
  const q = query.value.trim()
  router.push(q ? { path: '/search', query: { q } } : '/')
}
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="container-x flex items-center gap-6 py-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 shrink-0">
        <div class="w-11 h-11 rounded-xl bg-brand flex items-center justify-center text-white font-black text-sm leading-none">
          AE
        </div>
        <div class="hidden md:block leading-tight">
          <span class="block font-bold text-xl text-gray-900">aliexpress</span>
          <span class="block text-[11px] text-gray-500 -mt-1">Always something new</span>
        </div>
      </router-link>

      <!-- Search -->
      <form @submit.prevent="submit" class="flex-1 max-w-2xl flex">
        <input
          v-model="query"
          type="text"
          placeholder="what are you looking for?"
          class="input-search border-2 border-brand bg-lightgray rounded-l-full"
        />
        <button type="submit" class="bg-brand hover:bg-brand-dark text-white px-6 rounded-r-full flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
      </form>

      <!-- Right actions -->
      <nav class="ml-auto flex items-center gap-6 text-sm shrink-0">
        <a href="#" class="hidden lg:flex items-center gap-2 text-gray-700 hover:text-brand">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          Sign in / Register
        </a>
        <a href="#" class="hidden md:flex items-center gap-2 text-gray-700 hover:text-brand">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Orders
        </a>
        <router-link to="/cart" class="relative flex items-center gap-2 text-gray-700 hover:text-brand">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span
            v-if="cart.count > 0"
            class="absolute -top-2 -right-3 bg-brand text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
          >
            {{ cart.count }}
          </span>
          <span class="hidden xl:inline">Cart</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>
