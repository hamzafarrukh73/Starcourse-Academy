<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
})

const authStore = useAuthStore()
const route = useRoute()
const key = route.query.key as string || ''

// Handle email verification if key is provided
onMounted(() => {
  if (key) {
    authStore.verifyEmail(key)
  }
})
</script>

<template>
  <UContainer
    :ui="{ base: 'grid items-center w-full' }"
  >
    <AuthCard>
      <AuthEmailVerify />
    </AuthCard>
  </UContainer>
</template>
