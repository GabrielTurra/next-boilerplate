import { z } from 'zod';

const privateEnvSchema = z.object({
  SENTRY_AUTH_TOKEN: z.string().min(3),
  NEXT_CLARITY_ID: z.string().min(3)
});

if (typeof window !== 'undefined') {
  throw new Error('This file should not be called in frontend.');
}

export const privateEnv = privateEnvSchema.parse(process.env);
