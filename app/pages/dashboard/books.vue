<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
  auth: 'private',
  navGroup: 'dashboard'
})

const usersStore = useUsersStore()
// const authStore = useAuthStore()

onMounted(async () => {
  await usersStore.getUser()
})

const items = ref([
  {
    label: '9th Class',
    value: '9'
  }, {
    label: '10th Class',
    value: '10'
  }, {
    label: '11th Class',
    value: '11'
  }, {
    label: '12th Class',
    value: '12'
  }, {
    label: 'All Classes',
    value: '0'
  }
])
</script>

<template>
  <UPageGrid>
    <UPageGrid
      :ui="{
        base: 'grid-cols-1'
      }"
    >
      <UPageCard
        v-for="item in items"
        :key="item.label"
        :title="item.label"
        description="Bundle of official textbooks"
        :to="URLS.dashboard.notes"
        orientation="vertical"
        variant="soft"
        :ui="{
          root: 'rounded-full px-4'
        }"
      />
    </UPageGrid>
  </UPageGrid>
</template>
