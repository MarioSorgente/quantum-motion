import Image from 'next/image';
import { ButtonLink, Section } from '@/components/ui';
import brandPhoto from '@/photos/0527(2).png';
import marioPhoto from '@/photos/0527(4).png';
import albertoPhoto from '@/photos/0527(5).png';

const freeProgramMailto =
  'mailto:mario.sorgente@gmail.com?cc=alberto.negrini01@gmail.com&subject=Quantum%20Motion%20%E2%80%94%20Free%207-day%20program&body=Hi%20Mario%20and%20Alberto%2C%20I%E2%80%99d%20like%20to%20start%20with%20the%20free%207-day%20Quantum%20Motion%20program.';

export default function Home() {
  return (
    <main className="bg-[linear-gradient(180deg,#edf3f9_0%,#f4f8fc_45%,#f9fbfd_100%)] text-[#12263a]">
      <header className="sticky top-0 z-30 border-b border-[#d3e0ec] bg-[#edf3f9]/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3.5">
          <a href="#top" className="font-heading inline-flex items-center gap-3 text-base font-semibold tracking-[0.05em] text-[#0d2b45]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#123a5a] text-xs font-bold text-white">QM</span>
            <span>Quantum Motion</span>
          </a>
          <div className="flex flex-wrap items-center gap-2 text-sm sm:gap-5">
            <a href="#method" className="text-[#3f5b73] hover:text-[#123a5a]">Method</a>
            <a href="#about" className="text-[#3f5b73] hover:text-[#123a5a]">About</a>
            <a href="#coaching" className="text-[#3f5b73] hover:text-[#123a5a]">Coaching</a>
            <a href="#free-program" className="text-[#3f5b73] hover:text-[#123a5a]">Free Program</a>
            <a href="#contact" className="text-[#3f5b73] hover:text-[#123a5a]">Contact</a>
            <ButtonLink href="#free-program">Start free</ButtonLink>
          </div>
        </nav>
      </header>

      <section id="top" className="px-6 pb-8 pt-8 sm:pt-10">
        <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#5e7a91]">Remote gym & mobility coaching</p>
            <h1 className="font-heading text-[2.3rem] font-semibold uppercase leading-[0.96] tracking-[0.025em] text-[#0c253a] sm:text-5xl">Move better. Train smarter. Feel confident in your body again.</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#355068]">Remote gym and mobility coaching for people who want to rebuild strength, reduce fear around movement, and create a body they can trust.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={freeProgramMailto}>Start with the free 7-day program</ButtonLink>
              <ButtonLink href="https://instagram.com/tobeadded" variant="secondary">Message us on Instagram</ButtonLink>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/90 shadow-[0_22px_50px_rgba(16,44,72,0.2)]">
              <Image src={brandPhoto} alt="Quantum Motion brand visual" className="h-[50vh] min-h-[330px] w-full object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123a5a]/25 via-transparent to-[#9fd1ff]/14" />
            </div>
          </div>
        </div>
      </section>

      <Section title="When your body doesn’t feel like home anymore" muted>
        <p className="max-w-4xl text-base leading-relaxed text-[#3a576f]">Many people want to train again but feel stuck between pain, stiffness, and uncertainty. You may be worried about doing the wrong exercise, overwhelmed by random advice, or tired of starting and stopping. Quantum Motion is here to support you with clear structure, guided progress, and a plan that helps you move with more confidence.</p>
      </Section>

      <Section id="method" title="Simple, remote, and personal">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['1. Tell us who you are', 'You share your goals, pain points, training level, lifestyle, and current limitations.'],
            ['2. Get your first 7-day program', 'You receive a simple tailored free program to start moving, training, and understanding the Quantum Motion method.'],
            ['3. Continue with 1:1 coaching', 'If it feels right, we build a personalized remote coaching plan around your body, goals, and lifestyle.'],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-[1.3rem] border border-[#d5e2ee] bg-[#fdfefe] p-6 shadow-[0_14px_30px_rgba(18,45,70,0.08)]">
              <h3 className="font-heading text-[1.65rem] font-semibold leading-tight tracking-[0.02em] text-[#0e2940]">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#3b5870]">{desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="about" title="Built by two engineers who believe training should make sense" muted>
        <p className="max-w-5xl text-[#3a576f]">Quantum Motion was created by Mario and Alberto. We combine engineering thinking, years of training experience, AI tooling, and a supportive coaching style to help people stop guessing and start moving with confidence.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {[
            {
              name: 'Mario Sorgente',
              role: 'Engineer · Fitness Coach',
              photo: marioPhoto,
              photoAlt: 'Mario training session',
              points: ['Around 20 years of training experience, including gymnastic roots.', 'Personal history with shoulder pain, ACL injury, and a broken elbow.', 'Focus: rebuild trust, adapt training, and create sustainable progress.'],
            },
            {
              name: 'Alberto Negrini',
              role: 'Engineer · Fitness Coach',
              photo: albertoPhoto,
              photoAlt: 'Alberto coaching in the gym',
              points: ['Structured and practical approach to training and progression.', 'Around 20 years of training across fighting, swimming, and skiing.', 'Focus: clear systems, realistic habits, and consistent coaching support.'],
            },
          ].map((person) => (
            <article key={person.name} className="overflow-hidden rounded-[1.8rem] border border-[#d5e2ee] bg-white shadow-[0_18px_42px_rgba(15,40,65,0.12)]">
              <Image src={person.photo} alt={person.photoAlt} className="h-[430px] w-full object-cover" />
              <div className="space-y-3 px-7 pb-7 pt-5">
                <h3 className="font-heading text-4xl font-semibold uppercase leading-[0.96] tracking-[0.02em] text-[#0d2840]">{person.name}</h3>
                <p className="text-[#4b6780]">{person.role}</p>
                <ul className="space-y-2 pt-1 text-[#3a576f]">
                  {person.points.map((point) => <li key={point}>• {point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="coaching" title="How coaching works">
        <div className="grid gap-4 md:grid-cols-3 text-[#3a576f]">
          {['Assessment and movement history to understand your starting point.', 'Weekly programming with gym and mobility blocks tailored to your schedule.', 'Feedback loops and progression updates to keep momentum and reduce flare-ups.'].map((item) => (
            <div key={item} className="rounded-[1.2rem] border border-[#d5e2ee] bg-[#f8fbff] p-5">{item}</div>
          ))}
        </div>
      </Section>

      <Section id="free-program" title="Start with one free week" muted>
        <p className="max-w-4xl text-[#3a576f]">No pressure. No complicated commitment. Start with a simple 7-day program designed to help you reconnect with your body, move better, and build momentum.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <ul className="space-y-2 text-[#3a576f]"><li>• Simple gym and mobility structure</li><li>• Pain-aware</li><li>• Remote support</li></ul>
          <ul className="space-y-2 text-[#3a576f]"><li>• Beginner-friendly</li><li>• Confidence-focused</li></ul>
        </div>
        <div className="mt-6"><ButtonLink href={freeProgramMailto}>Request the free 7-day program</ButtonLink></div>
      </Section>

      <Section title="Coaching options">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Foundation', 'For beginners rebuilding consistency and confidence.'],
            ['Performance', 'For experienced trainees who want structured progression.'],
            ['Recovery-first', 'For people managing pain and returning safely to training.'],
          ].map(([plan, text]) => (
            <article key={plan} className="rounded-[1.2rem] border border-[#d5e2ee] bg-white p-5 text-[#3a576f]">
              <h3 className="font-heading text-xl text-[#0f2d46]">{plan}</h3>
              <p className="mt-2">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Testimonials" muted>
        <div className="rounded-[1.2rem] border border-dashed border-[#b9cade] bg-[#f8fbff] p-6 text-[#48647c]">
          Client stories coming soon — we’re collecting detailed results and progress journeys.
        </div>
      </Section>

      <Section id="contact" title="Ready to feel strong, mobile, and confident again?">
        <p className="text-[#3a576f]">Send us a message and we’ll help you take the first step.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={freeProgramMailto}>Start with the free 7-day program</ButtonLink>
          <ButtonLink href="mailto:mario.sorgente@gmail.com,alberto.negrini01@gmail.com" variant="secondary">Contact us by email</ButtonLink>
        </div>
      </Section>

      <footer className="border-t border-[#d3e0ec] px-6 py-9 text-center text-sm text-[#48647c]">
        <p className="font-semibold text-[#0f2d46]">Quantum Motion</p>
        <p>Remote gym and mobility coaching</p>
        <p className="mt-3">
          <a href="/privacy" className="underline">Privacy Policy</a> · <a href="/terms" className="underline">Terms & Conditions</a>
        </p>
      </footer>
    </main>
  );
}
