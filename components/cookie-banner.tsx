'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'qm_cookie_consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl border border-ink/15 bg-white p-4 shadow-soft sm:p-5">
      <p className="text-sm text-soft">
        We use essential cookies to improve your browsing experience. By continuing, you agree to our{' '}
        <Link href="/privacy" className="font-medium text-ink underline">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link href="/terms" className="font-medium text-ink underline">
          Terms & Conditions
        </Link>
        .
      </p>
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          onClick={accept}
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-canvas transition hover:bg-[#1f1d1b]"
        >
          Accept
        </button>
      </div>
    </aside>
  );
}
