<script lang="ts" setup>
definePageMeta({
  layout: 'minimal'
})

const authStore = useAuthStore()
const layoutStore = useLayoutStore()
const route = useRoute()
const key = route.query.key as string || ''

const verify = (key !== '') || false
if (verify) {
  authStore.verifyEmail(key)
}

const email = ref('')
</script>

<template>
  <UContainer
    :ui="{ base: 'w-full grid items-center py-16' }"
  >
    <UPageCard
      v-if="verify"
      :loading="layoutStore.isLoading"
      :ui="{
        root: 'w-full max-w-md mx-auto'
      }"
    />
    <UPageCard
      v-else
      title="Resend Verification Email"
      :ui="{
        root: 'w-full max-w-md mx-auto'
      }"
    >
      <div class="w-full flex gap-2">
        <UInput
          v-model="email"
          type="text"
          placeholder="Email"
          class="grow"
        />
        <UButton
          label="Resend"
          :loading="layoutStore.isLoading"
          @click="authStore.resendVerificationEmail(email)"
        />
      </div>
    </UPageCard>
  </UContainer>
</template>

<style scoped>

</style>
