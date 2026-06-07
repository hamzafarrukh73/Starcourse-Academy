<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const authStore = useAuthStore()
const layoutStore = useLayoutStore()

const fields: AuthFormField[] = [{
  name: 'email',
  type: 'email',
  placeholder: 'Enter Email',
  size: 'xl',
  required: true
}]

const schema = z.object({
  email: z.email('Please enter a valid email address')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  authStore.resendVerificationEmail(payload.data.email)
}
</script>

<template>
  <UAuthForm
    :schema="schema"
    :fields="fields"
    :loading="layoutStore.isLoading"
    :validate-on="['input']"
    :submit="{
      label: 'Resend Verification Email',
      size: 'xl'
    }"
    @submit="onSubmit"
  >
    <template #footer>
      <div class="flex justify-between items-center">
        <ULink
          :to="URLS.auth.login"
          class="text-primary font-medium"
        >
          Already verified?
        </ULink>
        <ULink
          :to="URLS.auth.registration.home"
          class="text-primary font-medium"
        >
          Register here
        </ULink>
      </div>
    </template>
  </UAuthForm>
</template>
