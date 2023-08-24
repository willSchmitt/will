import { Wrapper } from "@/components/Wrapper";
import { AboutEbook, EbookContainer, FormEbook, HeaderForm } from "./styles";
import { ButtonCapturePage } from "@/components/ButtonCapturePage";

export function Ebook() {
  return (
    <EbookContainer>
      <Wrapper>
        <AboutEbook>
          <h2>Oque está incluso no nosso Ebook:</h2>

          <main>
            <section>
              <small>01</small>
              <span>O jeito errado de estudar na faculdade de medicina</span>
            </section>

            <section>
              <small>02</small>
              <span>Os 3 pilares que te fazem memorizar a longo prazo</span>
            </section>

            <section>
              <small>03</small>
              <span>
                Como utilizar a tecnologia ao seu favor e antecipar a sua
                preparação.
              </span>
            </section>

            <section>
              <small>04</small>
              <span>
                Como tirar +90% em qualquer prova da faculdade de medicina
              </span>
            </section>
          </main>

          <footer>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </footer>
        </AboutEbook>
        <FormEbook>
          <header>
            <strong>Baixe agora, é grátis!</strong>
            <small>É só preencher o formulário abaixo para acessar</small>
          </header>

          <form>
            <HeaderForm>
              <input type="text" placeholder="Nome:" />
              <input type="text" placeholder="Sobrenome:" />
            </HeaderForm>
            <input type="email" placeholder="E-mail:" />
            <input type="text" placeholder="Nome da sua faculdade:" />
            <input type="text" placeholder="Ano de ingresso na faculdade:" />
          </form>

          <ButtonCapturePage />

          <footer>
            <p>*Ao enviar você aceita nossa Política de Privacidade</p>
          </footer>
        </FormEbook>
      </Wrapper>
    </EbookContainer>
  );
}
