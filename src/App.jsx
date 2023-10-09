import  { useState, useEffect } from 'react';
import styles from './style';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, BookPage, Login, Admin, Blog } from './pages/index';
import { useTranslation } from "react-i18next";
import Article from './components/Article/Article'; // Import your Article component
import FullArticle from './components/Article/FullArticle'; // Import the FullArticle component

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
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/FullArticle/:index" element={<FullArticle />} />            
          </Routes>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
