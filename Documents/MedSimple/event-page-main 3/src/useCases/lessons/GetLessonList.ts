import { Lesson } from "@/entities/domains/lesson";
import { LessonDTO } from "@/entities/dtos/lesson";
import { mapLesson } from "@/entities/mappers/lesson";
import { backofficeApi } from "@/services/backoffice";

export const getLessonsListUseCase = async(): Promise<Lesson[]> => {
  const { data: response } = await backofficeApi.get<{ data: LessonDTO[] }>('/lessons', {
    params: {
      populate: ['trail_content', 'complementary_material'],
      sort: 'id:asc'
    }
  })

  return response.data.map(lesson => mapLesson(lesson))
}