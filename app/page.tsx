import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl mx-auto pt-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          AI Chat Widget Demo
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A drop-in AI chat widget for any website. Built with Next.js 15,
          Vercel AI SDK, and supports both OpenAI and Anthropic Claude.
        </p>

        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Streaming responses</li>
            <li>✓ Works with OpenAI (GPT-4o-mini) and Anthropic (Claude 3.5 Haiku)</li>
            <li>✓ Mobile-responsive, accessible</li>
            <li>✓ TypeScript, Tailwind CSS</li>
            <li>✓ 5-minute integration into any Next.js project</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Try it</h2>
          <p className="text-gray-700">
            Click the chat bubble in the bottom-right corner.
          </p>
        </div>
      </div>

      <ChatWidget />
    </main>
  );
}
