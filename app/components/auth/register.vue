<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

definePageMeta({
  layout: 'minimal'
})

const authStore = useAuthStore()
const layoutStore = useLayoutStore()

const fields: AuthFormField[] = [{
  name: 'email',
  type: 'email',
  placeholder: 'Enter Email',
  size: 'xl',
  required: true
}, {
  name: 'password1',
  type: 'password',
  placeholder: 'Enter Password',
  size: 'xl',
  required: true
}, {
  name: 'password2',
  type: 'password',
  placeholder: 'Re-enter Password',
  size: 'xl',
  required: true
}, {
  name: 'terms',
  type: 'checkbox',
  label: 'Agree to the Terms of Use & Privacy Policy',
  required: true
}]

// const providers = [{
//   label: 'Google',
//   icon: 'i-simple-icons-google',
//   onClick: () => authStore.socialGoogleLogin()
// }]

const schema = z.object({
  email: z.email('Please enter a correct email address'),
  password1: z.string('Password is required').min(8, 'Must be at least 8 characters'),
  password2: z.string('Password is required').min(8, 'Must be at least 8 characters'),
  terms: z.literal(true, 'You must agree to the terms')
}).refine((data) => {
  return data.password1 === data.password2
}, {
  message: 'Passwords do not match.',
  path: ['password2']
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  const data = {
    email: payload.data.email,
    password: payload.data.password1
  }
  authStore.register(data, URLS.auth.login)
}
</script>

<template>
  <UAuthForm
    :schema="schema"
    :fields="fields"
    :loading="layoutStore.isLoading"
    :validate-on="['input']"
    :submit="{
      label: 'Register',
      size: 'xl'
    }"
    :on-submit="onSubmit"
  >
    <template #footer>
      <div class="flex justify-between items-center">
        <ULink
          :to="URLS.auth.registration.verifyEmail"
          class="text-primary font-medium"
        >
          Verify Email
        </ULink>
        <ULink
          :to="URLS.auth.login"
          class="text-primary font-medium"
        >
          Login here
        </ULink>
      </div>
    </template>
  </UAuthForm>
</template>
