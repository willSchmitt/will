import Image from "next/image";
import { useCallback } from "react";
import { TrailEnum, useTrail } from "../../contexts/TrailContext";
import { Container, TrailContainer } from "./styles";

const trails = [
  {
    title: "Ciclo Básico",
    identifier: TrailEnum.BASIC,
    subtitle: "1º, 2º ano",
    description:
      "Para você que está no comecinho da faculdade de medicina (primeiro e segundo ano) e quer saber todos os segredos para aproveitar ao máximo a sua jornada de formação médica.",
  },
  {
    title: "Ciclo Clínico",
    identifier: TrailEnum.CLINICAL,
    subtitle: "3º, 4º ano",
    description:
      "Para você que está na metade da faculdade de medicina (3o ou 4o ano) e está cansado de esquecer os conteúdos que estudou nos semestres passados e quer aprender e fixar de verdade os conteúdos desse ciclo tão importante.",
  },
  {
    title: "Internato",
    identifier: TrailEnum.BOARDING,
    subtitle: "5º, 6º ano",
    description:
      "Para você que está na reta final da faculdade e não tem certeza se sabe o básico para ser um bom médico e está perdido nos estudos para a residência médica.",
  },
];

export const TrailSelection = () => {
  const { changeTrail, trail } = useTrail();

  const handleSelect = useCallback(
    (trailIdentifier: TrailEnum) => {
      changeTrail(trailIdentifier);
    },
    [changeTrail]
  );

  return (
    <Container>
      <h2>
        Escolha uma trilha que
        <br />
        deseja estudar
      </h2>

      <main>
        {trails.map((trail) => (
          <TrailContainer
            key={`trail-${trail.identifier}`}
            onClick={() => handleSelect(trail.identifier)}
          >
            <header>
              <picture className={trail.identifier}>
                <Image
                  src="/images/medsimple-small-logo.png"
                  alt=""
                  width={34}
                  height={46}
                />
              </picture>

              <div>
                <strong>{trail.title}</strong>
                <span>{trail.subtitle}</span>
              </div>
            </header>

            <p>{trail.description}</p>

            <footer>
              <span>Escolher trilha</span>
            </footer>
          </TrailContainer>
        ))}
      </main>
    </Container>
  );
};
