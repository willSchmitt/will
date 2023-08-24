import Image from "next/image";
import { QuestionContainer, QuestionButton } from "./styles";
import { useState } from "react";

export function Questions() {
  const [current, setCurrent] = useState<number | string>();
  const faq = [
    {
      index: "01",
      title: "Quais são os preços da Fuselab?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet varius erat, ac sollicitudin felis volutpat vel. Curabitur posuere eros eget quam fermentum suscipit. Morbi ut viverra metus. Donec mollis auctor tellus, in scelerisque felis. Nullam tempus, nunc in porttitor volutpat, leo lorem lobortis metus, id porta diam sem vitae sem. Nunc vitae neque at risus eleifend posuere efficitur placerat nisi. Nam posuere dapibus accumsan.",
    },
    {
      index: "02",
      title: "Quais tecnologias vocês utilizam?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet varius erat, ac sollicitudin felis volutpat vel. Curabitur posuere eros eget quam fermentum suscipit. Morbi ut viverra metus. Donec mollis auctor tellus, in scelerisque felis. Nullam tempus, nunc in porttitor volutpat, leo lorem lobortis metus, id porta diam sem vitae sem. Nunc vitae neque at risus eleifend posuere efficitur placerat nisi. Nam posuere dapibus accumsan.",
    },
    {
      index: "03",
      title: "Em quanto tempo vocês podem assumir um projeto?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet varius erat, ac sollicitudin felis volutpat vel. Curabitur posuere eros eget quam fermentum suscipit. Morbi ut viverra metus. Donec mollis auctor tellus, in scelerisque felis. Nullam tempus, nunc in porttitor volutpat, leo lorem lobortis metus, id porta diam sem vitae sem. Nunc vitae neque at risus eleifend posuere efficitur placerat nisi. Nam posuere dapibus accumsan.",
    },
    {
      index: "04",
      title: "Quanto tempo leva para entregar um projeto?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet varius erat, ac sollicitudin felis volutpat vel. Curabitur posuere eros eget quam fermentum suscipit. Morbi ut viverra metus. Donec mollis auctor tellus, in scelerisque felis. Nullam tempus, nunc in porttitor volutpat, leo lorem lobortis metus, id porta diam sem vitae sem. Nunc vitae neque at risus eleifend posuere efficitur placerat nisi. Nam posuere dapibus accumsan.",
    },
  ];

  const handleSelect = (index: number) => {
    if (index === current) {
      setCurrent(null);
      return;
    }

    setCurrent(index);
  };

  return (
    <QuestionContainer>
      {faq.map((question) => (
        <>
          <main>
            <QuestionButton
              type="button"
              onClick={() => handleSelect(question.index)}
              isOpen={current === question.index}
            >
              <aside>{question.index}</aside>
              <span>{question.title}</span>

              {current === question.index ? (
                <Image
                  src="/icons/minus.svg"
                  alt="Expandir"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/icons/plus.svg"
                  alt="Expandir"
                  width={24}
                  height={24}
                />
              )}
            </QuestionButton>

            {current === question.index && (
              <article>
                <small>{question.description}</small>
              </article>
            )}
            <div className="line"></div>
          </main>
        </>
      ))}
    </QuestionContainer>
  );
}
