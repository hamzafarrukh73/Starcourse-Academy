<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
})
</script>

<template>
  <UContainer
    :ui="{ base: 'w-full grid items-center py-16' }"
  >
    <UPageCard
      :ui="{
        root: 'w-full max-w-md mx-auto'
      }"
    >
      <AuthRegister />
    </UPageCard>
  </UContainer>
</template>
