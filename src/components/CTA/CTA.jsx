// import './CTA.css'
// import MainHeading from '../MainHeading/MainHeading'
// import styles from '../../style'
// import { useTranslation } from 'react-i18next'
// // import {RiContactsLine} from 'react-icons/ri'
// // import {GrLocation} from 'react-icons/gr'
// import {CiLocationOn} from 'react-icons/ci'
// import {BsTelephoneInbound} from 'react-icons/bs'
// import {AiOutlineMail} from 'react-icons/ai'
// import axios from 'axios'
// import { useState } from 'react'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// import { ToastContainer } from 'react-toastify'
// // import { useTranslation } from 'react-i18next'
// import instance from '../api_instance'


// // /send-email
// const CTA = () => {

    
//     const notifyError = () => {
//         toast.error('Please fill in all the inputs', {
//           position: toast.POSITION.TOP_CENTER
//         });
//       };

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [msg, setMsg] = useState('');

//   const { t } = useTranslation();

//   const fetchData = async (event) => {
//     event.preventDefault(); // Prevent default form submission
  
//     // Check if any of the inputs is empty
//     if (!name || !email || !msg) {
//         toast.error("Please fill in all fields");
//       return;
//     }
    
//     try {
//       console.log(name);
//       const formData = {
//         name: name,
//         email: email,
//         msg: msg
//       };
//     //   const response = await instance({
//     //         url:'send-email',
//     //         method:'POST',
//     //         data:{
//     //         "category":this.state.category
//     //         }
//     //   })
//       const response = await instance.post('send-email', formData);
      
//     //   const response = await axios.post('https://kaleem-backend.000webhostapp.com/api/send-email', formData);
//       console.log(response.data);
//       toast.success("Email is sent succefully");
//       setName(''); // Clear the name input
//       setEmail(''); // Clear the email input
//       setMsg(''); // Clear the message input
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
  

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//     console.log(event.target.value);
// };

// const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     console.log(event.target.value);
//   };

//   const handleMsgChange = (event) => {
//     setMsg(event.target.value);
//   };


//   return (
//     <section id="contact" className={`contact ${styles.paddingY}`}>
//         <MainHeading 
//             properties = {{
//                 // icon: <RiContactsLine />,
//                 title: t('contactTitle'),
//                 subtitle: t('contactSubtitle'),
//             }}
//         />
//         <div className={`${styles.paddingY} sm:px-16 px-6`}>
//             <div className={`contact-touch mb-5`}>
//                 {/* <div className="contact-box"> */}
//                     <span className='contact-number'>1</span>
//                     <div className='contact-touch-info md:w-[75%]'>
//                         <span className="touch-info-title">{t('contactHelpTitle1')}</span>
//                         <span className="touch-info-details">{t('contactHelpInfo1')}</span>
//                     </div>
//                 {/* </div> */}
//             </div>
//             <div className={`contact-touch mb-5`}>
//                 {/* <div className="contact-box"> */}
//                     <span className='contact-number'>2</span>
//                     <div className='contact-touch-info md:w-[75%]'>
//                         <span className="touch-info-title">{t('contactHelpTitle2')}</span>
//                         <span className="touch-info-details">
//                         {t('contactHelpInfo2')}
//                         </span>
//                     </div>
//                 {/* </div> */}
//             </div>
//             <div className={`contact-touch`}>
//                 {/* <div className="contact-box"> */}
//                     <span className='contact-number'>3</span>
//                     <div className='contact-touch-info md:w-[75%]'>
//                         <span className="touch-info-title">{t('contactHelpTitle3')}</span>
//                         <span className="touch-info-details">{t('contactHelpInfo3')} </span>
//                     </div>
//                 {/* </div> */}
//             </div>
//         </div>
//         <div className="container-contact">
//             <div className="contactInfo sm:px-16 px-6">
//                 <div className="box">
//                     <div className="icon">
//                         <CiLocationOn className='contat-icon' />
//                     </div>
//                     <div className="text mr-3">
//                         <h3>{t('contactInfoAdress')}</h3>
//                         <p>{t('contactInfoAdressSub')}</p>
//                     </div>
//                 </div>
//                 <div className="box">
//                     <div className="icon">
//                         <BsTelephoneInbound className='contact-icon' />
//                     </div>
//                     <div className="text mr-3">
//                         <h3>{t('contactInfoPhone')}</h3>
//                         <p>{t('contactInfoPhoneSub')}</p>
//                     </div>
//                 </div>
//                 <div className="box">
//                     <div className="icon">
//                         <AiOutlineMail className='contact-icon' />
//                     </div>
//                     <div className="text mr-3">
//                         <h3>{t('contactInfoEmail')}</h3>
//                         <p>kaleem.edu.lb@gmail.com</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="contactForm sm:px-16 px-6">
//                 <form>
//                     <h2>{t('contactFormHeader')}</h2>
//                     <div className="inputBox">
//                         <input id="nameMsg" value={name} type="text" onChange={handleNameChange} required />
//                         <span>{t('contactFormName')}</span>
//                     </div>
//                     <div className="inputBox">
//                         <input id="emailMsg" value={email} type="email" onChange={handleEmailChange} required />
//                         <span>{t('contactFormMail')}</span>
//                     </div>
//                     <div className="inputBox">
//                         <textarea id="areaMsg" value={msg} required="required" onChange={handleMsgChange}></textarea>
//                         <span>{t('contactFormArea')}</span>
//                     </div>
//                     <div className="inputBox">
//                         <input id="sendMsg" className='bg-blue-gradient' onClick={fetchData} type="submit" value={t('contactFormButton')} />
//                         <p id="textMsg"></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//         <ToastContainer
//             position='top-right'
//             autoClose={1500}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={true}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover={false}
//             theme='light'
//         />
//     </section>
//   )
// }

