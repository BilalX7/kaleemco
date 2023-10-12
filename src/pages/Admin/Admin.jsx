import React, { useEffect } from 'react'
import './Admin.css'
import { useState } from 'react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import styles from '../../style';
import MainHeading from '../../components/MainHeading/MainHeading';
import { useTranslation } from 'react-i18next';
import { storage } from '../../firebase-config'; // Make sure this import statement is present and the path to your firebase.js file is correct
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { getDoc, setDoc, doc } from 'firebase/firestore';

const Admin = () => {
  const { t } = useTranslation();
  
  const [title, settitle] = useState('');
  const [image, setimage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [text, settext] = useState('');

  const currentTime = new Date();
  
  // // Get the current image ID from localStorage or start at 9999 if not present
  // const initialImageId = parseInt(localStorage.getItem('imageId')) || 9999;
  // const [imageId, setImageId] = useState(initialImageId);

  // useEffect(() => {
  //   // Load the initial imageId from local storage and set it in the state
  //   setImageId(initialImageId);
  // }, []); // Run this effect only when the component mounts
  
  // const uploadImage = () => {
  //   if (image == null) return;

  //   // Generate a unique ID for the image using the current imageId
  //   const newImageId = imageId - 1;
  
  //   // Create a reference for the image using the generated ID
  //   const imageRef = ref(storage, `images/${newImageId}_${image.name}`);
  
  //   // Upload the image
  //   uploadBytes(imageRef, image)
  //     .then(() => {
    //       // Update the imageId for the next image (increment by 1)
    //       setImageId(newImageId);

  //       // Store the updated imageId in localStorage
  //       localStorage.setItem('imageId', newImageId.toString());
  //     })
  //     .catch((error) => {
  //       console.error('Error uploading image:', error);
  //     });
  // };
  const imageIdRef = doc(db, 'imageIds/imageId'); // 'imageIds' is the collection and 'imageId' is the document ID.
const fetchImageId = async () => {
  try {
    const docSnapshot = await getDoc(imageIdRef);
    if (docSnapshot.exists()) {
      return docSnapshot.data().id;
    } else {
      // Create the document with an initial image ID if it doesn't exist
      await setDoc(imageIdRef, { id: 9999 });
      return 9999;
    }
  } catch (error) {
    console.error('Error fetching image ID:', error);
  }
};

// Function to update the image ID
const updateImageId = async (newImageId) => {
  try {
    await setDoc(imageIdRef, { id: newImageId });
  } catch (error) {
    console.error('Error updating image ID:', error);
  }
};

// In your component
const [imageId, setImageId] = useState(9999); // Initialize with an initial value

useEffect(() => {
  // Fetch the image ID when the component mounts or when a user logs in.
  fetchImageId().then((id) => setImageId(id));
}, []);

const uploadImage = () => {
  if (image == null) return;

  // Create a reference for the image using the fetched image ID
  const newImageId = imageId - 1;
  const imageRef = ref(storage, `images/${newImageId}_${image.name}`);

  // Upload the image
  uploadBytes(imageRef, image)
    .then(() => {
      // Update the image ID for the next image (decrement by 1)
      setImageId(newImageId);

      // Update the image ID in the Firestore collection
      updateImageId(newImageId);
    })
    .catch((error) => {
      console.error('Error uploading image:', error);
    });
};
  
  
  
  const fetchData = async (event) => {
    event.preventDefault(); // Prevent default form submission
    uploadImage()
    try {
          if (title === "" || text === "") {
            toast.error('Please fill in all fields');
            return;
          }
          const formData = {
            title: title,
            text: text,
            submissionTime: currentTime.toISOString(),
          };
          
          const article = collection(db, 'article');
          await addDoc(article, formData);
          toast.success('Article is uploaded successfully');
          
          settext("");
          setimage("");
          settitle("");

        } catch (error) {
          console.error(error);
        }
      };


      // useEffect(() => {
      //   listAll(imageListRef).then((response) => {
      //     response.items.forEach((item) => {
      //       getDownloadURL(item).then((url) => {
      //         setImageList((prev) => [...prev, url])
      //       })
      //     })
      //   })
      // }, []);

      const handleTitleChange = (event) => {
        settitle(event.target.value);
      };
      const handleTextChange = (event) => {
        settext(event.target.value);
      };
      const handleImageChange = (event) => {
        setimage(event.target.files[0]);
      };
      
    
  return (
    <>
      <MainHeading 
        properties = {{
          title: t('adminTitle'),
          subtitle: t('adminSubtitle')
        }}
      />
      <div className={`sm:px-0 px-6 py-4 max-w-md mx-auto`}>
        <form className="admin bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-4">{t('adminFormTitle')}</h2>

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 font-semibold">{t('adminFormLabel1')}</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full border rounded py-2 px-3"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="articleText" className="block text-gray-600 font-semibold">{t('adminFormLabel2')}</label>
            <textarea
              id="articleText"
              name="articleText"
              value={text}
              onChange={handleTextChange}
              className="w-full border rounded py-2 px-3"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600 font-semibold">{t('adminFormLabel3')}</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="w-full border py-2 px-3"
              accept="image/*"
              required
            />
          </div>

          <button type="submit" onClick={fetchData} className="btn-upload bg-blue-gradient">
            {t('adminButton')}
          </button>


        </form>
        <ToastContainer
          position='top-right'
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme='light'
        />
      </div>
      {/* {imageList.map((url) => {
        return <img src={url} />
      })} */}
    </>
  )
}

export default Admin