import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, provider = 'openai' } = await req.json();

  // Choose provider based on env or request
  const model =
    provider === 'anthropic'
      ? anthropic('claude-3-5-haiku-latest')
      : openai('gpt-4o-mini');

  const result = streamText({
    model,
    system:
      'You are a helpful assistant. Be concise, friendly, and professional. ' +
      'If you do not know something, say so honestly.',
    messages,
  });

  return result.toDataStreamResponse();
}
