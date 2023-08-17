// import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import './Testimonials.css'
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from '../../style';
// import FeedBackCard from './FeedBackCard';
import { quotes } from '../../assets';
import { people01 } from '../../assets';
import lebanon  from '../../assets/lebanon.png';
import greece  from '../../assets/greece.png';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import { useTranslation } from 'react-i18next'


const Testimonials = () => {
  const [ t, i18n ] = useTranslation();

  // const [width, setwidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  // }, []);

  return (
    <section className={`${styles.paddingY}  `}>
      <MainHeading 
        properties = {{
          title: t('testimonialsTitle'),
          subtitle: t('testimonialsSubtitle'),
        }}
      />
      {/* <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
          <motion.div
            drag="x"
            dragConstraints={{right: 0, left: -width}}
            className='inner-carousel flex sm:justify-start justify-center w-full feedback-container
            relative z-[1]'
          >
          <motion.div className='item flex justify-between flex-col px-10 py-12 rounded-[20px]
           min-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img src={quotes} alt='double-quotes' className='w-[42px] h-[27px] object-contain' />
            <p className='font-poppins font-normal text-[18px]
             leading-[32px] text-white my-10 '>
              Hanaa started teaching my three kids 5 years ago. Back then my oldest was 11 my son was 8 and my youngest
               was 4 . She has a way with  kids that makes them like arabic. My youngest had speech delay and
                difficulties in learning, Hanaa would play with her arabic games and make the lesson fun.
             </p>
            <div className='flex flex-row'>
              <img src={lebanon} alt='people' className='w-[48px] h-[48px] rounded-full' />
              <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-semibold text-[20px]
             leading-[32px] text-white'>Diane Jabbour</h4>
                <p className='font-poppins font-normal text-[16px]
             leading-[24px] text-dimWhite'>From Lebanon</p>
              </div>
            </div>
          </motion.div>
          <motion.div className='item flex justify-between flex-col px-10 py-12 rounded-[20px]
           min-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img src={quotes} alt='double-quotes' className='w-[42px] h-[27px] object-contain' />
            <p className='font-poppins font-normal text-[18px]
             leading-[32px] text-white my-10'>
              Thanks and appreciation to Kaleem for their tremendous efforts in reviewing my books 
              Lines from the expanse of myself.! and The Specter of Time published by Dar Sayr Al-Mashreq.
              Kaleem has meticulously reviewed dozens of articles published under my name in Al-Nahar 
              newspaper and various electronic media outlets.
             </p>
            <div className='flex flex-row'>
              <img src={lebanon} alt='people' className='w-[48px] h-[48px] rounded-full' />
              <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-semibold text-[20px]
             leading-[32px] text-white'>Wissam Eid</h4>
                <p className='font-poppins font-normal text-[16px]
             leading-[24px] text-dimWhite'>From Lebanon</p>
              </div>
            </div>
          </motion.div>
          <motion.div className='item flex justify-between flex-col px-10 py-12 rounded-[20px]
           min-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img src={quotes} alt='double-quotes' className='w-[42px] h-[27px] object-contain' />
            <p className='font-poppins font-normal text-[18px]
             leading-[32px] text-white my-10'>Hana has been and continues to be an amazing teacher to my son Sam throughout the past years for private and online lessons. Her lessons are fun and educational at the same time, and she has a gentle approach that always leaves my son excited for the next lesson. We are very happy with the level of reading and writing that Sam has achieved thanks to her efforts.</p>
            <div className='flex flex-row'>
              <img src={greece} alt='people' className='w-[48px] h-[48px] rounded-full' />
              <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-semibold text-[20px]
             leading-[32px] text-white'>Tala Rayya</h4>
                <p className='font-poppins font-normal text-[16px]
             leading-[24px] text-dimWhite'>From Greece</p>
              </div>
            </div>
          </motion.div>
      
        </motion.div>
      </motion.div> */}
      <div  className='carousel grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1'>
          <div className='item flex justify-between flex-col px-10 py-12 rounded-[20px]
           min-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img src={quotes} alt='double-quotes' className='w-[42px] h-[27px] object-contain' />
            <p className=' font-normal text-[18px]
             leading-[32px] text-white my-10 '>
              {t('feedback1')}
             </p>
            <div className='flex flex-row'>
              <img src={lebanon} alt='people' className='w-[48px] ml-3 h-[48px] rounded-full' />
              <div className='flex flex-col ml-4'> 
                <h4 className=' font-semibold text-[20px]
             leading-[32px] text-white'>{t('feedback1Name')}</h4>
                <p className=' font-normal text-[16px]
             leading-[24px] text-dimWhite'>{t('feedback1Country')}</p>
              </div>
            </div>
          </div>
          <div className='item flex justify-between flex-col px-10 py-12 rounded-[20px]
           min-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img src={quotes} alt='double-quotes' className='w-[42px] ml-3 h-[27px] object-contain' />
            <p className=' font-normal text-[18px]
             leading-[32px] text-white my-10'>
              {t('feedback2')}
             </p>
            <div className='flex flex-row'>
              <img src={lebanon} alt='people' className='w-[48px] h-[48px] ml-3 rounded-full' />
              <div className='flex flex-col ml-4'>
                <h4 className=' font-semibold text-[20px]
             leading-[32px] text-white'>{t('feedback2Name')}</h4>
                <p className=' font-normal text-[16px]
             leading-[24px] text-dimWhite'>{t('feedback2Country')}</p>
              </div>
            </div>
          </div>
          <div className='item flex justify-between flex-col px-10 py-12 rounded-[20px]
           min-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img src={quotes} alt='double-quotes' className='w-[42px] h-[27px] object-contain' />
            <p className='font-normal text-[18px]
             leading-[32px] text-white my-10'>{t('feedback3')}</p>
            <div className='flex flex-row'>
              <img src={greece} alt='people' className='w-[48px] ml-3 h-[48px] rounded-full' />
              <div className='flex flex-col ml-4'>
                <h4 className='font-semibold text-[20px]
             leading-[32px] text-white'>{t('feedback3Name')}</h4>
                <p className='font-normal text-[16px]
             leading-[24px] text-dimWhite'>{t('feedback3Country')}</p>
              </div>
            </div>
          </div>
          <div className='item flex justify-between flex-col px-10 py-12 rounded-[20px]
           min-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img src={quotes} alt='double-quotes' className='w-[42px] h-[27px] object-contain' />
            <p className='font-normal text-[18px]
             leading-[32px] text-white my-10'>{t('feedback4')}</p>
            <div className='flex flex-row'>
              <img src={lebanon} alt='people' className='w-[48px] ml-3 h-[48px] rounded-full' />
              <div className='flex flex-col ml-4'>
                <h4 className='font-semibold text-[20px]
             leading-[32px] text-white'>{t('feedback4Name')}</h4>
                <p className='font-normal text-[16px]
             leading-[24px] text-dimWhite'>{t('feedback4Country')}</p>
              </div>
            </div>
          </div>
      </div>
      <ScrollToTopButton className="scrollToTop" threshold={1000} />
    </section>
  )
}

export default Testimonials
