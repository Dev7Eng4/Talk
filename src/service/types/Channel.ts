import { z } from 'zod';
import { collectionSchema } from './Response';

export const channelSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().optional(),
});

export const channelCollectionSchema = z.array(channelSchema);

export const channelCollectionPagSchema = collectionSchema.extend({
  data: z.array(channelSchema),
});

export type Channel = z.infer<typeof channelSchema>;
export type ChannelCollection = z.infer<typeof channelCollectionSchema>;
export type ChannelCollectionPag = z.infer<typeof channelCollectionPagSchema>;
