import { z } from 'zod';
import { collectionSchema } from './Response';

const channelSchema = z.object({
  id: z.string(),
  userId: z.string(),
  content: z.string(),
  status: z.enum(['Sent', 'Delivered']),
  sentDate: z.string(),
  isRead: z.boolean(),
});

const channelCollectionSchema = collectionSchema.extend({
  data: z.array(channelSchema),
});

// export type Channel = z.infer<typeof channelSchema>;
// export type ChannelCollection = z.infer<typeof channelCollectionSchema>;
