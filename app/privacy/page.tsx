import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-hero-glow px-6 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white/80 p-8 shadow-soft">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-soft">Last updated: May 26, 2026</p>
        <div className="mt-8 space-y-4 text-soft">
          <p>Quantum Motion collects only the personal data you voluntarily provide (such as name, email, and coaching goals) when you contact us.</p>
          <p>We use this information to respond to requests, deliver coaching services, and improve communication. We do not sell personal data.</p>
          <p>Essential technical cookies may be used to remember basic preferences (such as cookie consent). You can clear these in your browser settings.</p>
          <p>If you want to access, modify, or delete your data, contact us at mario.sorgente@gmail.com or alberto.negrini01@gmail.com.</p>
        </div>
        <Link href="/" className="mt-8 inline-flex rounded-full border border-ink/20 px-5 py-2 text-sm font-medium">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
