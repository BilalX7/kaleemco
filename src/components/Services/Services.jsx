import './Services.css'
// import styles from '../../style'
import MainHeading from '../MainHeading/MainHeading'
import {default as serviseicon2} from '../../assets/serviseicon2.png'
import {default as serviseicon4} from '../../assets/serviseicon4.png'
import {default as serviseicon6} from '../../assets/serviseicon6.png'
import {RiNumber1, RiNumber2, RiNumber3} from 'react-icons/ri'
import ServiceItem from '../ServiceItem/ServiceItem'
import { useTranslation } from 'react-i18next'


const Services = () => {
  const [ t, i18n ] = useTranslation();

  return (
    <section id='services' className='sm:py-16 py-6'>
      <MainHeading 
        properties = {{
          title: t('servicesTitle'),
          subtitle: t('servicesSubtitle')
        }}
      />
      <div className='cards grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1  gap-x-7 gap-y-10 text-white text-center'>
        <ServiceItem 
          properties = {{
            iconBehind: <RiNumber1 className='icon-number' />,
            iconFront: serviseicon2,
            title: t('servicesFeature1'),
            // subtitle: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis  accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
          }}
        />
        <ServiceItem 
          properties = {{
            iconBehind: <RiNumber2 className='icon-number' />,
            iconFront: serviseicon6,
            title: t('servicesFeature2'),
            // subtitle: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis  accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
          }}
        />
        <ServiceItem 
          properties = {{
            iconBehind: <RiNumber3 className='icon-number' />,
            iconFront: serviseicon4,
            title: t('servicesFeature3'),
            // subtitle: "Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis  accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
          }}
        />
        {/* <div className='card px-4 py-9'>
          <div className='h-[200px] icon-holder'>
            <RiNumber1 className='icon-number' />
            <img className='inline  left-[50%]' src={serviseicon6} alt='srv1' />
          </div>
          <div>
            <h2 className='text-3xl font-medium py-4'>Order Management</h2>
            <p className={`${styles.paragraph} text-base pb-6`}>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
        </div>
        <div className='card px-4 py-9'>
          <div className='h-[200px] icon-holder'>
            <RiNumber2 className='icon-number' />
            <img className='inline  left-[50%]' src={serviseicon4} alt='srv2' />
          </div>
          <div>
            <h2 className='text-3xl font-medium py-4'>Order Management</h2>
            <p className={`${styles.paragraph} text-base pb-6`}>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
        </div>
        <div className='card px-4 py-9'>
          <div className='h-[200px] icon-holder'>
            <RiNumber3 className='icon-number' />
            <img className='inline  left-[50%]' src={serviseicon2} alt='srv3' />
          </div>
          <div>
            <h2 className='text-3xl font-medium py-4'>Order Management</h2>
            <p className={`${styles.paragraph} text-base pb-6`}>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Services
