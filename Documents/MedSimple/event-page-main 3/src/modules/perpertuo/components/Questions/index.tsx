import Image from "next/image";
import { QuestionContainer, QuestionButton } from "./styles";
import { useState } from "react";
import { usePerpetuo } from "../../contexts/PerpetuoContext";

export function Questions() {
  const [current, setCurrent] = useState<number | string>();
  const { pageData } = usePerpetuo();

  const handleSelect = (index: number) => {
    if (index === current) {
      setCurrent(null);
      return;
    }

    setCurrent(index);
  };

  return (
    <QuestionContainer>
      {pageData.faq.map((question) => (
        <>
          <main>
            <QuestionButton
              type="button"
              onClick={() => handleSelect(question.id)}
              isOpen={current === question.id}
            >
              <aside>{question.id}</aside>
              <span>{question.title}</span>

              {current === question.id ? (
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

            {current === question.id && (
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
