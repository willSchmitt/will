import { useRouter } from "next/router";

type Props = {
  title: string;
  description?: string;
  imageUrl: string;
  pageUrl: string;
};

export const OgImage = ({ title, description, imageUrl, pageUrl }: Props) => {
  return (
    <>
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="maratona.medsimpleoficial.com.br" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
};
