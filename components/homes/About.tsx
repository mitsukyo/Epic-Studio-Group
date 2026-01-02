import Link from "next/link";
import Image from "next/image";

import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";

export default function About() {
  return (
    <div className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-l-container">
        {/* Block - About Description with Manifest Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-6 mxd-grid-item-l no-margin anim-uni-in-up">
                <div className="mxd-block__image">
                  <Image
                    alt="Photo"
                    src="/img/avatars/H_Karl_Taft_1.webp"
                    width={1400}
                    height={1400}
                  />
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item-l no-margin">
                <div className="mxd-block__content content-flex">
                  <div className="mxd-block__manifest">
                    <RevealText
                      as="p"
                      className="mxd-manifest mxd-manifest-l reveal-type"
                      style={{ fontSize: "3rem", lineHeight: "2", marginTop:"15rem" }} 
                    >
                      <span className="mxd-manifest__label">Meet Your Host</span>
                      <br />
                      <strong className="mxd-manifest__headline" style={{fontSize: "5rem", fontWeight:"bold", color:"var(--accent--light)", display:"block", marginTop:"0.5rem"}}>Karl Taft, Host of CEO Authors</strong>
                      <br />
                      <br />
                      <span style={{ fontSize: "2rem", lineHeight: "1.8", marginBottom: "1rem" }}> 
                      Karl Taft is the host of CEO Authors, our flagship podcast where founders, executives, and authors sit down for honest conversations about building companies, 
                      writing books, and turning their ideas into leverage. He brings curiosity, experience, and direct, no-fluff questions—designed to help guests share real stories 
                      and practical lessons, not just PR soundbites.
                      </span>
                    </RevealText>
                    <div className="mxd-manifest__controls" >
                      <AnimatedButton
                        text="About Karl Taft"
                        className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                        href={"https://www.linkedin.com/in/kaleotaft/"}
                        style={{marginRight: "2rem"}}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </AnimatedButton>
                      <AnimatedButton
                        text="Be a Guest on CEO Authors"
                        className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                        href={`https://calendly.com/getstarted-epicstudiogroup/let-s-talk-about-your-podcast`}
                      />
                    </div>
                  </div>
                  <div className="mxd-block__decoration anim-uni-in-up">
                    <Image
                      alt="Decoration"
                      src="/img/icons/96x96-decor-01.svg"
                      width={96}
                      height={96}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - About Description with Manifest End */}
      </div>
    </div>
  );
}
