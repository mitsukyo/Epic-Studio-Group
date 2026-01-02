import Footer2 from "@/components/footers/Footer2";

import About from "@/components/homes/About";
import Hero from "@/components/homes/Hero";
import MarqueeSlider from "@/components/homes/MarqueeSlider";
import Services from "@/components/homes/Services";
import { Metadata } from "next";
import AuthoritySlider from "@/components/homes/AuthoritySlider";
import Cta from "@/components/common/Cta";
import MarqueeSlider2 from "@/components/homes/MarqueeSlider2";
export const metadata: Metadata = {
  title:
    "Epic Studio Group - We Turn CEO-Authors into Media Brands",
  description:
    "Epic Studio Group - We Turn CEO-Authors into Media Brands",
};
export default function HomePage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <AuthoritySlider /> 
        <MarqueeSlider />
        <About />
        <Services />
        <MarqueeSlider2 />
        <Cta /> 
      </main>
      <Footer2 text="epicstudiogroup" />
    </>
  );
}
