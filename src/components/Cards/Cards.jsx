import './Cards.css'
import styles from '../../style'
import  feature1 from '../../assets/feature1.png'
import  feature2 from '../../assets/feature2.png'
import  feature3 from '../../assets/feature3.png'
import  feature4 from '../../assets/feature4.png'
import  feature5 from '../../assets/feature5.png'
import { useTranslation } from 'react-i18next'

import MainHeading from '../MainHeading/MainHeading'
import { useState, useEffect } from 'react'

import { db } from "../../firebase-config";
import { collection, query, getDocs } from 'firebase/firestore';


const Cards = () => {

  const articleCollection = collection(db, "article");
  const [articles, setArticles] = useState([]); // Initialize as an empty array
  
  // useEffect(() => {
  //   const getArticles = async () => {
  //     try {
  //       const querySnapshot = await getDocs(query(articleCollection));
  
  //       const articleData = querySnapshot.docs.map((doc) => doc.data());
  //       console.log(articleData);
  //       setArticles(articleData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  
  //   getArticles();
  // }, []);
  const [ t, i18n ] = useTranslation();

  return (
    <section className={`features ${styles.paddingY}`}>  


    {/* <div>
      <h1 className="text-3xl font-bold mb-4">Articles</h1>
      <div>
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="mb-4 rounded-lg"
                style={{ maxWidth: "100%" }}
              />
            )}
            <p className="text-gray-700">{article.text}</p>
          </div>
        ))}
      </div>
    </div> */}

      {/* {articles.map((article))} */}
      <MainHeading 
        properties = {{
          title: t('cardsTitle'),
          subtitle: t('cardsSubtitle')
        }}
      />
      <div className='mt-14 grid ss:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4 text-center'>
        <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature1} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1'>{t('cardsFeature1')}</h2>
        </div>
        <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature2} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1'>{t('cardsFeature2')}</h2>
        </div>
        <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature3} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1'>{t('cardsFeature3')}</h2>
        </div>
        <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature4} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1'>{t('cardsFeature4')}</h2>
        </div>
        {/* <div className='card bg-gray-900 pt-5 pb-3 h-[214px] min-h-[214px]'>
          <img src={feature5} className='max-w-full pb-5 h-auto mx-auto' alt='feature1' />
          <h2 className='pb-3 mx-1 font-poppins'>Pay as you go</h2>
        </div> */}
        
      </div>
    </section>
  )
}

export default Cards
