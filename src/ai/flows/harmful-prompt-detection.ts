'use server';
/**
 * @fileOverview This file defines a Genkit flow for detecting harmful prompts.
 *
 * - detectHarmfulPrompt -  A function that analyzes user prompts for potential harm and flags them if necessary.
 * - HarmfulPromptDetectionInput - The input type for the detectHarmfulPrompt function.
 * - HarmfulPromptDetectionOutput - The return type for the detectHarmfulPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HarmfulPromptDetectionInputSchema = z.object({
  prompt: z.string().describe('The prompt to be analyzed for potential harm.'),
});

export type HarmfulPromptDetectionInput = z.infer<typeof HarmfulPromptDetectionInputSchema>;

const HarmfulPromptDetectionOutputSchema = z.object({
  isHarmful: z.boolean().describe('Whether the prompt is considered harmful or unethical.'),
  reason: z.string().describe('The reason why the prompt was flagged as harmful.'),
});

export type HarmfulPromptDetectionOutput = z.infer<typeof HarmfulPromptDetectionOutputSchema>;

export async function detectHarmfulPrompt(
  input: HarmfulPromptDetectionInput
): Promise<HarmfulPromptDetectionOutput> {
  return harmfulPromptDetectionFlow(input);
}

const harmfulPromptDetectionPrompt = ai.definePrompt({
  name: 'harmfulPromptDetectionPrompt',
  input: {schema: HarmfulPromptDetectionInputSchema},
  output: {schema: HarmfulPromptDetectionOutputSchema},
  prompt: `You are an AI assistant specializing in detecting harmful or unethical prompts.
Your task is to analyze the following prompt. Based on your analysis, determine if the prompt is harmful or unethical and provide a concise reason for your classification.

Prompt: {{{prompt}}}
  `,
});

const harmfulPromptDetectionFlow = ai.defineFlow(
  {
    name: 'harmfulPromptDetectionFlow',
    inputSchema: HarmfulPromptDetectionInputSchema,
    outputSchema: HarmfulPromptDetectionOutputSchema,
  },
  async input => {
    const {output} = await harmfulPromptDetectionPrompt(input);
    return output!;
  }
);
