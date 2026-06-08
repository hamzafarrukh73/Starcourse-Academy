<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
  auth: 'private',
  navGroup: 'dashboard'
})

onMounted(async () => {

})
const counts = [1, 2, 3, 4]
</script>

<template>
  <UPage>
    <UPageGrid
      :ui="{
        base: 'gap-4'
      }"
    >
      <UCard
        variant="subtle"
        :ui="{
          root: 'h-40 rounded-xl self-center'
        }"
      >
        <img
          src="/img/logo.png"
        >
      </UCard>
      <USeparator />
      <UPageCard
        v-for="count in counts"
        :key="count"
        title="Browse and read the official books."
        :to="URLS.dashboard.students"
        orientation="horizontal"
        variant="soft"
        :ui="{
          root: 'rounded-full px-4'
        }"
      />
    </UPageGrid>
  </UPage>
</template>
