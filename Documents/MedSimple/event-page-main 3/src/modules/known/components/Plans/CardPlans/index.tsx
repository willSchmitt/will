import Link from "next/link";
import {
  ButtonCash,
  ButtonInstallment,
  ButtonPayment,
  Container,
  InstallmentPrice,
  PriceContainer,
  Prices,
  Recommended,
  TotalPrice,
} from "./styles";

type Offer = {
  isRecommended?: boolean;
  name: string;
  description: string;
  period: string;
  installmentPrice: string;
  totalPrice: string;
  url: string;
  proviUrl?: string;
};

type Props = {
  data: Offer;
};

export function CardPlans({ data }: Props) {
  return (
    <Container isRecommended={data.isRecommended}>
      {data.isRecommended && <Recommended>Mais escolhido</Recommended>}
      <header>
        <div className="plan">
          <h3>{data.name}</h3>
          <small>{data.description}</small>
        </div>
        <span>{data.period}</span>
      </header>

      <main>
        <PriceContainer>
          <Prices>
            <InstallmentPrice>
              <small>R$</small>
              <strong>{data.installmentPrice}</strong>
              <span>/mês</span>
            </InstallmentPrice>

            <TotalPrice>
              <p>ou R$ {data.totalPrice} à vista</p>
            </TotalPrice>
          </Prices>
        </PriceContainer>

        <ButtonPayment>
          <a href={data?.url} target="_blank">
            <ButtonCash>Ir para pagamento</ButtonCash>
          </a>

          {data?.proviUrl && (
            <a href={data?.proviUrl} target="_blank">
              <ButtonInstallment>
                Parcelar em até 24x no boleto
              </ButtonInstallment>
            </a>
          )}
        </ButtonPayment>
      </main>

      <footer>
        {data?.proviUrl ? (
          <p>
            Cartão de crédito, boleto à vista, PIX, parcelamento no boleto em
            até 12x (Provi - sujeito à análise)
          </p>
        ) : (
          <p>Cartão de crédito, boleto à vista, e PIX.</p>
        )}
      </footer>
    </Container>
  );
}
