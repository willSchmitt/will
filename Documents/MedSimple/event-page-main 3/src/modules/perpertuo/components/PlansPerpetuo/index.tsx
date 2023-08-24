import { Wrapper } from "@/components/Wrapper";
import { PlansPerpetuoContainer, TypePlans } from "./styles";
import { CardAssurance } from "@/modules/sales/components/Plans/CardAssurance";
import { CardPlans } from "./CardPlans";

export function PlansPerpetuo() {
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
              installmentPrice: "R$20,00",
              totalPrice: "R$200,00",
              url: "",
              proviUrl: "",
            }}
          />

          <CardPlans
            data={{
              name: "Bianual",
              description: "2 anos de assinatura",
              period: "24 meses",
              installmentPrice: "R$20,00",
              totalPrice: "R$200,00",
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
