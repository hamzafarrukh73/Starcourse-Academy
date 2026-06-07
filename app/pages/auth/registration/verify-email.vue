<script setup lang="ts">
definePageMeta({
  layout: 'empty'
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
    :ui="{ base: 'grow flex justify-center items-center size-full' }"
  >
    <AuthCard>
      <AuthEmailVerify />
    </AuthCard>
  </UContainer>
</template>
