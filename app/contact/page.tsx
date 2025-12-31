import BackgroundParallax from "@/components/animation/BackgroundParallax";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Cta from "@/components/common/Cta";
import Cta2 from "@/components/common/Cta2";
import Footer2 from "@/components/footers/Footer2";
import ContactForm from "@/components/other-pages/contact/ContactForm";
import Locations from "@/components/other-pages/contact/Locations";
import PageTitle from "@/components/other-pages/contact/PageTitle";
import Socials from "@/components/other-pages/contact/Socials";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Contact || Epic Studio Group - We Turn CEO-Authors into Media Brands",
  description:
    "Contact || Epic Studio Group - We Turn CEO-Authors into Media Brands",
};
export default function ContactPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <PageTitle />
        <ContactForm />
        
        <Cta2 />
      </main>
      <Footer2 />
    </>
  );
}
