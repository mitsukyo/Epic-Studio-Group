import Link from "next/link";
import Image from "next/image";

import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

export default function Cta() {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container">
        {/* Block - CTA Start */}
        <div className="mxd-block">
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container">
              {/* background */}
              <div className="mxd-promo__bg" />
              {/* caption */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  <span className="mxd-promo__icon">
                    <Image
                      alt="Icon"
                      src="/img/cta/cta_300x300.webp"
                      width={300}
                      height={300}
                    />
                  </span>
                  <RevealText
                    as="span"
                    className="mxd-promo__caption reveal-type"
                  >
                    Let&apos;s Talk About Your Podcast and Personal Brand
                  </RevealText>
                </p>

                <p className="mxd-promo__note_subheadline">
                  Whether you&apos;re launching from scratch or scaling an existing show, we&apos;ll help you build a podcast that compounds attention, trust, and opportunity.
                  Ideal for founders, CEOs, and authors ready to commit for at least 3–6 months and treat media as a serious asset, not a side project.
                </p>

                <div className="mxd-promo__controls anim-uni-in-up">
                  <AnimatedButton
                    text="Book a Call"
                    className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                    href={`/contact`}
                  >
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>

                  <p className="mxd-promo__note">
                    <small>15–20 minutes. No hard pitch. Just clarity on whether this is the right move for you right now.</small>
                  </p>
                </div>
              </div>
              {/* parallax images */}
              {/* <div className="mxd-promo__images">
                <Image
                  className="promo-image promo-image-1"
                  alt="Image"
                  src="/img/cta/cta_800x910.png"
                  width={800}
                  height={912}
                />
                <Image
                  className="promo-image promo-image-2"
                  alt="Image"
                  src="/img/cta/cta_600x601.png"
                  width={600}
                  height={601}
                />
              </div> */}
            </div>
          </div>
        </div>
        {/* Block - CTA End */}
      </div>
    </div>
  );
}
