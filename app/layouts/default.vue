<script setup lang="ts">
// const authStore = useAuthStore()
const layoutStore = useLayoutStore()

const navItems = useNavigation()
</script>

<template>
  <div class="flex flex-col min-h-dvh w-full">
    <BgGlow />
    <div class="fixed flex items-center justify-center h-dvh w-full inset-0 -z-2 opacity-10">
      <img
        src="/img/logo-collapsed.png"
        class="aspect-square"
      >
    </div>
    <UHeader
      mode="slideover"
      :title="layoutStore.websiteTitle"
      toggle-side="left"
      :menu="{ side: 'left'
      }"
      :ui="{
        content: 'bg-default/80 max-w-full'
      }"
    >
      <template #title>
        <AppLogo />
      </template>

      <template #default>
        <UNavigationMenu
          :items="navItems"
          variant="link"
          :ui="{
            list: 'gap-2'
          }"
          highlight
          exact
        />
      </template>

      <template #right>
        <div class="flex items-center gap-2">
          <UButton
            :icon="ICONS.brand.youtube"
            :to="LINKS.social.youtube"
            target="_blank"
            size="lg"
            variant="soft"
            color="neutral"
            :ui="{
              base: 'rounded-full'
            }"
          />
          <UButton
            :icon="ICONS.brand.whatsapp"
            :to="LINKS.social.whatsapp"
            target="_blank"
            size="lg"
            variant="soft"
            color="neutral"
            :ui="{
              base: 'rounded-full'
            }"
          />
          <!-- <div
            v-if="authStore.isAuthenticated"
          >
            <ProfileDropdown />
          </div>

          <div
            v-else
          >
            <UModal
              :ui="{
                content: 'divide-none'
              }"
            >
              <UButton
                label="Sign In"
                size="lg"
                variant="soft"
                color="primary"
                :ui="{
                  base: 'rounded-full'
                }"
              />

              <template #title>
                <div class="flex self-center items-center w-full">
                  <AppLogo />
                </div>
              </template>

              <template #body>
                <AuthLogin />
              </template>
            </UModal>
          </div> -->
        </div>
      </template>

      <template #content="{ close }">
        <div class="absolute top-0 left-0 z-50 flex items-center h-(--ui-header-height) p-4 md:p-6 lg:p-8">
          <UButton
            icon="i-lucide-x"
            size="sm"
            variant="solid"
            @click="close"
          />
        </div>
        <UNavigationMenu
          orientation="vertical"
          variant="link"
          highlight
          :items="navItems"
          :ui="{
            root: 'justify-center items-center size-full p-8',
            list: 'gap-2 w-full',
            link: 'py-4 justify-center border-b',
            linkLabel: 'text-2xl! font-medium uppercase'
          }"
        />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <!-- <UFooter>
      <template #left>
        <div class="flex items-center justify-center gap-2">
          <UIcon :name="ICONS.info.copyright" />
          <p>{{ new Date().getFullYear() }} {{ layoutStore.websiteTitle }}. All rights reserved.</p>
        </div>
      </template>
    </UFooter> -->
  </div>
</template>
