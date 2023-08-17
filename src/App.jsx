import  { useState, useEffect } from 'react';
import styles from './style';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home, BookPage } from './pages/index';
import { useTranslation } from "react-i18next";

const App = () => {

  const [ t, i18n ] = useTranslation();

  useEffect(() => {
    language();
  }, []);

  const language = () => {
    console.log(localStorage.getItem('language'));
    const languageValue = localStorage.getItem("language")
    // this.state.language = localStorage.getItem("language");
    if (localStorage.getItem('language') == 'ar') {
      document.documentElement.setAttribute('dir', languageValue === 'ar' ? 'rtl' : 'ltr');
      document.body.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
      i18n.changeLanguage(languageValue);
    }  
  }

  return (
    <>
      <Router>
        <div
          className={`main-page ${localStorage.getItem('language') === 'en' ? 'ltr' : 'rtl'} bg-primary w-full overflow-hidden`}
        >
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
