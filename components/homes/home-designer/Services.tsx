import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="mxd-section overflow-hidden">
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
                        href={`/services`}
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
                      <p className="t-opposite anim-uni-in-up">
                        You talk. We handle everything else.
                      </p>
                      <p className="t-opposite anim-uni-in-up" style={{ fontWeight: 700, marginTop: '0.5rem', color: 'var(--accent--light)' }}>
                        Starts at $1,300/month
                      </p>
                      <ul className="mxd-list anim-uni-in-up" style={{ marginTop: '1rem', color: 'var(--text--light)', marginLeft: 20, listStyleType: 'square'}}>
                        <li>We design your show concept and angle</li>
                        <li>We create your podcast name, artwork, and structure</li>
                        <li>You record — we guide your remote setup</li>
                        <li>We edit the audio/video and clean up the sound</li>
                        <li>We write basic show notes and publish to major platforms</li>
                      </ul>
                      <div style={{ marginTop: '1.25rem' }}>
                        <Link
                          className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                          href={`/services/launch-podcast`}
                        >
                          Launch My Podcast
                        </Link>
                      </div>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-1">
                      <Image
                        alt="Illustration"
                        src="/img/cta/cta_800x800.png"
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
                        href={`/services`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </Link>
                    </div>
                    <div className="mxd-services-cards__title">
                      <p className="opposite anim-uni-in-up">
                        Creative development
                      </p>
                    </div>
                    <div className="mxd-services-cards__info">
                      <div className="mxd-services-cards__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Frontend
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Interactions
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Backend
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Mobile Apps
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                        We build high-performance websites and applications
                        using modern technologies. Our solutions are designed to
                        be scalable and functional for optimal performance.
                      </p>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-2">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/800x800_service-image-02.webp"
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </div>
                {/* item - Done-For-You Post-Production */}
                <div className="col-12 col-xl-5 mxd-services-cards__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards__inner align-end bg-base-tint radius-l padding-5x4">
                    <div className="mxd-services-cards__controls">
                      <Link
                        className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                        href={`/services`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </Link>
                    </div>
                    <div className="mxd-services-cards__title">
                      <p className="opposite anim-uni-in-up">Already Have a Podcast?</p>
                    </div>
                    <div className="mxd-services-cards__info">
                      <p className="t-opposite anim-uni-in-up">We become your post-production team.</p>
                      <p className="t-opposite anim-uni-in-up" style={{ fontWeight: 700, marginTop: '0.5rem' }}>
                        Starts at $300/episode
                      </p>
                      <ul className="mxd-list anim-uni-in-up" style={{ marginTop: '1rem' }}>
                        <li>You send us raw recordings; we edit and polish</li>
                        <li>We cut clips and reels for LinkedIn, YouTube, TikTok, IG</li>
                        <li>We write episode titles, descriptions, and light show notes</li>
                        <li>We organize files and schedule uploads so you stay consistent</li>
                      </ul>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-2">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/800x800_service-image-06.webp"
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 mxd-services-cards__item mxd-grid-item anim-uni-scale-in">
                  <div className="mxd-services-cards__inner justify-between bg-base-tint radius-l padding-5x4">
                    <div className="mxd-services-cards__controls">
                      <Link
                        className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                        href={`/services`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </Link>
                    </div>
                    <div className="mxd-services-cards__title width-60">
                      <p className="anim-uni-in-up">
                        Digital marketing solutions
                      </p>
                    </div>
                    <div className="mxd-services-cards__info width-60">
                      <div className="mxd-services-cards__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Strategy
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Social media
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          SEO
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Optimization
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Campaigns
                        </span>
                      </div>
                      <p className="anim-uni-in-up">
                        SEO and content marketing, social media management and
                        paid campaigns - we help you reach and engage your
                        target audience effectively.
                      </p>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-3">
                      <Image
                        className="image-1"
                        alt="Illustration"
                        src="/img/illustrations/800x800_service-image-03.webp"
                        width={800}
                        height={800}
                      />
                      <Image
                        className="image-2"
                        alt="Illustration"
                        src="/img/illustrations/800x800_service-image-03.webp"
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 col-xl-5 mxd-services-cards__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-services-cards__inner justify-end bg-base-opp radius-l padding-5x4">
                    <div className="mxd-services-cards__controls">
                      <Link
                        className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                        href={`/services`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </Link>
                    </div>
                    <div className="mxd-services-cards__title">
                      <p className="opposite anim-uni-in-up">
                        Brand
                        <br />
                        identity
                      </p>
                    </div>
                    <div className="mxd-services-cards__info">
                      <div className="mxd-services-cards__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Brand strategy
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Logo design
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Guidelines
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Rebranding
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                        From logo design to comprehensive brand strategies, we
                        ensure your business stands out with a unique visual
                        identity and consistent messaging across all
                        touchpoints.
                      </p>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-4">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/800x800_service-image-04.webp"
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 col-xl-7 mxd-services-cards__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards__inner justify-between bg-accent radius-l padding-5x4">
                    <div className="mxd-services-cards__controls">
                      <Link
                        className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                        href={`/services`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </Link>
                    </div>
                    <div className="mxd-services-cards__title width-70">
                      <p className="opposite anim-uni-in-up">
                        Long-lasting
                        <br />
                        support
                      </p>
                    </div>
                    <div className="mxd-services-cards__info width-70">
                      <div className="mxd-services-cards__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          E-Commerce
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Maintenance
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Support
                        </span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                        We take the time to understand your unique needs and
                        create tailored design solutions to help you make an
                        impact.
                      </p>
                    </div>
                    <div className="mxd-services-cards__image mxd-services-cards-image-5">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/800x800_service-image-05.webp"
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
