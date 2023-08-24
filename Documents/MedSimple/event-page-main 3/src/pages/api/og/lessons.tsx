/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const fontRegular = fetch(
  new URL(
    "../../../../public/fonts/DM_Sans/DMSans-Regular.ttf",
    import.meta.url
  ).toString()
).then((res) => res.arrayBuffer());

const fontMedium = fetch(
  new URL(
    "../../../../public/fonts/DM_Sans/DMSans-Medium.ttf",
    import.meta.url
  ).toString()
).then((res) => res.arrayBuffer());

const fontBold = fetch(
  new URL(
    "../../../../public/fonts/DM_Sans/DMSans-Bold.ttf",
    import.meta.url
  ).toString()
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const regular = await fontRegular;
  const medium = await fontMedium;
  const bold = await fontBold;

  const { searchParams } = req.nextUrl;

  const params = {
    title: searchParams.get("title") as string,
  };

  const { title } = params;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#4567DE",

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",

          padding: 30,

          width: "100%",
          height: "100%",
        }}
      >
        <img
          src="https://medsimple-backoffice.s3.sa-east-1.amazonaws.com/og_lessons_bg_1e1a13d834.png"
          alt="Maratona MEDsimple"
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",

            maxWidth: "60%",

            position: 'relative',
            zIndex: 1,
          }}
        >
          <img
            src="https://medsimple-backoffice.s3.sa-east-1.amazonaws.com/maratona_medsimple_3e1f895bd7.png"
            alt="Maratona MEDsimple"
            width={500}
            height={175}
            style={{
              marginBottom: 40,
              marginLeft: -5,
            }}
          />

          <strong
            style={{
              color: "#0B1A47",
              fontFamily: "DM Sans Medium",
              fontWeight: 500,
              fontSize: 40,
            }}
          >
            Aula disponível
          </strong>

          <h3
            style={{
              color: "#FFFFFF",
              fontFamily: "DM Sans Bold",
              fontSize: 120,
              lineHeight: 1,
              marginLeft: "-5px",
            }}
          >
            {title}
          </h3>

          <span
            style={{
              background: "#80DD48",
              borderRadius: 50,
              color: "#0B1A47",
              fontFamily: "DM Sans Bold",
              fontWeight: 500,
              fontSize: 40,
              textAlign: "center",

              alignSelf: "flex-start",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              padding: "20px 70px",
              marginTop: 50,
            }}
          >
            Assista agora
          </span>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "DM Sans Regular",
          data: regular,
          style: "normal",
        },
        {
          name: "DM Sans Medium",
          data: medium,
          style: "normal",
        },
        {
          name: "DM Sans Bold",
          data: bold,
          style: "normal",
        },
      ],
    }
  );
}
