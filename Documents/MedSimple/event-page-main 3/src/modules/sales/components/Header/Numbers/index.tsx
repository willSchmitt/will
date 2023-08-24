import { Wrapper } from "@/components/Wrapper";
import { useSalesPage } from "@/modules/sales/contexts/SalesPageContext";
import { Container, Number } from "./styles";

import { v4 as uuid } from "uuid";

export function Numbers() {
  const { pageData } = useSalesPage();

  return (
    <Container>
      <Wrapper>
        {pageData?.numbers?.map((number) => (
          <Number key={uuid()}>
            <span>
              <strong>+</strong>
              {number.value}
            </span>
            <small>{number.label}</small>
          </Number>
        ))}
      </Wrapper>
    </Container>
  );
}
