/* eslint-disable react/no-children-prop */
import Image from "next/image";
import { Container, QuestionContainer, QuestionButton } from "./styles";
import { useState } from "react";
import { useSalesPage } from "@/modules/sales/contexts/SalesPageContext";

import { v4 as uuid } from "uuid";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export function Questions() {
  const { pageData } = useSalesPage();

  const [current, setCurrent] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (index === current) {
      setCurrent(null);
      return;
    }

    setCurrent(index);
  };

  return (
    <Container>
      {pageData.faq.map((faq, index) => (
        <QuestionContainer key={uuid()}>
          <aside>{String(index + 1).padStart(2, "0")}</aside>

          <main>
            <QuestionButton
              type="button"
              onClick={() => handleSelect(index)}
              isOpen={current === index}
            >
              <span>{faq.title}</span>

              {current === index ? (
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

            {current === index && (
              <article>
                <ReactMarkdown children={faq.description} />
              </article>
            )}
          </main>
        </QuestionContainer>
      ))}
    </Container>
  );
}
