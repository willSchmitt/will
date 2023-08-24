import { FacebookProvider, Comments as CommentsBox } from "react-facebook";

import { Container, FacebookContainer } from "./styles";

export const Comments = () => {
  return (
    <Container>
      <h3>
        Queremos ouvir você,
        <br />
        Deixe seu comentário ou dúvida
      </h3>

      <FacebookContainer>
        <FacebookProvider
          appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID as string}
        >
          <CommentsBox
            href={process.env.NEXT_PUBLIC_FACEBOOK_APP_URL}
            width="100%"
            orderBy="reverse_time"
            mobile
          />
        </FacebookProvider>
      </FacebookContainer>
    </Container>
  );
};

export default Comments