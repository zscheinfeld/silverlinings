import { useState, useEffect } from "react";
import styles from "@/components/Topnav.module.css"

const Topnav = () => {

  const [activeNav, setActiveNav] = useState(0);

  const handleClick = () => {
    if (activeNav == 0){
        setActiveNav(1);
    }

    else{
        setActiveNav(0);
    }
    
  };

  useEffect(() => {
    console.log(activeNav)
  }, [activeNav]);

  return (
    <div className={styles.nav}>
        <div className={styles.navtop}>
            <button className={styles.left} onClick={() => handleClick()}>
            TABLE OF CONTENTS
            </button>
            <div className={styles.right}>
                <div className={styles.item}>
                INFORMATION
                </div>
                <div className={styles.item}>
                SILVER LININGS.BIO
                </div>
            </div>
        </div>

        <div className= {`${styles.navbottom} ${activeNav === 1 ? styles.show : styles.hide}`}>

        </div>
        
    </div>
  );
};

export default Topnav;
