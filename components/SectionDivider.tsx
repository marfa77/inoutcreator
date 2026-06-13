type SectionDividerProps = {
  label?: string;
  rightLabel?: string;
  dark?: boolean;
};

export function SectionDivider({
  label,
  rightLabel,
  dark = false,
}: SectionDividerProps) {
  return (
    <div
      className={
        dark
          ? "border-y border-white/10 bg-forest-950"
          : "border-y border-sand-200 bg-[#f7f4ef]"
      }
    >
      {(label || rightLabel) && (
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          {label ? (
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-bronze-400" />
              <span
                className={`font-display text-xl ${
                  dark ? "text-sand-100" : "text-forest-900"
                }`}
              >
                {label}
              </span>
            </div>
          ) : (
            <span />
          )}
          {rightLabel && (
            <span className="text-[11px] font-medium uppercase tracking-luxury text-bronze-500">
              {rightLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
