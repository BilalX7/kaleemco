import './Stats.css'
import styles from '../../style'
import { stats } from '../../constants'
import MainHeading from '../MainHeading/MainHeading'
import { useTranslation } from 'react-i18next'


const Stats = () => {

  const [ t, i18n ] = useTranslation();
  36

  return (
    <>
      <section className={styles.paddingY}>
        <MainHeading 
          properties = {{
            title: t('statsTitle'),
            subtitle: t('statsSubtitle')
          }}
        />
        <div className={`ss:${styles.flexCenter} ss:flex-row ss:flex-wrap grid gap-5 sm:mb-20 mb-6 `}>
          {/* {stats.map((stat) => (
            <div key={stat.id} className={`flex-1 ${styles.flexCenter}  flex-col m-3`}>
              <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px]
              xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
              <p className='font-poppins font-normal xs:text-[20px] text-[10px]
              xs:leading-[26px] leading-[21px] text-gradient ml-3'>{stat.title}</p>
            </div>
          ))} */}
            <div className={`flex-1 ${styles.flexCenter}  flex-col m-3`}>
              <h4 className=' font-semibold xs:text-[40px] text-[30px]
              xs:leading-[53px] xs:text-center leading-[43px] text-white'>{t('statsValue1')}</h4>
              <p className=' font-normal xs:text-[20px] text-[14px]
              xs:leading-[26px] leading-[21px] text-gradient ml-3'>{t('statsTitle1')}</p>
            </div>
            <div className={`flex-1 ${styles.flexCenter}  flex-col m-3`}>
              <h4 className=' font-semibold xs:text-[40px] text-[30px]
              xs:leading-[53px] xs:text-center leading-[43px] text-white'>{t('statsValue2')}</h4>
              <p className=' font-normal xs:text-[20px] text-[14px]
              xs:leading-[26px] leading-[21px] text-gradient ml-3'>{t('statsTitle2')}</p>
            </div>
            <div className={`flex-1 ${styles.flexCenter}  flex-col m-3`}>
              <h4 className=' font-semibold xs:text-[40px] text-[30px]
              xs:leading-[53px] xs:text-center leading-[43px] text-white'>{t('statsValue3')}</h4>
              <p className=' font-normal xs:text-[20px] text-[14px]
              xs:leading-[26px] xs:text-center leading-[21px] text-gradient ml-3'>{t('statsTitle3')}</p>
            </div>
        </div> 
      </section>
    </>
  )
}

export default Stats
