type SectionDividerProps = {
  label?: string;
  rightLabel?: string;
};

export function SectionDivider({ label, rightLabel }: SectionDividerProps) {
  return (
    <div className="w-full">
      <div className="h-3 bg-neutral-900" />
      <div className="border-y border-neutral-200 bg-white">
        {(label || rightLabel) && (
          <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            {label && (
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                {label}
              </span>
            )}
            {rightLabel && (
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                {rightLabel}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="h-px bg-neutral-200" />
    </div>
  );
}
