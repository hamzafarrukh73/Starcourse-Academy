<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})
</script>

<template>
  <UContainer
    :ui="{ base: 'grow flex justify-center items-center size-full' }"
  >
    <AuthCard>
      <AuthRegister />
    </AuthCard>
  </UContainer>
</template>
