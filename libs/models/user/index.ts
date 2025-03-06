import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  avatarUrl: z.string(),
  metadata: z.object({
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
});

type UserType = z.infer<typeof UserSchema>;

export { UserSchema };
export type { UserType };
