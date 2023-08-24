import { Perpetuo } from "@/entities/domains/perpetuo";
import { PerpetuoDTO } from "@/entities/dtos/perpetuo";
import { mapPerpetuo } from "@/entities/mappers/perpetuo";
import { backofficeApi } from "@/services/backoffice";

export const getPerpetuoUseCase = async (): Promise<Perpetuo> => {
  const { data: response } = await backofficeApi.get<{ data: PerpetuoDTO }>(
    "/pages/perpetuo",
    {
      params: {
        populate: ["testimonies", "Faq", "PlansSales"],
      },
    }
  );

  console.log(response);
  return mapPerpetuo(response.data);
};
