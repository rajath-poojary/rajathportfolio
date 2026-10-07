import type { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}>
      <div className="section__heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {description && <p className="section__description">{description}</p>}
      </div>
      {children}
    </section>
  );
}
