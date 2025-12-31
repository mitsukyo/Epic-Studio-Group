import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/other-pages/launch-your-podcast/Hero";
import ParallaxDivider from "@/components/other-pages/launch-your-podcast/ParallaxDivider";
import Services from "@/components/other-pages/launch-your-podcast/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Launch Your Podcast || Epic Studio Group - We Turn CEO-Authors into Media Brands",
  description:
    "Launch Your Podcast || Epic Studio Group - We Turn CEO-Authors into Media Brands",
};
export default function ServicesPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
        <Services />
      </main>
      <Footer2 />
    </>
  );
}
