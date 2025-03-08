import { z } from "zod";

const CategorySchema = z.enum([
  "General Knowledge",
  "Technology",
  "Entertainment",
  "Sports",
  "Science",
  "History",
  "Geography",
  "Politics",
  "Culture",
  "Nature",
]);

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
  creatorId: z.string(),
  title: z.string(),
  category: CategorySchema,
  questions: z.array(QuestionSchema),
  metadata: z.object({
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime().optional(),
  }),
});

type CategoryType = z.infer<typeof CategorySchema>;
type OptionType = z.infer<typeof OptionSchema>;
type QuestionType = z.infer<typeof QuestionSchema>;
type QuizType = z.infer<typeof QuizSchema>;

export { CategorySchema, OptionSchema, QuestionSchema, QuizSchema };
export type { CategoryType, OptionType, QuestionType, QuizType };
