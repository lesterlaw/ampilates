export type DefaultClassOffering = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  difficulty: number | null;
  order: number;
  isActive: boolean;
};

export const DEFAULT_CLASS_OFFERINGS: DefaultClassOffering[] = [
  {
    title: "Introductory Class",
    description:
      "Never Tried Reformer Pilates before? This Introductory Class is the perfect first step. You'll get to know the equipment, learn key safety tips, and understand the terms and cues used in class. Plus, we'll guide you through body alignment basics to help you move with confidence and ease.",
    imageUrl: "/images/introduction-class.jpg",
    imageAlt: "Introductory Class",
    difficulty: null,
    order: 0,
    isActive: true,
  },
  {
    title: "Firm Foundation",
    description:
      "Your Next Step to Mastering Pilates! This dynamic class builds on the Introductory session, helping you sharpen technique, boost mobility, and move with greater control and confidence.",
    imageUrl: "/NewFirm%20.png",
    imageAlt: "Firm Foundation",
    difficulty: 1,
    order: 1,
    isActive: true,
  },
  {
    title: "Essential Strength",
    description:
      "For the Pilates Girlies Starting Their Strength Journey. Ready to feel stronger and more stable? Learn how to activate your core, shoulder, and hip stabilisers — key muscles that support balance, posture, and control in every movement.",
    imageUrl: "/images/essentialstrengthcropped.png",
    imageAlt: "Essential Strength Flexibility",
    difficulty: 2,
    order: 2,
    isActive: true,
  },
  {
    title: "Active Mobility",
    description:
      "Flexibility & Mobility Goals? Let's Get Moving! Improve flexibility, boost mobility, and relieve stress through mindful movement and targeted stretches.",
    imageUrl: "/images/activemobilitycropped.png",
    imageAlt: "Active Mobility",
    difficulty: 2,
    order: 3,
    isActive: true,
  },
];
