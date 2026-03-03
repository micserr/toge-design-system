import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Snack } from '../components/snackbar/snackbar.types'

export const useSnackbarStore = defineStore('toge-snackbar', () => {
  const snacks = ref<Snack[]>([])

  function eatSnack(id: string | number) {
    snacks.value = snacks.value.filter(s => s.id !== id)
  }

  function message(options: Omit<Snack, 'id'> & { duration?: number }) {
    const id = Date.now()
    snacks.value.push({ ...options, id })
    if (options.duration !== 0) {
      setTimeout(() => eatSnack(id), options.duration ?? 3000)
    }
  }

  function updateState(id: string | number, updates: Partial<Snack>) {
    const index = snacks.value.findIndex(s => s.id === id)
    if (index !== -1) {
      snacks.value[index] = { ...snacks.value[index], ...updates }
    }
  }

  return { snacks, eatSnack, message, updateState }
})
