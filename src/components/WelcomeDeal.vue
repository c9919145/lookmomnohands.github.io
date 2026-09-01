<script setup>
import { welcomeDeal } from '../data/deals'
import { getProduct } from '../data/products'

const product = getProduct(welcomeDeal.productId)
</script>

<template>
  <section class="container-x py-6">
    <div class="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
      <!-- Left deal box -->
      <div class="bg-[#ffb800] p-8 md:w-80 shrink-0 flex flex-col justify-center">
        <span class="text-xs font-bold uppercase text-black/60">${{ welcomeDeal.price }}</span>
        <h2 class="text-3xl font-black text-black mt-1">Welcome deal</h2>
        <p class="font-bold text-black/80 mt-2">{{ welcomeDeal.title }}</p>
        <button class="mt-6 bg-brand text-white font-bold px-4 py-2 rounded w-fit hover:bg-brand-dark">Shop now</button>
      </div>

      <!-- Product -->
      <div class="flex-1 grid md:grid-cols-2 items-center">
        <div class="relative">
          <img :src="product.image" :alt="product.name" class="w-full aspect-square object-cover" />
          <span class="absolute left-0 top-0 bg-brand text-white text-lg font-black px-3 py-1">${{ welcomeDeal.price }}</span>
          <span class="absolute left-0 top-12 bg-black/70 text-white text-xs px-2 py-1">-{{ welcomeDeal.discount }}%</span>
        </div>
        <div class="p-8">
          <h3 class="text-lg font-medium text-gray-800">{{ product.name }}</h3>
          <p class="text-sm text-gray-500 mt-2">{{ welcomeDeal.sold.toLocaleString() }}+ sold in past 24 hours</p>
          <div class="flex flex-wrap gap-3 mt-4">
            <span class="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg>
              Free shipping on Choice orders
            </span>
            <span class="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
              Fast delivery with easy refunds
            </span>
            <span class="flex items-center gap-1 text-xs bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full">
              Free returns within 90 days
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
