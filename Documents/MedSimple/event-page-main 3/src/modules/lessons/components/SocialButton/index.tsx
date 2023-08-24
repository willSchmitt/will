import { useMemo } from "react";
import { Container, SocialContainer } from "./styles";

import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";

type SocialMedia = "telegram" | "facebook";

type Props = {
  label: string;
  url: string;
  type: SocialMedia;
};

export const SocialButton = ({ label, url, type }: Props) => {
  const socialMedia = useMemo(() => {
    switch (type) {
      case "telegram":
        return {
          name: "Telegram",
          icon: <FaTelegramPlane />,
        };
      default:
        return {
          name: "Facebook",
          icon: <FaFacebookF />,
        };
    }
  }, [type]);

  return (
    <Container href={url} target="_blank">
      <span>{label}</span>

      <SocialContainer>
        <picture>{socialMedia.icon}</picture>
        <span>{socialMedia.name}</span>
      </SocialContainer>
    </Container>
  );
};
