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

const subjects = ref([
  'Computer', 'Math', 'Physics', 'Biology', 'Chemistry'
])
const notes = ref([
  {
    icon: ICONS.info.notes,
    title: 'Computer Science & Entrepreneurship',
    description: '9th Class',
    to: '/dashboard/notes/cse9th'
  }, {
    icon: ICONS.info.notes,
    title: 'Computer Science & Entrepreneurship',
    description: '10th Class',

    to: '/dashboard/notes/cse10th'
  }, {
    icon: ICONS.info.notes,
    title: 'Computer Science & Entrepreneurship',
    description: '11th Class',

    to: '/dashboard/notes/cse11th'
  }, {
    icon: ICONS.info.notes,
    title: 'Computer Science & Entrepreneurship',
    description: '12th Class',
    to: '/dashboard/notes/cse12th'
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
  <UPageGrid
    :ui="{
      base: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
    }"
  >
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
          :items="subjects"
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
            fieldset: 'justify-center',
            item: 'rounded-full'
          }"
        />
      </div>
    </div>

    <UPageGrid
      :ui="{
        base: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
      }"
    >
      <UPageCard
        v-for="note in notes"
        :key="note.title"
        :to="note.to"
        orientation="vertical"
        variant="soft"
        :ui="{
          root: 'rounded-full px-4'
        }"
      >
        <UPageFeature
          v-bind="note"
        />
      </UPageCard>
    </UPageGrid>
  </UPageGrid>
</template>
