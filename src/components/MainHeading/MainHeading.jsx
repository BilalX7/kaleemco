import './MainHeading.css'

const MainHeading = (props) => {
  return (
    <>
      {/* <h2 className='font-poppins font-semibold ss:text-[32px]
      text-[32px] text-gradient tracking-wider uppercase ss:leading-[100px] leading-[75px]'>Why Arabic</h2>
      <h1 className='subtitle-heading font-poppins font-semibold ss:text-5xl
      text-4xl text-white tracking-wider mt-4 '>Opens doors to cultural understanding.</h1> */}
      <h1 className='font-semibold xs:text-[48px] text-[40px]
       text-white text-center md:text-[42px]'>
        {props.properties.title}
      </h1>
      <p className='subtitle-heading font-normal text-sky-300 text-gradient-temp tracking-wider
       mb-[40px] w-3/4 mx-auto uppercase text-lg text-center'>
        {props.properties.subtitle}</p>
    </>
  )
}
 
export default MainHeading