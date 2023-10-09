import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase-config';
import styles from '../../style';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

function formatSubmissionTime(submissionTime) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const formattedTime = new Date(submissionTime).toLocaleDateString('en-US', options);
  return formattedTime;
}

const FullArticle = () => {
  const { index } = useParams();
  const articleIndex = parseInt(index, 10); // Convert the index parameter to a zero-based number
  const [article, setArticle] = useState(null);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleCollection = collection(db, 'article');
        const querySnapshot = await getDocs(query(articleCollection));
        const articleData = querySnapshot.docs.map((doc) => doc.data());

        // Sort articles by submissionTime in descending order
        articleData.sort((a, b) => new Date(b.submissionTime) - new Date(a.submissionTime));

        // Get the individual article by its index
        setArticle(articleData[articleIndex]);

        // Fetch image URLs from Firebase Storage for the specific article
        const storage = getStorage();
        const imageListRef = ref(storage, 'images/');
        const imageUrls = await listAll(imageListRef);
        const urls = await Promise.all(imageUrls.items.map(async (item) => await getDownloadURL(item)));
        setImageList(urls);
        // Add this before rendering the image
        console.log('Image URL:', imageList[articleIndex]);

      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [articleIndex]);

  if (!article) {
    return <p>Loading...</p>; // You can replace this with a loading component
  }

  return (
    <div className={`${styles.paddingY} ${styles.paddingX} full-article max-w-screen-md`}>
      <h1 className="text-white text-3xl font-semibold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        Published on {formatSubmissionTime(article.submissionTime)}
      </p>
      <img
        src={imageList[articleIndex] || 'placeholder_image_url'} // Use the corresponding image URL from imageList
        alt={article.title}
        className="mb-4 rounded-lg shadow-lg max-h-96 object-cover w-full"
      />

      <p className="mb-6 text-lg text-dimWhite leading-relaxed">{article.text}</p>
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white font.bold py-2 px-4 rounded mt-4"
        href='/blog'
      >
        Back to Articles
      </a>
    </div>
  );
};

export default FullArticle;
