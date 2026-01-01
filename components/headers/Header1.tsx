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
  const [isDarkLogo, setIsDarkLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // set initial value from <html color-scheme> or localStorage
    const updateFromScheme = () => {
      const scheme = document.documentElement.getAttribute("color-scheme") || (localStorage.getItem("color-scheme") as string) || "light";
      setIsDarkLogo(scheme === "dark");
    };

    updateFromScheme();

    // observe attribute changes to respond to the ThemeSwitcherButton toggles
    const observer = new MutationObserver(() => updateFromScheme());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["color-scheme"] });

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "color-scheme") updateFromScheme();
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <header id="header" className={`mxd-header ${isHidden ? "is-hidden" : ""}`}>
      {/* header logo */}
      <div className="mxd-header__logo loading__fade">
        <Link href={`/home-designer`} className="mxd-logo">
          {/* logo icon */}
          <Image
            src={isDarkLogo ? "/img/favicon/Epic header W.png" : "/img/favicon/Epic header B.png"}
            alt="Epic Studio Group logo"
            width={110}
            height={110}
            className="mxd-logo__image mxd-logo__image--large"
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

        {/* {(
          <AnimatedButton
            text="Launch My Podcast"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
            href="/"
          >
            <i className="ph-bold ph-arrow-up-right" />
          </AnimatedButton>
          
        )}

        {(
          <AnimatedButton
            text="I Need Post-Production"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
            href="/"
          >
            <i className="ph-bold ph-arrow-up-right" />
          </AnimatedButton>
        )} */}
        
      </div>
    </header>
  );
}
