import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from 'firebase/firestore';
import BookItem from "../BookItem/BookItem"; 
import "./Books.css"
import styles from "../../style";
import MainHeading from '../MainHeading/MainHeading'
import { useTranslation } from 'react-i18next';

function Book() {

  const { t } = useTranslation();

  const [booksOne, setBooksOne] = useState([]);
  const [booksTwo, setBooksTwo] = useState([]);
  const [booksThree, setBooksThree] = useState([]);
  const [booksFour, setBooksFour] = useState([]);
  const bookscollection = collection(db, "books");


  useEffect(() => {
    const getBooks = async () => {
      try {
        const querySnapshot = await getDocs(
          query(bookscollection, where("category", "==", "أدب عربي"))
        );

        const filteredData = querySnapshot.docs.map((doc) => doc.data());
        console.log(filteredData);
        setBooksOne(filteredData);

        const querryTwo = await getDocs(
        query(bookscollection, where("category", "==", "في النحو والصرف"))
        );

        const filteredDataTwo = querryTwo.docs.map((doc) => doc.data());
        setBooksTwo(filteredDataTwo);

        const querryThree = await getDocs(
          query(bookscollection, where("category", "==", "علم نفس"))
        );

        const filteredDataThree = querryThree.docs.map((doc) => doc.data());
        setBooksThree(filteredDataThree);

         const querryFour = await getDocs(
          query(bookscollection, where("category", "==", "دراسات قرآنيّة"))
        );

        const filteredDataFour = querryFour.docs.map((doc) => doc.data());
        setBooksFour(filteredDataFour);

      } catch (error) {
        console.error(error);
      }
    };

    getBooks();
  }, []);

  // Render the BookItem components inside the return statement
  return (
    <div>
      <MainHeading 
        properties = {{
          title: t('booksTitle'),
          subtitle: t('booksSubtitle')
        }}
      />
      <h2 className={`font-normal text-dimYellow text-[28px] leading-[30.8px] my-4 book-heading`}>{t('booksCat1')}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        
        {booksOne.map((book) => (
          <BookItem
            key={book.id} 
            id={book.id}
            name={book.name}
            author={book.author}
            pdf={book.pdf}
            imgs = {"https://kaleem-backend.000webhostapp.com/storage/"+book.imgs}
          />
        ))}
        </div>

        <h2 className={`font-normal text-dimYellow text-[28px] leading-[30.8px] my-4 book-heading`}>{t('booksCat2')}</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {booksTwo.map((book) => (
          <BookItem
            key={book.id} 
            id={book.id}
            name={book.name}
            author={book.author}
            pdf={book.pdf}
            imgs = {"https://kaleem-backend.000webhostapp.com/storage/"+book.imgs}
          />
        ))}
      </div>
      <h2 className={`font-normal text-dimYellow text-[28px] leading-[30.8px] my-4 book-heading`}>{t('booksCat3')}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4   ">
        
        {booksThree.map((book) => (
          <BookItem
            key={book.id} 
            id={book.id}
            name={book.name}
            author={book.author}
            pdf={book.pdf}
            imgs = {"https://kaleem-backend.000webhostapp.com/storage/"+book.imgs}
          />
        ))}
        </div>

        <h2 className={`font-normal text-dimYellow text-[28px] leading-[30.8px] my-4 book-heading`}>{t('booksCat4')}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        
        {booksFour.map((book) => (
          <BookItem
            key={book.id} 
            id={book.id}
            name={book.name}
            author={book.author}
            pdf={book.pdf}
            imgs = {"https://kaleem-backend.000webhostapp.com/storage/"+book.imgs}
          />
        ))}
        </div>
    </div>  
  );
}

export default Book;

// import { useTranslation } from "react-i18next";
// import { useState, useEffect } from "react";
// import "./Books.css";
// import axios from "axios";
// import BookItem from "../BookItem/BookItem";
// import '../../pages/BookPage/BookPage';
// import MainHeading from "../MainHeading/MainHeading";
// import styles from "../../style";
// // import Button from "../Button/Button";
// import {MdExpandMore, MdExpandLess} from 'react-icons/md'

