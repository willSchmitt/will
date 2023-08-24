export type Perpetuo = {
  video_header: string;
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
