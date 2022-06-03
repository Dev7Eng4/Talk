import { z } from 'zod';
import { collectionSchema } from './Response';

const postSchema = z.object({
  id: z.string(),
  userId: z.string(),
  // channelId: z.string(),
  content: z.string(),
  createDate: z.string(),
  // numberOfLikes: z.number(),
  // numberOfComment: z.number(),
  userName: z.string(),
});

const postCollectionSchema = collectionSchema.extend({
  data: z.array(postSchema),
});

export type Post = z.infer<typeof postSchema>;
export type PostCollection = z.infer<typeof postCollectionSchema>;
