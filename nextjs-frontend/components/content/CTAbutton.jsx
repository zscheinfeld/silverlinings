import styles from "./CTAbutton.module.scss";

const CTAbutton = ({ label, url }) => {
    return (
      <div className={styles.cta}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </div>
    );
  };
  

export default CTAbutton;