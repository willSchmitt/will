export type PerpetuoDTO = {
  id: number;
  attributes: {
    video_header: string;
    testimonies: PerpetuoTestimoniesDTO[];
    PlansSales: PerpetuoPlansDTO[];
    Faq: PerpetuoFAQDTO[];
  };
};

export type PerpetuoTestimoniesDTO = {
  id: number;
  title: string;
  description: string;
  videoTestimonies: string;
};

export type PerpetuoFAQDTO = {
  id: number;
  title: string;
  description: string;
};

export type PerpetuoPlansDTO = {
  id: number;
  name: string;
  description: string;
  period: string;
  installmentPrice: string;
  totalPrice: string;
};
