import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function Toast() {
  const { toast } = useContact();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-slideUp">
      <div
        className={`p-4 rounded-2xl shadow-2xl border flex items-start gap-3 backdrop-blur-md ${
          isSuccess
            ? 'bg-emerald-900/95 text-white border-emerald-500/50'
            : 'bg-rose-900/95 text-white border-rose-500/50'
        }`}
      >
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
        )}
        <div className="text-sm font-medium leading-relaxed">
          {toast.message}
        </div>
      </div>
    </div>
  );
}
