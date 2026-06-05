<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const authStore = useAuthStore()
const layoutStore = useLayoutStore()

const fields: AuthFormField[] = [{
  name: 'email',
  type: 'email',
  placeholder: 'Enter your email',
  size: 'xl',
  required: true
}, {
  name: 'password',
  type: 'password',
  placeholder: 'Enter your password',
  size: 'xl',
  required: true
}]

// const providers = [{
//   label: 'Google',
//   icon: 'i-simple-icons-google',
//   onClick: () => authStore.socialGoogleLogin()
// }]

const schema = z.object({
  email: z.email('Please enter a correct email address'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  authStore.login(payload.data)
}
</script>

<template>
  <UAuthForm
    :schema="schema"
    :fields="fields"
    :loading="layoutStore.isLoading"
    :validate-on="['input']"
    :submit="{
      label: 'Login',
      size: 'xl',
      ui: {
        base: 'hover:cursor-pointer'
      }
    }"
    @submit="onSubmit"
  >
    <template #footer>
      <div class="flex justify-between items-center">
        <ULink
          :to="URLS.auth.password.reset"
          class="text-info font-medium"
          tabindex="-1"
        >
          Forgot password?
        </ULink>
        <ULink
          :to="URLS.auth.registration.home"
          class="text-info font-medium"
        >
          Register here
        </ULink>
      </div>
    </template>
  </UAuthForm>
</template>
