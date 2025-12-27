import RevealText from "../animation/RevealText";
import BackgroundParallax from "../animation/BackgroundParallax";
import AnimatedButton from "../animation/AnimatedButton";

export default function DoneForYou() {
  return (
    <>
    {/* Project Block - Parallax Fullwidth Image Start */}
      <div className="mxd-project__block mxd-grid-item no-margin">
        <div className="mxd-divider">
          <BackgroundParallax
            scale={1.5}
            className="mxd-divider__image prj-details-img-02 parallax-img"
          />
        </div>
      </div>
      {/* Project Block - Parallax Fullwidth Image End */}
      {/* Project Block - Solution Description with H2 Title and Paragraph Start */}
      <div className="mxd-project__block">
        <div className="container-fluid px-0">
          <div className="row gx-0 d-xl-flex justify-content-xl-center">
            <div className="col-12 col-xl-5 mxd-grid-item no-margin">
              <div className="mxd-project__subtitle">
                <RevealText as="h2" className="reveal-type anim-uni-in-up">
                  Done-For-You 
                  <br />
                  Post-Production
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph section-4-headline medium-text">
                  <p className="t-large t-bright anim-uni-in-up"style={{ color: "var(--accent)" }}>
                    Already Have a Podcast? We&apos;ll be your post-production team.
                  </p>
                  <p className="t-bright anim-uni-in-up">
                    Starts at $300/episode
                  </p>  
                  <ul className="anim-uni-in-up" style={{ marginLeft: 20, listStyleType: 'square' }}>
                      <li>You send us raw recordings; we edit and polish</li>
                      <li>We cut clips and reels for LinkedIn, YouTube, TikTok, IG</li>
                      <li>We write episode titles, descriptions, and light show notes</li>
                      <li>We organize files and schedule uploads so you stay consistent</li>
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
      {/* Project Block - Solution Description with H2 Title and Paragraph End */}
      
    </>
  );
}
