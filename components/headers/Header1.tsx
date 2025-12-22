"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";
import Image from "next/image";

export default function Header1() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`mxd-header ${isHidden ? "is-hidden" : ""}`}>
      {/* header logo */}
      <div className="mxd-header__logo loading__fade">
        <Link href={`/home-main`} className="mxd-logo">
          {/* logo icon */}
          <Image
            src="/img/favicon/Epic header W.png"
            alt="Epic Studio Group logo"
            width={56}
            height={56}
            className="mxd-logo__image"
            priority
          />
          {/* logo text */}
          {/* <span className="mxd-logo__text">
            Epic Studio
            <br />
            Group
          </span> */}
        </Link>
      </div>
      {/* header controls */}
      <div className="mxd-header__controls loading__fade">
        <ThemeSwitcherButton />

        {pathname == "/" || pathname == "/preview" ? (
          <AnimatedButton
            text="Purchase"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
            href="https://themeforest.net/user/ib-themes/portfolio"
            target="_blank"
          >
            <i className="ph-bold ph-shopping-cart-simple" />
          </AnimatedButton>
        ) : (
          <AnimatedButton
            text="Launch My Podcast"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
            href="/contact"
          >
            <i className="ph-bold ph-arrow-up-right" />
          </AnimatedButton>
        )}
      </div>
    </header>
  );
}
