import { z } from 'zod';
import { userSchema } from './User';

export const authSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  refresh_token: z.string(),
  expires_in: z.number(),
  user: userSchema,
});

export type Auth = z.infer<typeof authSchema>;
