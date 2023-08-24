import { useSalesPage } from "../../contexts/SalesPageContext";
import { CardAssurance } from "./CardAssurance";
import { CardBenefits } from "./CardBenefits";
import { CardPlans } from "./CardPlans";
import { Container, TitlePlans } from "./styles";
import { Wrapper } from "@/components/Wrapper";

export function Plans() {
  const { pageData } = useSalesPage();

  const { basic, standard } = pageData?.activePlan;

  return (
    <Container id="planos">
      <Wrapper>
        <TitlePlans>
          <small>Escolha seu plano</small>
          <h2>Inicie seus estudos com a melhor plataforma de ensino</h2>
        </TitlePlans>

        <main>
          <CardPlans
            data={{
              name: "Anual",
              description: "1 ano de assinatura",
              period: "12 meses",
              installmentPrice: basic.installmentPrice || "",
              totalPrice: basic.price || "",
              isRecommended: false,
              url: basic.url,
              proviUrl: basic.proviUrl,
            }}
          />

          <CardPlans
            data={{
              name: "Bianual",
              description: "2 anos de assinatura",
              period: "24 meses",
              installmentPrice: standard.installmentPrice || "",
              totalPrice: standard.price || "",
              isRecommended: true,
              url: standard.url,
              proviUrl: standard.proviUrl,
            }}
          />
          <CardAssurance />
        </main>

        {pageData.isEnabled && (
          <footer>
            <CardBenefits />
          </footer>
        )}
      </Wrapper>
    </Container>
  );
}
