export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
};

export const services: Service[] = [
  {
    id: "consultation",
    title: "Consultation",
    description:
      "A focused one-hour session to assess the potential of your site, discuss your lifestyle requirements, and establish a clear direction for your landscape.",
    price: "AED 1,500",
  },
  {
    id: "concept-design",
    title: "Landscape Concept & Design",
    description:
      "A comprehensive design package that translates your vision into a clear and buildable landscape, including planning, zoning, visualizations, and material selection.",
    price: "From AED 20,000",
  },
  {
    id: "supervision",
    title: "Design Supervision",
    description:
      "On-site guidance throughout the implementation process to ensure the design is realised with accuracy and attention to detail.",
    price: "Available upon request",
  },
];
