export const URLS = {
  home: '/',
  terms: '/terms',
  landing: {
    hero: '/#home',
    resources: '/#resources',
    contact: '/#contact'
  },
  auth: {
    login: '/auth/login',
    registration: {
      home: '/auth/registration',
      verifyEmail: '/auth/registration/verify-email'
    },
    password: {
      reset: '/auth/password/reset',
      change: '/auth/password/change'
    }
  },
  users: {
    profile: '/users/me'
  },
  dashboard: {
    home: '/dashboard',
    books: '/dashboard/books',
    notes: '/dashboard/notes',
    personal: '/dashboard/personal',
    activities: '/dashboard/activities',
    print: '/dashboard/print',
    account: '/dashboard/account'
  }
}
