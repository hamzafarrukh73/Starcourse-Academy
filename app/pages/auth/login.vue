<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
})
</script>

<template>
  <UContainer
    :ui="{ base: 'grid items-center w-full' }"
  >
    <AuthCard>
      <AuthLogin />
    </AuthCard>
  </UContainer>
</template>
