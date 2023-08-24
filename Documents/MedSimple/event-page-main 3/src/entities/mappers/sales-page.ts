import { isAfter, isBefore } from "date-fns";
import { SalesPage, SalesPlan } from "../domains/sales-page";
import { SalesPageDTO, SalesPlanDTO } from "../dtos/sales-page";

const defaultPlan: SalesPlan = {
  id: Math.random() * 10,
  dateStart: new Date(),
  dateEnd: null,
  basic: {
    price: "399,80",
    installmentPrice: "39,90",
    proviUrl: "https://pay.hotmart.com/O82945965O?off=xi44q3iz",
    url: "https://pay.hotmart.com/G37250429W?off=0ryncxi1&checkoutMode=10",
  },
  standard: {
    price: "597,00",
    installmentPrice: "59,58",
    proviUrl: "https://pay.hotmart.com/O82945965O?off=bhovtvjl",
    url: "https://pay.hotmart.com/G37250429W?off=697cuhvf&checkoutMode=10",
  },
};

export const mapPlan = (dto: SalesPlanDTO): SalesPlan => {
  return {
    id: dto.id,
    dateStart: new Date(dto.dateStart),
    dateEnd: new Date(dto.dateEnd),
    basic: {
      price: dto?.totalPrice || "",
      installmentPrice: dto?.installmentPrice || "",
      proviUrl: dto?.proviUrl || "",
      url: dto?.checkoutUrl || "",
    },
    standard: {
      price: dto?.extendedTotalPrice || "",
      installmentPrice: dto?.extendedInstallmentPrice || "",
      proviUrl: dto?.extendedProviUrl || "",
      url: dto?.extendedCheckoutUrl || "",
    },
  };
};

export const mapSalesPage = (dto: SalesPageDTO): SalesPage => {
  const dateStart = new Date(dto?.attributes.dateStart);
  const dateEnd = new Date(dto?.attributes.dateEnd);

  const isEnabled = isBefore(new Date(), dateEnd);
  const plans = dto?.attributes?.checkouts;

  const activePlan: SalesPlanDTO = plans.find((plan) => {
    return (
      isAfter(new Date(), new Date(plan.dateStart)) &&
      isBefore(new Date(), new Date(plan.dateEnd))
    );
  }) as SalesPlanDTO;

  return {
    id: dto?.id,
    videoUrl: `https://www.youtube.com/embed/${dto.attributes.youtubeCode}`,
    dateStart,
    dateEnd,
    fromPrice: dto?.attributes?.fromPrice,
    numbers:
      dto?.attributes?.numbers?.map((number) => ({
        id: number.id,
        label: number.label,
        value: number.value,
      })) || [],
    faq: dto?.attributes?.faq?.map((faq) => ({
      id: faq.id,
      title: faq.title,
      description: faq.description,
    })),
    isEnabled,
    activePlan: activePlan ? mapPlan(activePlan) : defaultPlan,
  };
};
