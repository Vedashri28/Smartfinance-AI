import React from 'react';

function ChatMessage({ role = 'assistant', message }) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser
            ? 'bg-cyan-500/20 text-cyan-50 border border-cyan-400/30'
            : 'bg-white/10 text-slate-200 border border-white/10'
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default ChatMessage;
