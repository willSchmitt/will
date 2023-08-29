import {
  Perpetuo,
  PerpetuoPlans,
  PerpetuoFAQ,
  PerpetuoTestimonies,
} from "../domains/perpetuo";
import {
  PerpetuoDTO,
  PerpetuoPlansDTO,
  PerpetuoFAQDTO,
  PerpetuoTestimoniesDTO,
} from "../dtos/perpetuo";

export const mapPerpetuoPlans = (dto: PerpetuoPlansDTO): PerpetuoPlans => {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    period: dto.period,
    installmentPrice: dto.installmentPrice,
    totalPrice: dto.totalPrice,
  };
};

export const mapPerpetuoFAQ = (dto: PerpetuoFAQDTO): PerpetuoFAQ => {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
  };
};

export const mapPerpetuoTestimonies = (
  dto: PerpetuoTestimoniesDTO
): PerpetuoTestimonies => {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    videoTestimonies: dto.videoTestimonies,
  };
};

export const mapPerpetuo = (dto: PerpetuoDTO): Perpetuo => {
  return {
    videoHeader: dto.attributes.video_header,
    testimonials: dto.attributes.testimonies.map(mapPerpetuoTestimonies),
    plans: dto.attributes.PlansSales.map(mapPerpetuoPlans),
    faq: dto.attributes.Faq.map(mapPerpetuoFAQ),
  };
};
