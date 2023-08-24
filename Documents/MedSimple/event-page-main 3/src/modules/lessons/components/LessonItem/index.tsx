import { Lesson } from "@/entities/domains/lesson";
import { Container, MobileContainer } from "./styles";
import Link from "next/link";
import { useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
  lesson: Lesson;
  activeSlug: string;
  index: number;
};

export const LessonItem = ({ activeSlug, lesson, index }: Props) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const isActive = useMemo(() => {
    return lesson.slug === activeSlug;
  }, [lesson, activeSlug]);

  if (isMobile) {
    return (
      <Link
        href={`/aulas/${lesson.slug}`}
        key={`lesson-item-${lesson.id}`}
        className={`${!lesson.isAvailable && "disabled"}`}
      >
        <MobileContainer isAvailable={lesson.isAvailable} isActive={isActive}>
          <strong>Aula {index + 1}</strong>
          <span>{lesson.availableAtMobile}</span>

          {lesson.isAvailable ? (
            <picture>
              <Image
                src="/icons/check.svg"
                alt="Icone de check"
                width={16}
                height={16}
              />
            </picture>
          ) : (
            <picture>
              <Image
                src="/icons/lock.svg"
                alt="Icone de lock"
                width={16}
                height={16}
              />
            </picture>
          )}
        </MobileContainer>
      </Link>
    );
  }

  return (
    <Container isAvailable={lesson.isAvailable} isActive={isActive}>
      <Link
        href={`/aulas/${lesson.slug}`}
        key={`lesson-item-${lesson.id}`}
        className={`${!lesson.isAvailable && "disabled"}`}
      >
        <header>
          <span>{lesson.availableAt}</span>
          <span>Aula {index + 1}</span>
        </header>

        <main>
          <strong>{lesson.title}</strong>

          {lesson.isAvailable ? (
            <span>
              Liberada
              <Image
                src="/icons/check.svg"
                alt="Icone de check"
                width={16}
                height={16}
              />
            </span>
          ) : (
            <span>
              <Image
                src="/icons/lock.svg"
                alt="Icone de lock"
                width={16}
                height={16}
              />
            </span>
          )}
        </main>
      </Link>

      {isActive && lesson.materialUrl && (
        <footer>
          <a href={lesson.materialUrl} target="_blank">
            <Button size="full">
              Material Complementar
              <Image
                src="/icons/download.svg"
                alt="Ícone de download"
                width={20}
                height={20}
              />
            </Button>
          </a>
        </footer>
      )}
    </Container>
  );
};
