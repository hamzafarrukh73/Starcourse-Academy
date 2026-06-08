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

// const fullName = computed(() => {
//   return `${usersStore.user?.first_name || ''} ${usersStore.user?.last_name || ''}`.trim() || 'User'
// })

const counts = [1, 2, 3, 4]
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
        />
      </div>
    </UCard>
    <USeparator />
    <UPageGrid
      :ui="{
        base: 'grid-cols-2'
      }"
    >
      <UPageCard
        v-for="count in counts"
        :key="count"
        title="Browse Books"
        :icon="ICONS.info.books"
        :to="URLS.dashboard.books"
        orientation="horizontal"
        variant="soft"
        :ui="{
          root: 'rounded-full px-4'
        }"
      />
    </UPageGrid>
  </UPageGrid>
</template>
