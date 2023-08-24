export type LessonPageDTO = {
  id: number;
  attributes: {
    telegram_link: string;
    facebook_link: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    sales_start_at: string;
  }
}