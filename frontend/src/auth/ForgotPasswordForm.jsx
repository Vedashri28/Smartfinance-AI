import React from 'react';
import GlassCard from '../shared/GlassCard';
import GlassInput from '../shared/GlassInput';
import GlassButton from '../shared/GlassButton';

export default function ForgotPasswordForm() {
  return (
    <GlassCard className="w-full max-w-md p-8">
      <h2 className="text-2xl font-semibold text-slate-900">Reset password</h2>
      <p className="mt-2 text-sm text-slate-600">Enter your email and we&apos;ll send you a reset link.</p>

      <form className="mt-6 space-y-4">
        <GlassInput type="email" placeholder="Email address" />
        <GlassButton className="w-full">Send reset link</GlassButton>
      </form>
    </GlassCard>
  );
}
