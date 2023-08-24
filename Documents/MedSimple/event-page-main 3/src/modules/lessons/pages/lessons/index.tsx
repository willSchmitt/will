/* eslint-disable react/no-children-prop */
import { VideoPlayer } from "@/components/VideoPlayer";
import { Lesson } from "@/entities/domains/lesson";
import { LessonPage as LessonPageProps } from "@/entities/domains/lesson-page";
import { getLessonsListUseCase } from "@/useCases/lessons/GetLessonList";
import { getLessonPageUseCase } from "@/useCases/pages/GetLessonPage";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {
  Container,
  ContentContainer,
  SocialContainer,
  TabBarContainer,
} from "./styles";

import dynamic from "next/dynamic";
import Head from "next/head";
import {
  TrailEnum,
  TrailProvider,
  useTrail,
} from "../../contexts/TrailContext";
import { TrailSelection } from "../../layouts/TrailSelection";
import { Social } from "../../layouts/Social";
import { OgImage } from "@/components/OgImage";
import { useRouter } from "next/router";
import { useMemo } from "react";

type Props = {
  lessonPage: LessonPageProps;
  lessonsList: Lesson[];
  lessonData?: Lesson;
};

const Sidebar = dynamic(() => import("../../layouts/Sidebar"), { ssr: false });
const Comments = dynamic(() => import("../../layouts/Comments"), {
  ssr: false,
});
const LessonsList = dynamic(() => import("../../layouts/LessonsList"), {
  ssr: false,
});

export const LessonPageComponent = ({
  lessonPage,
  lessonData,
  lessonsList,
}: Props) => {
  const { trail } = useTrail();

  const videoUrl = useMemo(() => {
    return (
      lessonData?.trailContent?.find((item) => item.trail === trail)
        ?.videoUrl || ""
    );
  }, [lessonData, trail]);

  if (!trail) {
    return <TrailSelection />;
  }

  return (
    <Container>
      <Sidebar pageData={lessonPage} lessonsList={lessonsList} />

      <main>
        <VideoPlayer videoUrl={videoUrl} autoStart />

        <ContentContainer>
          <article>
            <h1>{lessonData?.title}</h1>

            <ReactMarkdown children={lessonData?.description || ""} />
          </article>

          <SocialContainer>
            <Social pageData={lessonPage} />
          </SocialContainer>

          <Comments />
        </ContentContainer>
      </main>

      <TabBarContainer>
        <LessonsList lessonsList={lessonsList} />
      </TabBarContainer>
    </Container>
  );
};

export const LessonPage = (props: Props) => {
  const router = useRouter();
  const title = `${props.lessonData?.title} - Maratona MEDsimple`;

  return (
    <TrailProvider>
      <Head>
        <title>{title}</title>

        <OgImage
          title={title}
          description={props.lessonData?.description}
          imageUrl={`${process.env.NEXT_PUBLIC_APP_URL}/api/og/lessons?title=${props.lessonData?.title}`}
          pageUrl={router.pathname}
        />
      </Head>

      <LessonPageComponent {...props} />
    </TrailProvider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { slug, trail } = context.query;

  const defaultTrail = trail as TrailEnum;

  if (defaultTrail) {
    nookies.set(context, "trail", trail as string, {
      maxAge: 10 * 24 * 60 * 60, // 10 days
      path: "/",
    });
  }

  const lessonPage = await getLessonPageUseCase();

  if (lessonPage.hasSalesStarted) {
    return {
      redirect: {
        destination: "/plataforma-medsimple",
        permanent: false,
      },
    };
  }

  const lessonsList = await getLessonsListUseCase();

  const lessonData = lessonsList.find(
    (lesson) => lesson.slug === (slug as string)
  );

  if (!lessonData?.isAvailable) {
    return {
      redirect: {
        destination: "https://lp.medsimpleoficial.com.br",
        permanent: false,
      },
    };
  }

  return {
    props: {
      lessonPage,
      lessonsList,
      lessonData,
    },
  };
};
