import { ButtonLink, PlaceholderImage, Section } from '@/components/ui';

const freeProgramMailto =
  'mailto:mario.sorgente@gmail.com?cc=alberto.negrini01@gmail.com&subject=Quantum%20Motion%20%E2%80%94%20Free%207-day%20program&body=Hi%20Mario%20and%20Alberto%2C%20I%E2%80%99d%20like%20to%20start%20with%20the%20free%207-day%20Quantum%20Motion%20program.';

export default function Home() {
  return (
    <main className="bg-hero-glow">
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-canvas/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-wide">Quantum Motion</a>
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
          <PlaceholderImage className="min-h-80" label="Placeholder for Mario and Alberto professional photos" />
        </div>
      </section>

      <Section title="When your body doesn’t feel like home anymore" muted>
        <p className="max-w-4xl text-lg leading-relaxed text-soft">Many people want to train again but feel stuck between pain, stiffness, and uncertainty. You may be worried about doing the wrong exercise, overwhelmed by random advice, or tired of starting and stopping. Quantum Motion is here to support you with clear structure, guided progress, and a plan that helps you move with more confidence.</p>
      </Section>

      <Section id="method" title="Strength, mobility, and support — built around you">
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            ['Gym Training', 'Build strength with progressive, realistic training plans.'],
            ['Mobility', 'Improve how your body moves, feels, and performs.'],
            ['Pain-aware coaching', 'Adapt training around discomfort, limitations, and confidence levels.'],
            ['Mental support', 'Stay consistent with guidance, clarity, and emotional support when motivation drops.'],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-soft">{desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="about" title="Built by two engineers who believe training should make sense" muted>
        <p className="max-w-5xl text-soft">Quantum Motion was created by Mario and Alberto. We combine engineering thinking, years of training experience, AI tooling, and a supportive coaching style to help people stop guessing and start moving with confidence.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-soft">
            <PlaceholderImage label="Mario Sorgente profile placeholder" className="mb-5 min-h-40" />
            <h3 className="text-2xl font-semibold">Mario Sorgente</h3>
            <p className="text-sm text-soft">Quantum Physics Engineer · Co-founder</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-soft">
              <li>Around 20 years of training experience, including gymnastic roots.</li>
              <li>Personal history with shoulder pain, ACL injury, and a broken elbow.</li>
              <li>Focus: rebuild trust, adapt training, and create sustainable progress.</li>
            </ul>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-soft">
            <PlaceholderImage label="Alberto Negrini profile placeholder" className="mb-5 min-h-40" />
            <h3 className="text-2xl font-semibold">Alberto Negrini</h3>
            <p className="text-sm text-soft">Engineer · Fitness Coach · Co-founder</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-soft">
              <li>Structured and practical approach to training and progression.</li>
              <li>Around 20 years of training across fighting, swimming, and skiing.</li>
              <li>Focus: clear systems, realistic habits, and consistent coaching support.</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section title="Simple, remote, and personal">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['1. Tell us who you are', 'You share your goals, pain points, training level, lifestyle, and current limitations.'],
            ['2. Get your first 7-day program', 'You receive a simple tailored free program to start moving, training, and understanding the Quantum Motion method.'],
            ['3. Continue with 1:1 coaching', 'If it feels right, we build a personalized remote coaching plan around your body, goals, and lifestyle.'],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-soft">{desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="free-program" title="Start with one free week" muted>
        <p className="max-w-4xl text-soft">No pressure. No complicated commitment. Start with a simple 7-day program designed to help you reconnect with your body, move better, and build momentum.</p>
        <ul className="mt-5 grid gap-2 text-soft sm:grid-cols-2">
          <li>• Simple gym and mobility structure</li><li>• Beginner-friendly</li><li>• Pain-aware</li><li>• Confidence-focused</li><li>• Remote support</li>
        </ul>
        <div className="mt-8"><ButtonLink href={freeProgramMailto}>Request the free 7-day program</ButtonLink></div>
      </Section>

      <Section title="Coaching options">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Free 7-day starter program</h3>
            <p className="mt-2 text-soft">A simple first step to understand your body, start moving, and experience the Quantum Motion method.</p>
            <div className="mt-5"><ButtonLink href={freeProgramMailto} variant="secondary">Request the free program</ButtonLink></div>
          </article>
          <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">1:1 Remote Coaching</h3>
            <p className="mt-2 text-soft">Personalized gym and mobility coaching with support, structure, and progress tracking.</p>
            <div className="mt-5"><ButtonLink href="mailto:mario.sorgente@gmail.com,alberto.negrini01@gmail.com?subject=Quantum%20Motion%20%E2%80%94%201%3A1%20Coaching%20Request" variant="secondary">Contact us</ButtonLink></div>
          </article>
        </div>
      </Section>

      <Section title="Client stories coming soon" muted>
        <div className="grid gap-4 md:grid-cols-3">
          {['Transformation story', 'Mobility progress', 'Strength journey'].map((item) => (
            <article key={item} className="rounded-2xl border border-dashed border-ink/20 bg-white/80 p-6">
              <h3 className="font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-soft">Placeholder for real client feedback and progress details.</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Ready to feel strong, mobile, and confident again?">
        <p className="text-soft">Send us a message and we’ll help you take the first step.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={freeProgramMailto}>Start with the free 7-day program</ButtonLink>
          <ButtonLink href="mailto:mario.sorgente@gmail.com,alberto.negrini01@gmail.com" variant="secondary">Contact us by email</ButtonLink>
        </div>
        <div className="mt-8 space-y-1 text-sm text-soft">
          <p>mario.sorgente@gmail.com</p><p>alberto.negrini01@gmail.com</p>
          <p className="pt-2">@quantummotion · @mario_sorgente · @alberto_negrini</p>
        </div>
      </Section>

      <footer className="border-t border-ink/10 px-6 py-10 text-center text-sm text-soft">
        <p className="font-semibold text-ink">Quantum Motion</p>
        <p>Remote gym and mobility coaching</p>
        <p>Science-based. Human-first. Built for confidence.</p>
      </footer>
    </main>
  );
}
