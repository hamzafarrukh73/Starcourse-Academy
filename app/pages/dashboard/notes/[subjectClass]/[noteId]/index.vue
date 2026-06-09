<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard-minimal',
  auth: 'private',
  pageTitle: 'Note Name'
})

const usersStore = useUsersStore()
// const authStore = useAuthStore()

onMounted(async () => {
  await usersStore.getUser()
})
</script>

<template>
  <UPageGrid
    :ui="{
      base: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
    }"
  >
    {{ $route.params.noteId }}
  </UPageGrid>
</template>
