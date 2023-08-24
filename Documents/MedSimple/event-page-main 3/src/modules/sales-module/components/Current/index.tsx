import { Wrapper } from "@/components/Wrapper";
import {
  Bonus,
  BonusBox,
  CardBonus,
  CurrentContainer,
  Currents,
  DescriptionCurse,
  Descriptions,
} from "./styles";
import { ButtonSalesModule } from "@/components/ButtonSalesModule";
import Image from "next/image";

export function Current() {
  return (
    <CurrentContainer>
      <Wrapper>
        <Currents>
          <section>
            <h2>Esse curso é pra você que:</h2>
            <DescriptionCurse>
              <Descriptions>
                <picture>😎</picture>
                <small>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s.
                </small>
              </Descriptions>

              <Descriptions>
                <picture>😏</picture>
                <small>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s.
                </small>
              </Descriptions>

              <Descriptions>
                <picture>😏</picture>
                <small>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s.
                </small>
              </Descriptions>

              <Descriptions>
                <picture>😁</picture>
                <small>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s.
                </small>
              </Descriptions>
            </DescriptionCurse>
          </section>
          <ButtonSalesModule />
        </Currents>
        <Bonus>
          <h2>Você vai ter acesso a bônus exclusivos:</h2>
          <BonusBox>
            <CardBonus>
              <Image
                src="/images/medicine-students.png"
                alt=""
                width={340}
                height={340}
              />
              <section>
                <small>Lorem Ipsum has been the industrys standard</small>
                <p>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </section>
            </CardBonus>

            <CardBonus>
              <Image
                src="/images/medicine-students.png"
                alt=""
                width={340}
                height={340}
              />
              <section>
                <small>Lorem Ipsum has been the industrys standard</small>
                <p>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </section>
            </CardBonus>

            <CardBonus>
              <Image
                src="/images/medicine-students.png"
                alt=""
                width={340}
                height={340}
              />
              <section>
                <small>Lorem Ipsum has been the industrys standard</small>
                <p>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </section>
            </CardBonus>

            <CardBonus>
              <Image
                src="/images/medicine-students.png"
                alt=""
                width={340}
                height={340}
              />
              <section>
                <small>Lorem Ipsum has been the industrys standard</small>
                <p>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </section>
            </CardBonus>
          </BonusBox>
        </Bonus>
      </Wrapper>
    </CurrentContainer>
  );
}
