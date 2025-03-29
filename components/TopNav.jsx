import { useRef, useState } from "react";
import styles from "@/components/TopNav.module.scss";
import { Chapters } from "@/data/book";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "@/icons/hamburger.svg";

const TopNav = ({ hidden, handleOpen, replace = false }) => {
  const [activeNav, setActiveNav] = useState(0);
  const timeout = useRef();
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

  return (
    <div
      className={`${styles.nav} ${activeNav === 1 && styles.expanded} ${hidden && styles.hidden}`}
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
        {Chapters.map((chapter) => {
          const href = {
            pathname: router.pathname,
            query: { chapter: chapter.slug },
          };
          return (
            <div className={styles.navitemscontainer} key={chapter.number}>
              <div className={styles.navchapteritem}>
                <div className={styles.chapnumber}>{chapter.number + ".0"}</div>
                <Link
                  onClick={() => setActive(!activeNav)}
                  href={href}
                  replace={replace}
                >
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
                        replace={replace}
                      >
                        {subchapter.header}
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
