// import {useState, useEffect} from 'react'
// import styles from '../../style'
import { Article } from '../../components'
// import {MainHeading} from '../../components/MainHeading/MainHeading'

// import { db } from "../../firebase-config";
// import { collection, query, getDocs } from 'firebase/firestore';

const Blog = () => {
    // const articleCollection = collection(db, "article");
    // const [articles, setArticles] = useState([]); // Initialize as an empty array
    
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

    // function formatSubmissionTime(submissionTime) {
    //     const options = {
    //       year: 'numeric',
    //       month: 'long',
    //       day: 'numeric',
    //       hour: '2-digit',
    //       minute: '2-digit',
    //       second: '2-digit',
    //     //   timeZoneName: 'short',
    //     };
      
    //     const formattedTime = new Date(submissionTime).toLocaleDateString('en-US', options);
    //     return formattedTime
    // }
  return (
    // <div className={styles.boxWidth}>
    //     <div className={styles.marginX}>
    //         <div>
    //             <h1 className="text-3xl font-bold mb-4">Articles</h1>
    //                 <div>
    //                     {articles.map((article, index) => (
    //                     <div key={index} className="bg-white p-4 shadow-md rounded-lg mb-4">
    //                         <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
    //                         {article.image && (
    //                         <img
    //                             src={article.image}
    //                             alt={article.title}
    //                             className="mb-4 rounded-lg"
    //                             style={{ maxWidth: "100%" }}
    //                         />
    //                         )}
    //                         <p className="text-gray-700">{article.text}</p>
    //                         <p>Submitted on: {formatSubmissionTime(article.submissionTime)}</p>
    //                     </div>
    //                     ))}
    //                 </div>
    //         </div>
    //     </div>
    // </div>
    
    <>
      <Article />
      {/* <section id='blog' className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.paddingX} blog-heading`}>
            <span>My Recent Posts</span>
            <h3>My Blog</h3>
        </div>
        <div className={`${styles.flexCenter} blog-container`}>
            {articles.map((article, index) => (
                <div key={index} className="blog-box">
                    <div className="blog-img">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="mb-4 rounded-lg"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
                    <div className="blog-text">
                        <span>{formatSubmissionTime(article.submissionTime)}</span>
                        <a href="#" className='blog-title'>{article.title}</a>
                        <p>{article.text}</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            ))}
        </div>
      </section> */}
    </>
  )
}

export default Blog