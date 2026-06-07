import type { ButtonProps, PageCardProps, TabsItem } from '@nuxt/ui'

export const useLandingStore = defineStore('landingStore', () => {
  // --- STATE ---
  const heroLinks = ref<ButtonProps[]>([
    {
      label: 'DOWNLOAD THE APP',
      variant: 'solid',
      size: 'xl',
      to: URLS.auth.registration.home
    }
  ])

  const resources = ref<PageCardProps[]>([
    {
      title: '9th Class Books Bundle',
      icon: ICONS.info.books,
      to: ''
    }, {
      title: '10th Class Books Bundle',
      icon: ICONS.info.books,
      to: ''
    }, {
      title: '11th Class Books Bundle',
      icon: ICONS.info.books,
      to: ''
    }, {
      title: '12th Class Books Bundle',
      icon: ICONS.info.books,
      to: ''
    }, {
      title: 'Exam Guidelines',
      icon: ICONS.info.notebookpen,
      to: ''
    }, {
      title: 'Study Guidelines',
      icon: ICONS.info.notebookpen,
      to: ''
    }
  ])

  const resourcesTabs = ref<TabsItem[]>([
    {
      label: '9th Class',
      slot: '9th' as const
    }, {
      label: '10th Class',
      slot: '10th' as const
    }, {
      label: '11th Class',
      slot: '11th' as const
    }, {
      label: '12th Class',
      slot: '12th' as const
    }
  ])

  const contactLinks = ref<ButtonProps[]>([
    {
      label: 'Whatsapp',
      icon: ICONS.brand.whatsapp,
      to: LINKS.social.whatsapp,
      target: '_blank'
    }
  ])

  const faqs = [
    {
      label: 'Are there separate batches for students who start late?',
      content: 'Yes, we offer dedicated batches for students who join mid-session. Our system is designed to integrate late-joiners without disrupting the progress of existing classes.'
    }, {
      label: 'What is the qualification of the teachers?',
      content: 'Our faculty consists of subject specialists with years of experience. We use a "Concept First" approach, ensuring students understand the "Why" before the "How."'
    }, {
      label: 'How do you track student progress?',
      content: 'We conduct chapter-wise tests and before the board exams, we run a dedicated Test Session to simulate the actual exam environment.'
    }
  ]
  // --- GETTERS ---

  // --- EXPOSE ---
  return {
    heroLinks,
    resources,
    resourcesTabs,
    contactLinks,
    faqs
  }
})
