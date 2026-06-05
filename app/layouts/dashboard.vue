<script setup lang="ts">
// import type { NavigationMenuItem } from 'nuxt/ui'

const navItems = useNavigation()
</script>

<template>
  <div>
    <UDashboardGroup storage="cookie">
      <UDashboardSidebar
        collapsible
        :default-size="20"
        class="rounded-r-xl bg-neutral-800/10 dark:bg-neutral-800/5"
      >
        <template #header="{ collapsed }">
          <AppLogo :collapsed="collapsed" />
        </template>
        <template #default="{ collapsed }">
          <UNavigationMenu
            orientation="vertical"
            tooltip
            popover
            :collapsed="collapsed"
            :items="navItems[0]"
            :ui="{
              root: 'py-4',
              list: 'flex flex-col gap-2',
              item: 'flex',
              link: 'py-4',
              linkLabel: 'text-md! font-normal',
              linkLeadingIcon: 'size-6'
            }"
          />
        </template>
      </UDashboardSidebar>

      <UDashboardPanel>
        <template #header>
          <UDashboardNavbar
            mode="slideover"
            toggle-side="left"
            :menu="{ side: 'left' }"
            :toggle="false"
          >
            <template #leading>
              <UDashboardSidebarCollapse />
            </template>
            <template #title>
              <AppLogo
                collapsed
                class="lg:hidden"
              />
            </template>

            <template #right>
              <UButton
                label="Return Home"
                variant="soft"
                color="neutral"
                :icon="ICONS.nav.home"
                :to="URLS.home"
              />
              <ProfileDropdown />
            </template>
          </UDashboardNavbar>
        <!-- <UDashboardToolbar>
          <template #left>
            <slot name="toolbar-left" />
          </template>
          <template #right>
            <slot name="toolbar-right" />
          </template>
        </UDashboardToolbar> -->
        </template>

        <template #body>
          <slot />
        </template>
        <template #footer>
          <UNavigationMenu
            orientation="horizontal"
            tooltip
            popover
            :items="navItems[0]"
            :ui="{
              root: 'justify-around border-t border-default',
              list: 'flex justify-center gap-4',
              link: 'flex-col',
              linkLabel: 'text-xs! font-normal',
              linkLeadingIcon: 'size-[5vh]'
            }"
            class="md:hidden justify-center"
          />
        </template>
      </UDashboardPanel>
    </UDashboardGroup>
  </div>
</template>

<style scoped></style>
