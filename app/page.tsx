import Image from 'next/image';
import { ButtonLink, Section } from '@/components/ui';
import brandPhoto from '@/photos/0527(2).png';
import marioPhoto from '@/photos/0527(4).png';
import albertoPhoto from '@/photos/0527(5).png';

const intakeFormUrl = 'https://fitness-agents.vercel.app/intake';
const instagramUrl = 'https://www.instagram.com/quantumotion.coach/';

export default function Home() {
  return (
    <main className="bg-canvas text-ink">
      <header className="sticky top-0 z-30 border-b border-[#d5e0ec] bg-canvas/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6">
          <a href="#top" className="inline-flex items-center gap-3 text-base font-semibold tracking-wide text-ink sm:text-lg">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#123f63] text-sm font-bold text-white">QM</span>
            <span>Quantum Motion</span>
          </a>
          <div className="flex flex-wrap items-center gap-2 text-sm sm:gap-5">
            <a href="#method" className="text-soft hover:text-ink">Method</a>
            <a href="#about" className="text-soft hover:text-ink">About</a>
            <a href="#free-program" className="text-soft hover:text-ink">Free Program</a>
            <a href="#contact" className="text-soft hover:text-ink">Contact</a>
            <ButtonLink href={intakeFormUrl}>Start free</ButtonLink>
          </div>
        </nav>
      </header>

      <section id="top" className="px-5 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-xs uppercase tracking-[0.23em] text-[#5c7d99] sm:text-sm">Online coaching for strength & mobility</p>
            <h1 className="text-[2rem] font-semibold tracking-tight text-ink sm:text-[2.85rem]">Move better. Train smarter. Feel confident in your body again.</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-soft sm:text-lg">Online coaching for people who want to rebuild strength, reduce fear around movement, and create a body they can trust.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={intakeFormUrl}>Start with the free 7-day program</ButtonLink>
              <ButtonLink href={instagramUrl} variant="secondary">Message us on Instagram</ButtonLink>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/90 shadow-soft">
              <Image src={brandPhoto} alt="Quantum Motion brand visual" className="h-[45vh] min-h-[320px] w-full object-cover sm:h-[58vh] sm:min-h-[420px]" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2b43]/20 via-transparent to-[#9dc0dd]/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 sm:py-16">
        <div className="relative mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-3xl border border-[#d4deea] bg-gradient-to-br from-[#eaf1f8] to-[#dfe9f4] p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-[2.2rem]">When your body doesn’t feel like home anymore</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-soft sm:text-lg">Pain, stiffness, and uncertainty can make training feel complicated. Quantum Motion gives you structure, support, and a clear way to start moving with confidence again.</p>
          </div>
          <div className="relative flex min-h-[260px] items-center justify-center">
            <div className="absolute h-52 w-52 rounded-full bg-[#79a5ca]/35 blur-2xl animate-pulseSoft" />
            <div className="absolute h-64 w-64 rounded-full border border-[#7fabc9]/50" />
            <div className="absolute h-40 w-40 rounded-full border border-[#a9c1d7]" />
            <span className="absolute left-4 top-8 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-[#2a567b] animate-float">Stiffness</span>
            <span className="absolute right-6 top-16 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-[#2a567b]" style={{ animation: 'float 6.5s ease-in-out infinite' }}>Uncertainty</span>
            <span className="absolute left-8 bottom-12 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-[#2a567b]" style={{ animation: 'float 5.5s ease-in-out infinite' }}>Fear of starting</span>
            <span className="absolute right-8 bottom-20 rounded-full bg-[#123f63] px-3 py-1 text-xs font-medium text-white">Structure</span>
            <span className="absolute right-16 bottom-8 rounded-full bg-[#2e628f] px-3 py-1 text-xs font-medium text-white">Confidence</span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 rounded-full bg-[#1f4f78] px-3 py-1 text-xs font-semibold text-white">Momentum</span>
          </div>
        </div>
      </section>

      <Section id="method" title="Simple, remote, and personal">
        <div className="relative mt-2">
          <div className="absolute left-[22px] top-8 h-[74%] w-px bg-[#9bb8d2] md:hidden" />
          <div className="relative hidden md:block">
            <div className="absolute left-[16.66%] right-[16.66%] top-6 h-0.5 bg-gradient-to-r from-[#8bb1cf] via-[#2f5f8a] to-[#8bb1cf]" />
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {[
              ['1', 'Tell us where you are', 'Share your goals, pain points, training level, and lifestyle so we can guide you with clarity.'],
              ['2', 'Get your first 7-day program', 'Receive a simple starting plan to build consistency and understand how online coaching works for your body.'],
              ['3', 'Continue with 1:1 coaching', 'If it feels right, we adapt the process with personal support and progressive structure.'],
            ].map(([number, title, desc]) => (
              <article key={title} className="relative pl-14 md:pl-0 md:pt-14">
                <span className="absolute left-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#4d779b] bg-white text-base font-semibold text-[#1c4e75] shadow-[0_0_0_8px_rgba(232,239,247,0.75)] md:left-1/2 md:top-0 md:-translate-x-1/2">{number}</span>
                <h3 className="text-2xl font-semibold leading-tight text-ink md:text-center">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-soft md:text-center">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" title="Built by two engineers who believe training should make sense" muted>
        <p className="max-w-5xl text-soft">Quantum Motion was created by Mario and Alberto. We combine engineering thinking, years of training experience, AI tooling, and a supportive coaching style to help people stop guessing and start moving with confidence.</p>
        <div className="mt-8 grid gap-7 lg:grid-cols-2">
          {[
            { name: 'Mario Sorgente', role: 'Engineer · Fitness Coach', photo: marioPhoto, photoAlt: 'Mario training session', points: ['Around 20 years of training experience, including gymnastic roots.', 'Personal history with shoulder pain, ACL injury, and a broken elbow.', 'Focus: rebuild trust, adapt training, and create sustainable progress.'] },
            { name: 'Alberto Negrini', role: 'Engineer · Fitness Coach', photo: albertoPhoto, photoAlt: 'Alberto coaching in the gym', points: ['Structured and practical approach to training and progression.', 'Around 20 years of training across fighting, swimming, and skiing.', 'Focus: clear systems, realistic habits, and consistent coaching support.'] },
          ].map((person) => (
            <article key={person.name} className="overflow-hidden rounded-[1.7rem] border border-[#d4deea] bg-white shadow-[0_18px_36px_rgba(15,36,56,0.12)]">
              <Image src={person.photo} alt={person.photoAlt} className="h-[440px] w-full object-cover sm:h-[520px]" />
              <div className="space-y-3 px-6 pb-7 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
                <h3 className="text-3xl font-semibold leading-tight text-ink sm:text-[2.1rem]">{person.name}</h3>
                <p className="text-soft">{person.role}</p>
                <ul className="space-y-2 pt-1 text-soft">{person.points.map((point) => <li key={point}>• {point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section id="free-program" className="px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#2f5f8a]/30 bg-gradient-to-r from-[#123754] to-[#1e547d] p-7 text-white sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-[2.2rem]">Start with one free week</h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#d7e5f2] sm:text-lg">No pressure. No complicated commitment. Start with a simple 7-day program designed to help you reconnect with your body, move better, and build momentum.</p>
              <ul className="mt-6 grid gap-2 text-[#e7f1fa] sm:grid-cols-2">
                <li>• Simple gym and mobility structure</li><li>• Beginner-friendly</li><li>• Pain-aware</li><li>• Confidence-focused</li><li>• Remote support</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
              <p className="text-sm text-[#cfe2f3]">Take the first step with a simple plan and direct support.</p>
              <div className="mt-4 flex flex-col gap-3">
                <ButtonLink href={intakeFormUrl}>Request the free 7-day program</ButtonLink>
                <a className="text-sm text-[#dceaf7] underline underline-offset-4" href="mailto:mario.sorgente@gmail.com,alberto.negrini01@gmail.com">Prefer email? Contact us directly</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="contact" title="Ready to feel strong, mobile, and confident again?"><p className="text-soft">Send us a message and we’ll help you take the first step.</p><div className="mt-6 flex flex-wrap gap-3"><ButtonLink href={intakeFormUrl}>Start with the free 7-day program</ButtonLink><ButtonLink href="mailto:mario.sorgente@gmail.com,alberto.negrini01@gmail.com" variant="secondary">Contact us by email</ButtonLink></div></Section>

      <footer className="border-t border-[#d5e0ec] px-5 py-10 text-center text-sm text-soft sm:px-6"><p className="font-semibold text-ink">Quantum Motion</p><p>Online coaching for strength and mobility</p><p className="mt-4"><a href="/privacy" className="underline">Privacy Policy</a> · <a href="/terms" className="underline">Terms & Conditions</a></p></footer>
    </main>
  );
}
