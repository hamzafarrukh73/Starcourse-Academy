<script lang="ts" setup>
// import type { RadioGroupItem } from '@nuxt/ui'

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
    <div class="flex flex-col items-start gap-4">
      <div class="flex items-center gap-4 w-full">
        <UFieldGroup
          :ui="{
            base: 'grow'
          }"
        >
          <UInput
            placeholder="Search"
            size="xl"
            :ui="{
              root: 'grow'
            }"
          />
          <UButton
            :icon="ICONS.action.search"
            :ui="{
              base: 'px-4'
            }"
          />
        </UFieldGroup>
        <USelect
          placeholder="All Subjects"
          size="xl"
          variant="soft"
        />
      </div>
      <div class="flex justify-between items-center w-full">
        <URadioGroup
          v-model="value"
          :items="items"
          orientation="horizontal"
          size="sm"
          variant="card"
          indicator="hidden"
          :ui="{
            item: 'rounded-full'
          }"
        />
      </div>
    </div>

    <UPageGrid
      :ui="{
        base: 'grid-cols-2'
      }"
    >
      <UPageCard
        v-for="item in items"
        :key="item.label"
        :title="item.label"
        description="Computer Science Chapter 1"
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
