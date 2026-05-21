# AI Chat Widget

A drop-in AI chat widget for any Next.js website. Built with Vercel AI SDK, supports both **OpenAI** (GPT-4o-mini) and **Anthropic Claude** (Claude Haiku 4.5). Streaming responses, mobile-responsive, TypeScript-first.

🔗 **[Live demo](https://ai-chat-widget-git-main-andval07s-projects.vercel.app)** · 🛠️ **5-minute integration**

## Features

- ✅ **Streaming responses** via Vercel AI SDK
- ✅ **Provider-agnostic**: switch between OpenAI and Anthropic with a single line
- ✅ **Floating bubble UI** — drop it on any page, no layout changes required
- ✅ **Mobile-responsive** (Tailwind)
- ✅ **TypeScript + Next.js 15 App Router**
- ✅ **Production-ready** error handling and loading states

## Quick start

```bash
git clone https://github.com/andval07/ai-chat-widget.git
cd ai-chat-widget
npm install
cp .env.example .env.local
# Add your OpenAI or Anthropic API key
npm run dev
```

Open http://localhost:3000 and click the chat bubble.

## Integrate into an existing project

1. Copy `components/ChatWidget.tsx` and `app/api/chat/route.ts` into your project.
2. Add the dependencies:
   ```bash
   npm install ai @ai-sdk/openai @ai-sdk/anthropic
   ```
3. Set `OPENAI_API_KEY` (or `ANTHROPIC_API_KEY`) in your environment.
4. Import the widget in any page:
   ```tsx
   import ChatWidget from '@/components/ChatWidget';
   export default function Page() {
     return (<><YourContent /><ChatWidget /></>);
   }
   ```

## Customization

- **Change model**: edit `app/api/chat/route.ts`, swap the model ID for any OpenAI or Claude model.
- **System prompt**: edit the `system` field in the same file.
- **Colors / branding**: tweak the Tailwind classes in `components/ChatWidget.tsx`.

## Deployment

One-click deploy on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Remember to add `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` to Vercel project environment variables.

## Cost notes

- **GPT-4o-mini**: ~$0.15 per 1M input tokens, $0.60 per 1M output tokens. A typical chat session: less than $0.001.
- **Claude Haiku 4.5**: fast, low-cost Anthropic model. Good balance of speed and quality.

For low-cost production: GPT-4o-mini. For higher quality reasoning: Claude Sonnet or Opus.

## License

MIT — use it freely in client projects.

---

Built by [@andval07](https://github.com/andval07). Available for custom AI integrations on [Fiverr](https://www.fiverr.com/andrea_val777).
