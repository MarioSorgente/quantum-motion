import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-hero-glow px-6 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white/80 p-8 shadow-soft">
        <h1 className="text-4xl font-semibold">Terms & Conditions</h1>
        <p className="mt-4 text-soft">Last updated: May 26, 2026</p>
        <div className="mt-8 space-y-4 text-soft">
          <p>By using Quantum Motion services, you agree that all coaching recommendations are educational and do not replace medical advice.</p>
          <p>You are responsible for consulting a healthcare professional before beginning any new training plan, especially if you have existing injuries or medical conditions.</p>
          <p>Program materials are for personal use only and may not be copied or redistributed without written permission.</p>
          <p>We may update these terms from time to time. Continued use of the site implies acceptance of the latest version.</p>
        </div>
        <Link href="/" className="mt-8 inline-flex rounded-full border border-ink/20 px-5 py-2 text-sm font-medium">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
