import { useRef, useEffect, useState } from "react";
import styles from "@/components/TopNav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "@/icons/hamburger.svg";
import Markdown from "./content/Markdown";

const TopNav = ({ chapters, handleOpen, isOpen, dark = false }) => {
  const [activeNav, setActiveNav] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeout = useRef(null);
  const router = useRouter();

  const setActive = (active) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    if (active && activeNav === 0) {
      handleOpen(true);
      setActiveNav(1);
      // Don't fire the event until after the transition.
    }
    if (!active && activeNav === 1) {
      setActiveNav(0);
      // Don't fire the event until after the transition.
      timeout.current = setTimeout(() => {
        handleOpen(false);
      }, 600);
    }
  };

  useEffect(() => {
    // 6. Handle Nav Visibility on Scroll
    let lastScrollY = window.scrollY; // Track scroll position

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 56) {
        // User is scrolling down, hide nav
        setIsScrolled(true);
      } else {
        // User is scrolling up, show nav
        setIsScrolled(false);
      }

      if (currentScrollY === 0) {
        // Show nav only when scrolled to the very top
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isVisible = isOpen || !isScrolled;

  return (
    <div
      className={`${styles.nav} ${activeNav === 1 && styles.expanded} ${!isVisible && styles.hidden} ${dark && styles.dark}`}
    >
      <div className={styles.navtop}>
        <button className={styles.left} onClick={() => setActive(!activeNav)}>
          <span className={styles.text}>TABLE OF CONTENTS</span>
          <div className={styles.icon_wrapper}>
            <Hamburger />
          </div>
        </button>
        <div className={styles.right}>
          <Link
            href={{
              pathname: router.pathname,
              query: { chapter: "about" },
            }}
            className={`${styles.about}`}
            onClick={() => setActive(false)}
          >
            ABOUT
          </Link>
          <div>SILVERLININGS.BIO</div>
        </div>
      </div>

      <div className={`${styles.navbottom}`}>
        <div className={styles.navbottomTitle}>Index</div>
        {chapters.slice(1, 4).map((chapter) => {
          const href = {
            pathname: router.pathname,
            query: { chapter: chapter.slug },
          };
          return (
            <div className={styles.navitemscontainer} key={chapter.number}>
              <div className={styles.navchapteritem}>
                <div className={styles.chapnumber}>{chapter.number + ".0"}</div>
                <Link onClick={() => setActive(!activeNav)} href={href}>
                  {chapter.title}
                </Link>
              </div>
              <ul>
                {chapter.subchapters.map((subchapter) => {
                  return (
                    <ol className={styles.navitem} key={subchapter.slug}>
                      <div className={styles.subchapnumber}>
                        {subchapter.slug.replace("-", ".")}
                      </div>
                      <Link
                        onClick={() => setActive(!activeNav)}
                        href={{
                          ...href,
                          query: {
                            chapter: chapter.slug,
                            subchapter: subchapter.slug,
                          },
                        }}
                      >
                        <Markdown>{subchapter.header.split(">")[0]}</Markdown>
                      </Link>
                    </ol>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopNav;
