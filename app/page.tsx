import Image from 'next/image';
import { ButtonLink, Section } from '@/components/ui';
import brandPhoto from '@/photos/0527(2).png';
import marioPhoto from '@/photos/0527(4).png';
import albertoPhoto from '@/photos/0527(5).png';

const freeProgramMailto =
  'mailto:mario.sorgente@gmail.com?cc=alberto.negrini01@gmail.com&subject=Quantum%20Motion%20%E2%80%94%20Free%207-day%20program&body=Hi%20Mario%20and%20Alberto%2C%20I%E2%80%99d%20like%20to%20start%20with%20the%20free%207-day%20Quantum%20Motion%20program.';

export default function Home() {
  return (
    <main className="bg-[#f3f6fb] text-[#102030]">
      <header className="sticky top-0 z-30 border-b border-[#d8e2ef] bg-[#f3f6fb]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <a href="#top" className="inline-flex items-center gap-3 text-lg font-semibold tracking-wide text-[#0c2439]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0f2f4a] text-white text-sm font-bold">QM</span>
            <span>Quantum Motion</span>
          </a>
          <div className="flex flex-wrap items-center gap-2 text-sm sm:gap-6">
            <a href="#method" className="text-[#38536b] hover:text-[#0f2f4a]">Method</a>
            <a href="#about" className="text-[#38536b] hover:text-[#0f2f4a]">About</a>
            <a href="#free-program" className="text-[#38536b] hover:text-[#0f2f4a]">Free Program</a>
            <a href="#contact" className="text-[#38536b] hover:text-[#0f2f4a]">Contact</a>
            <ButtonLink href="#free-program">Start free</ButtonLink>
          </div>
        </nav>
      </header>

      <section id="top" className="px-6 pb-12 pt-10 sm:pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#5f7a93]">Remote gym & mobility coaching</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#0c2439] sm:text-5xl">Move better. Train smarter. Feel confident in your body again.</h1>
            <p className="mt-5 max-w-xl text-lg text-[#3a546d]">Remote gym and mobility coaching for people who want to rebuild strength, reduce fear around movement, and create a body they can trust.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={freeProgramMailto}>Start with the free 7-day program</ButtonLink>
              <ButtonLink href="https://instagram.com/tobeadded" variant="secondary">Message us on Instagram</ButtonLink>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 shadow-[0_28px_55px_rgba(22,45,69,0.18)]">
              <Image src={brandPhoto} alt="Quantum Motion brand visual" className="h-[58vh] min-h-[420px] w-full object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2338]/18 via-transparent to-[#8ec5f8]/10" />
            </div>
          </div>
        </div>
      </section>

      <Section title="When your body doesn’t feel like home anymore" muted>
        <p className="max-w-4xl text-lg leading-relaxed text-soft">Many people want to train again but feel stuck between pain, stiffness, and uncertainty. You may be worried about doing the wrong exercise, overwhelmed by random advice, or tired of starting and stopping. Quantum Motion is here to support you with clear structure, guided progress, and a plan that helps you move with more confidence.</p>
      </Section>

      <Section id="method" title="Simple, remote, and personal">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['1. Tell us who you are', 'You share your goals, pain points, training level, lifestyle, and current limitations.'],
            ['2. Get your first 7-day program', 'You receive a simple tailored free program to start moving, training, and understanding the Quantum Motion method.'],
            ['3. Continue with 1:1 coaching', 'If it feels right, we build a personalized remote coaching plan around your body, goals, and lifestyle.'],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-2xl border border-ink/10 bg-white p-7 shadow-soft">
              <h3 className="text-[2rem] font-semibold leading-tight">{title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-soft">{desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="about" title="Built by two engineers who believe training should make sense" muted>
        <p className="max-w-5xl text-soft">Quantum Motion was created by Mario and Alberto. We combine engineering thinking, years of training experience, AI tooling, and a supportive coaching style to help people stop guessing and start moving with confidence.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {[
            {
              name: 'Mario Sorgente',
              role: 'Quantum Physics Engineer · Co-founder',
              photo: marioPhoto,
              photoAlt: 'Mario training session',
              points: ['Around 20 years of training experience, including gymnastic roots.', 'Personal history with shoulder pain, ACL injury, and a broken elbow.', 'Focus: rebuild trust, adapt training, and create sustainable progress.'],
            },
            {
              name: 'Alberto Negrini',
              role: 'Engineer · Fitness Coach · Co-founder',
              photo: albertoPhoto,
              photoAlt: 'Alberto coaching in the gym',
              points: ['Structured and practical approach to training and progression.', 'Around 20 years of training across fighting, swimming, and skiing.', 'Focus: clear systems, realistic habits, and consistent coaching support.'],
            },
          ].map((person) => (
            <article key={person.name} className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_45px_rgba(17,38,56,0.14)]">
              <Image src={person.photo} alt={person.photoAlt} className="h-[520px] w-full object-cover" />
              <div className="space-y-3 px-8 pb-8 pt-6">
                <h3 className="text-4xl font-semibold leading-tight text-[#0d263d]">{person.name}</h3>
                <p className="text-[#5a738a]">{person.role}</p>
                <ul className="space-y-2 pt-2 text-soft">
                  {person.points.map((point) => <li key={point}>• {point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="free-program" title="Start with one free week" muted>
        <p className="max-w-4xl text-soft">No pressure. No complicated commitment. Start with a simple 7-day program designed to help you reconnect with your body, move better, and build momentum.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ul className="space-y-2 text-soft"><li>• Simple gym and mobility structure</li><li>• Pain-aware</li><li>• Remote support</li></ul>
          <ul className="space-y-2 text-soft"><li>• Beginner-friendly</li><li>• Confidence-focused</li></ul>
        </div>
        <div className="mt-8"><ButtonLink href={freeProgramMailto}>Request the free 7-day program</ButtonLink></div>
      </Section>

      <Section id="contact" title="Ready to feel strong, mobile, and confident again?"><p className="text-soft">Send us a message and we’ll help you take the first step.</p><div className="mt-6 flex flex-wrap gap-3"><ButtonLink href={freeProgramMailto}>Start with the free 7-day program</ButtonLink><ButtonLink href="mailto:mario.sorgente@gmail.com,alberto.negrini01@gmail.com" variant="secondary">Contact us by email</ButtonLink></div></Section>

      <footer className="border-t border-ink/10 px-6 py-10 text-center text-sm text-soft"><p className="font-semibold text-ink">Quantum Motion</p><p>Remote gym and mobility coaching</p><p className="mt-4"><a href="/privacy" className="underline">Privacy Policy</a> · <a href="/terms" className="underline">Terms & Conditions</a></p></footer>
    </main>
  );
}
