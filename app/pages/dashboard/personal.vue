<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
  auth: 'private',
  navGroup: 'dashboard'
})

const usersStore = useUsersStore()

onMounted(async () => {
  await usersStore.getUser()
})

const items = ref([
  {
    title: 'Profile',
    description: 'Edit your profile',
    icon: ICONS.nav.user,
    to: URLS.dashboard.books
  }, {
    title: 'Preferences',
    description: 'Customize your preferences',
    icon: ICONS.action.heart,
    to: URLS.dashboard.books
  }, {
    title: 'About',
    description: 'Learn more about us',
    icon: ICONS.info.help,
    to: URLS.dashboard.books
  }, {
    title: 'Logout',
    description: 'Go back to login screen',
    icon: ICONS.action.exit,
    ui: {
      leadingIcon: 'text-error'
    },
    to: URLS.dashboard.books
  }
])
</script>

<template>
  <UPageGrid
    :ui="{
      base: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
    }"
  >
    <UPageGrid
      :ui="{
        base: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
      }"
    >
      <UPageCard
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        orientation="horizontal"
        variant="soft"
        :ui="{
          root: 'rounded-full px-4'
        }"
      >
        <UPageFeature
          v-bind="item"
        />
      </UPageCard>
    </UPageGrid>
  </UPageGrid>
</template>
