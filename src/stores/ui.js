import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    megaMenu: null,
    mobileOpen: false,
  }),
  actions: {
    openMega(key) {
      this.megaMenu = key
    },
    closeMega() {
      this.megaMenu = null
    },
  },
})
