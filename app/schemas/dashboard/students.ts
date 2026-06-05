import { z } from 'zod'
import { ENUMS } from '~/utils/constants/enums'

export const currentStudentSchema = z.object({
  school: z.string().optional().meta({ label: 'School / College', placeholder: 'Enter Current School Name', orientation: 'vertical' }),
  class: z.string().optional().meta({ label: 'Class', type: 'select', items: [...ENUMS.class_enum], placeholder: 'Select Class', orientation: 'vertical' }),
  subject_group: z.string().optional().meta({ label: 'Subjects Group', type: 'select', items: [...ENUMS.subject_group_enum], placeholder: 'Select Group', orientation: 'vertical' })
})
