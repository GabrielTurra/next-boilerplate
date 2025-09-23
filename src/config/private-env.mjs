import { z } from 'zod';

const privateEnvSchema = z.object({});

if (typeof window !== 'undefined') {
  throw new Error('This file should not be called in frontend.');
}

export const privateEnv = privateEnvSchema.parse(process.env);
