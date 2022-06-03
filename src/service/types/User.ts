import { z } from 'zod';
import { collectionSchema } from './Response';

const name = z.object({
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
});

const address = z.object({
  country: z.string(),
  province: z.string(),
  street: z.string(),
});

export const userSchema = z.object({
  id: z.string(),
  name: name,
  avatar: z.string().optional(),
  address: address.optional(),
  status: z.enum(['offline', 'online', 'busy']),
});

export const userCollectionSchema = z.array(userSchema);

export const userCollectionPagSchema = collectionSchema.extend({
  data: z.array(userSchema),
});

export type User = z.infer<typeof userSchema>;
export type UserCollection = z.infer<typeof userCollectionSchema>;
export type UserCollectionPag = z.infer<typeof userCollectionPagSchema>;
