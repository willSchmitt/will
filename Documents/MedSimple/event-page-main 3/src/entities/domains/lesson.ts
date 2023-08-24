export type TrailContent = {
  trail: string;
  videoUrl: string;
}

export type Lesson = {
  id: number;
  title: string;
  slug: string;
  description: string;
  availableAt: string;
  availableAtMobile: string;
  isAvailable: boolean;
  trailContent: TrailContent[];
  materialUrl: string | null;
}