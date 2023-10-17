import { z } from 'zod';

export const ValidJsonPayloadFromString = z
  .string()
  .refine(
    (val) => {
      try {
        const parsed = JSON.parse(val);
        z.object({}).parse(parsed);
        return true;
      } catch (error) {
        return false;
      }
    },
    {
      message: 'Expecting valid JSON string, received invalid',
    },
  )
  .transform<Record<string, unknown>>((val: string) => JSON.parse(val));
