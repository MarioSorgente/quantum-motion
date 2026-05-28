import { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  const styles =
    variant === 'primary'
      ? 'bg-[#113a5c] text-white hover:-translate-y-0.5 hover:bg-[#0d2f4b]'
      : 'border border-[#aac0d5] bg-[#f4f8fd] text-[#113a5c] hover:-translate-y-0.5 hover:bg-white';

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 ${styles}`}
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
    <section id={id} className="px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className={`mx-auto max-w-6xl ${muted ? 'rounded-3xl border border-[#d4deea] bg-[#eaf0f8] p-6 sm:p-10 lg:p-12' : ''}`}>
        <h2 className="mb-5 text-3xl font-semibold tracking-tight text-ink sm:text-[2.2rem]">{title}</h2>
        {children}
      </div>
    </section>
  );
}
