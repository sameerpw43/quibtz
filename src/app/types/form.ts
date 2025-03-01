import { z } from 'zod';

export const basicConfigSchema = z.object({
  appName: z.string().min(1, 'App Name is required'),
  description: z.string().min(1, 'Description is required'),
});

export const ragSchema = z.object({
  knowledgeBaseName: z.string().min(1, 'Knowledge Base Name is required'),
  description: z.string().min(1, 'Description is required'),
  pattern: z.string().min(1, 'Pattern is required'),
  embeddings: z.string().min(1, 'Embeddings is required'),
  metrics: z.string().min(1, 'Metrics is required'),
  vectorDb: z.string().min(1, 'Vector DB is required'),
});

export type BasicConfigFormData = z.infer<typeof basicConfigSchema>;
export type RagFormData = z.infer<typeof ragSchema>;