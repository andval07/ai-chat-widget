import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, provider = 'anthropic' } = await req.json();

  // Choose provider based on env or request
  const model =
    provider === 'anthropic'
      ? anthropic('claude-haiku-4-5-20251001')
      : openai('gpt-4o-mini');

  const result = streamText({
    model,
    system:
      'You are a helpful assistant. Be concise, friendly, and professional. ' +
      'If you do not know something, say so honestly.',
    messages,
    onError: (error) => {
      console.error('streamText error:', JSON.stringify(error, null, 2));
    },
  });

  return result.toDataStreamResponse();
}
