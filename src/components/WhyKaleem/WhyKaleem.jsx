import './WhyKaleem.css'
import MainHeading from '../MainHeading/MainHeading'
import styles from '../../style'
import students from '../../assets/students.png'
import adults from '../../assets/adutls.png'
import childs from '../../assets/childs.png'
import { useTranslation } from 'react-i18next'


const WhyKaleem = () => {
  const [ t, i18n ] = useTranslation();

  return (
    <section className={`${styles.paddingY}`}>
      <MainHeading 
        properties = {{
          title: t('whyKaleemTitle'),
          subtitle: t('whyKaleemSubtitle')
        }}
      />
      <div className='grid lg:grid-cols-3 ss:grid-cols-2 xs:grid-col-1'>
        <div className='relative p-4'>
            <div className='min-h-[249px]'>
              <figure>
                <img src={students} alt="s" />
              </figure>
            </div>
            <div className='p-5 text-center absolute bottom-0 left-0 right-0'>
              <h2 className={`${styles.heading2} card-age`}>{t('whyKaleemType1')}</h2>
              {/* <p className={`${styles.paragraph} card-age-info`}>Develop language proficiency and confidence for exams, for studying abroad, or for fun</p> */}
            </div>
        </div>
        <div className='relative p-4'>
            <div className='min-h-[249px]'>
              <figure>
                <img src={adults} alt="s" />
              </figure>
            </div>
            <div className='p-5 text-center absolute bottom-0 left-0 right-0'>
              <h2 className={`${styles.heading2} card-age`}>{t('whyKaleemType2')}</h2>
              {/* <p className={`${styles.paragraph} card-age-info`}>Choose from over 60 languages and start learning for personal or professional growth</p> */}
            </div>
        </div>
        <div className='relative p-4'>
            <div className='min-h-[249px]'>
              <figure>
                <img src={childs} alt="s" />
              </figure>
            </div>
            <div className='p-5 text-center absolute bottom-0 left-0 right-0'>
              <h2 className={`${styles.heading2} card-age`}>{t('whyKaleemType3')}</h2>
              {/* <p className={`${styles.paragraph} card-age-info`}>Nurture your child’s language development, and provide a native learning environment with 1 on 1 teaching</p> */}
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhyKaleem