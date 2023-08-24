import { useSalesPage } from "@/modules/sales/contexts/SalesPageContext";
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
              installmentPrice: '174,50' || "",
              totalPrice: '1748,40' || "",
              isRecommended: false,
              url: 'https://pay.hotmart.com/G37250429W?off=an6nazky',
              // proviUrl: basic.proviUrl,
            }}
          />

          <CardPlans
            data={{
              name: "Bianual",
              description: "2 anos de assinatura",
              period: "24 meses",
              installmentPrice: '199,31' || "",
              totalPrice: '1997,00' || "",
              isRecommended: true,
              url: 'https://pay.hotmart.com/G37250429W?off=tr7nx3ph&checkoutMode=10',
              // proviUrl: standard.proviUrl,
            }}
          />
          <CardAssurance />
        </main>

        <footer>
          <CardBenefits />
        </footer>
      </Wrapper>
    </Container>
  );
}
