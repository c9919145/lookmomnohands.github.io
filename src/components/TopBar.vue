<script setup>
const links = ['Buyer Protection', 'Help', 'App', 'Ship to: US / USD']
</script>

<template>
  <div class="bg-dark text-white text-xs">
    <div class="container-x flex items-center justify-between h-8">
      <div class="flex items-center gap-4">
        <span class="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          Ship to: US / USD
        </span>
        <a href="#" class="hover:text-brand transition-colors">Buyer Protection</a>
        <a href="#" class="hidden sm:inline hover:text-brand transition-colors">Help</a>
        <a href="#" class="hidden md:inline hover:text-brand transition-colors">App</a>
      </div>
      <div class="flex items-center gap-4">
        <a href="#" class="hidden lg:inline hover:text-brand transition-colors">Multi-Language Sites</a>
        <span class="text-gray-500">|</span>
        <a href="#" class="hidden sm:inline hover:text-brand transition-colors">My Feed</a>
        <a href="#" class="hover:text-brand transition-colors">Browse: All Sellers</a>
      </div>
    </div>
  </div>
</template>
