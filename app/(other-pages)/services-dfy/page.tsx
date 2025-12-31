import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/other-pages/service-DFY/Hero";
import ParallaxDivider from "@/components/other-pages/service-LYP/ParallaxDivider";
import Services from "@/components/other-pages/service-DFY/Services";
import { Metadata } from "next";
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
        {/* <ParallaxDivider />
        <Blogs />
        <Cta /> */}
      </main>
      <Footer2 />
    </>
  );
}
