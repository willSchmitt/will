import { differenceInSeconds, format } from "date-fns";
import { Lesson } from "../domains/lesson";
import { LessonDTO } from "../dtos/lesson";

import { ptBR } from 'date-fns/locale';

export const mapLesson = (dto: LessonDTO): Lesson => {
  const availableAt = new Date(dto?.attributes?.available_at);
  const isAvailable = differenceInSeconds(availableAt, new Date()) <= 0;

  return {
    id: dto?.id,
    title: dto?.attributes?.title,
    slug: dto?.attributes?.slug,
    description: dto?.attributes?.description,
    availableAt: format(availableAt,"EEEE '-' dd LLL", { locale: ptBR }),
    availableAtMobile: format(availableAt,"EEE '-' dd LLL", { locale: ptBR }),
    isAvailable,
    trailContent:
      dto?.attributes?.trail_content?.map((content) => ({
        trail: content?.trail,
        videoUrl: `https://www.youtube.com/embed/${content?.youtube_code}`,
      })) || [],
    materialUrl: dto?.attributes?.complementary_material?.data
      ? dto?.attributes?.complementary_material?.data?.attributes?.url
      : null,
  };
};
