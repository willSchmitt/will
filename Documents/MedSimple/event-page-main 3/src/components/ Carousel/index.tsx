import Image from "next/image";
import { CarouselContainer, InfoCarousel, ItemCarousel } from "./styles";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const itens = [
  {
    id: "1",
    image: "/images/imagesPerpetuo/slide01.png",
    title: "Não é um cursinho de residência médica,",
    description:
      "mas os alunos que usam durante a faculdade de medicina chegam mais preparados no internato para aproveitar melhor um cursinho e até mesmo prestar a prova de residência médica.",
  },
  {
    id: "2",
    image: "/images/imagesPerpetuo/slide02.png",
    title: "Não é uma agenda Google",
    description:
      "mas os flashcards são programados para te ajudar a revisar conforme a curva do esquecimento, te fazendo lembrar mais, revisar na hora certa e não deixar a matéria acumular",
  },
  {
    id: "3",
    image: "/images/imagesPerpetuo/slide03.png",
    title: "Não é a Netflix",
    description:
      "mas você passa a fazer parte do Close Friends recebendo uma metralhadora de conteúdos no Instagram diariamente, além de pertencer a uma comunidade no Telegram com trocas de materiais, tira dúvidas e networking em pesquisa científica",
  },
  {
    id: "4",
    image: "/images/imagesPerpetuo/slide04.png",
    title: "Não é um compilado de resumos em pdf,",
    description:
      "mas muitos alunos relatam semanalmente encontrar questões de prova idênticas às que resolveram na plataforma MEDsimple",
  },
  {
    id: "5",
    image: "/images/imagesPerpetuo/slide05.png",
    title: "Não é um curso de medicina prática,",
    description:
      "mas os alunos relatam que a base teórica que eles adquirem aqui facilita o raciocínio clínico e, consequentemente, os atendimentos e respostas aos professores nas aulas práticas.",
  },
];

export function CarouselComponent() {
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "200px",
    centerMode: true,

    slidesToShow: 4,
    slidesToScroll: 5,

    autoplay: true,
    speed: 5000,
    autoplaySpeed: 400,

    cssEase: "linear",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesPerRow: 2,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {itens.map((item) => (
          <ItemCarousel key={item.id}>
            <Image src={item.image} alt="" width={340} height={340} />
            <InfoCarousel>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </InfoCarousel>
          </ItemCarousel>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
