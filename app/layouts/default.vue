<script setup lang="ts">
const authStore = useAuthStore()
const layoutStore = useLayoutStore()

const navItems = useNavigation()
</script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <div class="fixed flex items-center justify-center h-screen w-full inset-0 -z-2 opacity-20">
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
        content: 'bg-transparent max-w-full'
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
          <p>
            |
          </p>
          <div
            v-if="authStore.isAuthenticated"
            class="flex items-center gap-2"
          >
            <!-- <UButton
              label="Download App"
              :icon="ICONS.action.download"
              :to="URLS.landing.benefits"
              class="rounded-full"
            /> -->
            <ProfileDropdown />
          </div>

          <div
            v-else
          >
            <UModal
              :title="layoutStore.websiteTitle"
              :ui="{
                content: 'divide-none',
                title: 'text-lg!'
              }"
            >
              <UButton
                label="Sign In"
                size="sm"
                variant="soft"
                color="neutral"
                class="px-2 rounded-full cursor-pointer"
              />

              <template #body>
                <AuthLogin />
              </template>
            </UModal>
          </div>
        </div>
      </template>

      <template #content="{ close }">
        <div class="fixed top-4 right-4 z-50">
          <UButton
            icon="i-lucide-x"
            size="lg"
            variant="solid"
            class="hover:cursor-pointer"
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
