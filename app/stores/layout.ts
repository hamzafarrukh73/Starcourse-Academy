export const useLayoutStore = defineStore('layoutStore', () => {
  // --- STATE ---
  const isLoading = ref(false)
  const websiteTitle = ref('Starcourse Academy')

  // --- EXPOSE ---
  return {
    isLoading,
    websiteTitle
  }
})
