import Link from "next/link";
import Image from "next/image";

import StackCards from "../animation/StackCards";
import { projects10 } from "@/data/projects.json";

export default function Portfolios1() {
  // Override images for the stacked cards (first three items)
  const stackImages = [
    "/img/avatars/Portfolio-Robert.png",
    "/img/avatars/Portfolio-Paco.png",
    "/img/avatars/Portfolio-Zen.png",
  ];

  return (
    <>
      {/* Section - Inner Page Headline Start */}
      {/* <div className="mxd-section mxd-section-inner-headline padding-headline-pre-stack"> */}
        {/* <div className="mxd-container grid-container"> */}
          {/* Block - Inner Page Headline Start */}
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
              </div>
            </div>
          </div>
          {/* Block - Inner Page Headline End */}
      {/* Section - Inner Page Headline End */}
      {/* Section - Projects Stacking Cards Start */}
      <div className="mxd-section padding-stacked-section">
        <div className="mxd-container grid-container">
          {/* Block - Projects Stacking Cards #01 Start */}
          <div className="mxd-block mxd-grid-item no-margin">
            <div className="content__block loading__fade">
              <StackCards stackName="projects-stack" className="stack-wrapper">
                {projects10.map((s, idx) => (
                  <Link
                    key={s.id}
                    className="mxd-projects-stack__inner justify-between"
                    href={`/project-details`}
                  >
                    <div className="mxd-projects-stack__image">
                      {/* Use each project's image; falls back to a placeholder if absent */}
                      <Image
                        alt={`${s.title} Preview`}
                        src={stackImages[idx] || s.image || "/img/avatars/Portfolio-Robert.png"}
                        width={1920}
                        height={1080}
                      />
                    </div>
                    <div className="mxd-projects-stack__tags">
                      {s.tags.map((t, i) => (
                        <span
                          key={i}
                          className="tag tag-default tag-outline-permanent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mxd-projects-stack__title no-margin">
                      <h2 className="permanent-light">{s.title}</h2>
                    </div>
                  </Link>
                ))}
              </StackCards>
            </div>
          </div>
          {/* Block - Projects Stacking Cards #01 End */}
        </div>
      </div>
      {/* Section - Projects Stacking Cards End */}
    </>
  );
}
