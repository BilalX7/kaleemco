import './Hero.css'
import styles from '../../style'
import { discount, robot } from '../../assets'
import mainhero2 from './mainhero2.png'
import GetStarted from '../GetStarted/GetStarted'
// import { t } from 'i18next'
import { useTranslation } from 'react-i18next'



const Hero = () => {
  const [ t, i18n ] = useTranslation();

  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> 
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'></span>{t('hero1')} {" "}
            <span className='text-white'>{t('hero2')}</span> 
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-semibold ss:text-[72px]
           text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            {t('hero3')} <br className='sm:block hidden' /> {" "}
            <span className='text-gradient text-gradient-temp'>{t('hero4')}</span>{" "}
         
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        
        <h1 className='font-semibold ss:text-[72px]
           text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>{t('hero5')}</h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>{t('heroInfo1')} <span className='text-gradient text-[rgba(255,196,0,1)]'> {t('heroInfo2')}</span>{t('heroInfo3')}</p>
      </div>
      
      <div className='flex flex-1'>
          <img src={mainhero2} alt='billing'
          className='w-[100%] h-[100%] relative z-[5]' />
          <div className="absolute z-[0] w-[40%] h-[35%]  blue__gradient" />
          {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
          {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter} md:my-0 my-10 relative`}>
          <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
