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
                        href={`/launch-your-podcast`}
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
                          Setup
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Niche
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Record
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Publish
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                        90% of podcasts don't get past episode 3. That's 1.8 million who quit. Just think about that for a second. Your show may be in the Top 1% OF podcasts in the world already, simply because you kept going. 
                      </p>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-1">
                      <Image
                        alt="Illustration"
                        src="/img/services/service_1.webp"
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
                        href={`/done-for-you-post-production`}
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
                          Trailer
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Stinger
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Clips
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Monetize
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                        Yes, you already have a podcast. So my team will handle the editing. "Diary of a CEO" type of editing. With a trailer, stinger, and some clips. 
                      </p>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-2">
                      <Image
                        alt="Illustration"
                        src="/img/services/service_2.webp"
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
