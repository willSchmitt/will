import { Carousel } from "react-responsive-carousel";
import { useCallback, useMemo } from "react";
import { IndicatorButton } from "./styles";
import { useSalesPage } from "@/modules/sales/contexts/SalesPageContext";
import { TestimonialTypeEnum } from "@/entities/domains/testimonial";
import { v4 as uuid } from "uuid";
import { Container } from "./styles";
import Image from "next/image";
import { TestimonialItem } from "./TestimonialItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CustomIndicatorProps = {
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
  isSelected: boolean;
  index: number;
};

export function HotmartTestimonials() {
  const { testimonials } = useSalesPage();
  
  const renderIndicator = useCallback(
    ({ onClick, isSelected, index }: CustomIndicatorProps) => {
      return <IndicatorButton isSelected={isSelected} onClick={onClick} />;
    },
    []
  );

  const hotmartTestimonials = useMemo(() => {
    return testimonials.filter(
      (testimonial) => testimonial.type === TestimonialTypeEnum.HOTMART
    );
  }, [testimonials]);

  return (
    <Container>
      <Image src="/icons/aspas.svg" alt="" width={28} height={22} />

      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch
        interval={4000}
        showStatus={false}
        showArrows={false}
        renderIndicator={(onClickHandler, isSelected, index) =>
          renderIndicator({ onClick: onClickHandler, isSelected, index })
        }
      >
        {hotmartTestimonials.map((testimonial) => (
          <TestimonialItem
            key={uuid()}
            description={testimonial.description}
            name={testimonial.name}
          />
        ))}
      </Carousel>
    </Container>
  );
}
