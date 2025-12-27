import Image from "next/image";

import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

export default function LaunchPodcast() {
  return (
    <>
      {/* Project Block - Challenge Description with H2 Title and Paragraph Start */}
      <div className="mxd-project__block no-margin">
        <div className="mxd-project-cards">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* item */}
              <div className="col-12 col-xl-5 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-right">
                <div className="mxd-project-cards__inner align-end bg-accent radius-m">
                  <Image
                    alt="Project Preview"
                    src="/img/offers/LYP 1.svg"
                    width={1200}
                    height={1200}
                  />
                </div>
              </div>
              {/* item */}
              <div className="col-12 col-xl-7 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-left">
                <div className="mxd-project-cards__inner align-end bg-base-tint radius-m">
                  <Image
                    alt="Project Preview"
                    src="/img/offers/LYP 2.svg"
                    width={1400}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-project__block pre-grid">
        <div className="container-fluid px-0">
          <div className="row gx-0 d-xl-flex justify-content-xl-center">
            <div className="col-12 col-xl-5 mxd-grid-item no-margin">
              <div className="mxd-project__subtitle">
                <RevealText as="h2" className="reveal-type anim-uni-in-up">
                  Launch 
                  <br />
                  Your Podcast
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph section-4-headline medium-text">
                  <p className="t-large t-bright anim-uni-in-up" style={{ color: "var(--accent)" }}>
                    Want to Launch Your Podcast? We&apos;ll handle everything else. 
                  </p>
                  <p className="anim-uni-in-up">
                  Starts at $1,300/month
                  </p>
                    <ul className="anim-uni-in-up" style={{ marginLeft: 20, listStyleType: 'square' }}>
                      <li>We design your show concept and angle</li>
                      <li>We create your podcast name, artwork, and structure</li>
                      <li>You record — we guide your remote setup</li>
                      <li>We edit the audio/video and clean up the sound</li>
                      <li>We write basic show notes and publish to major platforms</li>
                    </ul>
                    <div className="mxd-manifest__controls anim-uni-in-up" style={{ display: "flex", gap: "5rem", alignItems: "center"}}>
                      <AnimatedButton
                        text="Launch My Podcast"
                        className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                        href={`/`}
                      >
                      </AnimatedButton>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
