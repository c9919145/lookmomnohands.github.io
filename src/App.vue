<script setup>
import TopBar from './components/TopBar.vue'
import Header from './components/Header.vue'
import CategoryNav from './components/CategoryNav.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TopBar />
    <Header />
    <CategoryNav />
    <main class="flex-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
