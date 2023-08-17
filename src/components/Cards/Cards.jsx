import './Cards.css'
import styles from '../../style'
import  feature1 from '../../assets/feature1.png'
import  feature2 from '../../assets/feature2.png'
import  feature3 from '../../assets/feature3.png'
import  feature4 from '../../assets/feature4.png'
import  feature5 from '../../assets/feature5.png'
import { useTranslation } from 'react-i18next'

import MainHeading from '../MainHeading/MainHeading'



const Cards = () => {

  const [ t, i18n ] = useTranslation();

  return (
    <section className={`features ${styles.paddingY}`}>
      {/* <div className='mb-3'>
        <h1 className='font-semibold xs:text-[48px] text-[40px]
        text-white text-center md:text-[42px]'>
          {t('cardsTitle')}
        </h1>
        <p className='subtitle-heading font-light text-sky-300 tracking-wider
        mb-[40px] w-3/4 mx-auto uppercase text-lg text-center'>
          {t('cardsSubtitle')}</p>
      </div> */}
      <MainHeading 
        properties = {{
          title: t('cardsTitle'),
          subtitle: t('cardsSubtitle')
        }}
      />
      <div className='mt-14 grid ss:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4 text-center'>
        <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature1} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1'>{t('cardsFeature1')}</h2>
        </div>
        <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature2} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1'>{t('cardsFeature2')}</h2>
        </div>
        <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature3} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1'>{t('cardsFeature3')}</h2>
        </div>
        <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature4} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1'>{t('cardsFeature4')}</h2>
        </div>
        {/* <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature5} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1 font-poppins'>Pay as you go</h2>
        </div> */}
        
      </div>
    </section>
  )
}

export default Cards
