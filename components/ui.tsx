import { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  const styles =
    variant === 'primary'
      ? 'bg-[#123a5a] text-white hover:-translate-y-0.5 hover:bg-[#0f314d] focus-visible:ring-2 focus-visible:ring-[#88b8de]'
      : 'border border-[#b8cbdd] bg-[#f8fbff] text-[#123a5a] hover:-translate-y-0.5 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#b9d8ef]';

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none ${styles}`}
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
    <section id={id} className="px-6 py-12 sm:py-14">
      <div className={`mx-auto max-w-6xl rounded-[1.8rem] border border-[#d3e0ec] p-7 shadow-[0_16px_36px_rgba(19,45,70,0.08)] sm:p-9 ${muted ? 'bg-[#f2f7fc]' : 'bg-white'}`}>
        <h2 className="font-heading mb-5 text-2xl font-semibold tracking-[0.02em] text-[#0f2b42] sm:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
