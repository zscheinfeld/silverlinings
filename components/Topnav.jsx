import { useState } from "react";
import styles from "@/components/Topnav.module.css";
import { Chapters } from "@/data/book";
import Link from "next/link";
import { useRouter } from "next/router";

const Topnav = () => {
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
        {Chapters.map((chapter) => {
          const href = {
            pathname: router.pathname,
            query: { ...router.query, chapter: chapter.slug },
          };
          return (
            <div key={chapter.number}>
              <Link onClick={handleClick} href={href}>
                {chapter.title}
              </Link>
              <ul>
                {chapter.subchapters.map((subchapter) => {
                  return (
                    <li key={subchapter.slug}>
                      <Link
                        onClick={handleClick}
                        href={{
                          ...href,
                          hash: subchapter.slug,
                        }}
                      >
                        {subchapter.header}
                      </Link>
                    </li>
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

export default Topnav;
