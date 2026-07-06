import { getClassOfferings } from "@/app/actions/classes";

import ClassesCarousel from "./ClassesCarousel";

type ClassesCarouselSectionProps = {
  heading?: string;
  intro?: string;
};

export default async function ClassesCarouselSection({
  heading,
  intro,
}: ClassesCarouselSectionProps) {
  const classOfferings = await getClassOfferings();

  return (
    <ClassesCarousel
      heading={heading}
      intro={intro}
      classesData={classOfferings.map((offering) => ({
        title: offering.title,
        imageSrc: offering.imageUrl,
        imageAlt: offering.imageAlt,
        difficulty: offering.difficulty ?? undefined,
        description: offering.description,
      }))}
    />
  );
}
