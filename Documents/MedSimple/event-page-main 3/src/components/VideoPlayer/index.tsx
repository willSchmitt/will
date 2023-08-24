import { Container } from "./styles";

type Props = {
  videoUrl: string;
  autoStart?: boolean;
};

export const VideoPlayer = ({ videoUrl, autoStart = false }: Props) => {
  return (
    <Container>
      <iframe
        width="560"
        height="315"
        src={`${videoUrl}?controls=1&autoplay=${
          autoStart ? 1 : 0
        }&rel=0&showinfo=0&modestbranding=1&disablekb=1&iv_load_policy=3&loop=1&color=white`}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};