// export default CTA
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './CTA.css';
import MainHeading from '../MainHeading/MainHeading';
import styles from '../../style';
import { useTranslation } from 'react-i18next';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephoneInbound } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const CTA = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || msg == "") {
      toast.error('Please fill in all fields');
      return;
    }
    emailjs.sendForm('service_c6j0w5m', 'template_t22wxq5', form.current, 'VFqKinBFxMI-1DCIl')
      .then((result) => {
        console.log(result.text);
        toast.success('Email is sent successfully');
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((error) => {
        console.log(error.text);
        notifyError();
      });
  };

  const notifyError = () => {
    
    toast.error('Please fill in all the inputs', {
      position: toast.POSITION.TOP_CENTER
    });
  };


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const { t } = useTranslation();


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  };



  return (
    <section id="contact" className={`contact ${styles.paddingY}`}>
      <MainHeading
        properties={{
          title: t('contactTitle'),
          subtitle: t('contactSubtitle'),
        }}
      />
      <div className={`${styles.paddingY} sm:px-16 px-6`}>
        <div className={`contact-touch mb-5`}>
          <span className='contact-number'>1</span>
          <div className='contact-touch-info md:w-[75%]'>
            <span className="touch-info-title">{t('contactHelpTitle1')}</span>
            <span className="touch-info-details">{t('contactHelpInfo1')}</span>
          </div>
        </div>
        <div className={`contact-touch mb-5`}>
          <span className='contact-number'>2</span>
          <div className='contact-touch-info md:w-[75%]'>
            <span className="touch-info-title">{t('contactHelpTitle2')}</span>
            <span className="touch-info-details">
              {t('contactHelpInfo2')}
            </span>
          </div>
        </div>
        <div className={`contact-touch`}>
          <span className='contact-number'>3</span>
          <div className='contact-touch-info md:w-[75%]'>
            <span className="touch-info-title">{t('contactHelpTitle3')}</span>
            <span className="touch-info-details">{t('contactHelpInfo3')} </span>
          </div>
        </div>
      </div>
      <div className="container-contact">
        <div className="contactInfo sm:px-16 px-6">
          <div className="box">
            <div className="icon">
              <CiLocationOn className='contat-icon' />
            </div>
            <div className="text mr-3">
              <h3>{t('contactInfoAdress')}</h3>
              <p>{t('contactInfoAdressSub')}</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsTelephoneInbound className='contact-icon' />
            </div>
            <div className="text mr-3">
              <h3>{t('contactInfoPhone')}</h3>
              <p>{t('contactInfoPhoneSub')}</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <AiOutlineMail className='contact-icon' />
            </div>
            <div className="text mr-3">
              <h3>{t('contactInfoEmail')}</h3>
              <p>kaleem.edu.lb@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm sm:px-16 px-6">
          <form ref={form} onSubmit={sendEmail}>
            <h2>{t('contactFormHeader')}</h2>
            <div className="inputBox">
              <input id="nameMsg"  name="name" value={name} onChange={handleNameChange} type="text" required />
              <span>{t('contactFormName')}</span>
            </div>
            <div className="inputBox">
              <input id="emailMsg"  name="email" value={email} onChange={handleEmailChange} type="email" required />
              <span>{t('contactFormMail')}</span>
            </div>
            <div className="inputBox">
              <textarea id="areaMsg"  name="msg" value={msg} onChange={handleMsgChange} required="required" ></textarea>
              <span>{t('contactFormArea')}</span>
            </div>
            <div className="inputBox">
              <input id="sendMsg" className='bg-blue-gradient' type="submit" value={t('contactFormButton')} />
              <p id="textMsg"></p>
            </div>
          </form>
        </div>
      </div>
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
    </section>
  );
};

export default CTA;
