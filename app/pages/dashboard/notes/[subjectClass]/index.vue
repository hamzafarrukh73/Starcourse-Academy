<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard-minimal',
  auth: 'private',
  pageTitle: 'Computer Science & Entrepreneurship'
})

const usersStore = useUsersStore()
// const authStore = useAuthStore()

onMounted(async () => {
  await usersStore.getUser()
})

const books = ref([
  {
    title: 'Chapter 1',
    description: 'Short Questions',
    icon: ICONS.info.notes,
    to: '/dashboard/notes/cse9th/ch1sqs'
  }, {
    title: 'Chapter 1',
    description: 'Long Questions',
    icon: ICONS.info.notes,
    to: '/dashboard/notes/cse9th/ch1lqs'
  }, {
    title: 'Chapter 1',
    description: 'MCQs',
    icon: ICONS.info.notes,
    to: '/dashboard/notes/cse9th/ch1mcqs'
  }, {
    title: 'Chapter 1',
    description: 'Exercise',
    icon: ICONS.info.notes,
    to: '/dashboard/notes/cse9th/ch1ex'
  }
])

const items = ref([
  {
    label: 'Short',
    value: '9'
  }, {
    label: 'Long',
    value: '10'
  }, {
    label: 'MCQs',
    value: '11'
  }, {
    label: 'Exercise',
    value: '12'
  }, {
    label: 'All Types',
    value: '0'
  }
])
const value = ref('0')
</script>

<template>
  <UPageGrid
    :ui="{
      base: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
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
          fieldset: 'justify-center',
          item: 'rounded-full'
        }"
      />
    </div>
    <UPageGrid
      :ui="{
        base: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
      }"
    >
      <UPageCard
        v-for="book in books"
        :key="book.title"
        :to="book.to"
        orientation="vertical"
        variant="soft"
        :ui="{
          root: 'rounded-full px-4'
        }"
      >
        <UPageFeature
          v-bind="book"
        />
      </UPageCard>
    </UPageGrid>
  </UPageGrid>
</template>
