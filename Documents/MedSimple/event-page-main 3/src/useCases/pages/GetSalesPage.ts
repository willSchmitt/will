import { SalesPage } from "@/entities/domains/sales-page";
import { SalesPageDTO } from "@/entities/dtos/sales-page";
import { mapSalesPage } from "@/entities/mappers/sales-page";
import { backofficeApi } from "@/services/backoffice";

export const getSalesPageUseCase = async (): Promise<SalesPage> => {
  const { data: response } = await backofficeApi.get<{ data: SalesPageDTO }>(
    "/pages/sale",
    {
      params: {
        populate: ["faq", "checkouts", "numbers"],
      },
    }
  );

  console.log("response", response.data.attributes.checkouts);

  return mapSalesPage(response.data);
};
