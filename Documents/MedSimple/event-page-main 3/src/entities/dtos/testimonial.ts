import { TestimonialTypeEnum } from "../domains/testimonial";

export type TestimonialDTO = {
  id: number;
  attributes: {
    title: string;
    youtube_url?: string;
    type: TestimonialTypeEnum;
    description: string;
  }
}