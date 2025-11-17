import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding promotions...");

  // Example promotions based on the existing hardcoded content
  const promotions = [
    {
      title: "The Family Pass",
      description: "Share 100 passes across the family!",
      imageUrl: "/images/the-family-pass.webp", // Update this to Supabase storage URL
      features: [
        "For up to <span class=\"font-semibold text-[#80978b]\">3 related female family members</span> (Mothers, daughters, sisters only)",
        "12-month validity",
        "Save $400! Exclusive promo price: <span class=\"font-semibold text-[#80978b]\">$3200</span>",
        "Each pass is valid for one class, per person",
      ],
      order: 1,
      isActive: true,
    },
    {
      title: "Refer A Friend",
      description: "",
      imageUrl: "/images/refer-a-friend.webp", // Update this to Supabase storage URL
      features: [
        "1. Refer a friend who is new to am Pilates",
        "2. A minimum of <span class=\"font-semibold text-[#80978b]\">$300</span> has to be spent by them",
        "3. Inform our front staff",
        "4. Receive a free class pass from us!",
      ],
      order: 2,
      isActive: true,
    },
    {
      title: "The am Club",
      description: "Limited Edition \"am Club\" cropped tee, available now at our studio!",
      imageUrl: "/images/the-am-club.webp", // Update this to Supabase storage URL
      features: [
        "Snag the cute and limited edition \"am Club\" shirt available only at our studio, only at <span class=\"font-semibold\">$42.90</span>!",
        "Members, get it at a special price of <span class=\"text-xl md:text-2xl font-bold text-[#80978b]\">$38.90</span>!",
        "Don't wait— limited stock available and they're going fast!",
      ],
      order: 3,
      isActive: true,
    },
    {
      title: "Birthday Perks",
      description: "50% off à la carte services",
      imageUrl: "/images/birthday-perks.webp", // Update this to Supabase storage URL
      features: [
        "The discount only applies to à la carte Define services and is non-transferable.",
        "Only for new to Define members.",
        "Members must present an active membership shown on the app to redeem this discount at any Amore Define outlets.",
      ],
      order: 4,
      isActive: true,
    },
  ];

  for (const promotion of promotions) {
    const existing = await prisma.promotion.findFirst({
      where: { title: promotion.title },
    });

    if (existing) {
      await prisma.promotion.update({
        where: { id: existing.id },
        data: promotion,
      });
    } else {
      await prisma.promotion.create({
        data: promotion,
      });
    }
  }

  console.log("Promotions seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

