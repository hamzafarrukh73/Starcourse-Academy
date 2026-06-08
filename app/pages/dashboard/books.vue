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
const value = ref('0')
</script>

<template>
  <UPageGrid>
    <UPageGrid
      :ui="{
        base: 'grid-cols-1'
      }"
    >
      <div class="flex justify-between items-center w-full">
        <URadioGroup
          v-model="value"
          :items="items"
          orientation="horizontal"
          size="sm"
          variant="card"
          indicator="hidden"
          :ui="{
            root: 'w-full',
            fieldset: 'justify-between sm:justify-center',
            item: 'rounded-full'
          }"
        />
      </div>
      <UPageCard
        v-for="item in items"
        :key="item.label"
        :to="URLS.dashboard.notes"
        orientation="vertical"
        variant="soft"
        :ui="{
          root: 'rounded-full px-4'
        }"
      >
        <UPageFeature
          :title="item.label"
          :icon="ICONS.info.books"
          description="Bundle of official textbooks"
        />
      </UPageCard>
    </UPageGrid>
  </UPageGrid>
</template>
