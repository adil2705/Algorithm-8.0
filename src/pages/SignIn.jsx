import React, { useState, useContext } from "react";

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import Lottie from 'react-lottie';
import SignInAnimation from '../assets/lottie/signin.json'

import { 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  createUserWithEmailAndPassword 
} from "firebase/auth";

import { auth } from "../firebase-config";

import { 
  StarsCanvas,
  Alert
} from "../components";

export default function SignIn() {
  const isMobile = window.innerWidth < 768;

  const navigate = useNavigate();

  const user = useContext(UserContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SignInAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        setLoading(false);
        setAlertMessage('Account Created Successfully.');
        setAlertType('success');
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
            navigate('/');
        }, 2000);
    } catch (error) {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                setLoading(false);
                setAlertMessage('Logged-In Successfully.');
                setAlertType('success');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    navigate('/');
                }, 2000);
            } catch (error) {
                setLoading(false);
                setAlertMessage(getErrorMessage(error.code));
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
            }
        } else {
            setLoading(false);
            setAlertMessage(getErrorMessage(error.code));
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }
    }
  };

  function getErrorMessage(code) {
    switch (code) {
      case 'auth/invalid-email':
        return 'The email address is invalid.';
      case 'auth/user-disabled':
        return 'The user corresponding to the given email has been disabled.';
      case 'auth/user-not-found':
        return 'There is no user corresponding to the given email.';
      case 'auth/invalid-password':
        return 'Invalid Password.';
      case 'auth/invalid-credential':
        return 'Invalid Password.';
      case 'auth/email-already-in-use':
        return 'The email address is already in use.';
      case 'auth/weak-password':
        return 'The password must be 6 characters long or more.';
      case 'auth/too-many-requests':
        return 'Too many requests try again later.';
      case 'auth/missing-email':
        return 'An email address is required.';
      default:
        return 'An unknown error occurred.';
    }
  }

  const forgotPassword = async (e) => {
    e.preventDefault()

    setLoading(true);
    await sendPasswordResetEmail(auth, email)
    .then(() => {
      setLoading(false);
      setAlertMessage('Password reset email sent successfully');
      setAlertType('success');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    })
    .catch((error) => {
      setLoading(false);
      setAlertMessage(getErrorMessage(error.code));
      setAlertType('error');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    })
  }

  return (
    <div className="relative z-0 bg-black overflow-x-hidden">
      <section>
        <div className="fixed w-full top-0 z-10">
            {showAlert && <Alert message={alertMessage} type={alertType} />}
        </div>
        <section className='items-center flex justify-center min-h-screen px-2'>
          <div className={`${isMobile ? '' : 'border-2 border-orange-600'} bg-blur flex flex-col rounded-2xl md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10 items-center`}>
            <div>
              <Lottie 
                options={defaultOptions}
                height={400}
                width={isMobile ? 300 : 420} />
            </div>
            <div className={`md:w-1/2 max-w-sm ${isMobile ? 'p-5' : 'p-10'}`}>
              <div className='flex flex-row'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 cursor-pointer mt-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  onClick={() => window.history.back()}>
                  <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <h1 className="mb-8 ml-2.5 font-extrabold text-4xl">Login or Create Account</h1>
              </div>
              <p className="mb-4 text-base font-semibold">
                If your account exists you will be logged in otherwise a new account will be created.
              </p>
              <input 
                  className="text-xl bg-black w-full px-4 py-2 border border-solid border-gray-300 rounded-xl" 
                  type="text" 
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  
                  required 
                  placeholder="Email Address" />
              <input 
                  className="text-xl bg-black w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-4" 
                  type="password" 
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  placeholder="Password" />
              <div className="mt-4 flex justify-between font-semibold text-sm">
                <button 
                  className="text-orange-600 text-lg hover:text-orange-800 hover:underline hover:underline-offset-4"
                  onClick={forgotPassword}>
                  Forgot Password?
                </button>
              </div>
              <div className="text-center md:text-left font-bold">
                {!user ? 
                  <button 
                    className="mt-4 bg-orange-600 hover:bg-orange-800 px-4 py-2 text-white uppercase rounded-xl tracking-wider text-base" 
                    type="submit"
                    style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    onClick={onSubmit}>
                  {loading ? 
                  <svg 
                      aria-hidden="true" 
                      className="w-8 h-6 text-white animate-spin fill-orange-600" 
                      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" 
                        fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" 
                        fill="currentFill"/>
                  </svg> 
                  : 'Submit'}
                </button>
                : 
                <button 
                  className="mt-4 bg-orange-600 hover:bg-orange-800 px-4 py-2 text-white uppercase rounded-xl tracking-wider text-base" 
                  style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    Already logged in
                </button>
                }
              </div>
            </div>
          </div>
        </section>
      </section>
      {!isMobile && <StarsCanvas />}
    </div>
  );
}