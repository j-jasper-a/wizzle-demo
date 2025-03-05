import { z } from "zod";

const ChoiceSchema = z.object({
  questionId: z.string(),
  optionId: z.string(),
});

const UserResponseSchema = z.object({
  id: z.string(),
  userId: z.string(),
  quizId: z.string(),
  choices: z.array(ChoiceSchema),
});

type ChoiceType = z.infer<typeof ChoiceSchema>;
type UserResponseType = z.infer<typeof UserResponseSchema>;

export { ChoiceSchema, UserResponseSchema };
export type { ChoiceType, UserResponseType };
