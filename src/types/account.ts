import { z } from 'zod'

export const accountDataSchema = z.object({
  user: z.object({
    name: z.string()
  })
})

export type AccountData = z.infer<typeof accountDataSchema>
