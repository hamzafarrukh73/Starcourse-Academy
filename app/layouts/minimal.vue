<script setup lang="ts">
const layoutStore = useLayoutStore()
</script>

<template>
  <div class="flex flex-col min-h-dvh w-full">
    <BgGlow />
    <UHeader
      mode="slideover"
      :title="layoutStore.websiteTitle"
      :toggle="false"
    >
      <template #title>
        <AppLogo />
      </template>

      <template #right>
        <div class="flex justify-end items-center gap-2">
          <UButton
            :icon="ICONS.brand.youtube"
            :to="LINKS.social.youtube"
            target="_blank"
            size="lg"
            variant="soft"
            color="neutral"
            class="rounded-full"
          />
          <UButton
            :icon="ICONS.brand.whatsapp"
            :to="LINKS.social.whatsapp"
            target="_blank"
            size="lg"
            variant="soft"
            color="neutral"
            class="rounded-full"
          />
        </div>
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>
  </div>
</template>
