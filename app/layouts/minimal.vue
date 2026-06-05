<script setup lang="ts">
const layoutStore = useLayoutStore()
</script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <div class="fixed flex items-center justify-center h-screen w-full inset-0 -z-2 opacity-25">
      <img
        src="/img/logo-collapsed.png"
        class="aspect-square"
      >
    </div>
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

    <!-- <UFooter>
      <div class="flex items-center justify-center gap-2">
        <UIcon :name="ICONS.info.copyright" />
        <p>{{ new Date().getFullYear() }} {{ layoutStore.websiteTitle }}. All rights reserved.</p>
      </div>
    </UFooter> -->
  </div>
</template>
