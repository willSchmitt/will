import { Wrapper } from "@/components/Wrapper";
import { Container, CountdownContainer, Time } from "./styles";
import ReactCountdown, { CountdownRenderProps } from "react-countdown";
import { useSalesPage } from "@/modules/sales/contexts/SalesPageContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const Countdown = () => {
  const { pageData } = useSalesPage();
  const isMobile = useMediaQuery("(max-width: 640px)");

  const renderCountdown = ({
    days,
    hours,
    minutes,
    seconds,
  }: CountdownRenderProps) => {
    return (
      <Container>
        <Wrapper>
          <h3>A última oportunidade de entrar com bônus termina em</h3>
          <CountdownContainer>
            <Time>
              <strong>{String(days).padStart(2, "0")}</strong>
              <small>DIAS</small>
            </Time>
            <Time>
              <strong>{String(hours).padStart(2, "0")}</strong>
              <small>HORAS</small>
            </Time>
            <Time>
              <strong>{String(minutes).padStart(2, "0")}</strong>
              <small>MIN</small>
            </Time>

            {!isMobile && (
              <Time>
                <strong>{String(seconds).padStart(2, "0")}</strong>
                <small>SEC</small>
              </Time>
            )}
          </CountdownContainer>
        </Wrapper>
      </Container>
    );
  };

  return <ReactCountdown date={pageData?.dateEnd} renderer={renderCountdown} />;
};

export default Countdown;
