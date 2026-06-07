<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const authStore = useAuthStore()
const layoutStore = useLayoutStore()

const fields: AuthFormField[] = [{
  name: 'password',
  type: 'password',
  placeholder: 'Enter New Password',
  size: 'xl',
  required: true
}, {
  name: 'confirmPassword',
  type: 'password',
  placeholder: 'Re-enter Password',
  size: 'xl',
  required: true
}]

const schema = z.object({
  password: z.string().min(8, 'Must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Must be at least 8 characters')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords don\'t match',
  path: ['confirmPassword']
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  authStore.confirmPasswordReset(payload.data.password)
}
</script>

<template>
  <UAuthForm
    :schema="schema"
    :fields="fields"
    title="Change Password"
    description="Enter your new password below."
    :icon="ICONS.nav.user"
    :loading="layoutStore.isLoading"
    :validate-on="['input']"
    :submit="{
      label: 'Update Password',
      size: 'xl'
    }"
    @submit="onSubmit"
  >
    <template #footer>
      <div class="flex justify-center">
        <ULink
          :to="URLS.auth.login"
          class="text-primary font-medium"
        >
          Back to login
        </ULink>
      </div>
    </template>
  </UAuthForm>
</template>
