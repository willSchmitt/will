import { Wrapper } from "@/components/Wrapper";
import { PlansPerpetuoContainer, TypePlans } from "./styles";
import { CardAssurance } from "@/modules/sales/components/Plans/CardAssurance";
import { CardPlans } from "./CardPlans";
import { usePerpetuo } from "../../contexts/PerpetuoContext";

export function PlansPerpetuo() {
  const { pageData } = usePerpetuo();
  return (
    <PlansPerpetuoContainer>
      <Wrapper>
        <header>
          <small>Escolha seu plano</small>
          <p>Inicie seus estudos com a melhor plataforma de ensino</p>
        </header>
        <TypePlans>
          <CardPlans
            data={{
              name: "Anual",
              description: "1 ano de assinatura",
              period: "12 meses",
              installmentPrice: "R$39,90",
              totalPrice: "R$399,80",
              url: "",
              proviUrl: "",
            }}
          />

          <CardPlans
            data={{
              name: "Bianual",
              description: "2 anos de assinatura",
              period: "24 meses",
              installmentPrice: "R$59,58",
              totalPrice: "R$597,00",
              url: "",
              proviUrl: "",
            }}
          />

          <CardAssurance />
        </TypePlans>
      </Wrapper>
    </PlansPerpetuoContainer>
  );
}
