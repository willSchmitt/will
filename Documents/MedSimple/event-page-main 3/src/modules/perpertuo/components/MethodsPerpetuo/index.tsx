import { Wrapper } from "@/components/Wrapper";

import {
  ColumnA,
  ColumnB,
  ColumnOne,
  ColumnTwo,
  Line,
  Mallet,
  Method,
  MethodFive,
  MethodFour,
  MethodFourAndFive,
  MethodOne,
  MethodThree,
  MethodTwo,
  MethodsPerpetuoContainer,
  SimpleCards,
  Stories,
  VideoLessons,
} from "./styles";

import Image from "next/image";

export function MethodsPerpetuo() {
  return (
    <MethodsPerpetuoContainer>
      <Wrapper>
        <h2>Como irá ser seu estudo com a MEDsimple?</h2>
        <Method>
          <MethodOne>
            <ColumnA>
              <header>
                <Image
                  src="/images/iconsPerpetuo/methodOne.png"
                  alt=""
                  width={108}
                  height={106}
                />
                <h3>Antecipação potencializadora</h3>

                <Image
                  src="/images/iconsPerpetuo/fire.png"
                  alt=""
                  width={108}
                  height={106}
                  className="fire"
                />
              </header>
              <section>
                <p>
                  Tudo o que vemos pela primeira vez normalmente parece muito
                  mais difícil..
                  <span>
                    Antes de você assistir o seu professor na faculdade (que
                    normalmente não nos ajudam muito a entender🫠) você irá ter
                    um primeiro contato com o assunto através de:
                  </span>
                </p>
                <Image
                  src="/images/imagesPerpetuo/globe.png"
                  alt="Imagem de um globo na cor roxa."
                  width={175}
                  height={175}
                />
              </section>
            </ColumnA>
            <ColumnB>
              <VideoLessons>
                <picture>
                  <Image
                    src="/images/iconsPerpetuo/can.png"
                    alt="Imagem de uma camera"
                    width={40}
                    height={40}
                  />
                </picture>

                <section>
                  <h4>Vídeo aulas ativas,</h4>
                  <p>
                    direto ao ponto: Sem enrolação. Aqui você assiste na
                    velocidade em que quiser, e aprende os conceitos-chave de
                    qualquer assunto, com didática e macetes exclusivos
                  </p>
                </section>
              </VideoLessons>

              <Image
                src="/images/iconsPerpetuo/arrowYellow.png"
                alt="Imagem de uma seta"
                width={60}
                height={195}
                className="arrow"
              />
              <Stories>
                <picture>
                  <Image
                    src="/images/iconsPerpetuo/arrowPhone.png"
                    alt="Imagem de uma camera"
                    width={40}
                    height={40}
                  />
                </picture>

                <section>
                  <h4>MEDstories:</h4>
                  <p>
                    Agora falta pouco para você ir para a aula da faculdade.
                    Relaxe fazendo um quiz no modelo do instagram direto na
                    plataforma para ver se você captou a visão geral do assunto.
                  </p>
                </section>
              </Stories>
            </ColumnB>
          </MethodOne>

          <MethodTwo>
            <main>
              <header>
                <picture>
                  <Image
                    src="/images/iconsPerpetuo/hand.png"
                    alt=""
                    width={70}
                    height={70}
                  />
                </picture>
                <h3>Raciocínio ativo</h3>
              </header>
              <p>
                Agora que você já teve um maravilhoso primeiro contato, você
                pode participar das discussões e das aulas/atividades da sua com
                um raciocínio ativo, contribuindo, destacando e sedimentando a
                fixação no seu cérebro.
              </p>
            </main>
            <Image
              src="/images/imagesPerpetuo/iconMethod2.png"
              alt=""
              width={180}
              height={195}
            />
          </MethodTwo>

          <MethodThree>
            <ColumnOne>
              <main>
                <header>
                  <picture>
                    <Image
                      src="/images/iconsPerpetuo/number3.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                  </picture>
                  <h3>Tríade Secreta da Fixação a longo prazo</h3>
                </header>
                <p>
                  Aqui está a cereja do bolo. Depois de participar da
                  aula/atividades da sua faculdade você vai usar os métodos mais
                  poderosos de fixação que, em conjunto, te fazem fixar 3x mais
                  ou até mais os conteúdos da faculdade:
                </p>
              </main>
              <Image
                src="/images/imagesPerpetuo/imgMethod3.png"
                alt=""
                width={415}
                height={423}
              />
            </ColumnOne>

            <Line />

            <ColumnTwo>
              <header>
                <h4>Questões com Comentários de ouro:</h4>
                <p>
                  Você irá realizar questionários, todos comentados pela nossa
                  equipe, para testar se você realmente captou os
                  conceitos-chave do assunto.
                </p>

                <Image
                  src="/images/imagesPerpetuo/gold.png"
                  alt=""
                  width={152}
                  height={152}
                  className="gold"
                />
                <picture>
                  <Image
                    src="/images/iconsPerpetuo/iconMethod3.png"
                    alt=""
                    width={40}
                    height={45}
                  />
                </picture>
              </header>

              <Mallet>
                <picture>
                  <Image
                    src="/images/iconsPerpetuo/iconMethod3.png"
                    alt=""
                    width={40}
                    height={45}
                  />
                </picture>
                <section>
                  <h4>Macetes:</h4>
                  <p>
                    também conhecidos como `mnemônicos` ou `dicas`, vão te fazer
                    lembrar de duas, três, dez ou até mais informações como se
                    fosse mágica.
                  </p>
                </section>
              </Mallet>

              <SimpleCards>
                <picture>
                  <Image
                    src="/images/iconsPerpetuo/iconMethod3.png"
                    alt=""
                    width={40}
                    height={45}
                  />
                </picture>
                <section>
                  <h4>SimpleCards:</h4>
                  <p>
                    Aqui você irá selecionar se cada informação foi fácil, médio
                    ou difícil e nossa plataforma AUTOMATICAMENTE irá criar uma
                    agenda de revisões de flashcards desses conceitos que te
                    fazem fixar mais conforme a curva do esquecimento de
                    Ebbinghaus.
                  </p>
                </section>
              </SimpleCards>
            </ColumnTwo>
          </MethodThree>

          <MethodFourAndFive>
            <MethodFour>
              <main>
                <header>
                  <picture>
                    <Image
                      src="/images/iconsPerpetuo/number4.png"
                      alt="Número quatro"
                      width={60}
                      height={60}
                    />
                  </picture>
                  <h3>Prova Real</h3>
                </header>
                <p>
                  Agora é a hora de fazer a prova da faculdade tranquilo, já que
                  os conceitos estão fixados na sua cabeça verdadeiramente.
                </p>
              </main>

              <Image
                src="/images/imagesPerpetuo/imgMethod4.png"
                alt=""
                width={301}
                height={166}
              />
            </MethodFour>

            <MethodFive>
              <main>
                <header>
                  <picture>
                    <Image
                      src="/images/iconsPerpetuo/number5.png"
                      alt="Número cinco"
                      width={60}
                      height={60}
                    />
                  </picture>
                  <h3>Never Forget</h3>
                </header>
                <p>
                  Agora é só seguir revisando os conceitos dos flashcards
                  conforme o algoritmo da plataforma MEDsimple e ficar tranquilo
                  com sua base teórica como médico e para as provas/cursinhos de
                  residência{" "}
                </p>
              </main>

              <Image
                src="/images/imagesPerpetuo/imgMethod5.png"
                alt=""
                width={176}
                height={175}
              />
            </MethodFive>
          </MethodFourAndFive>
        </Method>
      </Wrapper>
    </MethodsPerpetuoContainer>
  );
}
