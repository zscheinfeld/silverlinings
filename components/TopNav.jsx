import { useRef, useState } from "react";
import styles from "@/components/TopNav.module.scss";
import { Chapters } from "@/data/book";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNav = ({ handleOpen }) => {
  const [activeNav, setActiveNav] = useState(0);
  const [scrollable, setScrollable] = useState();
  const timeout = useRef();
  const router = useRouter();

  const handleClick = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    if (activeNav === 0) {
      handleOpen(true);
      setActiveNav(1);
      // Don't fire the event until after the transition.
      timeout.current = setTimeout(() => {
        setScrollable(true);
      }, 600);
    } else {
      setActiveNav(0);
      setScrollable(false);
      // Don't fire the event until after the transition.
      timeout.current = setTimeout(() => {
        handleOpen(false);
      }, 600);
    }
  };

  return (
    <div
      className={`${styles.nav} ${activeNav === 1 ? styles.show : styles.hide}`}
    >
      <div className={styles.navtop}>
        <button className={styles.left} onClick={() => handleClick()}>
          TABLE OF CONTENTS
        </button>
        <div className={styles.right}>
          <div className={styles.item}>INFORMATION</div>
          <div className={styles.item}>SILVER LININGS.BIO</div>
        </div>
      </div>

      <div className={`${styles.navbottom} ${scrollable && styles.scrollable}`}>
        <div className={styles.navbottomTitle}>Index</div>
        {Chapters.map((chapter) => {
          const href = {
            pathname: router.pathname,
            query: { ...router.query, chapter: chapter.slug },
          };
          return (
            <div className={styles.navitemscontainer} key={chapter.number}>
              <div className={styles.navchapteritem}>
                <div className={styles.chapnumber}>{chapter.number + ".0"}</div>
                <Link onClick={handleClick} href={href}>
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
                        onClick={handleClick}
                        href={{
                          ...href,
                          hash: subchapter.slug,
                        }}
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
