// import React from 'react'
import './Home.css';
import styles from '../../style';
import { Hero, Stats, WhyArabic, Services,
    Cards, Testimonials, CTA, Footer, WhyKaleem }  from '../../components';

const Home = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Cards />
          <Stats />
          <WhyArabic />
          <Services />
          <WhyKaleem />
          <Testimonials />
        </div>
      </div>

      <CTA />
    </>
  )
}

export default Home