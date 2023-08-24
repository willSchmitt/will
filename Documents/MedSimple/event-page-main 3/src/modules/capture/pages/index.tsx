import Footer from "@/modules/sales/components/Footer";
import { Ebook } from "../components/Ebook";
import { HeaderCapture } from "../components/Header";
import { FooterCapture } from "../components/FooterCapture";
import { CapturePageContainer } from "./styles";

export function CapturePage() {
  return (
    <CapturePageContainer>
      <HeaderCapture />
      <Ebook />
      <FooterCapture />
    </CapturePageContainer>
  );
}
