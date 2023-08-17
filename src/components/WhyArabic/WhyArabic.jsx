import './WhyArabic.css'
// import {MainHeading} from '../index'
import { star, shield, send } from '../../assets'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next'
import styles from '../../style'
import { layout } from '../../style'

const FeatureCard = (props) => {
  return (
    <>
      <div className={`flex flex-row p-6 rounded-[20px] w-full mb-6 feature-card`}>
        <div className={`w-[64px] h[64px] rounded-full ml-3 ${styles.flexCenter} bg-dimBlue`}>
          <img src={props.properties.image} alt='icon' className='w-[50%] h-[50%] object-contain ' />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
          <h4 className='font-semibold text-white text-[18px] leading-[23px] mb-1' >
            {props.properties.title}
          </h4>
          <p className='font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{props.properties.content}</p>
        </div>
      </div>
    </>
  )
}

const WhyArabic = () => {

  const [ t, i18n ] = useTranslation();

  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{t('whyArTitle')} <br className='sm:block hidden' />
        {t('whyArSubtitle')}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-3`}>{t('whyArDetails')}</p>
        {/* <Button styles="mt-10" name={t('whyArBtn')} /> */}
        <a href="/books" className='mt-4 py-4 px-6 bg-blue-gradient text-[18px]
     font-medium text-primary outline-none'>{t('whyArBtn')}</a>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {/* {features.map((feature, index) => ( */}
          <FeatureCard 
            properties = {{
              image: star,
              title: t('whyArFeatureTitle1'),
              content: t('whyArFeatureContent1'),
            }}
          />
          <FeatureCard 
            properties = {{
              image: shield,
              title: t('whyArFeatureTitle2'),
              content: t('whyArFeatureContent2'),
            }}
          />
          <FeatureCard 
            properties = {{
              image: send,
              title: t('whyArFeatureTitle3'),
              content: t('whyArFeatureContent3'),
            }}
          />
        {/* ))} */}
      </div>
      {/* <MainHeading /> */}
    </section>
  )
}

export default WhyArabic