// const Books = () => {
//   const [ t, i18n ] = useTranslation();
//   const [item, setItem] = useState("");
//   const [books, setBooks] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [value, setValue] = useState("");
//   const [lang, setLang] = useState("");
//   const [showMore, setShowMore] = useState(true);
//   const [max, setMax] = useState(6);
//   const [data, setData] = useState({
//     categoryOne: [{}],
//     categoryTwo: [{}],
//     categoryThree: [{}],
//     categoryFour: [{}],
//   });

//   useEffect(() => {
//     fetchdata();
//     language();
//   }, []);

//   const language = () => {
//     console.log(localStorage.getItem('language'));
//     const languageValue = localStorage.getItem("language")
//     // this.state.language = localStorage.getItem("language");
//     if (localStorage.getItem('language') == 'ar') {
//       document.documentElement.setAttribute('dir', languageValue === 'ar' ? 'rtl' : 'ltr');
//       document.body.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
//       i18n.changeLanguage(languageValue);
//     }  
//   }

//   const fetchdata = async () => {
//     try {
//       const response = await axios.get("https://kaleem-backend.000webhostapp.com/api/books");
//       // console.log(response.data);
//       setData(response.data);
//       // console.log(this.state.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const fetchData = async () => {
//     try {
//       const zakaria = value;
//       console.log(zakaria);
//       const response = await axios.post("https://kaleem-backend.000webhostapp.com/api/categories", {category: zakaria});
//       console.log(response.data);
//       setCategory(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   const handleChange = (event) => {
//     setValue(event.target.value);
//     console.log(this.state.value);
//     console.log(localStorage.getItem("language"));
//   };

//     useEffect(() => {
//       fetchdata();
//     }, [value]);

//     const { categoryOne, categoryTwo, categoryThree, categoryFour } = data;

//     const bilal = 
//       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
//         {categoryOne.map((book, i) => {if (i < max) return (
//           <BookItem
//               key={book.id} 
//               id= {book.id}
//               name= {book.name}
//               author= {book.author}
//               pdf= {book.pdf}
//               imgs = {"https://kaleem-backend.000webhostapp.com/storage/"+book.imgs}
//           />
//         )} )}
//       </div>
    
  
//     if (category.length > 0) {
//       return (
//         <div>
//           <MainHeading 
//             properties = {{
//               title: "Books",
//               subtitle: "all what you need",
//             }}
//           />
//           <label htmlFor="categorySelect" className={` ${styles.paragraphNew} text-dimYellow block text-[30px] text-center mt-[50px] pb-3 `}>{t('booksSelectLabel')}</label>
//           {/* <select id="categorySelect" onChange={handleChange} onClick={fetchData}
//           className={`block appearance-none text-center w-1/2 mx-auto bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:border-gray-500 hover:shadow-md transition duration-300`}>
//             <option value="all">{t('booksCats')}</option>
//             <option value="أدب عربي" className="bg-grey-100">{t('booksCat1')}</option>
//             <option value="في النحو والصرف">{t('booksCat2')}</option>
//             <option value="علم نفس">{t('booksCat3')}</option>
//             <option value="دراسات قرآنيّة">{t('booksCat4')}</option>
//           </select> */}
//           <h1 className={`${styles.paragraphNew} book-heading book-heading-all my-4`}>{value}</h1>
//           {/* <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Store</h1> */}
//           <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {category.map((book) => (
//               <BookItem
//                 key={book.id} 
//                 id= {book.id}
//                 name= {book.name}
//                 author= {book.author}
//                 pdf= {book.pdf}
//                 imgs = {"https://kaleem-backend.000webhostapp.com/storage/"+book.imgs}
//               />
//             ))}
//           </div>
//         </div>
//       );
//     }
  
//     // const ShowMoreButton = ({ max, categoryLength, showMore, setShowMore }) => {
//   const handleShowMore = () => {
//     setShowMore(false);
//     setMax(categoryOne.length)
//   };

//   const handleShowLess = () => {
//     setShowMore(true);
//     setMax(6);
//   };


