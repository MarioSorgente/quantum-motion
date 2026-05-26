import { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  const styles =
    variant === 'primary'
      ? 'bg-ink text-canvas hover:-translate-y-0.5 hover:bg-[#1f1d1b]'
      : 'border border-ink/20 bg-white/70 text-ink hover:-translate-y-0.5 hover:bg-white';

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
};

export function Section({ id, title, children, muted = false }: SectionProps) {
  return (
    <section id={id} className="px-6 py-16 sm:py-20">
      <div className={`mx-auto max-w-6xl rounded-3xl p-8 sm:p-12 ${muted ? 'bg-section/75' : ''}`}>
        <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function PlaceholderImage({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`rounded-3xl border border-dashed border-ink/25 bg-gradient-to-br from-white to-section/60 p-10 text-center shadow-soft ${className}`}
    >
      <p className="text-base font-medium text-ink">Professional photo coming soon</p>
      <p className="mt-2 text-sm text-soft">Space reserved for 4–5 premium photos.</p>
    </div>
  );
}
