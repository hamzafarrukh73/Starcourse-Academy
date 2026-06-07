<script setup lang="ts">
interface Props {
  collapsed?: boolean
  class?: string
}

defineProps<Props>()
</script>

<template>
  <img
    v-if="!collapsed"
    :src="IMAGES.logo"
    :class="['h-10 object-contain object-center', $props.class]"
    alt="Logo"
  >
  <img
    v-else
    :src="IMAGES.logoCollapsed"
    :class="['h-10 aspect-square object-cover object-center', $props.class]"
    alt="Logo Collapsed"
  >
</template>
