<script lang="ts" setup>
definePageMeta({
  navGroup: 'landing',
  middleware: 'redirects-client'
})
const landingStore = useLandingStore()

const route = useRoute()

onMounted(() => {
  if (route.hash) {
    const id = route.hash.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
  }
})
</script>

<template>
  <UContainer class="flex flex-col gap-12">
    <UPageHero
      id="home"
      headline="Welcome to"
      title="STARCOURSE ACADEMY"
      description=""
      orientation="vertical"
      :links="landingStore.heroLinks"
      :ui="{
        root: 'flex items-center justify-center min-h-[90vh] scroll-mt-(--ui-header-height)',
        title: 'text-wrap!',
        description: 'text-wrap!',
        container: 'py-4 md:py-6 lg:py-8'
      }"
      as="section"
      reverse
    />

    <UPageSection
      id="resources"
      title="Download Free Resources"
      class="flex flex-col items-center justify-center min-h-[90vh]"
    >
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 size-full">
        <UPageCard
          v-for="(resource, index) in landingStore.resources"
          :key="index"
          :title="resource.title"
          :icon="resource.icon"
          :to="resource.title"
          variant="outline"
          orientation="horizontal"
          reverse
          class="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        />
      </div>
    </UPageSection>

    <UPageSection
      id="contact"
      headline="Contact Us"
      title="We're here to help you"
      orientation="vertical"
      :links="landingStore.contactLinks"
      class="flex justify-center items-center min-h-[90vh]"
      :ui="{
        title: 'text-wrap!',
        description: 'text-wrap!',
        container: 'py-4 md:py-6 lg:py-8'
      }"
    />
  </UContainer>
</template>
