import type { Database } from '~/types/database.types'
import type { NuxtSupabaseClient } from '~/plugins/api'
import { GenericAPI } from './generics'

import AuthRepository from './repository/auth'
import UsersRepository from './repository/users'
import StudentsRepository from './repository/students'
import GuardiansRepository from './repository/guardians'
import ActivitiesRepository from './repository/activities'
import EmergencyContactsRepository from './repository/emergency_contacts'

export type Tables = Database['public']['Tables']

export const createRepository = (client: NuxtSupabaseClient) => {
  return {
    auth: new AuthRepository(client),
    users: new UsersRepository(client, 'users'),
    students: new StudentsRepository(client, 'students'),
    guardians: new GuardiansRepository(client, 'guardians'),
    emergency: new EmergencyContactsRepository(client, 'emergency_contacts'),
    activities: new ActivitiesRepository(client, 'activities'),
    academic: new GenericAPI<'academic_backgrounds'>(client, 'academic_backgrounds'),
    subjects: new GenericAPI<'subjects'>(client, 'subjects'),
    subject_ratings: new GenericAPI<'subjects_ratings'>(client, 'subjects_ratings')
  }
}
