import { z } from 'zod';

export const accountSettingSchema = z.object({});

export type AccountSetting = z.infer<typeof accountSettingSchema>;
