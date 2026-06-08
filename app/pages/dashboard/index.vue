<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
  auth: 'private',
  navGroup: 'dashboard'
})

const usersStore = useUsersStore()
const authStore = useAuthStore()

onMounted(async () => {
  await usersStore.getUser()
})

// const fullName = computed(() => {
//   return `${usersStore.user?.first_name || ''} ${usersStore.user?.last_name || ''}`.trim() || 'User'
// })

const items = ref([
  {
    title: 'Books',
    icon: ICONS.info.books,
    description: 'Browse Official Textbooks',
    to: URLS.dashboard.books
  }, {
    title: 'Notes',
    icon: ICONS.info.notes,
    description: 'Browse our chapter-wise notes',
    to: URLS.dashboard.notes
  }, {
    title: 'Recent Read',
    icon: ICONS.info.history,
    description: 'Return to the last thing you were reading',
    to: URLS.dashboard.books
  }, {
    title: 'Preferences',
    icon: ICONS.nav.config,
    description: 'Personalize your experience through settings',
    to: URLS.dashboard.personal
  }
])
</script>

<template>
  <UPageGrid>
    <UCard
      variant="soft"
      :ui="{
        root: 'rounded-xl self-center',
        body: 'size-full'
      }"
    >
      <div class="flex justify-between items-center size-full">
        <UUser
          name="Welcome Back!"
          description="What would you like to do today?"
          :avatar="{
            src: usersStore.displayAvatarUrl || '',
            icon: ICONS.nav.user,
            loading: 'lazy',
            ui: {
              root: 'size-20',
              image: 'object-contain',
              icon: 'size-15'
            }
          }"
          orientation="horizontal"
          size="3xl"
          :ui="{
            root: 'items-center text-start w-full p-4',
            wrapper: 'flex flex-col'
          }"
        />
        <UButton
          :icon="ICONS.action.exit"
          size="xl"
          color="error"
          variant="ghost"
          @click="authStore.logout(URLS.auth.login)"
        />
      </div>
    </UCard>
    <USeparator />
    <UPageGrid
      :ui="{
        base: 'grid-cols-1'
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
