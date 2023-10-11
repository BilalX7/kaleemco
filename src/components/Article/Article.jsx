import React, { useState, useEffect } from 'react';
import styles from '../../style';
import './Article.css';
import MainHeading from '../MainHeading/MainHeading';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { db } from '../../firebase-config';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';

const Article = () => {
  const { t } = useTranslation();

  const articleCollection = collection(db, 'article');
  const [articles, setArticles] = useState([]); // Initialize as an empty array
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const querySnapshot = await getDocs(query(articleCollection, orderBy('submissionTime', 'desc')));
        const articleData = querySnapshot.docs.map((doc) => doc.data());

        // Reverse the order of articles to display the latest first
        const reversedArticles = [...articleData];
        setArticles(reversedArticles);
        console.log(articleData);
        // Fetch image URLs from Firebase Storage for each article
        const storage = getStorage();
        const imageListRef = ref(storage, 'images/');
        const imageUrls = await listAll(imageListRef);
        const urls = await Promise.all(imageUrls.items.map(async (item) => await getDownloadURL(item)));
        // urls.reverse();
        setImageList(urls);
        // console.log(urls)
        console.log(imageUrls)
        
      } catch (error) {
        console.error(error);
      }
    };

    getArticles();
  }, []);

  function formatSubmissionTime(submissionTime) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      //   timeZoneName: 'short',
    };

    const formattedTime = new Date(submissionTime).toLocaleDateString('en-US', options);
    return formattedTime;
  }

  return (
    <>
      <MainHeading
        properties={{
          title: t('articleTitle'),
          subtitle: t('articleSubtitle'),
        }}
      />
      <section id='blog' className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.flexCenter} blog-container`}>
          {articles.map((article, index) => (
            <div key={index} className='blog-box'>
              <div className='blog-img'>
                <img
                  src={imageList[index] || 'placeholder_image_url'} // Use the corresponding image URL from imageList
                  alt={article.title}
                  className='mb-4 rounded-lg'
                  style={{ maxWidth: '100%' }}
                />
              </div>
              <div className='blog-text'>
                <span>{formatSubmissionTime(article.submissionTime)}</span>
                <Link to={`/FullArticle/${index}`} className='blog-title'>
                  {article.title}
                </Link>
                <p>{article.text}</p>
                <Link to={`/FullArticle/${index}`}>{t('articleBtn')}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Article;
