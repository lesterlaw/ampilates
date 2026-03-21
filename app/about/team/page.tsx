import Image from "next/image";

import { getTeamMembers } from "@/app/actions/team";

export const dynamic = "force-dynamic";

const getBioParagraphs = (bio: string) =>
  bio
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
      <div className="text-center mb-10 md:mb-14">
        <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-[#80978b] mb-4">
          Our Team
        </h1>
        <p className="text-sm md:text-base text-[#656565] max-w-4xl mx-auto leading-relaxed">
          Our teachers are carefully selected and internationally certified to
          deliver high-quality classes through intelligent cueing, creative
          sequencing, and subtle adjustments to help you progress safely.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((teamMember) => (
          <article
            key={teamMember.id}
            className="overflow-hidden rounded-[28px] border border-[#e7e8e1] bg-[#fafaf5] shadow-sm"
          >
            <div className="overflow-hidden bg-[#f3f3ed]">
              <Image
                src={teamMember.imageUrl}
                alt={teamMember.name}
                width={1350}
                height={1080}
                className="w-full aspect-[5/4] object-cover object-top"
              />
            </div>

            <div className="space-y-4 p-6">
              <h2 className="font-sans text-[20px] font-bold text-[#656565]">
                {teamMember.name}
              </h2>
              <div className="space-y-4 text-sm text-[#656565] leading-7">
                {getBioParagraphs(teamMember.bio).map((paragraph) => (
                  <p key={`${teamMember.id}-${paragraph.slice(0, 24)}`} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