//     return (
//       <div className={`${styles.paddingY}`}>
//         <MainHeading
//           className = "bookHeading" 
//           properties = {{
//             title: t('booksTitle'),
//             subtitle: t('booksSubtitle'),
//           }}
//         />
//         <label htmlFor="categorySelect" className={`select-heading ${styles.paragraph} text-dimYellow block text-[30px] text-center mt-[50px] pb-3 `}>{t('booksSelectLabel')}</label>
//         {/* <select id="categorySelect" onChange={handleChange} onClick={fetchData}
//          className={`block appearance-none text-center w-1/2 mx-auto bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:border-gray-500 hover:shadow-md transition duration-300`}>
//           <option value="all">{t('booksCats')}</option>
//           <option value="أدب عربي" className="bg-grey-100">{t('booksCat1')}</option>
//           <option value="في النحو والصرف">{t('booksCat2')}</option>
//           <option value="علم نفس">{t('booksCat3')}</option>
//           <option value="دراسات قرآنيّة">{t('booksCat4')}</option>
//         </select> */}
//         {/* <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Store</h1> */}
//         <h1 className={`${styles.paragraphNew} my-4 book-heading`}>{t('booksCat1')}</h1>
//           {bilal}
//         <div>
//           {showMore && max < categoryOne.length && (
//             <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={handleShowMore} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//               {t('booksMore')} <MdExpandMore className="text-black" />
//               </button>
//             </div>
//           )}
//           {!showMore && (
//             <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={handleShowLess} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//               {t('booksLess')} <MdExpandLess className="text-black" />
//               </button>
//             </div>
//           )}

//         </div>
        
//         <h1 className={`${styles.paragraphNew} my-4 book-heading`}>{t('booksCat2')}</h1>
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
//           {categoryTwo.map((book, i) => {if (i < max) return(
//             <BookItem
//             key={book.id} 
//             id= {book.id}
//             name= {book.name}
//             author= {book.author}
//             pdf= {book.pdf}
//             imgs = {"https://kaleem-backend.000webhostapp.com/storage/"+book.imgs}
//             />
//             )})}
//         </div>
//         <div>
//           {showMore && max < categoryTwo.length && (
//             <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={handleShowMore} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//               {t('booksMore')} <MdExpandMore className="text-black" />
//               </button>
//             </div>
//           )}
//           {!showMore && (
//             <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={handleShowLess} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//               {t('booksLess')} <MdExpandLess className="text-black" />
//               </button>
//             </div>
//           )}

//         </div>

//         <h1 className={`${styles.paragraphNew} my-4 book-heading`}>{t('booksCat3')}</h1>
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
//           {categoryThree.map((book, i) => {if (i < max) return (
//             <BookItem
//             key={book.id} 
//             id= {book.id}
//             name= {book.name}
//             author= {book.author}
//             pdf= {book.pdf}
//             imgs = {"https://kaleem-backend.000webhostapp.com/storage/"+book.imgs}
//             />
//           )})}
//         </div>
//         {/* More and Less Button */}
//         <div>
//           {showMore && max < categoryThree.length && (
//             <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={handleShowMore} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//                 {t('booksMore')} <MdExpandMore className="text-black" />
//               </button>
//             </div>
//           )}
//           {!showMore && (
//             <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={handleShowLess} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//               {t('booksLess')} <MdExpandLess className="text-black" />
//               </button>
//             </div>
//           )}
//         </div>
          
//         <h1 className={`${styles.paragraphNew} my-4 book-heading`}>{t('booksCat4')}</h1>
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
//           {categoryFour.map((book, i) =>{ if (i < max) return (
//             <BookItem
//             key={book.id} 
//             id= {book.id}
//             name= {book.name}
//             author= {book.author}
//             pdf= {book.pdf}
//             imgs = {"https://kaleem-backend.000webhostapp.com/storage/"+book.imgs}
//             />
//           )})}
//         </div>
//         <div>
//           {showMore && max < categoryFour.length && (
//             <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={handleShowMore} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//               {t('booksMore')} <MdExpandMore className="text-black" />
//               </button>
//             </div>
//           )}
//           {!showMore && (
//             <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={handleShowLess} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//               {t('booksLess')} <MdExpandLess className="text-black" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
      
//     );
  
// }

// export default Books;

