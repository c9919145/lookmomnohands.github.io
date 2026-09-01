<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useUiStore } from '../stores/ui'
import { categories } from '../data/categories'
import { useRouter } from 'vue-router'

const ui = useUiStore()
const router = useRouter()

function go(slug) {
  ui.closeMega()
  router.push({ name: 'category', params: { slug } })
}

function handleDocClick(e) {
  if (!e.target.closest('[data-nav]')) ui.closeMega()
}

onMounted(() => document.addEventListener('click', handleDocClick))
onUnmounted(() => document.removeEventListener('click', handleDocClick))
</script>

<template>
  <div class="bg-dark text-white sticky top-0 z-40" data-nav>
    <div class="container-x flex items-center h-11 overflow-x-auto no-scrollbar">
      <button
        @click="go('womens-fashion')"
        @mouseenter="ui.openMega('womens-fashion')"
        class="px-4 hover:bg-brand-dark h-full flex items-center whitespace-nowrap text-sm transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        All Categories
      </button>
      <template v-for="c in categories" :key="c.slug">
        <button
          @mouseenter="ui.openMega(c.slug)"
          @click="go(c.slug)"
          class="px-3.5 hover:bg-brand-dark h-full flex items-center whitespace-nowrap text-sm transition-colors"
        >
          {{ c.name }}
        </button>
      </template>
      <button
        @click="go('consumer-electronics')"
        class="px-3.5 hover:bg-brand-dark h-full flex items-center whitespace-nowrap text-sm transition-colors text-yellow-300"
      >
        SuperDeals
      </button>
    </div>

    <!-- Mega menu -->
    <transition name="fade">
      <div
        v-if="ui.megaMenu"
        class="absolute left-0 right-0 bg-white text-gray-800 shadow-2xl border-t"
        @mouseleave="ui.closeMega"
      >
        <div class="container-x py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 class="font-bold text-orange-500 mb-3 text-sm uppercase">All Categories</h3>
            <button @click="go('womens-fashion')" class="block text-gray-700 hover:text-brand text-sm py-1">All Departments</button>
            <button @click="go('consumer-electronics')" class="block text-gray-700 hover:text-brand text-sm py-1">Today's Deals</button>
            <button @click="go('outdoor-sports')" class="block text-gray-700 hover:text-brand text-sm py-1">SuperDeals</button>
          </div>
          <div v-for="c in categories.slice(0, 4)" :key="c.slug" @click="go(c.slug)">
            <h3 class="font-bold text-gray-900 mb-3 text-sm hover:text-brand cursor-pointer">{{ c.name }}</h3>
            <button
              v-for="sub in c.subcategories.slice(0, 6)"
              :key="sub"
              class="block text-gray-600 hover:text-brand text-sm py-1"
            >
              {{ sub }}
            </button>
          </div>
          <div class="hidden md:block">
            <h3 class="font-bold text-gray-900 mb-3 text-sm">{{ categories[4]?.name }}</h3>
            <button
              v-for="sub in categories[4]?.subcategories.slice(0, 8)"
              :key="sub"
              class="block text-gray-600 hover:text-brand text-sm py-1"
            >
              {{ sub }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
