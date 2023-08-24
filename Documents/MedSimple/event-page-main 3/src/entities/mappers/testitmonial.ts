import { Testimonial } from "../domains/testimonial";
import { TestimonialDTO } from "../dtos/testimonial";

export const mapTestimonial = (dto: TestimonialDTO): Testimonial => {
  return {
    name: dto.attributes.title,
    description: dto.attributes.description,
    type: dto.attributes.type,
    youtubeUrl: dto.attributes?.youtube_url
  }
}