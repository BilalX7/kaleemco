import { useTranslation } from 'react-i18next'
// import { UseTranslationOptions, useTranslation } from 'react-i18next'
import './Navbar.css'
import { useState } from 'react'
import { close, menu } from '../../assets'
import logokaleem from '../../assets/logokaleem-remove.png'
import { useEffect } from 'react'
// import {navLinks} from '../../constants'
// import styles from '../../style'


const Navbar = () => {
  const [ t, i18n ] = useTranslation();
  const [toggle, setToggle] = useState(false);

const handleLanguageChange = (language) => {
  i18n.changeLanguage(language);
  localStorage.setItem('language', language);
  // document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  
  if (language === 'ar') {
    document.body.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
    document.getElementById('nav-mobile').style.left = '0px';
    document.getElementById('nav-mobile').style.right = 'initial';
    document.body.style.direction = 'rtl';
    // document.getElementsByClassName("toast").style.left = '0px';

    i18n.changeLanguage(language);
  } else {
    document.body.style.direction = 'ltr';
    document.body.style.fontFamily = 'Poppins';
    document.getElementById('nav-mobile').style.right = '0px';
    document.getElementById('nav-mobile').style.left = 'initial';
    i18n.changeLanguage(language);
  }
};



const backPage = () => {
    const language = localStorage.getItem("language");
    console.log(language);
    i18n.changeLanguage(language);
    if (language == 'ar') {
      document.body.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
      document.body.style.direction = 'rtl';
      document.getElementById('nav-mobile').style.left = '0px';
      document.getElementById('nav-mobile').style.right = 'initial';
      document.getElementById('language-btn').style.marginRight = '15px';
      // i18n.changeLanguage(language);
    } else {
      document.body.style.fontFamily = 'Poppins';
      document.body.style.direction = 'ltr';
      document.getElementById('nav-mobile').style.right = '0px';
      document.getElementById('nav-mobile').style.left = 'initial';
      i18n.changeLanguage(language);
    }
}
  
useEffect(() => {
  backPage();
}, [])

  const role = localStorage.getItem("role");
  
  const logout = () => {
      localStorage.setItem("role", "");
  }
  

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <a href="/">
        <img src={logokaleem} alt="kalem" className=" h-[72px] " />
      </a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          <li
            className={`  font-normal cursor-pointer text-[16px] mr-10 text-white`}
          >
            <a href="/" className=' duration-300 ease-in'>
              {t('title1')}
            </a>
          </li>
          <li
            className={`  font-normal cursor-pointer text-[16px] mr-10 text-white`}
          >
            <a href="#services" className=' duration-300 ease-in'>
            {t('title2')}
            </a>
          </li>
          <li
            className={`  font-normal cursor-pointer text-[16px] mr-10 text-white`}
          >
            <a href="/books" className=' duration-300 ease-in'>
            {t('title3')}
            </a>
          </li>
          <li
            className={`  font-normal cursor-pointer text-[16px] mr-10 text-white`}
          >
            <a href="/blog" className=' duration-300 ease-in'>
            {t('title5')}
            </a>
          </li>
          <li
            className={`  font-normal cursor-pointer text-[16px] mr-10 text-white`}
          >
            <a href="#contact" className=' duration-300 ease-in'>
            {t('title4')}
            </a>
          </li>
          {role == "admin" ? (
            <>
              <li className={`  font-normal cursor-pointer text-[16px] mr-10 text-white`}>
              <a href="/admin" className=' duration-300 ease-in'>
              {t('title6')}
              </a>
            </li>
            <li className={`  font-normal cursor-pointer text-[16px] mr-10 text-white`}>
              <a href="/" onClick={logout} className=' duration-300 ease-in'>
              {t('title7')}
              </a>
            </li>
            </>
          ) : <li></li> } 
          <li id='language-btn' className='mr-2'>
          <button
            onClick={() => handleLanguageChange('en')}
            className="text-slate-50 p-1"
          >
              En
          </button>
          <button
            onClick={() => handleLanguageChange('ar')}
            className="text-slate-50 p-1"
          >
            Ar
          </button>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 items-center justify-end cursor-pointer'>
          <img 
            src={toggle ? close : menu }
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)} />
      </div>

      <div id='nav-mobile' className={`${toggle ? 'flex' : 'hidden'} p-8 bg-black-gradient
        absolute  top-20 right-0 mx-4 min-w-[140px] z-[999] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
              <li
                className={` font-normal cursor-pointer text-[16px] mb-4 text-white`}
              >
                <a href="/" className=' duration-300 ease-in'>
                  {t('title1')}
                </a>
              </li>
              <li
                className={` font-normal cursor-pointer text-[16px] mb-4 text-white`}
              >
                <a href="#services" className=' duration-300 ease-in'>
                  {t('title2')}
                </a>
              </li>
              <li
                className={` font-normal cursor-pointer text-[16px] mb-4 text-white`}
              >
                <a href="/books" className=' duration-300 ease-in'>
                  {t('title3')}
                </a>
              </li>
              <li
                className={` font-normal cursor-pointer text-[16px] mb-4 text-white`}
              >
                <a href="/blog" className=' duration-300 ease-in'>
                  {t('title5')}
                </a>
              </li>
              <li
                className={` font-normal cursor-pointer text-[16px] mb-4 text-white`}
              >
                <a href="#contact" className=' duration-300 ease-in'>
                  {t('title4')}
                </a>
              </li>


              {role == "admin" ? (
                <>
                  <li className={`  font-normal cursor-pointer text-[16px] mb-4 text-white`}>
                  <a href="/admin" className=' duration-300 ease-in'>
                  {t('title6')}
                  </a>
                </li>
                <li className={`  font-normal cursor-pointer text-[16px] mb-4 text-white`}>
                  <a href="/" onClick={logout} className=' duration-300 ease-in'>
                  {t('title7')}
                  </a>
                </li>
                </>
              ) : <li></li> } 
              <li>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="text-slate-50 p-1"
                >
                    En
                </button>
                <button
                  onClick={() => handleLanguageChange('ar')}
                  className="text-slate-50 p-1"
                >
                  Ar
              </button>
              </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
