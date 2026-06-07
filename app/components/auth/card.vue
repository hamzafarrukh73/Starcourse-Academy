<script lang="ts" setup>

</script>

<template>
  <UPageCard
    variant="naked"
    :ui="{
      root: 'w-full md:max-w-md mx-auto px-8',
      header: 'w-full'
    }"
  >
    <template #header>
      <div class="flex justify-center items-center w-full py-4">
        <AppLogo class="h-[10vh]" />
      </div>
    </template>

    <slot />
  </UPageCard>
</template>
