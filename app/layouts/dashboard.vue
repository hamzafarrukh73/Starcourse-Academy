<script setup lang="ts">
const navItems = useNavigation()
</script>

<template>
  <div>
    <UDashboardGroup storage="cookie">
      <UDashboardSidebar
        collapsible
        :default-size="15"
        :collapsed-size="5"
        :ui="{
          root: 'rounded-r-xl border-none'
        }"
      >
        <template #header="{ collapsed }">
          <div class="flex justify-between items-center w-full">
            <AppLogo
              v-if="!collapsed"
              :collapsed="collapsed"
            />
            <UDashboardSidebarCollapse />
          </div>
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
            :ui="{
              root: 'border-none'
            }"
          >
            <template #title>
              <AppLogo
                class="lg:hidden"
              />
            </template>

            <template #right>
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
            variant="link"
            highlight
            :items="navItems[0]"
            :ui="{
              root: 'w-full [&>div]:grow',
              item: 'w-full',
              list: 'flex justify-between gap-4 w-full',
              link: 'flex-col',
              linkLabel: 'text-xs font-normal',
              linkLeadingIcon: 'size-6'
            }"
            class="md:hidden justify-center"
          />
        </template>
      </UDashboardPanel>
    </UDashboardGroup>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none !important;
}
</style>
