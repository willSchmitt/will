export type TrailContentDTO = {
  id: number;
  trail: string;
  youtube_code: string;
}

type ComplementaryMaterialDTO = {
  id: number;
  attributes: {
    url: string;
  }
}

export type LessonDTO = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    available_at: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    trail_content: TrailContentDTO[];
    complementary_material: {
      data: ComplementaryMaterialDTO | null;
    };
  }
}