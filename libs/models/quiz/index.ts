import { z } from "zod";

const OptionSchema = z.object({
  id: z.string(),
  text: z.string(),
});

const QuestionSchema = z.object({
  id: z.string(),
  text: z.string(),
  options: z.array(OptionSchema),
});

const QuizSchema = z.object({
  id: z.string(),
  slug: z.string(),
  creatorId: z.string(),
  title: z.string(),
  questions: z.array(QuestionSchema),
  metadata: z.object({
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime().optional(),
  }),
});

type OptionType = z.infer<typeof OptionSchema>;
type QuestionType = z.infer<typeof QuestionSchema>;
type QuizType = z.infer<typeof QuizSchema>;

export { OptionSchema, QuestionSchema, QuizSchema };
export type { OptionType, QuestionType, QuizType };
