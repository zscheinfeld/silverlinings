import { useState } from "react";
import styles from "@/components/TopNav.module.css";
import { Chapters } from "@/data/book";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNav = () => {
  const [activeNav, setActiveNav] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    if (activeNav === 0) {
      setActiveNav(1);
    } else {
      setActiveNav(0);
    }
  };

  return (
    <div className={styles.nav}>
      <div className={styles.navtop}>
        <button className={styles.left} onClick={() => handleClick()}>
          TABLE OF CONTENTS
        </button>
        <div className={styles.right}>
          <div className={styles.item}>INFORMATION</div>
          <div className={styles.item}>SILVER LININGS.BIO</div>
        </div>
      </div>

      <div
        className={`${styles.navbottom} ${activeNav === 1 ? styles.show : styles.hide}`}
      >
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
