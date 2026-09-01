<script setup>
const perks = [
  { icon: '🚚', title: 'Free shipping', desc: 'On Choice orders with fast delivery' },
  { icon: '🔁', title: 'Free returns', desc: 'Within 90 days of delivery' },
  { icon: '🛡️', title: 'Buyer Protection', desc: 'Full refund if not as described' },
  { icon: '💬', title: '24/7 Support', desc: 'Dedicated customer help anytime' },
]

const faqs = [
  {
    q: 'Is AliExpress safe?',
    a: 'Yes. Our robust Buyer Protection program protects you if your item doesn’t arrive, arrives damaged, or isn’t as described — from click to delivery.',
  },
  {
    q: 'What is AliExpress?',
    a: 'Leading international marketplace created by Alibaba Group, connecting buyers directly with manufacturers to offer incredibly low prices.',
  },
  {
    q: 'How fast is delivery to the US?',
    a: 'Choice items ship from local US warehouses with 5-7 day delivery, with easy refunds and free returns.',
  },
]
</script>

<template>
  <section class="container-x py-6 space-y-6">
    <!-- Choice perks -->
    <div class="bg-white rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="p in perks" :key="p.title" class="flex items-center gap-3">
        <span class="text-3xl">{{ p.icon }}</span>
        <div>
          <p class="font-bold text-gray-900 text-sm">{{ p.title }}</p>
          <p class="text-xs text-gray-500">{{ p.desc }}</p>
        </div>
      </div>
    </div>

    <!-- What is AliExpress -->
    <div class="bg-white rounded-xl shadow-sm p-8 grid lg:grid-cols-2 gap-10">
      <div>
        <h2 class="text-2xl font-black text-gray-900 mb-4">What is AliExpress?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          AliExpress is a leading international online marketplace created by Alibaba Group. It connects buyers
          directly with manufacturers and suppliers around the world, eliminating the middleman to offer incredibly
          low prices on everything from fashion and electronics to home decor and gifts.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Whether you are shopping for the latest trends or sourcing inventory for your business, AliExpress
          provides secure payments, shipping to over 200 countries, and a robust buyer protection program.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-gray-900">Common questions</h3>
        <div v-for="f in faqs" :key="f.q" class="border rounded-lg p-4">
          <p class="font-medium text-gray-800 mb-1">{{ f.q }}</p>
          <p class="text-sm text-gray-500">{{ f.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
