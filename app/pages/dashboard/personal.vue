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
    icon: ICONS.nav.user,
    to: URLS.dashboard.books
  }, {
    title: 'Preferences',
    icon: ICONS.action.heart,
    to: URLS.dashboard.books
  }, {
    title: 'About',
    icon: ICONS.info.help,
    to: URLS.dashboard.books
  }, {
    title: 'Logout',
    icon: ICONS.action.exit,
    to: URLS.dashboard.books
  }
])
</script>

<template>
  <UPageGrid>
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
</template>
