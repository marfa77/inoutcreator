export type Project = {
  id: string;
  title: string;
  location: string;
  year: number;
  description: string;
  gradient: string;
  images?: string[];
};

const alBarariImages = [
  "01_1_9V3A3038.jpg",
  "01_2_9V3A3113.jpg",
  "01_3_9V3A3622.jpg",
  "01_4_9V3A3557.jpg",
  "01_5_9V3A3625.jpg",
  "01_6_9V3A3462.jpg",
  "01_7_9V3A2966.jpg",
  "01_8_9V3A2976.jpg",
  "01_9_9V3A2920.jpg",
  "01_10_9V3A3278.jpg",
  "01_11_9V3A3345.jpg",
  "01_13_9V3A3664.jpg",
  "01_14_9V3A3507.jpg",
].map((file) => `/projects/al-barari/${file}`);

const tilalElanImages = [
  "02_1_img_4621.jpg",
  "02_2_img_4618.jpg",
  "02_3_img_4617.jpg",
  "02_4_img_4610.jpg",
  "02_5_img_4605.jpg",
  "02_6_img_4624.jpg",
  "02_7_img_4625.jpg",
  "02_8_img_4603.jpg",
  "02_9_img_4604.jpg",
  "02_10_img_4601.jpg",
  "02_11_img_4626.jpg",
].map((file) => `/projects/tilal-elan/${file}`);

const miraOasisImages = [
  "03_1_dsc_3771.jpg",
  "03_2_dsc_3774.jpg",
  "03_3_dsc_3788.jpg",
  "03_4_dsc_3888.jpg",
  "03_5_dsc_3844.jpg",
  "03_62_dsc_3776.jpg",
  "03_6_dsc_3778.jpg",
  "03_7_dsc_3833.jpg",
  "03_8_dsc_3894.jpg",
  "03_9_dsc_3855.jpg",
  "03_10_dsc_3906.jpg",
].map((file) => `/projects/mira-oasis/${file}`);

const harmony27Images = Array.from({ length: 24 }, (_, i) =>
  `/projects/harmony-27/05_${String(i + 1).padStart(2, "0")}.jpg`
);

const harmony16Images = Array.from({ length: 18 }, (_, i) =>
  `/projects/harmony-16/04_${String(i + 1).padStart(2, "0")}.jpg`
);

export const projects: Project[] = [
  {
    id: "al-barari",
    title: "Al Barari",
    location: "Dubai",
    year: 2024,
    description:
      "A green oasis within one of Dubai's most prestigious communities. The garden was carefully divided into several functional spaces, each offering its own atmosphere and purpose. The entrance courtyard features decorative wall lighting that transforms the facade into an artistic focal point from the very first step. The pool area creates a relaxing resort-like setting, while the spacious natural lawn provides the perfect place for children to play. The result is a harmonious outdoor environment that balances elegance, comfort, and family living.",
    gradient: "from-emerald-900 via-green-700 to-lime-600",
    images: alBarariImages,
  },
  {
    id: "tilal-elan",
    title: "Tilal Al Ghaf — Elan",
    location: "Dubai",
    year: 2024,
    description:
      "One of my earliest projects in the rapidly growing Tilal Al Ghaf community. Despite its compact size, the garden offers several distinct outdoor experiences: a dining area beneath the canopy of a palm tree, a comfortable lounge space under a pergola, and a welcoming entrance pathway leading from the gate to the house. A diverse collection of succulents, chosen for their unique forms, textures, and architectural qualities, serves as the defining feature of the design.",
    gradient: "from-amber-900 via-orange-800 to-amber-600",
    images: tilalElanImages,
  },
  {
    id: "mira-oasis",
    title: "Mira Oasis",
    location: "Dubai",
    year: 2025,
    description:
      "A garden designed to accommodate different aspects of family life. The layout includes a dedicated parents' retreat with a fire pit and entertaining area, a playful space for children, and a dining terrace seamlessly connected to the house. A thoughtfully curated plant palette unifies all zones, featuring species carefully selected for their adaptability to Dubai's climate, ensuring year-round beauty and sustainable maintenance.",
    gradient: "from-teal-900 via-cyan-800 to-teal-600",
    images: miraOasisImages,
  },
  {
    id: "harmony-16",
    title: "Tilal Al Ghaf — Harmony 16",
    location: "Dubai",
    year: 2025,
    description:
      "A project that remains especially meaningful to me thanks to the clients' exceptional involvement and attention to detail. Together, we focused on creating not only a beautiful and functional garden, but also a technically well-planned outdoor space designed for long-term enjoyment. The concept combines the clean geometry of traditional paving with lush, naturalistic planting that softens its structured lines. The garden features an outdoor barbecue area with a bar counter, as well as a mirrored wall element that visually expands the space and creates the illusion of a hidden garden beyond.",
    gradient: "from-stone-800 via-neutral-700 to-stone-500",
    images: harmony16Images,
  },
  {
    id: "harmony-27",
    title: "Tilal Al Ghaf — Harmony 27",
    location: "Dubai",
    year: 2026,
    description:
      "A garden dedicated to experimentation and innovation. The project explores a combination of materials, textures, and construction techniques, including timber integrated into paving, handcrafted wooden arches supporting climbing plants and swings, stabilized decorative gravel, and my favorite Italian travertine laid in a Crazy Shape pattern. A refined, neo-classical planting palette brings balance and elegance, while the custom details give the garden a distinctive personality.",
    gradient: "from-rose-900 via-stone-700 to-amber-700",
    images: harmony27Images,
  },
  {
    id: "sidra-77",
    title: "Dubai Hills — Sidra 77",
    location: "Dubai",
    year: 2026,
    description:
      "The first project in a series of landscape transformations created for property investors seeking to increase the market appeal of their villas. The challenge was to create the impression of a mature, established garden while maintaining a carefully controlled budget. Key features include a floating deck extending over the pool with integrated evening lighting, a cascading water feature, a tall ficus hedge for privacy, and a strategic selection of plants chosen for their ability to create an immediate visual impact. The result is a garden that significantly enhances both lifestyle appeal and property value.",
    gradient: "from-slate-900 via-blue-900 to-cyan-800",
  },
  {
    id: "sidra-9",
    title: "Dubai Hills — Sidra 9",
    location: "Dubai",
    year: 2026,
    description:
      "The second project in the landscape transformation series demonstrates how seemingly similar plots can inspire completely different design solutions. Even when site dimensions are nearly identical, factors such as sun exposure, surrounding vegetation, neighboring properties, and architectural context create unique opportunities. Through a different planting palette and tailored design approach, this garden developed its own distinct character and atmosphere while maintaining the same objective of maximizing visual appeal and value.",
    gradient: "from-indigo-900 via-violet-900 to-purple-700",
  },
];

export const portfolioYears = "2024–2026";

export function getProjectCover(project: Project): string | null {
  return project.images?.[0] ?? null;
}
