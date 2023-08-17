import React from 'react'
import './GetStarted.css'
import styles from '../../style'
import { arrowUp } from '../../assets'
import { useTranslation } from 'react-i18next'


const GetStarted = () => {

  const [ t, i18n ] = useTranslation();

  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexCenter} flex-row`}>
          <p className='font-medium text-[23px] leading-[28px] mr-2'>
            {/* <a href='#' className='text-gradient'>{t('heroBtn1')}</a> */}
            <a href='#contact' className='text-gradient'>{t('heroBtn1')}</a>
          </p>
          <img src={arrowUp} alt='arrow' className='h-[23px] w-[23px] object-contain' />
        </div>
        <p className='font-medium text-[23px] leading-[23px]'>
            {/* <a href='#' className='text-gradient'>{t('heroBtn2')}</a> */}
            <a href='#contact' className='text-gradient'>{t('heroBtn2')}</a>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
