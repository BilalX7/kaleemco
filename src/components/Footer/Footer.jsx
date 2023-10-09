import './Footer.css'
import {BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'
import styles from '../../style'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const {t} = useTranslation();
  
  const role = localStorage.getItem("role");
  const logout = () => {
      localStorage.setItem("role", "");
  }
  
  return (
    <footer>
      <ul>
        <li className={`${styles.paragraph} text-gradient`}>{t('footerSocial')}</li>
      </ul>
      <ul className='social-icon'>
        <li>
          <a href='https://www.facebook.com/profile.php?id=100091325757023&mibextid=LQQJ4d' rel='noreferrer' target='_blank'><BsFacebook /></a>
        </li>
        <li>
          <a href='https://instagram.com/kaleem.lb?igshid=MzRlODBiNWFlZA==' rel='noreferrer' target='_blank'><BsInstagram /></a>
        </li>
        <li>
          <a href="https://wa.me/message/KADANU5Y3FQKF1"><BsWhatsapp /></a>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <a href="/">{t('title1')}</a>
        </li>
        <li>
          <a href="#services">{t('title2')}</a>
        </li>
        <li>
          <a href="/books">{t('title3')}</a>
        </li>
        <li>
          <a href="#contact">{t('title4')}</a>
        </li>
        <li>
          <a href="/blog">{t('title5')}</a>
        </li>
        {role == "admin" ? (
            
              <li className={`  font-normal cursor-pointer text-[16px] text-white`}>
                <a href="/admin" className=' duration-300 ease-in'>
                {t('title6')}
                </a>
              </li>
          
          ) : <></> } 
      </ul>
      <p>Created By <span className='text-gradient'>Bilal Koubar </span>| &copy; 2023 All Right Reserved</p>
      <div className='d-grid'>
          <a href='https://wa.me/message/KADANU5Y3FQKF1' rel='noreferrer' target='_blank'>
            <button className='btn whattsapp btn-color'>
              <BsWhatsapp size={'2.5rem'}/>
            </button>
          </a>
      </div>
      <ScrollToTopButton className="scrollToTop" threshold={1000} />
    </footer>
  )
}

export default Footer
