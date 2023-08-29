import { Wrapper } from "@/components/Wrapper";
import {
  AboutContainer,
  TextVideo,
  TextSection,
  VideoText,
  VideoAbout,
} from "./styles";
import { usePerpetuo } from "../../contexts/PerpetuoContext";
import { VideoPlayer } from "@/components/VideoPlayer";

export function AboutPerpetuo() {
  const { pageData } = usePerpetuo();

  return (
    <AboutContainer>
      <Wrapper>
        <h2>O que os mediciners estão fofocando sobre a MEDsimple por aí...</h2>
        {pageData.testimonials.map((testimonial) => (
          <>
            <section>
              <VideoText>
                <VideoAbout>
                  <VideoPlayer
                    videoUrl={`https://www.youtube.com/embed/${testimonial.videoTestimonies}`}
                  />
                </VideoAbout>
                <TextSection>
                  <span>{testimonial.title}</span>
                  <p>{testimonial.description}</p>
                </TextSection>
              </VideoText>
            </section>
          </>
        ))}
      </Wrapper>
    </AboutContainer>
  );
}
