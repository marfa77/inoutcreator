type FooterCreditProps = {
  variant?: "card" | "channel";
  locale?: "en" | "ru";
  className?: string;
};

const hrefByVariant = {
  card: "https://www.webmorp.art/",
  channel: "https://www.webmorp.art/channel/",
} as const;

const copyByLocale = {
  en: { before: "Site by ", anchor: "webmorp.art" },
  ru: { before: "Сайт сделан ", anchor: "webmorp.art" },
} as const;

export function FooterCredit({
  variant = "card",
  locale = "en",
  className,
}: FooterCreditProps) {
  const copy = copyByLocale[locale];

  return (
    <p className={className ?? "footer-credit"}>
      {copy.before}
      <a
        href={hrefByVariant[variant]}
        className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-bronze-400 hover:decoration-bronze-400/50"
      >
        {copy.anchor}
      </a>
    </p>
  );
}
