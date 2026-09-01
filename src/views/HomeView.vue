<script setup>
import HeroBanner from '../components/HeroBanner.vue'
import WelcomeDeal from '../components/WelcomeDeal.vue'
import SuperDeals from '../components/SuperDeals.vue'
import ProductGrid from '../components/ProductGrid.vue'
import CategoryShelf from '../components/CategoryShelf.vue'
import TrustInfo from '../components/TrustInfo.vue'
import { products, getByCategory } from '../data/products'

const moreToLove = products.slice(0, 12)
const electronics = getByCategory('consumer-electronics').concat(getByCategory('computer-office'))
const fashionPicks = getByCategory('womens-fashion').concat(getByCategory('mens-fashion'), getByCategory('bags-shoes'))
const homePicks = getByCategory('home-pet-appliances').concat(getByCategory('jewelry-watches'), getByCategory('outdoor-sports'))
</script>

<template>
  <div>
    <HeroBanner />
    <WelcomeDeal />
    <SuperDeals />
    <ProductGrid title="More to Love — Recommended for you" :products="moreToLove" :view-all="{ name: 'search' }" />
    <CategoryShelf />
    <ProductGrid title="Top Picks in Electronics" :products="electronics" view-all="/category/consumer-electronics" />
    <ProductGrid title="Fashion Favorites" :products="fashionPicks" view-all="/category/womens-fashion" />
    <ProductGrid title="Home Must-Haves" :products="homePicks" view-all="/category/home-pet-appliances" />
    <TrustInfo />
  </div>
</template>
