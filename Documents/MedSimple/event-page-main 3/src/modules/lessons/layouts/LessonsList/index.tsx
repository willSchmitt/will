import { Lesson } from "@/entities/domains/lesson";
import { LessonItem } from "../../components/LessonItem";
import { Container } from "./styles";
import { useRouter } from "next/router";

type Props = {
  lessonsList: Lesson[];
}

export const LessonsList = ({ lessonsList }: Props) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Container>
      {lessonsList?.map((lesson, index) => (
        <LessonItem
          key={`lesson-list-item-${lesson.id}`}
          activeSlug={slug as string}
          index={index}
          lesson={lesson}
        />
      ))}
    </Container>
  );
};

export default LessonsList;
