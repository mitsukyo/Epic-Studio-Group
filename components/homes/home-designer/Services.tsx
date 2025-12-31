import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="mxd-section overflow-hidden padding-stacked-pre-mtext">
      <div className="mxd-container grid-container">
        {/* Block - Services Cards #01 Start */}
        <div className="mxd-block">
          <div className="mxd-services-cards">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* item */}
                <div className="col-12 col-xl-7 mxd-services-cards__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-services-cards__inner align-end bg-base-opp radius-l padding-5x4">
                    <div className="mxd-services-cards__controls">
                      <Link
                        className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                        href={`/services-lyp`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </Link>
                    </div>
                    <div className="mxd-services-cards__title">
                      <p className="opposite anim-uni-in-up">Launch Your Podcast</p>
                    </div>
                    <div className="mxd-services-cards__info">
                      <div className="mxd-services-cards__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Podcast Strategy
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Brand Setup
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Remote Recording
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up" style={ { fontWeight: 700 }}>
                        You talk. We handle everything else.
                      </p>
                      <p className="t-opposite anim-uni-in-up" style={{ fontWeight: 500, marginTop: '0.5rem'}}>
                        Starts at $1,690/month
                      </p>
                      <ul className="t-opposite anim-uni-in-up" style={{ fontSize: '1.5rem', marginTop: '1rem', marginLeft: 20, listStyleType: 'square'}}>
                        <li>We design your show concept and angle</li>
                        <li>We create your podcast name, artwork, and structure</li>
                        <li>You record — we guide your remote setup</li>
                        <li>We edit the audio/video and clean up the sound</li>
                        <li>We write basic show notes and publish to major platforms</li>
                      </ul>
                      <div style={{ marginTop: '4rem' }}>
                        <Link
                          className="btn btn-anim btn-default btn-outline btn-accent slide-right-up anim-uni-in-up"
                          href={`/services-lyp`}
                        >
                          Launch My Podcast
                        </Link>
                      </div>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-1">
                      <Image
                        alt="Illustration"
                        src="/img/services/service_1_1.webp"
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 col-xl-5 mxd-services-cards__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards__inner align-end bg-accent radius-l padding-5x4">
                    <div className="mxd-services-cards__controls">
                      <Link
                        className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                        href={`/services-dfy`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </Link>
                    </div>
                    <div className="mxd-services-cards__title">
                      <p className="opposite anim-uni-in-up">
                        Done-For-You Post-Production
                      </p>
                    </div>
                    <div className="mxd-services-cards__info">
                      <div className="mxd-services-cards__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Content Repurposing
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Audio & Video Editing
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Social Clips
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up" style={ { fontWeight: 700 }}>
                        Already Have a Podcast?
                        <br />We become your post-production team.
                      </p>
                      <p className="t-opposite anim-uni-in-up" style={{ fontWeight: 500, marginTop: '0.5rem' }}>
                        Starts at $400/episode  
                      </p>
                      <ul className="t-opposite anim-uni-in-up " style={{ fontSize: '1.5rem', marginTop: '1rem', marginLeft: 20, listStyleType: 'square'}}>
                        <li>You send us raw recordings; we edit and polish</li>
                        <li>We cut clips and reels for LinkedIn, YouTube, TikTok, IG</li>
                        <li>We write episode titles, descriptions, and light show notes</li>
                        <li>We organize files and schedule uploads so you stay consistent</li>
                      </ul>
                      <div style={{ marginTop: '4rem' }}>
                        <Link
                          className="btn btn-anim btn-default btn-accent btn-post-production slide-right-up anim-uni-in-up"
                          href={`/services-dfy`}
                        >
                          Talk About Post-Production
                        </Link>
                      </div>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-2">
                      <Image
                        alt="Illustration"
                        src="/img/services/service_2_1.webp"
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Cards #01 End */}
      </div>
    </div>
  );
}
