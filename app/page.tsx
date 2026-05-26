import Image from 'next/image';
import { ButtonLink, Section } from '@/components/ui';

const freeProgramMailto =
  'mailto:mario.sorgente@gmail.com?cc=alberto.negrini01@gmail.com&subject=Quantum%20Motion%20%E2%80%94%20Free%207-day%20program&body=Hi%20Mario%20and%20Alberto%2C%20I%E2%80%99d%20like%20to%20start%20with%20the%20free%207-day%20Quantum%20Motion%20program.';

export default function Home() {
  return (
    <main className="bg-hero-glow">
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-canvas/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <a href="#top" className="inline-flex items-center gap-3 text-lg font-semibold tracking-wide">
            <Image src="/logopic/quantum-motion-logo.png" alt="Quantum Motion logo" width={36} height={36} className="rounded-full" />
            <span>Quantum Motion</span>
          </a>
          <div className="flex flex-wrap items-center gap-2 text-sm sm:gap-6">
            <a href="#method" className="hover:text-accent">Method</a>
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#free-program" className="hover:text-accent">Free Program</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
            <ButtonLink href="#free-program">Start free</ButtonLink>
          </div>
        </nav>
      </header>

      <section id="top" className="px-6 pb-16 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-fadeInUp">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-soft">Remote gym & mobility coaching</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Move better. Train smarter. Feel confident in your body again.</h1>
            <p className="mt-5 max-w-xl text-lg text-soft">Remote gym and mobility coaching for people who want to rebuild strength, reduce fear around movement, and create a body they can trust.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={freeProgramMailto}>Start with the free 7-day program</ButtonLink>
              <ButtonLink href="https://instagram.com/tobeadded" variant="secondary">Message us on Instagram</ButtonLink>
            </div>
          </div>
          <Image
            src="/logopic/quantum-motion-thumbnail-banner.png"
            alt="Quantum Motion thumbnail"
            width={1200}
            height={630}
            className="w-full rounded-3xl border border-ink/10 bg-white object-cover shadow-soft"
            priority
          />
        </div>
      </section>

      <Section title="When your body doesn’t feel like home anymore" muted>
        <p className="max-w-4xl text-lg leading-relaxed text-soft">Many people want to train again but feel stuck between pain, stiffness, and uncertainty. You may be worried about doing the wrong exercise, overwhelmed by random advice, or tired of starting and stopping. Quantum Motion is here to support you with clear structure, guided progress, and a plan that helps you move with more confidence.</p>
      </Section>

      <Section id="method" title="Strength, mobility, and support — built around you">
        <div className="grid gap-5 sm:grid-cols-2">{[['Gym Training', 'Build strength with progressive, realistic training plans.'], ['Mobility', 'Improve how your body moves, feels, and performs.'], ['Pain-aware coaching', 'Adapt training around discomfort, limitations, and confidence levels.'], ['Mental support', 'Stay consistent with guidance, clarity, and emotional support when motivation drops.']].map(([title, desc]) => (<article key={title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-soft">{desc}</p></article>))}</div>
      </Section>

      <Section id="about" title="Built by two engineers who believe training should make sense" muted>
        <p className="max-w-5xl text-soft">Quantum Motion was created by Mario and Alberto. We combine engineering thinking, years of training experience, AI tooling, and a supportive coaching style to help people stop guessing and start moving with confidence.</p>
      </Section>

      <Section id="free-program" title="Start with one free week" muted>
        <p className="max-w-4xl text-soft">No pressure. No complicated commitment. Start with a simple 7-day program designed to help you reconnect with your body, move better, and build momentum.</p>
        <div className="mt-8"><ButtonLink href={freeProgramMailto}>Request the free 7-day program</ButtonLink></div>
      </Section>

      <Section id="contact" title="Ready to feel strong, mobile, and confident again?">
        <p className="text-soft">Send us a message and we’ll help you take the first step.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={freeProgramMailto}>Start with the free 7-day program</ButtonLink>
          <ButtonLink href="mailto:mario.sorgente@gmail.com,alberto.negrini01@gmail.com" variant="secondary">Contact us by email</ButtonLink>
        </div>
      </Section>

      <footer className="border-t border-ink/10 px-6 py-10 text-center text-sm text-soft">
        <p className="font-semibold text-ink">Quantum Motion</p>
        <p>Remote gym and mobility coaching</p>
        <p className="mt-4">
          <a href="/privacy" className="underline">Privacy Policy</a> · <a href="/terms" className="underline">Terms & Conditions</a>
        </p>
      </footer>
    </main>
  );
}
