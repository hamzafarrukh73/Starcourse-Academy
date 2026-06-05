import type { ButtonProps, PricingPlanProps, TabsItem } from '@nuxt/ui'

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

  const resources = ref([
    {
      title: '9th Class Books Bundle',
      icon: ICONS.info.books
    }, {
      title: '10th Class Books Bundle',
      icon: ICONS.info.books
    }, {
      title: '11th Class Books Bundle',
      icon: ICONS.info.books
    }, {
      title: '12th Class Books Bundle',
      icon: ICONS.info.books
    }, {
      title: 'Exam Guidelines',
      icon: ICONS.info.notebookpen
    }, {
      title: 'Study Guidelines',
      icon: ICONS.info.notebookpen
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

  const matriculationPlans = ref<PricingPlanProps[]>([
    {
      title: 'Arts Only',
      price: 'Rs. 1200',
      billingCycle: '/month',
      features: [
        'Urdu',
        'English',
        'Islamiyat'
      ],
      button: {
        label: 'Start Now',
        to: URLS.auth.registration.home
      }
    }, {
      title: 'Science Only',
      price: 'Rs. 2800',
      billingCycle: '/month',
      features: [
        'Physics',
        'Mathematics',
        'Chemistry',
        'Biology',
        'Computer Science'
      ],
      button: {
        label: 'Start Now',
        to: URLS.auth.registration.home
      }
    }, {
      title: 'All Subjects',
      price: 'Rs. 4000',
      billingCycle: '/month',
      discount: 'Rs. 3200',
      billingPeriod: '20% off',
      features: [
        'Urdu',
        'English',
        'Islamiyat',
        'Physics',
        'Mathematics',
        'Chemistry',
        'Biology',
        'Computer Science'
      ],
      button: {
        label: 'Start Now',
        to: URLS.auth.registration.home
      }
    }
  ])

  const intermediatePlans = ref<PricingPlanProps[]>([
    {
      title: 'Arts Only',
      price: 'Rs. 1500',
      billingCycle: '/month',
      features: [
        'Urdu',
        'English',
        'Islamiyat'
      ],
      button: {
        label: 'Start Now',
        to: URLS.auth.registration.home
      }
    }, {
      title: 'Science Only',
      price: 'Rs. 3000',
      billingCycle: '/month',
      features: [
        'Physics',
        'Mathematics',
        'Biology',
        'Chemistry',
        'Computer Science'
      ],
      button: {
        label: 'Start Now',
        to: URLS.auth.registration.home
      }
    }, {
      title: 'All Subjects',
      price: 'Rs. 4500',
      billingCycle: '/month',
      discount: 'Rs. 3600',
      billingPeriod: '20% off',
      features: [
        'Urdu',
        'English',
        'Islamiyat',
        'Physics',
        'Mathematics',
        'Biology',
        'Chemistry',
        'Computer Science'
      ],
      button: {
        label: 'Start Now',
        to: URLS.auth.registration.home
      }
    }
  ])
  const ctaLinks = ref<ButtonProps[]>([
    {
      label: 'Join Now',
      icon: ICONS.action.start,
      variant: 'solid',
      size: 'xl',
      to: URLS.auth.registration.home
    }, {
      label: 'Contact Us',
      icon: ICONS.action.call,
      variant: 'soft',
      size: 'xl',
      to: LINKS.social.whatsapp,
      target: '_blank'
    }

  ])

  const contacts = ref([
    {
      title: '+923326283024',
      icon: ICONS.action.call,
      to: LINKS.social.whatsapp,
      target: '_blank'
    }, {
      title: 'starcourseacademy@gmail.com',
      icon: ICONS.info.mail,
      to: 'mailto:starcourseacademy@gmail.com',
      target: '_blank'
    }
  ])

  const contactLinks = ref([
    {
      label: 'Whatsapp',
      icon: ICONS.brand.whatsapp,
      to: LINKS.social.whatsapp
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
    matriculationPlans,
    intermediatePlans,
    ctaLinks,
    contacts,
    contactLinks,
    faqs
  }
})
