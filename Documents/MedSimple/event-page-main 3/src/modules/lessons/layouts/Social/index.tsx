import { LessonPage } from "@/entities/domains/lesson-page";
import { Container } from "./styles";
import { SocialButton } from "../../components/SocialButton";

type Props = {
  pageData: LessonPage;
};

export const Social = ({ pageData }: Props) => {
  return (
    <Container>
      <strong>
        Faça parte dos nossos grupos exclusivos e aprimore seu aprendizado
      </strong>

      {pageData?.facebookUrl && (
        <SocialButton
          label="Concurso de resumos"
          type="facebook"
          url={pageData?.facebookUrl}
        />
      )}

      {pageData?.telegramUrl && (
        <SocialButton
          label="Comunidade"
          type="telegram"
          url={pageData?.telegramUrl}
        />
      )}
    </Container>
  );
};

export default Social;