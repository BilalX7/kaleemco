import React from 'react'
import './ServiceItem.css'
import styles from '../../style'


const ServiceItem = (props) => {
  return (
    <div className='card px-4 py-9'>
        <div className='h-[200px] icon-holder'>
            {props.properties.iconBehind}
            <img className='inline  left-[50%]' src={props.properties.iconFront} alt='srv2' />
        </div>
        <div>
        <h2 className='text-3xl font-medium py-4'>{props.properties.title}</h2>
        <p className={`${styles.paragraph} text-base pb-6`}>{props.properties.subtitle}</p>
        </div>
    </div>
  )
}

export default ServiceItem