const defaultSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://inoutcreator.com";

export const siteConfig = {
  basePath: "",
  url: defaultSiteUrl,
  name: "INOUT",
  title: "INOUT — Landscape Architecture by Valeria Malakhova",
  description:
    "Landscape architecture in Dubai by Valeria Malakhova. Thoughtfully designed gardens that balance elegance, comfort, and family living.",
  email: "vm.inout@gmail.com",
  phone: "+971 58 922 8131",
  whatsapp: "https://wa.me/971589228131",
  instagram: "https://www.instagram.com/valeria.inoutdesign/",
  instagramHandle: "@valeria.inoutdesign",
  footerCredit: {
    variant: "card" as const,
    locale: defaultSiteUrl.includes("sbunkov") ? ("ru" as const) : ("en" as const),
  },
};
