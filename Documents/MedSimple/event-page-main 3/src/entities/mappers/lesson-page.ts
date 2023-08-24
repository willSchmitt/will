import { differenceInSeconds } from "date-fns";
import { LessonPage } from "../domains/lesson-page";
import { LessonPageDTO } from "../dtos/lesson-page";

export const mapLessonPage = (dto: LessonPageDTO): LessonPage => {
  const salesStartAt = new Date(dto?.attributes?.sales_start_at);
  const hasSalesStarted = differenceInSeconds(salesStartAt, new Date()) <= 0;

  return {
    facebookUrl: dto.attributes?.facebook_link || '',
    telegramUrl: dto.attributes?.telegram_link || '',
    salesStartAt: dto.attributes?.sales_start_at || '',
    hasSalesStarted,
  }
}