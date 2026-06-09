import { cn } from "@/lib/utils";

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
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2
        id={id}
        className="font-heading text-2xl font-bold tracking-wide text-primary uppercase md:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
