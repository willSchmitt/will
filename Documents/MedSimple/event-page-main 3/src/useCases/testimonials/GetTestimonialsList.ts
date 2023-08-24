import { Testimonial } from "@/entities/domains/testimonial";
import { TestimonialDTO } from "@/entities/dtos/testimonial";
import { mapTestimonial } from "@/entities/mappers/testitmonial";
import { backofficeApi } from "@/services/backoffice";

export const getTestimonialsListUseCase = async (): Promise<Testimonial[]> => {
  const { data: response } = await backofficeApi.get<{
    data: TestimonialDTO[];
  }>("/testimonials");

  return response.data.map((testimonial) => mapTestimonial(testimonial));
};
