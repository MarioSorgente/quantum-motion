import Image from 'next/image';
import { ButtonLink, Section } from '@/components/ui';
import brandPhoto from '@/photos/0527(2).png';
import marioPhoto from '@/photos/0527(4).png';
import albertoPhoto from '@/photos/0527(5).png';

const freeProgramMailto =
  'mailto:mario.sorgente@gmail.com?cc=alberto.negrini01@gmail.com&subject=Quantum%20Motion%20%E2%80%94%20Free%207-day%20program&body=Hi%20Mario%20and%20Alberto%2C%20I%E2%80%99d%20like%20to%20start%20with%20the%20free%207-day%20Quantum%20Motion%20program.';

export default function Home() {
  return (
    <main className="bg-[linear-gradient(180deg,#edf3f9_0%,#f5f9fc_46%,#f9fbfd_100%)] text-[#132739]">
      <header className="sticky top-0 z-30 border-b border-[#d5e1ec] bg-[#eef4fa]/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3">
          <a href="#top" className="font-heading inline-flex items-center gap-2.5 text-base font-semibold tracking-[0.045em] text-[#0d2c45]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#123a5a] text-xs font-bold text-white">QM</span>
            <span>Quantum Motion</span>
          </a>
          <div className="hidden items-center gap-5 text-sm md:flex">
            <a href="#method" className="text-[#3f5d73] hover:text-[#123a5a]">Method</a>
            <a href="#about" className="text-[#3f5d73] hover:text-[#123a5a]">About</a>
            <a href="#coaching" className="text-[#3f5d73] hover:text-[#123a5a]">Coaching</a>
            <a href="#free-program" className="text-[#3f5d73] hover:text-[#123a5a]">Free Program</a>
            <a href="#contact" className="text-[#3f5d73] hover:text-[#123a5a]">Contact</a>
            <ButtonLink href="#free-program">Start free</ButtonLink>
          </div>
        </nav>
      </header>

      <section id="top" className="px-6 pb-9 pt-8 sm:pt-10">
        <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#5e7b92]">Remote gym & mobility coaching</p>
            <h1 className="font-heading text-[2rem] font-semibold leading-[0.98] tracking-[0.02em] text-[#0c2438] sm:text-[2.7rem]">
              Move better. Train smarter. Feel confident in your body again.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#35536a]">
              Remote gym and mobility coaching for people who want to rebuild strength, move with confidence, and create a body they can trust.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={freeProgramMailto}>Start with the free 7-day program</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">Contact us</ButtonLink>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/90 shadow-[0_20px_48px_rgba(16,44,72,0.18)]">
            <Image src={brandPhoto} alt="Quantum Motion training visual" className="h-[46vh] min-h-[300px] w-full object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10304a]/24 via-transparent to-[#95ccf4]/12" />
          </div>
        </div>
      </section>

      <Section title="When your body doesn’t feel like home anymore" muted>
        <div className="max-w-4xl space-y-4 text-[#3a5870]">
          <p>It can start with stiffness, recurring discomfort, or the feeling that your body does not respond like it used to.</p>
          <p>You may have tried random exercises, conflicting advice, and short bursts of motivation that never turn into consistent progress.</p>
          <ul className="grid gap-2 pt-1 sm:grid-cols-2">
            {['Fear of starting again', 'Low movement confidence', 'Pain or discomfort flare-ups', 'Need for structure and support'].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#4f87ab]" />{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="method" title="Training that combines strength, mobility, and clarity">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 text-[#3a5870]">
            <p>Quantum Motion blends gym training, mobility work, and guided progression into one clear method.</p>
            <p>We focus on what your body needs now, then build a sustainable plan that improves strength, confidence, and day-to-day freedom.</p>
          </div>
          <ul className="space-y-3 text-[#28465f]">
            {['Gym training', 'Mobility work', 'Pain-aware adaptations', 'Movement confidence', 'Mental support', 'Habit structure'].map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-[#d9e4ee] pb-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#d7eaf7] text-[#17466a]">✓</span>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="about" title="Built by two engineers who believe training should make sense" muted>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="grid grid-cols-2 gap-3">
            <Image src={marioPhoto} alt="Mario training" className="h-[300px] w-full rounded-2xl object-cover" />
            <Image src={albertoPhoto} alt="Alberto coaching" className="h-[300px] w-full rounded-2xl object-cover" />
          </div>
          <div className="space-y-5 text-[#3a5870]">
            <p>Quantum Motion was created by Mario and Alberto. We combine engineering thinking, years of training experience, and a supportive coaching style to help people stop guessing and start moving with confidence.</p>
            <div>
              <h3 className="font-heading text-xl text-[#0f2f47]">Mario Sorgente</h3>
              <p className="text-[#4c6980]">Engineer · Fitness Coach</p>
              <p className="mt-2">Around 20 years of training experience. Personal experience with endless shoulder pain, ACL injury, and a broken elbow. His approach is about understanding your body, rebuilding trust, and creating a sustainable plan.</p>
            </div>
            <div>
              <h3 className="font-heading text-xl text-[#0f2f47]">Alberto Negrini</h3>
              <p className="text-[#4c6980]">Engineer · Fitness Coach</p>
              <p className="mt-2">Structured and practical approach to training, with coaching focused on clarity, consistency, and long-term progress.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="coaching" title="Simple, remote, and personal">
        <ol className="relative ml-1 space-y-6 border-l border-[#c8d8e6] pl-6 text-[#35536a]">
          {[
            ['1', 'Tell us where you are'],
            ['2', 'Get your first 7-day program'],
            ['3', 'Continue with 1:1 coaching'],
          ].map(([n, text]) => (
            <li key={n} className="relative">
              <span className="absolute -left-[2.05rem] top-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#123a5a] text-sm font-semibold text-white">{n}</span>
              <p className="font-medium text-[#1d3d56]">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section id="free-program" className="px-6 py-12 sm:py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[1.8rem] border border-[#c6d9e8] bg-[linear-gradient(135deg,#113451_0%,#1a4e74_100%)] p-8 text-white sm:p-10">
          <div>
            <h2 className="font-heading text-3xl">Start with one free week</h2>
            <p className="mt-3 max-w-4xl text-[#d9eaf8]">No pressure. No complicated commitment. Start with a simple 7-day program designed to help you reconnect with your body, move better, and build momentum.</p>
          </div>
          <ul className="grid gap-2 text-[#e3f0fb] sm:grid-cols-2 lg:grid-cols-3">
            {['Simple gym and mobility structure', 'Beginner-friendly', 'Pain-aware', 'Confidence-focused', 'Remote support'].map((item) => <li key={item}>• {item}</li>)}
          </ul>
          <div><ButtonLink href={freeProgramMailto}>Request the free 7-day program</ButtonLink></div>
        </div>
      </section>

      <Section title="Coaching options">
        <div className="grid gap-4 md:grid-cols-2 text-[#35536a]">
          <div className="rounded-2xl border border-[#d7e3ee] bg-[#f9fcff] p-5">
            <h3 className="font-heading text-xl text-[#13354f]">Free 7-day starter program</h3>
            <p className="mt-2">A guided entry point to begin training with structure and confidence.</p>
          </div>
          <div className="rounded-2xl border border-[#d7e3ee] bg-[#f9fcff] p-5">
            <h3 className="font-heading text-xl text-[#13354f]">1:1 remote coaching</h3>
            <p className="mt-2">Personalized planning, feedback, and progression designed around your lifestyle and goals.</p>
          </div>
        </div>
      </Section>

      <Section title="Training gallery coming soon" muted>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {['Strength training', 'Mobility work', 'Coaching', 'Movement confidence'].map((label) => (
            <div key={label} className="flex h-36 items-end rounded-2xl border border-dashed border-[#b9ccdc] bg-[linear-gradient(160deg,#f8fcff_0%,#eaf3fb_100%)] p-4 text-sm text-[#43627a]">{label}</div>
          ))}
        </div>
      </Section>

      <Section title="Client stories coming soon">
        <p className="max-w-3xl text-[#3a5870]">We are collecting detailed progress stories to share real transformations with context, process, and sustainable results.</p>
      </Section>

      <Section id="contact" title="Ready to feel strong, mobile, and confident again?" muted>
        <p className="text-[#3a5870]">Send us a message and we’ll help you take the first step.</p>
        <div className="mt-4 space-y-1 text-[#27455e]">
          <p>mario.sorgente@gmail.com</p>
          <p>alberto.negrini01@gmail.com</p>
        </div>
        <div className="mt-3 text-sm text-[#4a6880]">
          <p>@quantummotion</p><p>@mario_sorgente</p><p>@alberto_negrini</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={freeProgramMailto}>Start with the free 7-day program</ButtonLink>
          <ButtonLink href="mailto:mario.sorgente@gmail.com,alberto.negrini01@gmail.com" variant="secondary">Contact us by email</ButtonLink>
        </div>
      </Section>

      <footer className="border-t border-[#d5e1ec] px-6 py-8 text-center text-sm text-[#4a6880]">
        <p className="font-semibold text-[#113450]">Quantum Motion</p>
        <p>Remote gym and mobility coaching</p>
        <p className="mt-2">Science-based. Human-first. Built for confidence.</p>
      </footer>
    </main>
  );
}
