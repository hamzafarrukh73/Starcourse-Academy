<script setup lang="ts">
import type { NuxtError } from '#app'
import type { ButtonProps } from '@nuxt/ui'

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Starcourse Academy'
const description = ''

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})

const toaster = { position: 'top-center', duration: 3000 } as const

const props = defineProps<{
  error: NuxtError
}>()

const errorMap: Record<number | string, { title: string, description: string }> = {
  404: {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.'
  },
  500: {
    title: 'Internal Server Error',
    description: 'An error occurred on the server.'
  },
  default: {
    title: 'Unexpected Error',
    description: 'An unexpected error has occurred.'
  }
}

const errorValues = computed(() => {
  return errorMap[props.error.status || 500] || errorMap['default']
})

const handleClearError = (linkId: number) => {
  if (linkId === 1) {
    clearError({ redirect: '/' })
  } else if (linkId === 2) {
    clearError({ redirect: '/#contact' })
  }
}
const links: ButtonProps[] = [
  { label: 'Return Home', icon: ICONS.nav.home, size: 'xl', class: 'hover:cursor-pointer', onClick: () => handleClearError(1) },
  { label: 'Contact Support', icon: ICONS.action.call, size: 'xl', variant: 'soft', class: 'hover:cursor-pointer', onClick: () => handleClearError(2) }
]
</script>

<template>
  <UApp :toaster="toaster">
    <BgGlow />
    <NuxtLoadingIndicator />
    <NuxtLayout name="empty">
      <UContainer class="flex flex-col">
        <UPageHero
          v-bind="errorValues"
          :links="links"
          class="flex items-center justify-center min-h-screen"
        />
      </UContainer>
    </NuxtLayout>
  </UApp>
</template>
