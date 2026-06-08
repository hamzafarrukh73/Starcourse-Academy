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

const cards = ref([
  {
    label: '9th Class',
    title: 'Computer Science & Entrepreneurship',
    description: '9th Class',
    value: '9'
  }, {
    label: '10th Class',
    title: 'Computer Science & Entrepreneurship',
    description: '10th Class',
    value: '10'
  }, {
    label: '11th Class',
    title: 'Computer Science & Entrepreneurship',
    description: '11th Class',
    value: '11'
  }, {
    label: '12th Class',
    title: 'Computer Science & Entrepreneurship',
    description: '12th Class',
    value: '12'
  }
])

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
const value = ref('9')
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
            root: 'w-full',
            fieldset: 'justify-between sm:justify-center',
            item: 'rounded-full'
          }"
        />
      </div>
    </div>

    <UPageGrid
      :ui="{
        base: 'grid-cols-1'
      }"
    >
      <UPageCard
        v-for="item in cards"
        :key="item.label"

        :to="URLS.dashboard.notes"
        orientation="vertical"
        variant="soft"
        :ui="{
          root: 'rounded-full px-4'
        }"
      >
        <UPageFeature
          title="Computer Science & Entrepreneurship"
          :icon="ICONS.info.notes"
          :description="item.label"
        />
      </UPageCard>
    </UPageGrid>
  </UPageGrid>
</template>
