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

const books = ref([
  {
    title: 'Computer Science & Entrepreneurship',
    description: '9th Class',
    icon: ICONS.info.books,
    to: '/dashboard/books/cse9th'
  }, {
    title: 'Computer Science & Entrepreneurship',
    description: '10th Class',
    icon: ICONS.info.books,
    to: '/dashboard/books/cse10th'
  }, {
    title: 'Computer Science & Entrepreneurship',
    description: '11th Class',
    icon: ICONS.info.books,
    to: '/dashboard/books/cse11th'
  }, {
    title: 'Computer Science & Entrepreneurship',
    description: '12th Class',
    icon: ICONS.info.books,
    to: '/dashboard/books/cse12th'
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
