import { Wrapper } from "@/components/Wrapper";
import { Container, Video, VideoTestimony } from "./styles";

import { VideoPlayer } from "@/components/VideoPlayer";
import { TestimonialTypeEnum } from "@/entities/domains/testimonial";
import { useMemo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSalesPage } from "../../contexts/SalesPageContext";
import { HotmartTestimonials } from "./HotmartTestimonials";

import { v4 as uuid } from "uuid";

export function Testimony() {
  const { testimonials } = useSalesPage();

  const videoTestimonials = useMemo(() => {
    return testimonials.filter(
      (testimonial) => testimonial.type === TestimonialTypeEnum.VIDEO
    );
  }, [testimonials]);

  return (
    <Container id="depoimentos">
      <Wrapper>
        <HotmartTestimonials />

        <VideoTestimony>
          {videoTestimonials.map((testimonial) => (
            <Video key={uuid()}>
              <header>
                <VideoPlayer videoUrl={testimonial?.youtubeUrl!} />
              </header>
              <strong>{testimonial.description}</strong>
              <small>{testimonial.name}</small>
            </Video>
          ))}
        </VideoTestimony>
      </Wrapper>
    </Container>
  );
}
