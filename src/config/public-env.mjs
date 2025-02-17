import { z } from 'zod';

const publicEnvSchema = z.object({
  NEXT_PUBLIC_CLARITY_ID: z.string().min(3)
});

export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID
});
