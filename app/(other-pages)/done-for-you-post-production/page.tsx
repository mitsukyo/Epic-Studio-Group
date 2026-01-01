import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/other-pages/done-for-you-post-production/Hero";
import Services from "@/components/other-pages/done-for-you-post-production/Services";
import { Metadata } from "next";
import Cta2 from "@/components/common/Cta2";
import ParallaxDivider from "@/components/other-pages/done-for-you-post-production/ParallaxDivider"
export const metadata: Metadata = {
  title:
    "Done-For-You Post-Production || Epic Studio Group - We Turn CEO-Authors into Media Brands",
  description:
    "Done-For-You Post-Production || Epic Studio Group - We Turn CEO-Authors into Media Brands",
};
export default function Services2Page() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
        <Services />
        <ParallaxDivider />
        <Cta2 />
      </main>
      <Footer2 />
    </>
  );
}
