import './Login.css'
import styles from '../../style';
import styled from 'styled-components'
import { Footer } from '../../components';
import { db } from '../../firebase-config';
import { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);  
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(false);

const loginUser = async () => {
  if (!email || !password) {
    toast.error('Please fill in all fields');
    return;
  }

  const usersCollection = collection(db, 'user');
  const q = query(usersCollection, where('email', '==', email));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      querySnapshot.forEach((doc) => {
        const user = doc.data();
        if (user.password === password) {
          // Set the user role upon successful login
          localStorage.setItem('role', 'admin');
          setEmail('');
          setPassword('');
          toast.success('Login successfully');
          // history.push('/');
          setLoginSuccess(true); // Set login success flag

          // Navigate to the home page after a brief delay
          setTimeout(() => {
            navigate('/');
            window.location.reload();
          }, 2000); // Delay for 1 second before navigation
        } else {
          toast.error('Email or password is incorrect');
        }
      });
    } else {
      toast.error('Email or password is incorrect');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    toast.error('An error occurred while logging in');
  }
};

// const FormContainer = styled.div`
//   max-width: 300px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   text-color: #fff;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 8px;
//   margin-bottom: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//  `;

const handleEmailChange = (event) => {
    // setEmail(event.target.value);
    const email = document.getElementById("email").value;
    setEmail(email);
    console.log(email);
  };

const handlePasswordChange = (event) => {
    // setPassword(event.target.value);
    const password = document.getElementById("pass").value;
    setPassword(password);
  };


  return (
    <>
       <div className={`bg-inherit ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            {/* <FormContainer> */}
                <form className='form-login'>
                    <label className='text-slate-50' htmlFor="name">Email</label>
                    <input type="email" id="email" name="name" onChange={handleEmailChange} />
                    <label className='text-slate-50' htmlFor="password">Password</label>
                    <input type="password" id="pass" onChange={handlePasswordChange} name="password" />

                    <button onClick={loginUser} type="button">Login</button>
                </form>
            {/* </FormContainer> */}
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
      </div>
      <Footer 
        className= "footer-books"
      />
    </>
  )
}

export default Login