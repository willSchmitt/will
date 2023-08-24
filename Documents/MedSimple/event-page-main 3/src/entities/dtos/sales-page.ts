type SalesNumberDTO = {
  id: number;
  label: string;
  value: string;
};

type SalesFaqDTO = {
  id: number;
  title: string;
  description: string;
};

export type SalesPlanDTO = {
  id: number;
  checkoutUrl: string;
  dateStart: string;
  dateEnd: string;
  description: string;
  totalPrice?: string;
  installmentPrice?: string;
  proviUrl?: string | null;
  extendedCheckoutUrl?: string;
  extendedInstallmentPrice?: string;
  extendedTotalPrice?: string;
  extendedProviUrl?: string;
};

export type SalesPageDTO = {
  id: number;
  attributes: {
    youtubeCode: string;
    dateStart: string;
    dateEnd: string;
    fromPrice: number;
    numbers: SalesNumberDTO[];
    faq: SalesFaqDTO[];
    checkouts: SalesPlanDTO[];
  };
};
