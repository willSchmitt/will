import { Lesson } from "@/entities/domains/lesson";
import { LessonPage } from "@/entities/domains/lesson-page";
import Image from "next/image";
import { useRouter } from "next/router";
import { LessonItem } from "../../components/LessonItem";
import { SocialButton } from "../../components/SocialButton";
import { Container } from "./styles";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTheme } from "styled-components";
import { LessonsList } from "../LessonsList";
import { Social } from "../Social";
import { useTrail } from "../../contexts/TrailContext";

type Props = {
  pageData: LessonPage;
  lessonsList: Lesson[];
};

export const Sidebar = ({ pageData, lessonsList }: Props) => {
  const router = useRouter();
  const { trailTitle } = useTrail();
  const isMobile = useMediaQuery("(max-width: 640px)");

  const { slug } = router.query;

  return (
    <Container>
      <header>
        <Image
          src="/images/medsimple-small-logo.png"
          alt="Logo da MEDsimple"
          width={29}
          height={40}
        />

        <div>
          <h3>{trailTitle}</h3>
          <small>
            Trilha
            <br />
            de estudo
          </small>
        </div>
      </header>

      {!isMobile && (
        <>
          <LessonsList lessonsList={lessonsList} />
          <Social pageData={pageData} />
        </>
      )}
    </Container>
  );
};


export default Sidebar;