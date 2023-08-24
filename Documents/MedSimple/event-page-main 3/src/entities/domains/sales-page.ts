export type SalesNumber = {
  id: number;
  label: string;
  value: string;
}

export type SalesFAQ = {
  id: number;
  title: string;
  description: string;
}

export type SalesPlan = {
  id: number;
  dateStart: Date;
  dateEnd: Date | null;
  basic: {
    url: string;
    price: string;
    installmentPrice: string;
    proviUrl: string;
  },
  standard: {
    url: string;
    price: string;
    installmentPrice: string;
    proviUrl: string;
  }
}

export type SalesPage = {
  id: number;
  videoUrl: string;
  dateStart: Date;
  dateEnd: Date;
  fromPrice: number;
  numbers: SalesNumber[];
  faq: SalesFAQ[];
  activePlan: SalesPlan;
  isEnabled: boolean;
}