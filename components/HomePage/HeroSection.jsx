import React from 'react';
import styles from '../../styles/HeroSection.module.css'

const HeroSection = () => {
    return (
      <>
        <div className={styles.heroWrapper}>
          <div className={styles.heroSection}>
            <h4 className={styles.heading}>
              Accountants and Advisors are Saving Hours on Reporting
            </h4>
            <h2 className={styles.title}>Automated Financials</h2>
            <h3 className={styles.subTitle}>
              The flexibility to customize any template.
            </h3>
            <button className={`btnprimary ${styles.btnFont}`}>Start My Free Trail</button>
            <p>No Credit Card Required</p>
          </div>
        </div>
      </>
    );
};

export default HeroSection;