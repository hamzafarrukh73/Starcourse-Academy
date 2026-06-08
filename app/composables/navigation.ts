import type { NavigationMenuItem } from '@nuxt/ui'

export const useNavigation = () => {
  const route = useRoute()
  const authStore = useAuthStore()

  const navGroups = {
    landing: ref<NavigationMenuItem[][]>([
      [
        { label: 'Home', to: URLS.landing.hero, exactHash: true },
        { label: 'Resources', to: URLS.landing.resources, exactHash: true },
        { label: 'Contact', to: URLS.landing.contact, exactHash: true }
      ]
    ]),
    dashboard: computed<NavigationMenuItem[][]>(() => {
      return [
        [{
          icon: ICONS.nav.home,
          label: 'Home',
          to: URLS.dashboard.home
        }, {
          icon: ICONS.info.books,
          label: 'Books',
          to: URLS.dashboard.books
        }, {
          icon: ICONS.info.notes,
          label: 'Notes',
          to: URLS.dashboard.notes
        }, {
          icon: ICONS.nav.config,
          label: 'Settings',
          to: URLS.dashboard.personal
        }],
        [{
          icon: ICONS.nav.user,
          label: authStore.user?.email,
          children: [{
            icon: ICONS.action.exit,
            label: 'Logout',
            onSelect: () => authStore.logout()
          }]
        }]
      ]
    })
  }

  return computed(() => {
    const key = (route.meta.navGroup || 'dashboard') as keyof typeof navGroups
    const group = navGroups[key]

    return group.value
  })
}
