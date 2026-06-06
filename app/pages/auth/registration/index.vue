<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
})
</script>

<template>
  <UContainer
    :ui="{ base: 'w-full grid items-center' }"
  >
    <AuthCard>
      <AuthRegister />
    </AuthCard>
  </UContainer>
</template>
