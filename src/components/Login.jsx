// import React from 'react'
import { useRef, useState } from "react";
import Header from "./Header";
import checkData from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {background_logo} from "../utils/constants"

const Login = () => {
  const [isSignUpForm, setSignUpForm] = useState(false);
  const [isValidEmailAndPassword, setIsValidEmailAndPassword] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const updateProfileInfo = (user) => {
    updateProfile(user, {
      displayName: name.current.value,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        // Profile updated!d
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const getUserInfo = () => {
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );

    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const isValidData = checkData(email.current.value, password.current.value);
    if (isValidData.isValid) {
      // Sign in and Sign Up logic here
      setIsValidEmailAndPassword(true);
      if (!isSignUpForm) {
        console.log("sign in form");
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            getUserInfo()
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      } else {
        console.log("sign up form");
        // const auth = getAuth();
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfileInfo(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
      }
    } else {
      setIsValidEmailAndPassword(false);
      setErrorMsg(isValidData.message);
    }
  };

  const toggleSignInForm = () => {
    setSignUpForm(!isSignUpForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src= {background_logo}
          alt="login"
        />
      </div>

      <form
        action=""
        className=" w-3/12 p-12 absolute bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-3xl my-2 py-2 font-bold">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUpForm && (
          <input
            ref={name}
            type="name"
            placeholder="Enter Name"
            className="rounded-sm my-3 p-4 w-full  bg-gray-700"
          />
        )}
        {/* {isSignUpForm && (
          <input
            type="number"
            placeholder="Enter Mobile Number"
            className="rounded-sm my-3 p-4 w-full  bg-gray-700"
          />
        )} */}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="rounded-sm my-3 p-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="rounded-sm my-3 p-4 w-full  bg-gray-700"
        />
        {!isValidEmailAndPassword && <p className="text-red-500">{errorMsg}</p>}

        <button
          className="p-4 my-4 bg-red-600 w-full text-sm rounded-sm"
          onClick={(e) => {
            handleButtonClick(e);
          }}
        >
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        {/* <h2>Forgot Password</h2> */}
        {isSignUpForm ? (
          <p className="py-4 font-light">
            Already signed up?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign In
            </span>
          </p>
        ) : (
          <p className="py-4 font-light">
            New to Netflix?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign Up now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
