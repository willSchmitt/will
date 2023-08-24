export enum TestimonialTypeEnum {
  HOTMART = 'hotmart',
  VIDEO = 'video'
}

export type Testimonial = {
  name: string;
  youtubeUrl?: string;
  type: TestimonialTypeEnum;
  description: string;
}