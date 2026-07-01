import React from 'react';
import GlassCard from '../shared/GlassCard';
import GlassInput from '../shared/GlassInput';
import GlassButton from '../shared/GlassButton';

export default function LoginForm() {
  return (
    <GlassCard className="w-full max-w-md p-8">
      <h2 className="text-2xl font-semibold text-slate-900">Welcome back</h2>
      <p className="mt-2 text-sm text-slate-600">Sign in to continue managing your finances.</p>

      <form className="mt-6 space-y-4">
        <GlassInput type="email" placeholder="Email address" />
        <GlassInput type="password" placeholder="Password" />
        <GlassButton className="w-full">Log in</GlassButton>
      </form>
    </GlassCard>
  );
}
