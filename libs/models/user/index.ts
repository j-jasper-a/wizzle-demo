import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatarUrl: z.string(),
  metadata: z.object({
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime().optional(),
  }),
});

type UserType = z.infer<typeof UserSchema>;

export { UserSchema };
export type { UserType };
