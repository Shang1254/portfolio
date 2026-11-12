export default function SectionHeading({
  title,
  description,
  id,
}: {
  title: string;
  description?: string;
  /** 供外层 section 的 aria-labelledby 引用 */
  id?: string;
}) {
  return (
    <div className="mb-8">
      <h2
        id={id}
        className="flex items-center gap-3 text-2xl font-bold tracking-tight sm:text-3xl"
      >
        <span
          aria-hidden
          className="h-6 w-1 shrink-0 rounded-full bg-primary"
        />
        {title}
      </h2>
      {description && (
        <p className="mt-2 pl-4 text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
