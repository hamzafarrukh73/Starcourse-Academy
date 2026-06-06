export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/' && !to.hash) {
    return navigateTo({ path: '/', hash: '#home' }, { replace: true })
  }
})
