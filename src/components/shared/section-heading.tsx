import { cn } from "@/lib/utils";

import "./section-heading.scss";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
};

export function SectionHeading({
  title,
  subtitle,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", className)}>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {subtitle && (
        <p className="section-heading__subtitle">{subtitle}</p>
      )}
    </div>
  );
}
