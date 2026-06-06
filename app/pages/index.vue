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
      class="flex items-center justify-center min-h-[90vh] scroll-mt-(--ui-header-height)"
      :ui="{
        title: 'text-wrap!',
        description: 'text-wrap!',
        container: 'py-4 md:py-6 lg:py-8'
      }"
      as="section"
      reverse
    >
      <!-- <template #headline>
        <div>
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            class="h-14 w-auto mx-auto object-contain hover:scale-105 transition-transform duration-200"
          >
        </div>
      </template> -->
      <!-- <UCarousel /> -->
    </UPageHero>

    <!-- <UPageSection
      id="resources"
      title="Download Free Resources"
      :features="landingStore.resources"
      class="flex items-center justify-center min-h-[90vh]"
    /> -->

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

    <!-- <section
      id="get-started"
      class="flex justify-center items-center min-h-[60vh] py-16"
    >
      <UPageCTA
        title="Ready to Learn?"
        description="Secure your place in our upcoming sessions today."
        :links="landingStore.ctaLinks"
        class="w-full lg:w-fit"
        variant="naked"
      />
    </section> -->

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
    >
      <!-- <div class="grid lg:grid-cols-2 gap-8 lg:w-3/4 mx-auto">
        <UButton
          v-for="(contact, index) in landingStore.contactLinks"
          :key="index"
          :label="contact.label"
          :icon="contact.icon"
          :to="contact.to"
          :target="contact.target"
          orientation="horizontal"
          class="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        />
      </div> -->
    </UPageSection>
  </UContainer>
</template>
