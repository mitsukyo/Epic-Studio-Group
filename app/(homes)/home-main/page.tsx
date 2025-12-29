import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";

  import Approch from "@/components/common/Approch";
import Awards from "@/components/common/Awards";
import Portfolios1 from "@/components/portfolios/Portfolios1";

import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Marquee from "@/components/homes/home-1/Marquee";
import MarqueeSection2 from "@/components/homes/home-1/MarqueeSection2";
import MarqueeSlider from "@/components/common/MarqueeSlider";
import Partners from "@/components/homes/home-1/Partners";
import Projects from "@/components/homes/home-1/Projects";
import ServicesStack from "@/components/homes/home-1/ServicesStack";
import Testimonials from "@/components/homes/home-1/Testimonials";
import { Metadata } from "next";
import DetailsHero from "@/components/portfolios/DetailsHero";
import Feedback from "@/components/portfolios/Feedback";
import Host from "@/components/homes/home-1/Host";
import LaunchPodcast from "@/components/portfolios/LaunchPodcast";
import DoneForYou from "@/components/portfolios/DoneForYou";
export const metadata: Metadata = {
  title:
    "Main || Epic Group Studio - We turn CEO Authors into Media Brands",
  description:
    "Epic Group Studio - We turn CEO Authors into Media Brands",
};
export default function HomeMainPage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <Portfolios1 />
        {/* <Devider /> */}
        <Host />
        {/* <Facts /> */}
        <Marquee />
        <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content">
         <DetailsHero />
            <div className="mxd-section mxd-project overflow-hidden">
              <div className="mxd-container grid-container">
                <LaunchPodcast />
                <DoneForYou />
                {/* <Feedback /> */}
              </div>
            </div>
           <Cta /> 
        </main>

        {/* <Projects /> */}
        {/* <ServicesStack /> */}
        {/* <Approch />
        <MarqueeSlider />
        <Awards />
        <Testimonials /> */}
        <MarqueeSection2 />
        <Partners />
        <Blogs />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
