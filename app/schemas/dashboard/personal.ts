import { z } from 'zod'

export const identitySchema = z.object({
  first_name: z.string().optional().meta({ label: 'First Name', placeholder: 'Enter your name' }),
  last_name: z.string().optional().meta({ label: 'Last Name', placeholder: 'Enter your last name' }),
  cnic: z.string().optional().meta({ label: 'CNIC / B-Form', placeholder: '33202-1234567-1' }),
  dob: z.string().optional().meta({ label: 'Date of Birth', type: 'date' }),
  phone: z.string().optional().meta({ label: 'Phone Number', placeholder: 'xxxx-xxxxxxx' }),
  gender: z.string().optional().meta({ label: 'Gender', type: 'select', items: [...ENUMS.gender_enum] })
})

export const guardianSchema = z.object({
  name: z.string().nullable().optional().meta({ label: 'Guardian Name', placeholder: 'Enter guardian\'s full name' }),
  relationship: z.string().optional().meta({ label: 'Relationship', type: 'select', items: [...ENUMS.relationship_enum] }),
  cnic: z.string().optional().meta({ label: 'CNIC', placeholder: '33202-1234567-1' }),
  email: z.email('Invalid email address').optional().or(z.literal('')).meta({ label: 'Email Address', type: 'email', placeholder: 'guardian@example.com' }),
  phone: z.string().optional().meta({ label: 'Phone Number', placeholder: 'xxxx-xxxxxxx' }),
  is_whatsapp: z.boolean().optional().meta({ label: 'Is this a whatsapp number? ', type: 'switch', orientation: 'horizontal', class: 'flex justify-between items-center text-muted' })
})

export const emergencySchema = z.object({
  name: z.string().optional().meta({ label: 'Name', placeholder: 'Enter name' }),
  relationship: z.string().optional().meta({ label: 'Relationship', type: 'select', items: [...ENUMS.relationship_enum] }),
  phone: z.string().optional().meta({ label: 'Phone Number', placeholder: 'xxxx-xxxxxxx' }),
  is_whatapp: z.boolean().optional().meta({ label: 'Is this a whatsapp number? ', type: 'switch', placeholder: ' ', orientation: 'horizontal', class: 'flex justify-between items-center text-muted' })
})

export const addressSchema = z.object({
  address: z.string().optional().meta({ type: 'textarea', placeholder: 'House/Street, Area', class: 'lg:col-span-2' }),
  city: z.string().optional().meta({ label: 'City', type: 'select', items: [...ENUMS.city_enum] }),
  province: z.string().optional().meta({ label: 'Province', type: 'select', items: [...ENUMS.province_enum] })
})
