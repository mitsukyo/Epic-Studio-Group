import Footer2 from "@/components/footers/Footer2";

import About from "@/components/homes/home-designer/About";
import Hero from "@/components/homes/home-designer/Hero";
import MarqueeSlider from "@/components/homes/home-designer/MarqueeSlider";
import Services from "@/components/homes/home-designer/Services";
import { Metadata } from "next";
import AuthoritySlider from "@/components/homes/home-designer/AuthoritySlider";
export const metadata: Metadata = {
  title:
    "Epic Studio Group - We Turn CEO-Authors into Media Brands",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function HomeDesignerPage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <AuthoritySlider /> 
        <MarqueeSlider />
        <About />
        <Services />
      </main>
      <Footer2 text="alexwalker" />
    </>
  );
}
