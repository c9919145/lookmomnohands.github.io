import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart') || '[]'),
  }),
  getters: {
    count: (state) => state.items.reduce((sum, i) => sum + i.qty, 0),
    subtotal: (state) =>
      state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
  },
  actions: {
    persist() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },
    add(product, qty = 1) {
      const existing = this.items.find((i) => i.id === product.id)
      if (existing) {
        existing.qty += qty
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          qty,
        })
      }
      this.persist()
    },
    updateQty(id, qty) {
      const item = this.items.find((i) => i.id === id)
      if (item) {
        item.qty = Math.max(1, qty)
        this.persist()
      }
    },
    remove(id) {
      this.items = this.items.filter((i) => i.id !== id)
      this.persist()
    },
    clear() {
      this.items = []
      this.persist()
    },
  },
})
