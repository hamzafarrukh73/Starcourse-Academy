<script lang="ts" setup>

</script>

<template>
  <UPageCard
    :ui="{
      root: 'w-full max-w-md mx-auto',
      header: 'w-full'
    }"
  >
    <template #header>
      <div class="flex justify-center items-center w-full">
        <AppLogo />
      </div>
    </template>

    <slot />
  </UPageCard>
</template>
