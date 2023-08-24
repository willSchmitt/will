import { LessonPage } from "@/entities/domains/lesson-page";
import { LessonPageDTO } from "@/entities/dtos/lesson-page";
import { mapLessonPage } from "@/entities/mappers/lesson-page";
import { backofficeApi } from "@/services/backoffice";

export const getLessonPageUseCase = async(): Promise<LessonPage> => {
  const { data: response } = await backofficeApi.get<{ data: LessonPageDTO }>('/pagina-de-cpl')

  return mapLessonPage(response.data)
}