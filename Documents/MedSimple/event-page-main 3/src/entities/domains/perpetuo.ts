export type Perpetuo = {
  videoHeader: string;
  testimonials: PerpetuoTestimonies[];
  faq: PerpetuoFAQ[];
  plans: PerpetuoPlans[];
};

export type PerpetuoTestimonies = {
  id: number;
  title: string;
  description: string;
  videoTestimonies: string;
};

export type PerpetuoFAQ = {
  id: number;
  title: string;
  description: string;
};

export type PerpetuoPlans = {
  id: number;
  name: string;
  description: string;
  period: string;
  installmentPrice: string;
  totalPrice: string;
};
