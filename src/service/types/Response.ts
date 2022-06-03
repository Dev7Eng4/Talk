import { AxiosError } from 'axios';
import { z } from 'zod';

export const collectionSchema = z.object({
  offset: z.number(),
  limit: z.number(),
  totalAvailable: z.number(),
});

export type ValidAxiosResponse = string;

interface ErrorResponseData {
  message?: string;
}

export type ErrorResponse = AxiosError<ErrorResponseData>;
